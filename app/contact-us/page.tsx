import Image from "next/image";
import logo from "../../logo.png";
import { ContactCards, LocationMap, PageHero, SiteShell } from "../components";
import { site } from "../site-data";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact Us"
        title="Jaipur branches and direct contact."
        text={`Call or WhatsApp ${site.name} for household, office, domestic and corporate shifting support.`}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-700">Branches</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">Contact Us</h2>
          <div className="mt-8">
            <ContactCards />
          </div>
        </div>
        <div className="rounded-[2rem] bg-slate-950 p-6 text-white">
          <div className="relative mb-6 h-28">
            <Image src={logo} alt={`${site.name} logo`} fill className="object-contain object-left" />
          </div>
          <div className="grid gap-3">
            <a href={site.phoneHref} className="rounded-2xl bg-white px-5 py-4 font-black text-slate-950">☎ {site.phone}</a>
            {site.email ? <a href={site.emailHref} className="rounded-2xl bg-white/10 px-5 py-4 font-black text-white ring-1 ring-white/10">✉ {site.email}</a> : null}
            <a href={site.whatsapp} className="rounded-2xl bg-[#089408] px-5 py-4 font-black text-white">Whatsapp Now..</a>
            <p className="rounded-2xl bg-white/10 px-5 py-4 font-black text-white ring-1 ring-white/10">📍 {site.address}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <LocationMap />
      </section>
    </SiteShell>
  );
}
