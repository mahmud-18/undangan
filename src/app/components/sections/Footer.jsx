'use client'

import { motion } from 'framer-motion'
import { weddingData } from '@/app/data/content'

export default function Footer() {
  const { bride, groom } = weddingData

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #141414 0%, #0a0a0a 60%, #000000 100%)`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 65%)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Ornament */}
        <div className="mb-8 opacity-30">
          <svg width="60" height="30" viewBox="0 0 80 40" fill="none">
            <path d="M40 0 C30 10, 10 10, 0 20 C10 30, 30 30, 40 40 C50 30, 70 30, 80 20 C70 10, 50 10, 40 0Z" fill="white" />
          </svg>
        </div>

        <p className="text-white/30 tracking-[0.4em] text-xs font-sans uppercase mb-4">
          The Wedding Of
        </p>

        <h2 className="font-serif text-white text-4xl md:text-5xl font-light mb-2">
          {bride.nickname}
        </h2>
        <p className="font-serif text-white/30 text-2xl mb-2">&</p>
        <h2 className="font-serif text-white text-4xl md:text-5xl font-light mb-8">
          {groom.nickname}
        </h2>

        <div className="h-px w-16 bg-white/10 mb-8" />

        <p className="text-white/40 text-xs font-sans tracking-widest uppercase mb-2">
          Minggu, 24 Mei 2026
        </p>
        <p className="text-white/40 text-xs font-sans tracking-widest uppercase mb-10">
          Gedung Kesenian Ciamis
        </p>

        <p className="text-white/20 text-xs font-sans">
          Made with 🤍 || MUD
        </p>
      </motion.div>
    </section>
  )
}