"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-700">
              Officine Italia
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-700 transition"
            >
              Home
            </Link>
            <Link
              href="/lavorazioni-meccaniche"
              className="text-gray-600 hover:text-blue-700 transition"
            >
              Lavorazioni Meccaniche
            </Link>
            <Link
              href="/lavorazioni-cnc"
              className="text-gray-600 hover:text-blue-700 transition"
            >
              Lavorazioni CNC
            </Link>
            <Link
              href="/torneria"
              className="text-gray-600 hover:text-blue-700 transition"
            >
              Torneria
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/lavorazioni-meccaniche"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Lavorazioni Meccaniche
            </Link>
            <Link
              href="/lavorazioni-cnc"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Lavorazioni CNC
            </Link>
            <Link
              href="/torneria"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Torneria
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
