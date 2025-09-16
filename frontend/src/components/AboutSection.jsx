import Reveal from './Reveal'
import site from '@/content/site.json'

export default function AboutSection(){
  const portrait =
    site.heroHeadshots?.[3]?.src ||
    site.gallery?.[Random]?.src ||
    '/headshots/primary.jpg'

  return (
    <section id="about" className="section section-alt relative">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Reveal className="order-2 md:order-1">
          <img src={portrait} alt="Portrait" className="rounded-2xl border border-white/10 shadow-lg gradient-border" />
        </Reveal>

        <Reveal className="order-1 md:order-2">
          <h2 className="title">About</h2>
          <p className="subtitle mt-2">Rooted in truth, drawn to bold choices.</p>

          <div className="mt-6 space-y-4 leading-relaxed text-neutral-200">
            <p>{site.about?.p1 || 'Aadee is a film, web, and stage actor with training in movement and vocal nuance.'}</p>
            <p>{site.about?.p2 || 'Dialects include General American, RP, and light South Asian inflections.'}</p>
          </div>

          {Array.isArray(site.skills) && site.skills.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {site.skills.map((s, i) => <span key={i} className="chip">{s}</span>)}
            </div>
          )}

          <div className="mt-8 flex gap-3">
            <a className="btn-primary" href={site.resumeUrl} download>Download Résumé</a>
            {site.socials?.imdb && <a className="btn-ghost" href={site.socials.imdb} target="_blank" rel="noreferrer">IMDb</a>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
