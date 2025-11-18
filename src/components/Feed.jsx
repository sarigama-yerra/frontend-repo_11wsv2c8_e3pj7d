import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Image, Film, PenTool } from 'lucide-react'

const mock = [
  { id: 1, type: 'photo', title: 'Sodium Nights', author: 'Yara K', cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop' },
  { id: 2, type: 'design', title: 'Glyph Systems', author: 'Miran S', cover: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2000&auto=format&fit=crop' },
  { id: 3, type: 'film', title: 'Neon Lake', author: 'Toma L', cover: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=2000&auto=format&fit=crop' },
  { id: 4, type: 'photo', title: 'Dust & Silver', author: 'Rin O', cover: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2000&auto=format&fit=crop' },
  { id: 5, type: 'design', title: 'Iridescent UI', author: 'Luna V', cover: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop' },
  { id: 6, type: 'film', title: 'Echo Orbit', author: 'Kai Z', cover: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2000&auto=format&fit=crop' },
]

const iconMap = {
  photo: Image,
  design: PenTool,
  film: Film,
}

export default function Feed() {
  const [items, setItems] = useState([])

  useEffect(() => {
    // Placeholder until backend feed API exists
    setItems(mock)
  }, [])

  return (
    <section id="work" className="relative bg-gradient-to-b from-black to-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">Latest Works</h2>
            <p className="text-white/60 mt-2 text-sm sm:text-base">A fast stream of experiments and finished pieces from the studio.</p>
          </div>
          <a href="#" className="text-fuchsia-300 hover:text-white transition-colors text-sm sm:text-base">View all →</a>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.cover} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-4 sm:p-5">
                <div className="mb-2 flex items-center gap-2 text-xs text-white/60">
                  {(() => { const Icon = iconMap[item.type]; return <Icon className="h-4 w-4" /> })()}
                  <span className="uppercase tracking-widest">{item.type}</span>
                </div>
                <h3 className="text-white font-semibold text-lg sm:text-xl">{item.title}</h3>
                <p className="text-white/60 text-sm">by {item.author}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
