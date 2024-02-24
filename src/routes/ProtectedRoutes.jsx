import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { app, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ProtectedRoutes() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <h2>Loading...</h2>;

  return user ? <Outlet /> : <Navigate to="/login" />;
}
