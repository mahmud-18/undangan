'use client'

import { useEffect, useState } from 'react'

export default function Petals() {
  const [petals, setPetals] = useState([])

  useEffect(() => {
    setPetals(
      [...Array(15)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${6 + Math.random() * 6}s`,
        size: `${10 + Math.random() * 10}px`,
      }))
    )
  }, [])

  if (petals.length === 0) return null

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: '-30px',
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: '60% 40% 60% 40%',
            backgroundColor: 'rgba(255, 182, 193, 0.75)',
            animation: `fall ${p.duration} ${p.delay} linear infinite`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  )
}