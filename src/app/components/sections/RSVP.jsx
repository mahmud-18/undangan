'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingData } from '@/app/data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const konfirmasiOptions = [
  { value: 'hadir', label: 'Iya, Saya akan Datang 🎉' },
  { value: 'ragu', label: 'Saya Masih Ragu' },
  { value: 'tidak', label: 'Maaf, Saya Tidak Bisa Datang' },
]

export default function RSVP() {
  const [nama, setNama] = useState('')
  const [jumlah, setJumlah] = useState('')
  const [konfirmasi, setKonfirmasi] = useState('')

  const handleSubmit = () => {
    if (!nama || !konfirmasi) return

    const konfirmasiLabel = konfirmasiOptions.find(o => o.value === konfirmasi)?.label || konfirmasi

    const message = encodeURIComponent(
      `Halo, saya ingin konfirmasi kehadiran:\n\n` +
      `Nama: ${nama}\n` +
      `Jumlah Tamu: ${jumlah || '1'} orang\n` +
      `Konfirmasi: ${konfirmasiLabel}`
    )

    window.open(`https://wa.me/${weddingData.whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section
      id="rsvp"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #141414 0%, #1a1a1a 50%, #141414 100%)`,
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
            Konfirmasi Kehadiran
          </p>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-light">
            RSVP
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mt-5" />
          <p className="text-white/40 text-sm font-sans mt-5 leading-relaxed">
            Mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative border border-white/10 rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)`,
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="p-7 flex flex-col gap-5">

            {/* Nama */}
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs font-sans tracking-widest uppercase">
                Nama
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama lengkap kamu"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm font-sans placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Jumlah */}
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs font-sans tracking-widest uppercase">
                Jumlah Tamu
              </label>
              <input
                type="number"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                placeholder="1"
                min="1"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm font-sans placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Konfirmasi */}
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs font-sans tracking-widest uppercase">
                Konfirmasi
              </label>
              <div className="flex flex-col gap-2">
                {konfirmasiOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setKonfirmasi(opt.value)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-sans transition-all duration-300 ${
                      konfirmasi === opt.value
                        ? 'border-white/40 bg-white/15 text-white/90'
                        : 'border-white/10 bg-white/5 text-white/40 hover:border-white/20 hover:text-white/60'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={!nama || !konfirmasi}
              className="w-full py-3.5 mt-2 flex items-center justify-center gap-2 border border-white/20 text-white/70 text-xs font-sans tracking-widest uppercase hover:bg-white/10 hover:text-white/90 hover:border-white/40 transition-all duration-300 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Kirim via WhatsApp
            </motion.button>

          </div>
        </motion.div>

      </div>
    </section>
  )
}