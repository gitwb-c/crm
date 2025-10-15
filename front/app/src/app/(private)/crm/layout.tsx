"use client";

import Notifications from "@/app/components/notifications";
import { SocketProvider } from "@/app/context/socketGlobal";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SocketProvider>
      <Notifications />
      {children}
    </SocketProvider>
  );
}
