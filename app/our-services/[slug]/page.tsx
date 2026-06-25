import { notFound } from "next/navigation";
import { PageHero, QuoteForm, ServiceIllustration, SiteShell } from "../../components";
import { process, services, site } from "../../site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <SiteShell>
      <PageHero eyebrow="Service" title={service.title} text={service.text} />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <ServiceIllustration type={service.icon} />
        <div>
          <h2 className="text-4xl font-black tracking-[-0.04em]">Why choose {site.shortName}?</h2>
          <div className="mt-8 grid gap-4">
            {process.map((step, index) => (
              <div key={step.title} className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-orange-600 font-black text-white">{index + 1}</span>
                <div>
                  <h3 className="font-black">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[90rem] px-5 lg:px-8">
          <div className="rounded-[1.8rem] bg-[#ed151f] p-6 text-white shadow-2xl shadow-red-950/20 sm:p-9 lg:p-12">
            <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-red-100">Get A Free Quote</p>
            <h2 className="mb-9 mt-3 text-center text-4xl font-black tracking-[-0.04em]">Request quote for {service.title}</h2>
          <QuoteForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
