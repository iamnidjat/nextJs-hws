"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const myLinks = [
  {
    title: "Login",
    href: "/login",
  },
  {
    title: "Register",
    href: "/register",
  },
  {
    title: "Forgot Password",
    href: "/forgot-password",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathway = usePathname();
  return (
    <div>
      <div>
        {myLinks.map((link: any) => (
          <div key={link.title}>
            <Link
              style={{ color: link.href === pathway ? "red" : "blue" }}
              href={link.href}
            >
              {link.title}
            </Link>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
