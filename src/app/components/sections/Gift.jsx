'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingData } from '@/app/data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

export default function Gift() {
  const { gifts } = weddingData
  const [copied, setCopied] = useState(null)

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section
      id="gift"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #0a0a0a 0%, #141414 40%, #1a1a1a 70%, #141414 100%)`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.03) 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 max-w-sm mx-auto">

        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-white/40 tracking-[0.4em] text-xs font-sans uppercase mb-3">
            Tanda Kasih
          </p>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-light">
            Wedding Gift
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mt-5" />
          <p className="text-white/40 text-sm font-sans mt-5 leading-relaxed">
            Bagi yang ingin memberikan tanda kasih, dapat mengirimkan melalui rekening berikut
          </p>
        </motion.div>

        {/* Gift Cards */}
        <div className="flex flex-col gap-4">
          {gifts.map((gift, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.15 } },
              }}
              className="relative border border-white/10 rounded-2xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)`,
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="p-6">
                {/* Bank name */}
                <p className="text-white/40 text-xs font-sans tracking-[0.3em] uppercase mb-2">
                  Bank {gift.bank}
                </p>

                {/* Account number */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <p className="font-serif text-white text-2xl font-light tracking-widest">
                    {gift.accountNumber}
                  </p>
                  <button
                    onClick={() => handleCopy(gift.accountNumber, i)}
                    className="flex items-center gap-1.5 border border-white/20 px-3 py-1.5 text-white/50 text-xs font-sans tracking-wider hover:bg-white/10 hover:text-white/80 hover:border-white/40 transition-all duration-300 rounded-lg flex-shrink-0"
                  >
                    {copied === i ? (
                      <>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="9" y="9" width="13" height="13" rx="2" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                        Salin
                      </>
                    )}
                  </button>
                </div>

                {/* Account name */}
                <p className="text-white/50 text-sm font-sans">a.n. {gift.accountName}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}