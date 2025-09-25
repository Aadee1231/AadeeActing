import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxBubbles(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] })
  const y1 = useTransform(scrollYProgress, [0,1], [0, 120])
  const y2 = useTransform(scrollYProgress, [0,1], [0, -100])

  return (
    // 👇 -z-10 keeps the bubbles under all content so they don’t tint photos
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <motion.div style={{ y: y1 }} className="absolute -top-24 -left-24 h-[42rem] w-[42rem] rounded-full bg-brand-600/20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-white/10 blur-3xl" />
    </div>
  )
}
