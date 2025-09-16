import { motion } from 'framer-motion'
import site from '@/content/site.json'

export default function HeadshotGrid() {
  // Use only the gallery array (no duplicates from hero picks)
  const items = (site.gallery || [])
  const seen = new Set()
  const deduped = items.filter(h => {
    const key = (h.src || '').toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {deduped.map((h, idx) => (
        <motion.figure
          key={h.src + idx}
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
