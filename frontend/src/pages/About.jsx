import site from '@/content/site.json'

export default function About(){
  return (
    <section className="section">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img src={site.headshots[0]?.src || '/headshots/primary.jpg'} alt="Portrait" className="rounded-2xl border border-white/10" />

        <div>
          <h1 className="title">About</h1>
          <p className="subtitle mt-3">Rooted in truth, drawn to bold choices.</p>
          <div className="mt-6 space-y-4 text-neutral-200 leading-relaxed">
            <p>
              Aadi Chheda is a Raleigh‑based actor working across film, web, and stage. Trained in movement and vocal nuance, he brings grounded presence and a collaborative spirit to each set.
            </p>
            <p>
              Comfortable with comedy and drama alike, Aadi has a special interest in character‑driven stories with contemporary themes. Dialects include General American, RP, and light South Asian inflections.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {site.skills.map((s, i) => <span key={i} className="badge">{s}</span>)}
          </div>

          <div className="mt-8 flex gap-3">
            <a className="btn-primary" href={site.resumeUrl} download>Download Résumé</a>
            <a className="btn-ghost" href={site.socials.imdb} target="_blank" rel="noreferrer">IMDb</a>
          </div>
        </div>
      </div>
    </section>
  )
}
