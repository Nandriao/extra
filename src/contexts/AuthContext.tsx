"use client";

import React, { createContext, useCallback, useEffect, useState } from "react";

import {api} from "../lib/axios"

interface User {
  id: string;
  fullName: string;
  phone: string;
}

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isLoading: boolean;
}

interface SignInCredentials {
  phoneNumber: number;
  password: string;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("@extra_user_token");

    if (token) {
      const parsedToken = JSON.parse(token);
      api.defaults.headers.authorization = `Bearer ${parsedToken}`;
      
      // Updated POST request to include token in the body
      api.post("/api/users/me", { token: parsedToken }).then(response => {
        setUser(response.data.user);
        setIsAuthenticated(true);
        setIsLoading(false);
      }).catch(() => {
        signOut();
        setIsLoading(false);
      });
    }
  }, []);

  const signIn = useCallback(async ({ phoneNumber, password }: SignInCredentials) => {
    const response = await api.post("/api/auth/login", {
      phoneNumber,
      password,
    });

    const { token, user } = response.data;

    // console.log(token);

    localStorage.setItem("@extra_user_token", JSON.stringify(token));

    api.defaults.headers.authorization = `Bearer ${token}`;

    const tok = localStorage.getItem("@extra_user_token");

    setUser(user);
    setIsAuthenticated(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@extra_user_token");
    delete api.defaults.headers.authorization;
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
} 