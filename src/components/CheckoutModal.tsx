"use client";

import { useState } from "react";

type Plan = {
  name: string;
  price: number;
};

export default function CheckoutModal({
  plan,
  onClose
}: {
  plan: Plan;
  onClose: () => void
}) {
  const [method, setMethod] = useState<'oxxo' | 'spei'>('oxxo');
  const [step, setStep] = useState(1);

  const handlePay = () => {
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-200">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Pagar Suscripción Semanal</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {step === 1 ? (
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-bold text-slate-500 uppercase">Plan Seleccionado</span>
                  <span className="text-sm font-bold text-primary">{plan.name}</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black">${plan.price}</span>
                  <span className="text-slate-500 font-medium">MXN / Semana</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3">Método de pago</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setMethod('oxxo')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                      method === 'oxxo'
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl">store</span>
                    <span className="text-sm font-bold">OXXO Pay</span>
                  </button>
                  <button
                    onClick={() => setMethod('spei')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                      method === 'spei'
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl">account_balance</span>
                    <span className="text-sm font-bold">Transferencia SPEI</span>
                  </button>
                </div>
              </div>

              <button
                onClick={handlePay}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all text-lg mt-4"
              >
                Generar Referencia de Pago
              </button>
            </div>
          ) : (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h4 className="text-xl font-bold">¡Referencia Generada!</h4>

              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mt-4">
                <p className="text-sm text-slate-500 mb-2">
                  {method === 'oxxo' ? 'Dicta esta referencia al cajero:' : 'Transfiere a esta CLABE interbancaria:'}
                </p>
                <p className="text-2xl font-black tracking-widest text-slate-900 dark:text-white my-4 break-all">
                  {method === 'oxxo' ? '1234 5678 9012 34' : '012 180 00123456789 0'}
                </p>
                <p className="text-sm font-bold text-primary mb-1">Monto exacto: ${plan.price}.00 MXN</p>
                {method === 'spei' && <p className="text-xs text-slate-500 mt-2">Banco receptor: STP</p>}
              </div>

              <p className="text-xs text-slate-500 px-4">
                Tienes 24 horas para realizar el pago. Tu seguro se activará de inmediato al confirmar.
              </p>

              <button
                onClick={onClose}
                className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold py-4 rounded-xl mt-4"
              >
                Listo, entendido
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
