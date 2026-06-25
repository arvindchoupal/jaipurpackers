import { MoveIllustration, PageHero, SiteShell } from "../components";
import { site } from "../site-data";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Us"
        title={site.aboutTitle}
        text={site.aboutText}
      />
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <MoveIllustration />
          <div className="space-y-6 text-base leading-8 text-white/72">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-white">{site.welcomeTitle}</h2>
            <p>{site.welcomeSubtitle}</p>
            <p>{site.aboutText}</p>
            <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
              <h3 className="text-2xl font-black text-white">{site.qualityTitle}</h3>
              <p className="mt-3">{site.qualityText}</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
