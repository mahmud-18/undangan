'use client'

import { motion } from 'framer-motion'
import { weddingData } from '@/app/data/content'
import Countdown from '@/app/components/ui/Countdown'

export default function Cover() {
  const { bride, groom, events } = weddingData

  const handleSaveCalendar = () => {
    const event = events[0]
    const startDate = new Date(weddingDate)
    const endDate = new Date(weddingDate)
    endDate.setHours(endDate.getHours() + 6)

    const formatDate = (d) =>
      d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${formatDate(startDate)}`,
      `DTEND:${formatDate(endDate)}`,
      `SUMMARY:The Wedding of ${bride.nickname} & ${groom.nickname}`,
      `DESCRIPTION:Akad Nikah & Resepsi`,
      `LOCATION:${event.venue}, ${event.address}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n')

    const blob = new Blob([icsContent], { type: 'text/calendar' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `wedding-${bride.nickname}-${groom.nickname}.ics`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section
      id="cover"
      className="relative min-h-screen flex flex-col items-center justify-center py-16 px-6"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.5) 100%), url('${weddingData.coverPhoto}') 75% center/cover no-repeat fixed`, //ganti poto / warna 
      }}
    >
      {/* Top section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col items-center text-center mt-8"
      >
        <p className="text-white/70 tracking-[0.35em] text-xs font-sans uppercase mb-4">
          The Wedding Of
        </p>

        <h1 className="font-serif text-white font-light leading-tight">
          <span className="text-6xl md:text-7xl block">{bride.nickname}</span>
          <span className="text-3xl text-white/60 block my-1">&</span>
          <span className="text-6xl md:text-7xl block">{groom.nickname}</span>
        </h1>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-10 bg-white/40" />
          <p className="text-white/70 tracking-[0.2em] text-xs font-sans uppercase">
            Minggu, 24 Mei 2026
          </p>
          <div className="h-px w-10 bg-white/40" />
        </div>
      </motion.div>

      {/* Bottom section — countdown + button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center w-full max-w-sm "
      >
    
        <Countdown />
  
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleSaveCalendar}
          className="mt-6 w-full py-3 border border-white/50 text-white text-xs tracking-[0.25em] uppercase font-sans hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
        >
          Simpan di Kalender
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 flex flex-col items-center text-white/40"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  )
}