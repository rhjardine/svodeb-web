import { ArrowLeft, ArrowRight, Home, Mail, SearchX } from "lucide-react";
import { Link, useLocation } from "wouter";

function LogoMark() {
  return (
    <span className="relative flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#0b2441] text-white shadow-[0_8px_18px_rgba(8,29,55,.18)]">
      <span className="absolute inset-[5px] rounded-[10px] border border-[#80c8f4]/40" />
      <span className="font-display text-[25px] italic leading-none text-[#bce6ff]">S</span>
      <span className="absolute bottom-[7px] right-[8px] h-1.5 w-1.5 rounded-full bg-[#58a5dc]" />
    </span>
  );
}

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <main className="min-h-screen bg-[#f5f7f9] px-5 py-8 text-[#102237] sm:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Volver al inicio de SVODEB">
            <LogoMark />
            <span className="leading-[1.05]"><span className="block text-[.72rem] font-extrabold tracking-[.22em]">SVODEB</span><span className="mt-1 block text-[.58rem] tracking-[.1em] text-[#718499]">Ciencia · Estética · Biomateriales</span></span>
          </Link>
          <span className="hidden text-[.66rem] font-extrabold uppercase tracking-[.16em] text-[#1768b6] sm:block">Sociedad afiliada a ALODYB</span>
        </header>
        <section className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[.8fr_1.2fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#08213d] p-8 text-white shadow-[0_24px_70px_rgba(8,33,61,.18)] sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#77c9ef]/20" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full border border-[#77c9ef]/15" />
            <SearchX size={28} className="relative text-[#9cdbfa]" />
            <div className="relative mt-12 font-display text-8xl leading-none text-[#9cdbfa]">404</div>
            <p className="relative mt-5 max-w-xs text-sm leading-6 text-[#aec5d8]">La ruta que buscas no existe o fue movida a otro lugar.</p>
          </div>
          <div>
            <div className="section-kicker">Página no encontrada</div>
            <h1 className="font-display mt-5 max-w-xl text-5xl leading-[.98] tracking-[-.04em] sm:text-6xl">Sigamos buscando el camino correcto.</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#66788a]">Puedes regresar al inicio, conocer el proceso de afiliación o contactar a la secretaría de SVODEB.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button onClick={() => setLocation("/")} className="primary-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1768b6] px-5 py-3 text-sm font-extrabold text-white"><Home size={16} /> Ir al inicio</button>
              <Link href="/#afiliaciones" className="ghost-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#b7cfdf] px-5 py-3 text-sm font-extrabold text-[#1768b6]">Ver afiliaciones <ArrowRight size={16} /></Link>
              <a href="mailto:secretaria@svodeb.org" className="ghost-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#b7cfdf] px-5 py-3 text-sm font-extrabold text-[#1768b6]"><Mail size={16} /> Contactar secretaría</a>
            </div>
            <button onClick={() => window.history.back()} className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold text-[#718499] hover:text-[#1768b6]"><ArrowLeft size={14} /> Volver a la página anterior</button>
          </div>
        </section>
        <footer className="border-t border-[#dbe3ea] py-5 text-[.68rem] text-[#8293a0]">SVODEB · Sociedad Venezolana de Operatoria Dental, Estética y Biomateriales · RIF J-296571635</footer>
      </div>
    </main>
  );
}
