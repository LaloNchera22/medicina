"use client";

import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [patientData] = useState({
    name: "Juan Pérez",
    plan: "Familiar",
    phone: "5512345678",
    id: "MF-001928"
  });

  const supportNumber = "525512345678"; // Simulated WhatsApp business number

  const handleWhatsAppAction = (type: 'telemedicina' | 'urgencias') => {
    let message = "";
    if (type === 'telemedicina') {
      message = `Hola MediFin. Soy ${patientData.name} (ID: ${patientData.id}). Solicito una consulta de telemedicina.`;
    } else {
      message = `🚨 URGENCIA 🚨\nHola MediFin. Soy ${patientData.name} (ID: ${patientData.id}). Necesito atención médica de emergencia de inmediato.`;
    }

    const url = `https://wa.me/${supportNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="flex h-full grow flex-col">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between border-b border-primary/10 bg-white dark:bg-slate-900 px-6 md:px-20 py-4 sticky top-0 z-50">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white">
              <span className="material-symbols-outlined">health_and_safety</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-primary">MediFin</h2>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 mr-6">
              <Link className="text-sm font-semibold text-primary" href="/dashboard">Panel</Link>
              <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary" href="/creditos">Créditos</Link>
            </div>

            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">notifications</span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
              <div className="flex-col items-end hidden sm:flex">
                <span className="text-sm font-bold">{patientData.name}</span>
                <span className="text-xs text-primary font-medium">Plan {patientData.plan}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary">
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-6 md:px-20 py-8 max-w-7xl mx-auto w-full">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">¡Hola de nuevo, {patientData.name.split(' ')[0]}!</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Aquí tienes un resumen de tu actividad y salud para hoy.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Main Stats & Actions */}
            <div className="lg:col-span-2 space-y-8">

              {/* Subscription Summary Card */}
              <section>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">card_membership</span>
                  Mi Suscripción
                </h3>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">Activa</span>
                      <span className="text-sm text-slate-500">Plan Familiar</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Microseguro Familiar MediFin</h4>
                    <p className="text-sm text-slate-500 mb-4">Tu cobertura incluye a 3 beneficiarios y telemedicina 24/7 sin costo adicional.</p>
                    <div className="flex flex-wrap gap-3">
                      <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">Gestionar Plan</button>
                      <button className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg text-sm font-bold transition-colors">Ver Beneficios</button>
                    </div>
                  </div>
                  <div className="w-full md:w-48 h-32 bg-primary/5 rounded-xl flex flex-col items-center justify-center border border-dashed border-primary/30">
                    <span className="text-xs text-primary font-bold uppercase">Pago Semanal</span>
                    <span className="text-2xl font-bold">$60 MXN</span>
                    <span className="text-sm text-slate-500 mt-2">Próximo: Viernes</span>
                  </div>
                </div>
              </section>

              {/* Credits Status */}
              <section>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                  Estado de Créditos Salud
                </h3>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 w-full">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Línea Pre-Aprobada</span>
                        <span className="text-sm font-bold text-primary">$5,000.00 MXN</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full w-full"></div>
                      </div>
                      <div className="mt-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                        <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                          ¡No tienes créditos activos! Estás al día.
                        </p>
                      </div>
                    </div>
                    <Link href="/creditos" className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary py-3 px-6 rounded-xl font-bold transition-all">
                      <span className="material-symbols-outlined">add_circle</span>
                      Solicitar Crédito
                    </Link>
                  </div>
                </div>
              </section>

              {/* Medical Appointments */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                    Próximas Citas
                  </h3>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-center text-slate-500">
                  <span className="material-symbols-outlined text-4xl mb-2 opacity-50">event_busy</span>
                  <p className="text-sm font-medium">No tienes citas programadas.</p>
                  <button onClick={() => handleWhatsAppAction('telemedicina')} className="text-primary text-sm font-bold hover:underline mt-2">
                    Agendar por WhatsApp
                  </button>
                </div>
              </section>

            </div>

            {/* Right Column: Quick Access */}
            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                  Accesos Rápidos
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleWhatsAppAction('urgencias')}
                    className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors text-center"
                  >
                    <span className="material-symbols-outlined text-3xl text-red-500 mb-2">emergency</span>
                    <p className="text-sm font-bold text-red-700 dark:text-red-400">Urgencias</p>
                  </button>
                  <button
                    onClick={() => handleWhatsAppAction('telemedicina')}
                    className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary transition-colors text-center"
                  >
                    <span className="material-symbols-outlined text-3xl text-primary mb-2">video_chat</span>
                    <p className="text-sm font-bold">Telemedicina</p>
                  </button>
                  <button className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary transition-colors text-center">
                    <span className="material-symbols-outlined text-3xl text-primary mb-2">lab_research</span>
                    <p className="text-sm font-bold">Laboratorio</p>
                  </button>
                  <button className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary transition-colors text-center">
                    <span className="material-symbols-outlined text-3xl text-primary mb-2">pill</span>
                    <p className="text-sm font-bold">Farmacia</p>
                  </button>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">group</span>
                  Tu Red Médica
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <span className="material-symbols-outlined">stethoscope</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">Médico General</p>
                      <p className="text-xs text-slate-500">Disponible 24/7</p>
                    </div>
                    <button onClick={() => handleWhatsAppAction('telemedicina')} className="text-primary hover:text-primary/70">
                      <span className="material-symbols-outlined">chat</span>
                    </button>
                  </div>
                  <button className="w-full py-2 text-sm text-slate-500 hover:text-primary font-medium transition-colors">
                    Explorar red de especialistas aliados
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Bottom Mobile Nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-around py-3 px-2 z-50">
          <Link href="/dashboard" className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined">grid_view</span>
            <span className="text-[10px] font-bold">Panel</span>
          </Link>
          <Link href="/creditos" className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">payments</span>
            <span className="text-[10px] font-bold">Créditos</span>
          </Link>
          <button onClick={() => handleWhatsAppAction('telemedicina')} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">chat</span>
            <span className="text-[10px] font-bold">Soporte</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
