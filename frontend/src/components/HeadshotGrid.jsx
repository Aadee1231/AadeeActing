import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import site from '@/content/site.json'
import Lightbox from './Lightbox'

export default function HeadshotGrid() {
  const items = (site.gallery || [])
  const seen = new Set()
  const photos = useMemo(
    () => items.filter(h => {
      const k = (h.src || '').toLowerCase()
      if (seen.has(k)) return false
      seen.add(k); return true
    }),
    [items]
  )

  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  const openAt = (i) => { setIdx(i); setOpen(true) }
  const onClose = () => setOpen(false)
  const onPrev = () => setIdx((i) => (i - 1 + photos.length) % photos.length)
  const onNext = () => setIdx((i) => (i + 1) % photos.length)

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((h, i) => (
          <motion.button
            type="button"
            key={h.src + i}
            onClick={() => openAt(i)}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            whileHover={{ scale: 1.02 }}
            className="card overflow-hidden text-left"
          >
            <img src={h.src} alt={h.alt || 'Photo'} loading="lazy" className="w-full h-full object-cover" />
          </motion.button>
        ))}
      </div>

      <Lightbox
        open={open}
        items={photos}
        index={idx}
        onClose={onClose}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  )
}
