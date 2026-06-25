import { PageHero, QuoteForm, SiteShell } from "../components";

export default function EnquiryPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Enquiry Now"
        title="Get A Free Quote"
        text="Fill the same enquiry details from the original website in a modern, mobile-friendly form layout."
      />
      <section className="mx-auto max-w-[90rem] px-5 py-20 lg:px-8">
        <div className="rounded-[1.8rem] bg-[#ed151f] p-6 text-white shadow-2xl shadow-red-950/20 sm:p-9 lg:p-12">
          <h2 className="mb-9 text-center text-4xl font-black tracking-[-0.03em]">Get Free Quote</h2>
          <QuoteForm />
        </div>
      </section>
    </SiteShell>
  );
}
