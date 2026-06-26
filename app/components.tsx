import Image from "next/image";
import Link from "next/link";
import logo from "../logo.png";
import loadingTruck from "../loading.png";
import boxWithPerson from "../boxWithperson.png";
import { branches, navItems, site } from "./site-data";
import { Header } from "./header";
import { QuoteForm } from "./quote-form";

export function TopBar() {
  return (
    <section className="hidden bg-slate-950 text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm font-bold">
        <div className="flex items-center gap-6">
          <a href={site.phoneHref} className="hover:text-orange-300">☎ {site.phone}</a>
          {site.email ? <a href={site.emailHref} className="hover:text-orange-300">✉ {site.email}</a> : null}
        </div>
        <div className="flex items-center gap-3">
          <a href={site.whatsapp} className="rounded-full bg-[#089408] px-4 py-2 text-white">Whatsapp Now..</a>
          <Link href="/enquiry-form" className="rounded-full bg-white px-4 py-2 text-slate-950">Enquiry Now..</Link>
        </div>
      </div>
    </section>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8ee] text-slate-950">
      <TopBar />
      <Header />
      {children}
      <Footer />
      <StickyMobileCta />
    </main>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(251,146,60,0.25),transparent_30rem),radial-gradient(circle_at_90%_0%,rgba(239,68,68,0.18),transparent_28rem)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-16">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-700">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.whatsapp} className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#089408] px-7 text-base font-black text-white shadow-2xl shadow-emerald-950/20 transition hover:-translate-y-1">
              Whatsapp Now..
            </a>
            <Link href="/enquiry-form" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-orange-200 bg-white px-7 text-base font-black text-slate-950 shadow-xl shadow-orange-900/5 transition hover:-translate-y-1">
              Get A Free Quote
            </Link>
          </div>
        </div>
        <MoveIllustration />
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div>
      <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-700">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">{title}</h2>
      {text ? <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{text}</p> : null}
    </div>
  );
}

export { QuoteForm };

export function ContactCards() {
  return (
    <div className="grid gap-4">
      {branches.map((branch) => (
        <div key={branch.name} className="rounded-[1.5rem] border border-slate-100 bg-[#fff8ee] p-5">
          <p className="font-black">{branch.name}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{branch.address}</p>
        </div>
      ))}
    </div>
  );
}

export function LocationMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-2xl shadow-orange-950/10">
      <iframe
        title={`${site.name} Location Map`}
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.29225575021!2d75.82168589999999!3d26.894218400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db70916f80d53%3A0x6dde7788b8c17294!2sShree%20Relocation%20Packers%20And%20Movers!5e0!3m2!1sen!2sin!4v1782395345696!5m2!1sen!2sin" 
        className="h-[420px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-10 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <div className="relative h-20 w-40">
            <Image src={logo} alt={`${site.name} logo`} fill className="object-contain object-left" />
          </div>
          <p className="mt-3 text-sm leading-6 text-white/55">{site.welcomeSubtitle}</p>
        </div>
        <div>
          <p className="font-black">Quick links</p>
          <div className="mt-3 grid gap-2 text-sm font-semibold text-white/60">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-orange-300">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black">Contact</p>
          <div className="mt-3 grid gap-2 text-sm font-semibold text-white/60">
            <a href={site.phoneHref}>{site.phone}</a>
            {site.email ? <a href={site.emailHref}>{site.email}</a> : null}
            <p>{site.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/40 bg-white/90 p-3 backdrop-blur-2xl sm:hidden">
      <a href={site.phoneHref} className="rounded-2xl bg-slate-950 py-3 text-center text-sm font-black text-white">Call Now</a>
      <a href={site.whatsapp} className="rounded-2xl bg-[#089408] py-3 text-center text-sm font-black text-white">WhatsApp</a>
    </div>
  );
}

export function MoveIllustration() {
  return (
    <div className="relative self-start rounded-[2.2rem] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-red-950/10 backdrop-blur-xl">
      <div className="relative min-h-[360px] overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-red-700 via-red-600 to-orange-600 p-7 text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(120deg,rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(30deg,rgba(255,255,255,.10)_1px,transparent_1px)] [background-size:34px_34px]" />
        <svg viewBox="0 0 760 500" className="relative z-10 h-[295px] w-full drop-shadow-2xl sm:h-[330px]" role="img" aria-label="Professional packers and movers illustration">
          <ellipse cx="365" cy="410" rx="285" ry="36" fill="#7f1d1d" opacity=".35" />
          <rect x="76" y="268" width="380" height="108" rx="24" fill="#111827" opacity=".16" />
          <rect x="70" y="245" width="390" height="112" rx="24" fill="#fff7ed" />
          <rect x="96" y="270" width="250" height="56" rx="12" fill="#ef4444" />
          <rect x="360" y="282" width="122" height="75" rx="18" fill="#f97316" />
          <rect x="397" y="296" width="48" height="34" rx="8" fill="#111827" opacity=".82" />
          <rect x="102" y="168" width="86" height="78" rx="15" fill="#fef3c7" />
          <rect x="205" y="134" width="116" height="112" rx="18" fill="#fed7aa" />
          <rect x="338" y="188" width="78" height="58" rx="13" fill="#ffedd5" />
          <path d="M112 167h75M218 133h95M350 187h60" stroke="#b45309" strokeWidth="5" strokeLinecap="round" opacity=".45" />
          <circle cx="145" cy="372" r="40" fill="#111827" />
          <circle cx="145" cy="372" r="18" fill="#fff" />
          <circle cx="405" cy="372" r="40" fill="#111827" />
          <circle cx="405" cy="372" r="18" fill="#fff" />
          <path d="M76 245 C115 202 150 181 205 171" stroke="#fde68a" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M482 358 C555 341 603 304 636 246" stroke="#22c55e" strokeWidth="14" fill="none" strokeLinecap="round" />
          <path d="M635 246 l-2 62 l-48-35" fill="#22c55e" />
          <rect x="520" y="147" width="112" height="112" rx="26" fill="#fff" opacity=".95" />
          <path d="M552 210h48M552 184h48M552 236h32" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />
          <circle cx="534" cy="184" r="8" fill="#ef4444" />
          <circle cx="534" cy="210" r="8" fill="#ef4444" />
          <circle cx="534" cy="236" r="8" fill="#ef4444" />
          <text x="116" y="309" fill="#fff" fontSize="34" fontWeight="900">Shree Packers</text>
        </svg>
        <div className="relative z-10 mt-4 grid grid-cols-3 gap-3">
          {["Packing", "Loading", "Delivery"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/15 p-3 text-center text-xs font-black ring-1 ring-white/20">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LoadingTruckImage() {
  return (
    <div className="relative self-start rounded-[2.2rem] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-red-950/10 backdrop-blur-xl">
      <div className="relative min-h-[360px] overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-red-700 via-red-600 to-orange-600">
        <Image
          src={loadingTruck}
          alt={`${site.name} loading truck`}
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function BoxWithPersonImage() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -right-6 -top-6 h-[88%] w-[86%] rounded-sm bg-[#d8b531]" />
      <div className="relative overflow-hidden bg-white shadow-2xl shadow-black/30">
        <Image
          src={boxWithPerson}
          alt="Professional mover with packing boxes"
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}

export function ServiceIllustration({ type }: { type?: string }) {
  const label = type === "office" ? "Office Move" : type === "route" ? "Corporate Route" : type === "home" ? "Home + Vehicle" : "Moving Truck";
  const src =
    type === "office"
      ? "/service-images/office-shifting.png"
      : type === "route"
        ? "/service-images/corporate-shifting.png"
        : type === "home"
          ? "/service-images/household-car-bike-shifting.png"
          : "/service-images/domestic-shifting.png";

  return (
    <div className="overflow-hidden rounded-[2rem] bg-white p-3">
      <Image
        src={src}
        alt={label}
        width={560}
        height={430}
        className="h-52 w-full object-contain transition duration-300 group-hover:scale-105"
      />
    </div>
  );
}
