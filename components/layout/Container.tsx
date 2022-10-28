"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      <header className="p-6 text-sm font-base">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-between">
            <Link href="/">
              <p className="uppercase font-base tracking-wide">
                Justin<span className="font-bold">Solo</span>
              </p>
            </Link>
            <DesktopNav />
          </div>
        </div>
      </header>
      <main className="mb-auto mt-8 px-6">{children}</main>
    </div>
  );
}

function DesktopNav() {
  return (
    <div className="items-center hidden ml-auto md:flex space-x-4">
      <NavlinkItem href="/about">About</NavlinkItem>
      <NavlinkItem href="/projects">Projects</NavlinkItem>
      <NavlinkItem href="/journal">Journal</NavlinkItem>
      <NavlinkItem href="/contact">Contact</NavlinkItem>
    </div>
  );
}

function NavlinkItem({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  console.log();
  return (
    <Link href={href}>
      <p
        className={`text-gray-800 hover:text-black ${
          pathname === href ? "font-bold" : ""
        }`}
      >
        {children}
      </p>
    </Link>
  );
}
