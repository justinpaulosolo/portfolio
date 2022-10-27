"use client";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

export function Button({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <button
      className="rounded bg-black text-white py-2 px-4"
      onClick={() => router.push("/about")}
    >
      {children}
    </button>
  );
}
