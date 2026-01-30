"use client";

import { createContext, useContext, useCallback, useState, useEffect } from "react";

const AUTH_KEY = "client-zone-prototype-auth";

type User = { email: string; name: string };

type AuthContextValue = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isReady: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? sessionStorage.getItem(AUTH_KEY) : null;
      if (raw) {
        const u = JSON.parse(raw) as User;
        setUser(u);
      }
    } catch {
      setUser(null);
    }
    setIsReady(true);
  }, []);

  const login = useCallback((email: string, _password: string) => {
    if (!email?.trim()) return false;
    const u: User = { email: email.trim(), name: email.trim().split("@")[0] };
    setUser(u);
    try {
      sessionStorage.setItem(AUTH_KEY, JSON.stringify(u));
    } catch {
      // ignore
    }
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    try {
      sessionStorage.removeItem(AUTH_KEY);
    } catch {
      // ignore
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isReady }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
