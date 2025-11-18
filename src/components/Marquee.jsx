import { motion } from 'framer-motion'

const words = [
  'design', 'photo', 'film', 'zines', 'sound', '3D', 'motion', 'identity', 'poster', 'web', 'installation', 'type', 'concept'
]

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900" />
      <motion.div
        className="flex gap-12 py-6 whitespace-nowrap text-white/80 text-lg sm:text-2xl"
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="flex gap-12" key={i}>
            {words.map((w) => (
              <span key={`${w}-${i}`} className="uppercase tracking-widest">{w}</span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
