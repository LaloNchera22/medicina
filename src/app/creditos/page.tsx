"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Creditos() {
  const [monto, setMonto] = useState(5000);
  const [plazoSemanas, setPlazoSemanas] = useState(12); // Semanas

  // 3% monthly rate -> ~0.75% weekly rate
  const tasaMensual = 0.03;
  const tasaSemanal = tasaMensual / 4;

  // Simple interest calculation for weekly quota
  const interesesTotales = monto * tasaSemanal * plazoSemanas;
  const montoTotal = monto + interesesTotales;
  const cuotaSemanal = Math.round(montoTotal / plazoSemanas);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 lg:px-20 mt-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-slate-50">Financiamiento Médico</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Impulsando tu salud con soluciones financieras a tu medida.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">calculate</span>
                <h2 className="text-xl font-bold">Simulador de Microcrédito</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Monto a Solicitar</label>
                    <span className="text-3xl font-black text-primary">${monto.toLocaleString()} MXN</span>
                  </div>

                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={monto}
                    onChange={(e) => setMonto(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />

                  <div className="flex justify-between text-xs text-slate-400 font-medium mt-2">
                    <span>$1,000 MXN</span>
                    <span>$20,000 MXN</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-4">Plazo de Pago (Semanas)</label>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                    {[4, 8, 12, 16, 20, 24].map((semanas) => (
                      <button
                        key={semanas}
                        onClick={() => setPlazoSemanas(semanas)}
                        className={`py-3 px-2 rounded-lg border-2 text-sm font-bold transition-all ${
                          plazoSemanas === semanas
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-slate-100 dark:border-slate-800 hover:border-primary/50"
                        }`}
                      >
                        {semanas}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase">Cuota Semanal</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">${cuotaSemanal.toLocaleString()} MXN</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase">Tasa Mensual</p>
                    <p className="text-2xl font-bold text-emerald-500 mt-1">3.0%</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase">Aprobación</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">Inmediata</p>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transition-all">
                  <span>Solicitar por WhatsApp</span>
                  <span className="material-symbols-outlined">chat</span>
                </button>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <h3 className="font-bold text-lg">Historial de Solicitudes</h3>
                <button className="text-primary text-sm font-bold">Ver Todo</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                      <th className="px-6 py-3">Motivo</th>
                      <th className="px-6 py-3">Monto</th>
                      <th className="px-6 py-3">Fecha</th>
                      <th className="px-6 py-3 text-right">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-blue-600 text-sm">medication</span>
                          </div>
                          <span className="text-sm font-semibold">Medicamentos</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">$1,500</td>
                      <td className="px-6 py-4 text-sm text-slate-500">12 Oct 2023</td>
                      <td className="px-6 py-4 text-right">
                        <span className="px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wide">Pagado</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-primary rounded-xl p-6 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-extrabold mb-4">Beneficios MediFin</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-white/70">check_circle</span>
                    <div>
                      <p className="text-sm font-bold">Sin Historial Crediticio</p>
                      <p className="text-xs text-white/80">Evaluamos tu perfil sin consultar buró.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-white/70">check_circle</span>
                    <div>
                      <p className="text-sm font-bold">Pago Directo</p>
                      <p className="text-xs text-white/80">Depositamos vía SPEI a la clínica o farmacia.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-white/70">check_circle</span>
                    <div>
                      <p className="text-sm font-bold">Respuesta Inmediata</p>
                      <p className="text-xs text-white/80">Aprobación por WhatsApp en minutos.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/50 rounded-full blur-2xl"></div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Ayuda y Soporte</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Si tienes dudas sobre cómo funciona nuestro crédito o cómo pagar tus cuotas semanales, estamos para ayudarte 24/7 por WhatsApp.
              </p>
              <button className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">headset_mic</span>
                Hablar con un asesor
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
