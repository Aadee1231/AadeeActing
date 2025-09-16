import { motion } from 'framer-motion'
import site from '@/content/site.json'
import { Play } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="section hero-gradient relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
        <h1 className="title">{site.name}</h1>
        <p className="mt-3 subtitle">{site.tagline} • {site.location}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/video" className="btn-primary">
            <Play className="mr-2" size={18}/> Watch Reel
          </Link>
          <a href={site.resumeUrl} className="btn-ghost" download>Download Résumé</a>
        </div>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
        {[0,1,2,3].map((i)=> (
          <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src={site.headshots[i]?.src || '/headshots/primary.jpg'} alt={site.headshots[i]?.alt || 'Headshot'} className="h-full w-full object-cover" loading="eager" />
          </div>
        ))}
      </div>
    </section>
  )
}
