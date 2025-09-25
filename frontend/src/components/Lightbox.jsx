import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ open, items, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <button className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20"
                  onClick={onClose} aria-label="Close">
            <X />
          </button>

          <button className="absolute left-4 md:left-8 p-2 rounded-lg bg-white/10 hover:bg-white/20"
                  onClick={onPrev} aria-label="Previous">
            <ChevronLeft />
          </button>

          <button className="absolute right-4 md:right-8 p-2 rounded-lg bg-white/10 hover:bg-white/20"
                  onClick={onNext} aria-label="Next">
            <ChevronRight />
          </button>

          <motion.img
            key={items[index]?.src || index}
            src={items[index]?.src}
            alt={items[index]?.alt || 'Photo'}
            className="max-h-[88vh] max-w-[92vw] object-contain rounded-xl border border-white/10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
