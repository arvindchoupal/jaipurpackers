import Link from "next/link";
import { PageHero, ServiceIllustration, SiteShell } from "../components";
import { services } from "../site-data";

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Services"
        title="We are always available and provide our best Quality Service."
        text="Explore service categories from Shree International Packers and Movers with a cleaner modern presentation."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service.slug} href={`/our-services/${service.slug}`} className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-950/10">
              <ServiceIllustration type={service.icon} />
              <h2 className="mt-6 text-3xl font-black">{service.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{service.text}</p>
              <span className="mt-6 inline-flex font-black text-orange-700">Read more →</span>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
