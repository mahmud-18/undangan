'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { weddingData } from '@/app/data/content'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTitle, setShowTitle] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Auto play saat pertama load
    const tryPlay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true)
          setShowTitle(true)
          setTimeout(() => setShowTitle(false), 3000)
        })
        .catch(() => {
          // Browser block autoplay — tunggu user interaction
          setIsPlaying(false)
        })
    }

    audio.volume = 0.5
    tryPlay()
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
      setShowTitle(true)
      setTimeout(() => setShowTitle(false), 3000)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingData.musicFile}
        loop
        preload="auto"
      />

      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

        {/* Song title popup */}
        <AnimatePresence>
          {showTitle && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2"
            >
              {/* Equalizer bars */}
              <div className="flex items-end gap-0.5 h-3">
                {[1, 2, 3].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-white/60 rounded-full"
                    animate={isPlaying ? {
                      height: ['4px', '10px', '6px', '12px', '4px'],
                    } : { height: '4px' }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
              <p className="text-white/70 text-xs font-sans tracking-wide whitespace-nowrap">
                {weddingData.musicTitle}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Play/Pause button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="relative w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center hover:border-white/40 transition-all duration-300"
        >
          {/* Rotating ring saat playing */}
          {isPlaying && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-white/20"
              style={{
                borderTopColor: 'rgba(255,255,255,0.6)',
              }}
            />
          )}

          {/* Icon */}
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.svg
                key="pause"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                width="16" height="16" viewBox="0 0 24 24" fill="white"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </motion.svg>
            ) : (
              <motion.svg
                key="play"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                width="16" height="16" viewBox="0 0 24 24" fill="white"
              >
                <path d="M8 5v14l11-7z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}