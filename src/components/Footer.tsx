import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined text-sm">health_and_safety</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-primary">MediFin</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              La primera plataforma integral que fusiona salud de calidad con soluciones financieras innovadoras para todos en México.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6">Servicios</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary" href="/dashboard">Telemedicina</Link></li>
              <li><Link className="hover:text-primary" href="/creditos">Microcréditos</Link></li>
              <li><Link className="hover:text-primary" href="/">Microseguros</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Compañía</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary" href="#">Sobre nosotros</Link></li>
              <li><Link className="hover:text-primary" href="#">Preguntas Frecuentes</Link></li>
              <li><Link className="hover:text-primary" href="#">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary" href="#">Términos y Condiciones</Link></li>
              <li><Link className="hover:text-primary" href="#">Privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 MediFin S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
