"use client";

import { useEffect } from "react";
import { autoLogin } from "@/config/db";

export default function AutoLogin() {
  useEffect(() => {
    const login = async () => {
      await autoLogin();
    };

    login();
  }, []);

  return null;
}
