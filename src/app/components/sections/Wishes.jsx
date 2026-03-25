'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const konfirmasiOptions = [
  { value: 'hadir', label: 'Hadir 🎉' },
  { value: 'ragu', label: 'Masih Ragu' },
  { value: 'tidak', label: 'Tidak Hadir' },
]

function timeAgo(dateStr) {
  const now = new Date()
  const date = new Date(dateStr)
  const diff = Math.floor((now - date) / 1000)

  if (diff < 60) return 'Baru saja'
  if (diff < 3600) return `${Math.floor(diff / 60)} menit lalu`
  if (diff < 86400) return `${Math.floor(diff / 3600)} jam lalu`
  return `${Math.floor(diff / 86400)} hari lalu`
}

export default function Wishes() {
  const [wishes, setWishes] = useState([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [nama, setNama] = useState('')
  const [ucapan, setUcapan] = useState('')
  const [konfirmasi, setKonfirmasi] = useState('')
  const [success, setSuccess] = useState(false)

  const fetchWishes = async () => {
    try {
      const res = await fetch('/api/wishes')
      const data = await res.json()
      setWishes(data.wishes || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWishes()
  }, [])

  const handleSubmit = async () => {
    if (!nama || !ucapan || !konfirmasi) return
    setSending(true)

    try {
      const res = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nama, ucapan, konfirmasi }),
      })

      if (res.ok) {
        setSuccess(true)
        setNama('')
        setUcapan('')
        setKonfirmasi('')
        await fetchWishes()
        setTimeout(() => setSuccess(false), 3000)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="wishes"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #141414 0%, #1a1a1a 40%, #141414 100%)`,
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
            Doa & Ucapan
          </p>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-light">
            Wedding Wish
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mt-5" />
          <p className="text-white/40 text-sm font-sans mt-5 leading-relaxed">
            Tuliskan doa dan ucapan terbaik untuk kami
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative border border-white/10 rounded-2xl overflow-hidden mb-8"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)`,
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="p-7 flex flex-col gap-5">

            {/* Nama */}
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs font-sans tracking-widest uppercase">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama kamu"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm font-sans placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Ucapan */}
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs font-sans tracking-widest uppercase">Ucapan</label>
              <textarea
                value={ucapan}
                onChange={(e) => setUcapan(e.target.value)}
                placeholder="Tulis doa dan ucapan terbaikmu..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm font-sans placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            {/* Konfirmasi */}
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs font-sans tracking-widest uppercase">Kehadiran</label>
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
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="w-full py-3.5 flex items-center justify-center gap-2 text-white/60 text-xs font-sans tracking-widest"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Ucapan Terkirim!
                </motion.div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={!nama || !ucapan || !konfirmasi || sending}
                  className="w-full py-3.5 flex items-center justify-center gap-2 border border-white/20 text-white/60 text-xs font-sans tracking-widest uppercase hover:bg-white/10 hover:text-white/90 hover:border-white/40 transition-all duration-300 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {sending ? 'Mengirim...' : 'Kirim Ucapan'}
                </motion.button>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

        {/* Wishes List */}
        <div className="flex flex-col gap-4">
          {loading ? (
            <p className="text-center text-white/30 text-sm font-sans py-8">Memuat ucapan...</p>
          ) : wishes.length === 0 ? (
            <p className="text-center text-white/30 text-sm font-sans py-8">Belum ada ucapan</p>
          ) : (
            wishes.map((wish, i) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative border border-white/10 rounded-2xl p-5"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-serif text-white/80 text-base">{wish.nama}</p>
                  <span className={`text-xs font-sans px-2 py-0.5 rounded-full border flex-shrink-0 ${
                    wish.konfirmasi === 'hadir'
                      ? 'border-green-400/20 text-green-400/60'
                      : wish.konfirmasi === 'tidak'
                      ? 'border-red-400/20 text-red-400/60'
                      : 'border-white/10 text-white/30'
                  }`}>
                    {konfirmasiOptions.find(o => o.value === wish.konfirmasi)?.label || wish.konfirmasi}
                  </span>
                </div>
                <p className="text-white/50 text-sm font-sans leading-relaxed mb-3">{wish.ucapan}</p>
                <p className="text-white/20 text-xs font-sans">{timeAgo(wish.created_at)}</p>
              </motion.div>
            ))
          )}
        </div>

      </div>
    </section>
  )
}