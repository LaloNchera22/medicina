"use client";

import { useState } from "react";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep(2);
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length === 4) {
      // Simulate success
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Ingresar</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {step === 1 ? (
            <form onSubmit={handleSendCode} className="space-y-4">
              <p className="text-sm text-slate-500 mb-4">Ingresa con tu número de WhatsApp para continuar.</p>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Número de WhatsApp
                </label>
                <div className="flex border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                  <span className="bg-slate-50 dark:bg-slate-800 px-4 py-3 text-slate-500 font-medium border-r border-slate-300 dark:border-slate-700">
                    +52
                  </span>
                  <input
                    type="tel"
                    placeholder="55 1234 5678"
                    className="flex-1 bg-transparent px-4 py-3 outline-none w-full"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors mt-6"
              >
                Continuar
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-4">
              <p className="text-sm text-slate-500 mb-4">
                Enviamos un código de 4 dígitos por WhatsApp al <strong>+52 {phone}</strong>
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Código de Verificación
                </label>
                <input
                  type="text"
                  placeholder="0000"
                  className="w-full border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary text-center tracking-[0.5em] text-xl font-bold"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors mt-6"
              >
                Verificar y Entrar
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-slate-500 text-sm font-medium hover:text-primary mt-4"
              >
                Cambiar número
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
