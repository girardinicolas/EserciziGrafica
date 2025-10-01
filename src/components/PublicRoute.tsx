import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

type Props = {
  children: React.ReactElement;
};

export default function PublicRoute({ children }: Props) {
  const { user } = useUser();
  if (user) {
    return <Navigate to="/profile" replace />;
  }
  return children;
}


