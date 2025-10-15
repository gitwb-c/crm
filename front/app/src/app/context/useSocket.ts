import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = (url: string) => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(url, {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [url]);

  return socketRef;
};
