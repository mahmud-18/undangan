'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import OpenCover from '@/app/components/ui/OpenCover'
import Cover from '@/app/components/sections/Cover'
import Couple from '@/app/components/sections/Couple'
import LoveStory from '@/app/components/sections/LoveStory'
import Schedule from '@/app/components/sections/Schedule'
import Gallery from '@/app/components/sections/Gallery'
import Gift from '@/app/components/sections/Gift'   
import Wishes from '@/app/components/sections/Wishes'
import Footer from '@/app/components/sections/Footer'
import MusicPlayer from '@/app/components/ui/MusicPlayer'

function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false)
  const searchParams = useSearchParams()
  const guestName = searchParams.get('to') || ''

  return (
    <main className="relative">

      {!isOpen && (
        <OpenCover
          guestName={guestName}
          onOpen={() => setIsOpen(true)}
        />
      )}

      {isOpen && (
        <>
          <Cover />
          <Couple />
          <LoveStory />
          <Schedule />
          <Gallery />
          <Gift />
          <Wishes />
          <Footer />
          <MusicPlayer />
        </>
      )}

    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <WeddingPage />
    </Suspense>
  )
}