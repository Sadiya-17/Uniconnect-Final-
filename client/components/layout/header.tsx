"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Uniconnect
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/auth/login" className="hover:text-blue-400">
            Login
          </Link>
          <Link href="/auth/register" className="hover:text-blue-400">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
