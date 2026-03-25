    'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { weddingData } from '@/app/data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

export default function Couple() {
  const { bride, groom } = weddingData

  return (
    <section
      id="couple"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #1c1218 0%, #160f14 50%, #0e0b0d 100%)`,
      }}
    >
      {/* Blush radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, rgba(196,117,138,0.09) 0%, transparent 65%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">

        {/* Ayat */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-lg mx-auto mb-20"
        >
          <p
            className="tracking-[0.4em] text-xs font-sans uppercase mb-4"
            style={{ color: 'rgba(196,117,138,0.5)' }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <p
            className="font-serif text-lg md:text-xl italic leading-relaxed font-light"
            style={{ color: 'rgba(245,238,238,0.75)' }}
          >
            "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."
          </p>
          <p
            className="mt-5 tracking-[0.25em] text-xs font-sans uppercase"
            style={{ color: 'rgba(196,117,138,0.5)' }}
          >
            QS. Ar-Rum : 21
          </p>
          <div
            className="h-px w-16 mx-auto mt-5"
            style={{ background: 'rgba(196,117,138,0.25)' }}
          />
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-12 max-w-sm mx-auto">

          {/* Bride */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={bride.photo}
                alt={bride.nickname}
                fill
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, #0e0b0d 0%, rgba(28,18,24,0.25) 45%, transparent 100%)`,
                }}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2
                className="font-serif text-2xl md:text-3xl font-light leading-snug"
                style={{ color: '#f5eeee' }}
              >
                {bride.fullName}
              </h2>
              <div
                className="h-px w-10 my-3"
                style={{ background: 'rgba(196,117,138,0.5)' }}
              />
              <p
                className="text-xs font-sans italic mb-1"
                style={{ color: 'rgba(196,117,138,0.65)' }}
              >
                {bride.childOrder}
              </p>
              <p className="text-sm font-sans" style={{ color: 'rgba(245,238,238,0.7)' }}>
                {bride.fatherName}
              </p>
              <p className="text-sm font-sans" style={{ color: 'rgba(245,238,238,0.7)' }}>
                {bride.motherName}
              </p>
              <a
                href={`https://instagram.com/${bride.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-1.5 text-xs font-sans tracking-widest transition-all duration-300"
                style={{
                  color: 'rgba(196,117,138,0.65)',
                  border: '1px solid rgba(196,117,138,0.3)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'rgba(196,117,138,1)'
                  e.currentTarget.style.borderColor = 'rgba(196,117,138,0.6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(196,117,138,0.65)'
                  e.currentTarget.style.borderColor = 'rgba(196,117,138,0.3)'
                }}
              >
                @{bride.instagram}
              </a>
            </div>
          </motion.div>

          {/* Connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className="h-8 w-px"
              style={{
                background: `linear-gradient(to bottom, rgba(196,117,138,0.1), rgba(196,117,138,0.4))`,
              }}
            />
            <p
              className="font-serif text-3xl"
              style={{ color: 'rgba(196,117,138,0.5)' }}
            >
              &
            </p>
            <div
              className="h-8 w-px"
              style={{
                background: `linear-gradient(to bottom, rgba(196,117,138,0.4), rgba(196,117,138,0.1))`,
              }}
            />
          </motion.div>

          {/* Groom */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={groom.photo}
                alt={groom.nickname}
                fill
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, #0e0b0d 0%, rgba(28,18,24,0.25) 45%, transparent 100%)`,
                }}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2
                className="font-serif text-2xl md:text-3xl font-light leading-snug"
                style={{ color: '#f5eeee' }}
              >
                {groom.fullName}
              </h2>
              <div
                className="h-px w-10 my-3"
                style={{ background: 'rgba(196,117,138,0.5)' }}
              />
              <p
                className="text-xs font-sans italic mb-1"
                style={{ color: 'rgba(196,117,138,0.65)' }}
              >
                {groom.childOrder}
              </p>
              <p className="text-sm font-sans" style={{ color: 'rgba(245,238,238,0.7)' }}>
                {groom.fatherName}
              </p>
              <p className="text-sm font-sans" style={{ color: 'rgba(245,238,238,0.7)' }}>
                {groom.motherName}
              </p>
              <a
                href={`https://instagram.com/${groom.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-1.5 text-xs font-sans tracking-widest transition-all duration-300"
                style={{
                  color: 'rgba(196,117,138,0.65)',
                  border: '1px solid rgba(196,117,138,0.3)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'rgba(196,117,138,1)'
                  e.currentTarget.style.borderColor = 'rgba(196,117,138,0.6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(196,117,138,0.65)'
                  e.currentTarget.style.borderColor = 'rgba(196,117,138,0.3)'
                }}
              >
                @{groom.instagram}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}