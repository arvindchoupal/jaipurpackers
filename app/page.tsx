import Link from "next/link";
import { BoxWithPersonImage, LoadingTruckImage, LocationMap, QuoteForm, SectionTitle, ServiceIllustration, SiteShell } from "./components";
import { features, heroCards, process, services, site, strengths, testimonials } from "./site-data";

export default function Home() {
  return (
    <SiteShell>
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(251,146,60,0.25),transparent_30rem),radial-gradient(circle_at_90%_0%,rgba(239,68,68,0.18),transparent_28rem)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/75 px-4 py-2 text-sm font-black text-orange-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              We provide services
            </div>
            <h1 className="mt-6 max-w-4xl text-[2.65rem] font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              SHREE RELOCATION PACKERS AND MOVERS
              <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                IN JAIPUR
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{site.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.whatsapp} className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#089408] px-7 text-base font-black text-white shadow-2xl shadow-emerald-950/20 transition hover:-translate-y-1">
                Whatsapp Now..
              </a>
              <Link href="/enquiry-form" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-orange-200 bg-white px-7 text-base font-black text-slate-950 shadow-xl shadow-orange-900/5 transition hover:-translate-y-1">
                Get A Free Quote
              </Link>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {heroCards.map((card) => (
                <article key={card.title} className="rounded-[1.7rem] border border-orange-100 bg-white/80 p-5 shadow-sm">
                  <p className="text-xl font-black">{card.title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
          <LoadingTruckImage />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[90rem] px-5 py-8 lg:px-8">
        <div className="rounded-[1.8rem] bg-[#ed151f] p-6 text-white shadow-2xl shadow-red-950/20 sm:p-9 lg:p-12">
          <div className="mb-9 flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">
            <div className="hidden lg:block" />
            <h2 className="flex items-center justify-center gap-4 text-4xl font-black tracking-[-0.03em]">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">▣</span>
              Get Free Quote
            </h2>
            <a href={site.phoneHref} className="inline-flex items-center justify-center gap-3 rounded-lg bg-black px-5 py-3 text-lg font-black text-white shadow-xl">
              ☎ +91 90011 89176
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mx-auto mb-5 h-12 w-24 border-b-4 border-white/80 text-4xl text-[#d8b531]">▰</div>
            <p className="text-4xl font-black tracking-[-0.04em]">{site.welcomeTitle}</p>
            <p className="mt-5 text-xl font-bold text-white/80">{site.welcomeSubtitle}</p>
          </div>
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="text-5xl font-black leading-tight tracking-[-0.04em]">
                We are <span className="text-[#d8b531]">Packers and Movers</span> company
              </h2>
              <p className="mt-8 text-lg font-semibold leading-9 text-white/82">{site.aboutText}</p>
              <h3 className="mt-10 text-3xl font-black text-[#f4d64b]">{site.qualityTitle}</h3>
              <p className="mt-5 text-lg font-semibold leading-9 text-white/82">{site.qualityText}</p>
            </div>
            <BoxWithPersonImage />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionTitle eyebrow="Our Services" title="Always available with best quality service." />
          <Link href="/our-services" className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-orange-600 px-6 font-black text-white">View All Services</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={`/our-services/${service.slug}`} className="group rounded-[2rem] border border-orange-100 bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-950/10">
              <ServiceIllustration type={service.icon} />
              <h3 className="mt-6 text-xl font-black">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-300">Our strengths, which makes us</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">The most preferable moving brand</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map(([value, label, caption]) => (
              <div key={label} className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10">
                <p className="text-5xl font-black tracking-[-0.04em] text-orange-300">{value}</p>
                <p className="mt-4 text-xl font-black capitalize">{label}</p>
                <p className="mt-2 text-sm font-semibold text-white/55">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionTitle eyebrow="Our Process" title="From booking to delivery." text="Our process starts with your booking to deliver your properties at particular date." />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {process.map((step, index) => (
            <article key={step.title} className="rounded-[1.8rem] border border-orange-100 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 font-black text-white">{index + 1}</div>
              <h3 className="mt-5 text-lg font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Our Features" title="Shree packers and movers provide many features." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, text]) => (
              <article key={title} className="rounded-[1.8rem] border border-slate-100 bg-[#fff8ee] p-6">
                <p className="text-3xl">✓</p>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-700">What Client Says</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">Original testimonials, cleaner cards.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm">
              <p className="text-lg text-orange-500">★★★★★</p>
              <p className="mt-5 text-sm leading-7 text-slate-600">“{review.text}”</p>
              <p className="mt-6 text-lg font-black">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-8">
          <SectionTitle eyebrow="Contact Us" title="Find us in Jaipur." text={`Visit or contact ${site.name} at ${site.address}.`} />
        </div>
        <LocationMap />
      </section>
    </SiteShell>
  );
}
