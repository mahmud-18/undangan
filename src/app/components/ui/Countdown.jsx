'use client'

import { useEffect, useState } from 'react'
import { weddingData } from '@/app/data/content'

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 })
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    const target = new Date(weddingData.Date).getTime()

    const tick = () => {
      const now = Date.now()
      const diff = target - now

      if (diff <= 0) {
        setExpired(true)
        return
      }

      setTimeLeft({
        hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
        jam: Math.floor((diff / (1000 * 60 * 60)) % 24),
        menit: Math.floor((diff / (1000 * 60)) % 60),
        detik: Math.floor((diff / 1000) % 60),
      })
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  if (expired) {
    return (
      <div className="text-center py-4">
        <p className="font-serif text-2xl text-brown italic">
          Hari Bahagia Telah Tiba 🤍
        </p>
      </div>
    )
  }

  const items = [
    { value: pad(timeLeft.hari), label: 'Hari' },
    { value: pad(timeLeft.jam), label: 'Jam' },
    { value: pad(timeLeft.menit), label: 'Menit' },
    { value: pad(timeLeft.detik), label: 'Detik' },
  ]

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 py-4">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="font-serif text-4xl md:text-5xl text-white font-light leading-none">
            {item.value}
          </span>
          <span className="text-white/70 text-xs tracking-widest uppercase font-sans mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}