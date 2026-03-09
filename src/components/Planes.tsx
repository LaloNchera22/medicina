"use client";

import { useState } from "react";
import CheckoutModal from "@/components/CheckoutModal";

export default function Planes() {
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: number} | null>(null);

  return (
    <>
      <section className="py-24 bg-white dark:bg-slate-900/50" id="planes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Microseguros Semanales</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Salud de calidad al alcance de tu bolsillo. Selecciona la cobertura que mejor se adapte a ti. Pagos fáciles en OXXO o transferencia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-all flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Básico</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">$35</span>
                  <span className="text-slate-500 font-medium">MXN/sem</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Telemedicina por WhatsApp 24/7</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>1 Consulta presencial al mes</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Descuentos en farmacias</span>
                </li>
              </ul>
              <button
                onClick={() => setSelectedPlan({name: 'Básico', price: 35})}
                className="w-full py-3 px-6 rounded-xl font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                Elegir Básico
              </button>
            </div>

            {/* Premium Plan */}
            <div className="relative group p-8 rounded-2xl border-2 border-primary bg-white dark:bg-slate-800 shadow-xl shadow-primary/10 flex flex-col h-full transform lg:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                Más Popular
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Familiar</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-primary">$60</span>
                  <span className="text-slate-500 font-medium">MXN/sem</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Cobertura para ti + 3 familiares</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold">
                  <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                  <span>Telemedicina ilimitada 24/7</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold">
                  <span className="material-symbols-outlined text-primary text-xl">dentistry</span>
                  <span>Limpieza dental anual gratis</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Acceso a microcréditos de emergencia</span>
                </li>
              </ul>
              <button
                onClick={() => setSelectedPlan({name: 'Familiar', price: 60})}
                className="w-full py-4 px-6 rounded-xl font-bold bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all"
              >
                Elegir Familiar
              </button>
            </div>

            {/* Total Plan */}
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-all flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Total</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">$90</span>
                  <span className="text-slate-500 font-medium">MXN/sem</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm font-semibold">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <span>Todo lo del plan Familiar</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold">
                  <span className="material-symbols-outlined text-primary text-xl">local_hospital</span>
                  <span>Seguro contra accidentes</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold">
                  <span className="material-symbols-outlined text-primary text-xl">monitoring</span>
                  <span>Laboratorios básicos sin costo</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Tasa de crédito preferencial</span>
                </li>
              </ul>
              <button
                onClick={() => setSelectedPlan({name: 'Total', price: 90})}
                className="w-full py-3 px-6 rounded-xl font-bold border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-all"
              >
                Elegir Total
              </button>
            </div>
          </div>
        </div>
      </section>

      {selectedPlan && (
        <CheckoutModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}
    </>
  );
}
