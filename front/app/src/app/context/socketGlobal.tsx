"use client";

import { createContext, useContext, useRef, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import CrmLayout from "../(private)/crm/crm.layout";
import Notifications from "../components/notifications";
import { env } from "next-runtime-env";

type SocketContextType = {
  socket: Socket | null;
  connected: boolean;
};

const SocketContext = createContext<SocketContextType>({
  socket: null,
  connected: false,
});

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const socketRef = useRef<Socket | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(env("NEXT_PUBLIC_SOCKET_URL")!, {
        transports: ["websocket"],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      });

      socketRef.current.on("connect", () => {
        setConnected(true);
      });
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current, connected }}>
      <Notifications />
      <CrmLayout>{children}</CrmLayout>
    </SocketContext.Provider>
  );
};

export const useGlobalSocket = () => useContext(SocketContext);
