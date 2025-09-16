import { Play } from 'lucide-react'
import site from '@/content/site.json'
import Reveal from './Reveal'
import ParallaxBubbles from './ParallaxBubbles'

export default function Hero(){
  const picks = site.heroHeadshots || []

  return (
    <section id="home" className="section relative overflow-hidden hero-gradient">
      <ParallaxBubbles />
      <Reveal>
        <div className="text-center max-w-3xl mx-auto relative">
          <h1 className="title-home drop-shadow-[0_4px_20px_rgba(239,68,68,.35)]">{site.name}</h1>
          <p className="mt-3 subtitle">{site.tagline} • {site.location}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#reel" className="btn-primary"><Play size={18} className="mr-2" />Watch Reel</a>
            <a href={site.resumeUrl} className="btn-ghost" download>Download Résumé</a>
          </div>
        </div>
      </Reveal>

      {/* Hero tiles (curated picks only) */}
      <Reveal delay={.1} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
        {picks.map((h, i) => (
          <div key={h.src + i} className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src={h.src} alt={h.alt || 'Headshot'} className="h-full w-full object-cover" loading="eager" />
          </div>
        ))}
      </Reveal>
    </section>
  )
}
