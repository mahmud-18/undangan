'use client'

import { motion } from 'framer-motion'
import { weddingData } from '@/app/data/content'
import Petals from '@/app/components/ui/Petals'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

export default function LoveStory() {
  const { loveStory } = weddingData

  return (
    <section
      id="lovestory"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.3) 35%, rgba(10,10,10,0.4) 65%, rgba(0, 0, 0, 0.31) 100%), url('/images/lovestory.jpg') center/cover no-repeat`,
      }}
    >
      {/* Blush glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, rgba(196, 117, 138, 0.16) 0%, transparent 65%)`,
        }}
      />

      {/* Petals */}
      <Petals />

      {/* Content */}
      <div className="relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p
            className="tracking-[0.4em] text-xs font-sans uppercase mb-3"
            style={{ color: 'rgba(196,117,138,0.7)' }}
          >
            Our Journey
          </p>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-light">
            Love Story
          </h2>
          <div
            className="h-px w-16 mx-auto mt-5"
            style={{ background: 'rgba(196,117,138,0.4)' }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-md mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(to bottom, transparent, rgba(196,117,138,0.45), transparent)`,
            }}
          />

          <div className="flex flex-col gap-12">
            {loveStory.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: i * 0.2 },
                  },
                }}
                className="flex gap-6 pl-2 group hover:translate-x-1 transition duration-300"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 mt-1">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(196,117,138,0.1)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(196,117,138,0.35)',
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: '#c4758a' }}
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl px-5 py-4 shadow-lg transition duration-300"
                  style={{
                    background: 'rgba(196,117,138,0.05)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(196,117,138,0.12)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(196,117,138,0.09)'
                    e.currentTarget.style.borderColor = 'rgba(196,117,138,0.22)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(196,117,138,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(196,117,138,0.12)'
                  }}
                >
                  <p
                    className="text-[10px] font-sans font-bold tracking-[0.35em] uppercase mb-2"
                    style={{ color: '#c4758a' }}
                  >
                    {item.year}
                  </p>
                  <h3
                    className="font-serif text-2xl font-light mb-3 leading-snug italic"
                    style={{ color: '#f5eeee' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm font-sans leading-relaxed"
                    style={{ color: 'rgb(77, 69, 71)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}