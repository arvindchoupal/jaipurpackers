"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../logo.png";
import { navItems, site } from "./site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-[#fff8ee]/95 shadow-sm shadow-orange-950/5 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-white/80 px-3 py-2 ring-1 ring-orange-100">
          <div className="relative h-14 w-24 shrink-0 overflow-hidden sm:h-20 sm:w-48">
            <Image src={logo} alt={`${site.name} logo`} fill priority className="scale-[1.55] object-contain object-center" />
          </div>
          <div className="min-w-0">
            <p className="line-clamp-2 text-sm font-black leading-tight tracking-tight text-slate-950 sm:text-base lg:text-lg">{site.name}</p>
            <p className="mt-1 text-[11px] font-black uppercase tracking-[0.28em] text-orange-700">Jaipur</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-black text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-orange-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={site.phoneHref} className="rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-5 py-3 text-sm font-black text-white shadow-xl shadow-orange-950/15">
            Call Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            console.log(';sas')
            setOpen(true)
          }}
          style={{
          }}
          className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-2xl font-black text-white md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
        {open ? (
          <div className="fixed inset-0 z-[999] bg-slate-950/70 backdrop-blur-sm">
            <div className="ml-auto flex h-dvh w-[86%] max-w-sm flex-col overflow-y-auto bg-[#fff8ee] p-5 shadow-2xl">
              <div className="flex items-center justify-between">
                <p className="text-lg font-black">Menu</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-xl font-black text-white"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>
              <div className="mt-5 rounded-2xl bg-white p-3 ring-1 ring-orange-100">
                <div className="relative h-20 w-full overflow-hidden">
                  <Image src={logo} alt={`${site.name} logo`} fill className="scale-[1.45] object-contain object-left" />
                </div>
                <p className="mt-2 text-base font-black leading-tight">{site.name}</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.22em] text-orange-700">Jaipur</p>
              </div>
              <div className="mt-6 grid gap-3">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl bg-white px-5 py-4 text-base font-black text-slate-900 shadow-sm">
                    {item.label}
                  </Link>
                ))}
              </div>
              <p className="mt-6 rounded-2xl bg-white p-4 text-sm font-semibold leading-6 text-slate-600 ring-1 ring-orange-100">{site.address}</p>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
