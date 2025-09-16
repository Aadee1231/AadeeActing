import { motion } from 'framer-motion'
import site from '@/content/site.json'

export default function HeadshotGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {site.headshots.map((h, idx) => (
        <motion.figure
          key={idx}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: idx * 0.04 }}
          whileHover={{ scale: 1.02 }}
          className="card overflow-hidden"
        >
          <img src={h.src} alt={h.alt || 'Photo'} loading="lazy" className="w-full h-full object-cover" />
        </motion.figure>
      ))}
    </div>
  )
}
