'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { weddingData } from '@/app/data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

export default function Gallery() {
  const { gallery } = weddingData
  const [selected, setSelected] = useState(null)

  return (
    <section
      id="gallery"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 50% 20%, rgba(196,117,138,0.08) 0%, transparent 60%)`,
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(185deg, #1c1218 0%, #160f14 40%, #0e0b0d 100%)',
        }}
      />

      <div className="relative z-10">

        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-white/40 tracking-[0.4em] text-xs font-sans uppercase mb-3">
            Momen Bersama
          </p>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-light">
            Our Gallery
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mt-5" />
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 gap-3 max-w-lg mx-auto">
          {gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="relative mb-3 overflow-hidden rounded-xl cursor-pointer group break-inside-avoid"
              onClick={() => setSelected(src)}
            >
              <div className={`relative w-full ${i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              onClick={() => setSelected(null)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg max-h-[85vh] aspect-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected}
                alt="Selected"
                width={600}
                height={800}
                unoptimized
                className="object-contain w-full h-full max-h-[85vh] rounded-xl"
              />
            </motion.div>

            {/* Prev / Next */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                const idx = gallery.indexOf(selected)
                setSelected(gallery[(idx - 1 + gallery.length) % gallery.length])
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                const idx = gallery.indexOf(selected)
                setSelected(gallery[(idx + 1) % gallery.length])
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}