'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import MuxPlayer from '@mux/mux-player-react'
import { Play, RotateCcw } from 'lucide-react'
import { track } from '@/lib/fbpixel'

const PLAYBACK_ID = 'cMi7MDEAL4mAgQ8vacch1WrXCyCr01jLmOR9LSEla7IY'
const THUMBNAIL_URL =
  'https://image.mux.com/cMi7MDEAL4mAgQ8vacch1WrXCyCr01jLmOR9LSEla7IY/thumbnail.webp?width=800&height=450'

export function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)
  const videoTracked = useRef(false)

  if (error) {
    return (
      <div
        className="flex w-full flex-col items-center justify-center gap-3 bg-primary text-center text-primary-foreground"
        style={{ aspectRatio: '16 / 9' }}
      >
        <p className="text-sm font-medium">
          No se pudo cargar el video. Intenta de nuevo.
        </p>
        <button
          type="button"
          onClick={() => setError(false)}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
        >
          <RotateCcw className="h-4 w-4" />
          Reintentar
        </button>
      </div>
    )
  }

  if (playing) {
    return (
      <MuxPlayer
        playbackId={PLAYBACK_ID}
        streamType="on-demand"
        autoPlay="muted"
        muted
        playsInline
        style={{ aspectRatio: '16/9', width: '100%' }}
        metadata={{ video_title: 'Manual Teoria Cognitivo Conductual' }}
        onError={() => setError(true)}
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => {
        setPlaying(true)
        if (!videoTracked.current) {
          track('ViewContent', { content_name: 'Video Play - Hero' })
          videoTracked.current = true
        }
      }}
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
