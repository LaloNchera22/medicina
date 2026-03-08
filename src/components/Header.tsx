"use client";

import Link from "next/link";
import { useState } from "react";
import AuthModal from "./AuthModal";

export default function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined">health_and_safety</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-primary">MediFin</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/#planes">Planes</Link>
              <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/creditos">Créditos</Link>
              <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/dashboard">Dashboard</Link>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="hidden sm:block text-sm font-bold text-slate-700 dark:text-slate-300 px-4 py-2 hover:bg-primary/10 rounded-lg transition-all"
              >
                Iniciar Sesión
              </button>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Temporary conditional rendering for AuthModal if it's imported correctly once created */}
      {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}
    </>
  );
}
