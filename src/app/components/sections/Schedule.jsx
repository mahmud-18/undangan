'use client'

import { motion } from 'framer-motion'
import { weddingData } from '@/app/data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
}

function FlowerOrnament() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(196,117,138,0.8)" strokeWidth="1">
      <path d="M12 2C8.5 5 4 8 4 13a8 8 0 0016 0c0-5-4.5-8-8-11z" />
      <path d="M12 10v4M10 12h4" strokeWidth="0.8" />
    </svg>
  )
}

export default function Schedule() {
  const { events, mapsEmbed } = weddingData
  const venue = events[0]

  return (
    <section
      id="schedule"
      className="relative py-20 px-5 overflow-hidden"
      style={{
        background: 'linear-gradient(185deg, #1c1218 0%, #160f14 40%, #0e0b0d 100%)',
      }}
    >
      {/* Blush radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 20%, rgba(196,117,138,0.08) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-sm mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <p
            className="text-[9px] font-sans font-medium uppercase tracking-[0.85em] mb-4"
            style={{ color: '#c4758a'  }}
          >
            Tanggal Penting
          </p>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-10"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(196,117,138,0.5))' }}
            />
            <FlowerOrnament />
            <div
              className="h-px w-10"
              style={{ background: 'linear-gradient(90deg, rgba(196,117,138,0.5), transparent)' }}
            />
          </div>

          <h2
            className="font-serif font-light leading-tight mb-5"
            style={{ fontSize: '38px', color: '#f5eeee', letterSpacing: '0.01em' }}
          >
            Wedding{' '}
            <em className="italic" style={{ color: '#c4758a' }}>
              Schedule
            </em>
          </h2>

          <div
            className="w-px mx-auto"
            style={{
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(196,117,138,0.5), transparent)',
            }}
          />
        </motion.div>

        {/* ── Date Badge ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="flex items-center gap-4 mb-8"
        >
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(196,117,138,0.2))' }}
          />
          <div className="text-center">
            <p
              className="font-serif font-light uppercase tracking-[0.3em] mb-1"
              style={{ fontSize: '11px', color: 'rgba(196,117,138,0.8)' }}
            >
              {venue.day}
            </p>
            <p
              className="font-serif font-light leading-none"
              style={{ fontSize: '52px', color: '#f5eeee' }}
            >
              24
            </p>
            <p
              className="font-sans font-light uppercase tracking-[0.35em] mt-1"
              style={{ fontSize: '10px', color: 'rgb(196, 117, 138)' }}
            >
              Mei · 2026
            </p>
          </div>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(90deg, rgba(196,117,138,0.2), transparent)' }}
          />
        </motion.div>

        {/* ── Main Card ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="relative mb-3 overflow-hidden"
          style={{
            border: '1px solid rgba(196,117,138,0.15)',
            borderRadius: '4px',
          }}
        >
          {/* Rose top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 5%, #c4758a 50%, transparent 95%)',
            }}
          />

          {/* Venue block */}
          <div
            className="px-6 pt-7 pb-6 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(196,117,138,0.07) 0%, rgba(22,15,20,0.9) 100%)',
              borderBottom: '1px solid rgba(196,117,138,0.1)',
            }}
          >
            <div
              className="flex items-center justify-center mx-auto mb-3"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid rgba(196,117,138,0.3)',
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(196,117,138,0.9)"
                strokeWidth="1.5"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>

            <p
              className="font-serif font-light mb-2"
              style={{ fontSize: '20px', color: '#f5eeee', letterSpacing: '0.03em' }}
            >
              {venue.venue}
            </p>
            <p
              className="font-sans font-light leading-relaxed mx-auto"
              style={{
                fontSize: '10px',
                color: 'rgb(196, 117, 138)',
                letterSpacing: '0.05em',
                maxWidth: '260px',
              }}
            >
              {venue.address}
            </p>
          </div>

          {/* Events list */}
          <div>
            {events.map((event, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-5"
                style={{
                  borderBottom: i < events.length - 1 ? '1px solid rgba(196,117,138,0.08)' : 'none',
                }}
              >
                <span
                  className="font-serif font-light leading-none select-none"
                  style={{ fontSize: '32px', color: 'rgba(196, 117, 138, 0.46)', minWidth: '32px' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div
                  className="self-stretch w-px"
                  style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(196,117,138,0.35), transparent)',
                  }}
                />

                <div className="flex-1">
                  <p
                    className="font-serif font-light mb-2 leading-none italic"
                    style={{ fontSize: '20px', color: '#f0e8e8', letterSpacing: '0.02em' }}
                  >
                    {event.name}
                  </p>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(196,117,138,0.5)" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      <span
                        className="font-sans font-light tracking-wider"
                        style={{ fontSize: '10px', color: 'rgb(196, 117, 138)' }}
                      >
                        {event.day}, {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(196,117,138,0.5)" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                      <span
                        className="font-sans font-light tracking-wider"
                        style={{ fontSize: '10px', color: 'rgb(196, 117, 138)' }}
                      >
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    border: '1px solid rgba(196,117,138,0.6)',
                    flexShrink: 0,
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Map ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="overflow-hidden"
          style={{
            border: '1px solid rgba(196,117,138,0.15)',
            borderRadius: '4px',
          }}
        >
          <iframe
            src={mapsEmbed}
            width="100%"
            height="220"
            style={{
              border: 0,
              display: 'block',
           
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 transition-all duration-300"
            style={{ background: 'rgba(22,15,20,0.95)', borderTop: '1px solid rgba(196,117,138,0.1)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(196,117,138,0.07)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(22,15,20,0.95)')}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(196,117,138,0.8)" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span
              className="font-sans font-medium uppercase"
              style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(196,117,138,0.55)' }}
            >
              Buka di Google Maps
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}