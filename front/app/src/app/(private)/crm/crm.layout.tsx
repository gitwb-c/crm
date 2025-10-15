"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./crm.module.css";
import {
  IChat,
  IUsuarioConectado,
  IUsuarioConectadoChat,
} from "@/app/models/interfaces";

interface CrmLayoutProps {
  children: React.ReactNode;
  hasNewMessages?: boolean;
  onClearNewMessages?: () => void;
}

export default function CrmLayout({ children }: CrmLayoutProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [naoLidas, setNaoLidas] = useState(false);

  const toggleProfileMenu = () => setIsProfileOpen(!isProfileOpen);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const checkLogin = async () => {
      const res = await fetch(`/api/usuarios-conectados/buscar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });
      const usuario: IUsuarioConectado = await res.json();
      setIsLoggedIn(usuario.status === "online");
    };

    const conversasNaoLidas = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch(`/api/chats/buscar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });
      const r: IUsuarioConectadoChat[] = await res.json();
      const chatsNaoLidas = r.filter((i) => i.chat?.naoLida === true);
      setNaoLidas(chatsNaoLidas.length > 0);
    };
    checkLogin();
    conversasNaoLidas();
  }, []);

  const handleAuthAction = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("/api/usuarios-conectados/atualizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isLoggedIn, token }),
      });

      if (res.ok) {
        setIsLoggedIn(!isLoggedIn);
        setIsProfileOpen(false);
      } else {
        console.error("erro: ", await res.text());
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.crmContainer}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>B CRM</h2>
        <nav className={styles.nav}>
          <Link href="/crm" className={styles.navItem}>
            Dashboard
          </Link>
          <Link href="/crm/kanban/pipelines/1" className={styles.navItem}>
            Negócios
          </Link>
          <Link href="/crm/conversas" className={styles.navItem}>
            Conversas
            {naoLidas && <span className={styles.newMessageDot}></span>}
          </Link>
          <Link href="/crm/pessoas" className={styles.navItem}>
            Pessoas
          </Link>
          <Link href="/crm/relatorios" className={styles.navItem}>
            Relatórios
          </Link>
          <Link href="/crm/configs" className={styles.navItem}>
            Aut
          </Link>
        </nav>

        <div className={styles.profileContainer}>
          <button className={styles.profileButton} onClick={toggleProfileMenu}>
            <div
              className={`${styles.profileCircle} ${
                isLoggedIn ? styles.loggedIn : ""
              }`}
            ></div>
          </button>

          {isProfileOpen && (
            <div className={styles.profileMenu}>
              <button className={styles.authButton} onClick={handleAuthAction}>
                {isLoggedIn ? "Desconectar" : "Conectar"}
              </button>
            </div>
          )}
        </div>
      </aside>

      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
