import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type AuthenticatedUser = {
  name: string;
  loggedIn: true;
};

type User = AuthenticatedUser | null;

type UserContextValue = {
  user: User;
  login: (name: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    try {
      const raw = localStorage.getItem("auth_user");
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && parsed.loggedIn === true && typeof parsed.name === "string") {
        return { name: parsed.name, loggedIn: true } as AuthenticatedUser;
      }
    } catch {
      // ignore
    }
    return null;
  });

  const login = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setUser({ name: trimmed, loggedIn: true });
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("auth_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("auth_user");
      }
    } catch {
      // ignore storage errors
    }
  }, [user]);

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser(): UserContextValue {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return ctx;
}


