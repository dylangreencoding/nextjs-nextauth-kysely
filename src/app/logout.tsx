"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      className="bg-red-950"
      type="button"
      onClick={(e: any) => {
        e.preventDefault();
        signOut();
      }}
    >
      logout
    </button>
  );
}
