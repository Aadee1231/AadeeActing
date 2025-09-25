import { useState } from 'react'
import { Play } from 'lucide-react'
import site from '@/content/site.json'
import Reveal from './Reveal'
import ParallaxBubbles from './ParallaxBubbles'
import Lightbox from './Lightbox' // 👈 use the existing lightbox

export default function Hero(){
  const picks = site.heroHeadshots || []

  // Lightbox state for the hero tiles
  const [open, setOpen] = useState(false)
  const [idx, setIdx]   = useState(0)
  const openAt  = (i) => { setIdx(i); setOpen(true) }
  const onClose = () => setOpen(false)
  const onPrev  = () => setIdx(i => (i - 1 + picks.length) % picks.length)
  const onNext  = () => setIdx(i => (i + 1) % picks.length)

  return (
    <section id="home" className="section relative overflow-hidden hero-gradient">
      {/* keep bubbles *behind* content so they don't tint images */}
      <ParallaxBubbles />

      <Reveal>
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1 className="title-home drop-shadow-[0_4px_20px_rgba(239,68,68,.35)]">{site.name}</h1>
          <p className="mt-3 subtitle">{site.tagline} • {site.location}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#reel" className="btn-primary"><Play size={18} className="mr-2" />Watch Reel</a>
            <a href={site.resumeUrl} className="btn-ghost" download>Download Résumé</a>
          </div>
        </div>
      </Reveal>

      {/* Hero tiles — now clickable to open lightbox */}
      <Reveal delay={.1} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto relative z-10">
        {picks.map((h, i) => (
          <button
            key={h.src + i}
            type="button"
            onClick={() => openAt(i)}
            className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:scale-[1.01] transition"
            aria-label={`Open image ${i+1}`}
          >
            <img
              src={h.src}
              alt={h.alt || 'Headshot'}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </button>
        ))}
      </Reveal>

      {/* Lightbox for the hero picks */}
      <Lightbox
        open={open}
        items={picks}
        index={idx}
        onClose={onClose}
        onPrev={onPrev}
        onNext={onNext}
      />
    </section>
  )
}
