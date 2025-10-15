"use client";

import React, { JSX, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function Login(): JSX.Element {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const senhaRef = useRef<HTMLInputElement>(null);

  const loginClick = async () => {
    const email = emailRef.current?.value || "";
    const senha = senhaRef.current?.value || "";

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("id", data.usuario.id);
      router.push("/crm");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h1 className={styles.title}>B CRM</h1>
        <label className={styles.label}>
          <span className={styles.labelText}>Email</span>
          <input
            ref={emailRef}
            className={styles.inputField}
            type="email"
            autoComplete="email"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.labelText}>Senha</span>
          <input
            ref={senhaRef}
            className={styles.inputField}
            type="password"
            autoComplete="current-password"
          />
        </label>

        <button className={styles.loginButton} onClick={loginClick}>
          Entrar
        </button>
      </div>
    </div>
  );
}
