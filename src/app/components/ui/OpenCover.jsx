'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { weddingData } from '@/app/data/content'

export default function OpenCover({ guestName, onOpen }) {
  const [visible, setVisible] = useState(true)

  const handleOpen = () => {
    setVisible(false)
    setTimeout(() => onOpen(), 800)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 100%), url('${weddingData.coverPhoto}') center/cover no-repeat`,
          }}
        >
          {/* Overlay blur */}
          <div className="absolute inset-0 backdrop-blur-[2px]" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 flex flex-col items-center text-center px-8"
          >
            {/* Ornament top */}
            <div className="mb-6 opacity-80">
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                <path d="M40 0 C30 10, 10 10, 0 20 C10 30, 30 30, 40 40 C50 30, 70 30, 80 20 C70 10, 50 10, 40 0Z" fill="rgba(255,255,255,0.3)" />
              </svg>
            </div>

            <p className="text-white/80 tracking-[0.3em] text-xs font-sans mb-3 uppercase">
              The Wedding Of
            </p>

            <h1 className="font-serif text-white text-5xl md:text-6xl font-light mb-2">
              {weddingData.bride.nickname}
            </h1>
            <p className="text-white/70 font-serif text-2xl mb-2">&</p>
            <h1 className="font-serif text-white text-5xl md:text-6xl font-light mb-6">
              {weddingData.groom.nickname}
            </h1>

            <div className="divider bg-white/50 mb-6" style={{ background: 'rgba(255,255,255,0.5)', width: '60px', height: '1px' }} />

            {guestName && (
              <div className="mb-6">
                <p className="text-white/70 text-sm font-sans tracking-widest uppercase mb-1">
                  Kepada Yth.
                </p>
                <p className="text-white font-serif text-xl italic">
                  {guestName}
                </p>
              </div>
            )}

            <p className="text-white/60 text-xs font-sans tracking-[0.2em] uppercase mb-8">
              Minggu, 24 Mei 2026
            </p>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleOpen}
              className="relative px-10 py-3 border border-white/50 text-white text-sm tracking-[0.25em] uppercase font-sans hover:bg-white/10 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Buka Undangan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </span>
            </motion.button>

            {/* Music hint */}
            <p className="text-white/40 text-xs font-sans mt-6 tracking-wider">
              🎵 Aktifkan suara untuk pengalaman terbaik
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}