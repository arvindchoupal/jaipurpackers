import Image from "next/image";
import Link from "next/link";
import logo from "../logo.png";
import loadingTruck from "../loading.png";
import boxWithPerson from "../boxWithperson.png";
import { branches, navItems, site } from "./site-data";
import { Header } from "./header";

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

export function QuoteForm() {
  const fields = [
    { label: "Your Name", placeholder: "Your Name", icon: "user" },
    { label: "Email", placeholder: "Your Email Address", icon: "mail" },
    { label: "Phone", placeholder: "Your Phone", icon: "phone" },
    { label: "Moving Type", placeholder: "Moving Type", icon: "truck" },
    { label: "Moving From", placeholder: "Moving From", icon: "pin" },
    { label: "Moving To", placeholder: "Moving To", icon: "pin" },
  ];

  return (
    <form className="grid items-end gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr]">
      {fields.map((field) => (
        <Input key={field.label} label={field.label} placeholder={field.placeholder} icon={field.icon} />
      ))}
      <button className="flex min-h-14 items-center justify-center gap-3 rounded-xl bg-black px-5 text-base font-black uppercase text-white shadow-2xl shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-slate-900 md:col-span-2 lg:col-span-4 xl:col-span-1">
        <Icon name="send" className="h-6 w-6 text-white" />
        Submit
      </button>
    </form>
  );
}

function Input({ label, placeholder, icon }: { label: string; placeholder: string; icon: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black text-white lg:text-base">{label}</span>
      <span className="flex min-h-14 overflow-hidden rounded-xl bg-white shadow-xl shadow-red-950/10 ring-1 ring-white/20">
        <span className="grid w-12 shrink-0 place-items-center bg-slate-50 text-slate-800">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <input className="w-full min-w-0 bg-white px-3 text-sm font-semibold text-slate-900 outline-none placeholder:text-sm placeholder:font-semibold placeholder:text-slate-500" placeholder={placeholder} />
      </span>
    </label>
  );
}

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (name === "phone") {
    return <svg {...common}><path d="M6.6 10.8c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.59.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.26.2 2.47.57 3.59.11.35.03.74-.25 1.02l-2.22 2.19Z" fill="currentColor"/></svg>;
  }
  if (name === "mail") {
    return <svg {...common}><path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm8 7 8-5H4l8 5Zm0 2L4 10v6h16v-6l-8 5Z" fill="currentColor"/></svg>;
  }
  if (name === "pin") {
    return <svg {...common}><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" fill="currentColor"/></svg>;
  }
  if (name === "truck") {
    return <svg {...common}><path d="M3 5h12v9h1.5l2-3H21v6h-2a3 3 0 0 1-6 0H9a3 3 0 0 1-6 0H1V7a2 2 0 0 1 2-2Zm3 13.5A1.5 1.5 0 1 0 6 15a1.5 1.5 0 0 0 0 3.5Zm10 0A1.5 1.5 0 1 0 16 15a1.5 1.5 0 0 0 0 3.5Z" fill="currentColor"/></svg>;
  }
  if (name === "send") {
    return <svg {...common}><path d="m21.5 3.2-6.8 17.1c-.3.8-1.4.9-1.9.2l-3.6-5.1-5.1-3.6c-.7-.5-.6-1.6.2-1.9L21.4 3c.1 0 .2.1.1.2ZM7 11.2l3.5 2.4 2.4 3.5 4.1-10-10 4.1Z" fill="currentColor"/></svg>;
  }
  return <svg {...common}><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5C21 16.5 17 14 12 14Z" fill="currentColor"/></svg>;
}

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
        src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
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
