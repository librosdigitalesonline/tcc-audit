'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

const VIDEO_URL =
  'https://player.mux.com/cMi7MDEAL4mAgQ8vacch1WrXCyCr01jLmOR9LSEla7IY'
const THUMBNAIL_URL =
  'https://image.mux.com/cMi7MDEAL4mAgQ8vacch1WrXCyCr01jLmOR9LSEla7IY/thumbnail.webp?width=800&height=450'

export function VideoPlayer() {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        src={`${VIDEO_URL}?autoplay=true`}
        title="Presentación del Manual de Terapia Cognitivo-Conductual"
        style={{ width: '100%', border: 'none', aspectRatio: '16 / 9' }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        className="block"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Reproducir video de presentación"
      className="group relative block w-full"
      style={{ aspectRatio: '16 / 9' }}
    >
      <Image
        src={THUMBNAIL_URL}
        alt="Presentación del Manual de Terapia Cognitivo-Conductual"
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        quality={70}
        className="object-cover"
        priority
      />
      <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-primary/20 transition-colors group-hover:bg-primary/30">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform group-hover:scale-105">
          <Play className="h-7 w-7 fill-current" />
        </span>
        <span className="animate-breathing-pulse rounded-lg bg-black/60 px-3 py-1.5 text-center text-[14px] font-medium text-white sm:text-[16px]">
          ▶️ Dale play — en 36 seg sabrás si esto es para ti
        </span>
      </span>
    </button>
  )
}
