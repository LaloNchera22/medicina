import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Planes from "@/components/Planes";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  Tu salud es nuestra prioridad
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                  Cuidamos tu salud y tu <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">bienestar financiero</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                  Accede a servicios médicos de alta calidad, telemedicina 24/7 por WhatsApp y microcréditos inmediatos para emergencias médicas con pagos semanales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#planes" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform text-center">
                    Explorar Planes
                  </Link>
                  <Link href="/creditos" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                    <span className="material-symbols-outlined">payments</span>
                    Solicitar Crédito
                  </Link>
                </div>
                <div className="flex items-center gap-4 pt-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background-light"></div>
                    <div className="h-8 w-8 rounded-full bg-blue-400/20 border-2 border-background-light"></div>
                    <div className="h-8 w-8 rounded-full bg-indigo-400/20 border-2 border-background-light"></div>
                  </div>
                  <span>Más de 50,000 familias protegidas</span>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8L_NpuZmOqlGTYod0UUjqvwibsfVzwNwQG4ENARhwk11VLKFUaRHAm17btaR7q1K4Ksx1Ol0L-lTY1-GHAH123ReeYVqb_QOFaqA3KH7INXV5BqGsRNEJRsyu12K5hkL-q60RKJd0rfjU5G-m9GJ5Vwm0eNXZ2gz0RhirknZhHnv6z8LNNpjX_MDQInc_TpAw7ZX5NiUWy3sfA46NavjlKmQLOB9Sm1Q2q3sExdtNTVRJicl0d2u9wazKxovSFqf0OF3iqiSeuUa0"
                    alt="Salud Digital"
                    width={800}
                    height={600}
                    priority
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Plans Section */}
        <Planes />

        {/* Fintech/Credit Section */}
        <section className="py-24 bg-primary text-white overflow-hidden relative" id="creditos">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                    <span className="material-symbols-outlined text-3xl mb-4">bolt</span>
                    <h4 className="text-xl font-bold mb-2">Aprobación Veloz</h4>
                    <p className="text-sm text-blue-100">Respuesta a tu solicitud por WhatsApp en minutos.</p>
                  </div>
                  <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                    <span className="material-symbols-outlined text-3xl mb-4">payments</span>
                    <h4 className="text-xl font-bold mb-2">Pago al Médico</h4>
                    <p className="text-sm text-blue-100">Pagamos directamente al doctor o clínica vía SPEI.</p>
                  </div>
                  <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                    <span className="material-symbols-outlined text-3xl mb-4">calendar_month</span>
                    <h4 className="text-xl font-bold mb-2">Pagos Semanales</h4>
                    <p className="text-sm text-blue-100">Cuotas chiquitas que se ajustan a tus ingresos cada semana.</p>
                  </div>
                  <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                    <span className="material-symbols-outlined text-3xl mb-4">store</span>
                    <h4 className="text-xl font-bold mb-2">Fácil de Pagar</h4>
                    <p className="text-sm text-blue-100">Paga en OXXO, transferencia SPEI o comercios aliados.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <h2 className="text-3xl sm:text-5xl font-black leading-tight">Microcréditos para Emergencias</h2>
                <p className="text-lg text-blue-100">
                  Sabemos que la salud no puede esperar. Por eso te apoyamos con financiamiento rápido para medicinas, consultas de especialidad o urgencias menores, pagando en cómodas cuotas semanales.
                </p>
                <div className="flex items-center gap-4 py-4">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                  <div>
                    <p className="font-bold text-xl">Microcréditos de $1,000 a $20,000 MXN</p>
                    <p className="text-sm text-blue-100 italic">Disponibles con tu suscripción MediFin</p>
                  </div>
                </div>
                <Link href="/creditos" className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-black/10 hover:bg-blue-50 transition-colors">
                  Simular mi Crédito
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background-light dark:bg-background-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 sm:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="bg-gradient-to-br from-primary via-blue-500 to-indigo-600 w-full h-full"></div>
              </div>
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-black">¿Listo para proteger a tu familia?</h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Únete a MediFin y disfruta de la tranquilidad de estar protegido. Sin tarjetas de crédito, sin complicaciones.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold transition-all">
                    Registrarme por WhatsApp
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-bold backdrop-blur-sm transition-all">
                    Conocer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
