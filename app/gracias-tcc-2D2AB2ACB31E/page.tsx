'use client'

import { useEffect, useState } from 'react'
import { track, PRODUCT_PARAMS } from '@/lib/fbpixel'
import {
  CheckCircle,
  Download,
  FileText,
  Mail,
  MessageCircle,
  FolderOpen,
} from 'lucide-react'

const WHATSAPP_SOPORTE =
  'https://wa.me/523351050828?text=Hola%2C%20ya%20compre%20el%20Manual%20TCC%20%2B%20Kit%20de%20Expedientes%20y%20tengo%20una%20duda'

const MANUAL_URL =
  'https://librosdigitalesonline.com/wp-content/uploads/2026/06/Manual-TCC.pdf'

const KIT_URL =
  'https://librosdigitalesonline.com/wp-content/uploads/2026/06/Kit-Psicologia.pdf'

const STORAGE_KEY = 'tcc_purchase_tracked'

export default function GraciasTccPage() {
  const [tracked, setTracked] = useState(false)

  useEffect(() => {
    // Verificar si ya se disparó antes (localStorage persiste entre sesiones)
    try {
      const alreadyTracked = localStorage.getItem(STORAGE_KEY)
      if (alreadyTracked) {
        setTracked(true)
        return
      }
    } catch {
      // localStorage no disponible, seguir con el tracking
    }

    // Disparar Purchase una única vez
    const eventId =
      'purchase_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)

    track('Purchase', {
      ...PRODUCT_PARAMS,
      value: 27.0,
      currency: 'USD',
      eventID: eventId,
    })

    // Marcar como ya disparado
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString())
    } catch {
      // Silenciar error si localStorage no disponible
    }

    setTracked(true)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4 py-12 font-sans">
      <div className="w-full max-w-[520px] text-center">
        {/* Checkmark icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle
            className="h-10 w-10 text-emerald-500"
            strokeWidth={2.5}
          />
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-[28px] font-semibold text-[#1a365d]">
          Tu compra fue exitosa
        </h1>
        <p className="mb-8 text-base text-slate-500">
          Ya tienes acceso al Manual de TCC y al Kit de Expedientes
        </p>

        {/* Package card */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6">
          <p className="mb-1 text-sm text-slate-500">Tu paquete incluye</p>
          <p className="mb-5 text-lg font-semibold text-[#1a365d]">
            Manual de TCC + Kit de Expedientes
          </p>

          {/* Stats */}
          <div className="mb-6 flex justify-center gap-8">
            {[
              { value: '130', label: 'Páginas' },
              { value: '11', label: 'Capítulos' },
              { value: '10+', label: 'Formatos' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-semibold text-[#1a365d]">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Download buttons */}
          <a
            href={MANUAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 flex items-center justify-center gap-2 rounded-lg bg-[#1a365d] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#1a365d]/90"
          >
            <Download className="h-4 w-4" />
            Descargar Manual TCC
          </a>

          <a
            href={KIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#1a365d] bg-white px-8 py-3.5 text-base font-medium text-[#1a365d] transition-colors hover:bg-slate-50"
          >
            <FileText className="h-4 w-4" />
            Descargar Kit de Expedientes
          </a>
        </div>

        {/* Info card */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5">
          <p className="mb-3 text-sm font-medium text-slate-600">
            También revisa
          </p>
          <div className="flex flex-col gap-2.5 text-left">
            <p className="flex items-start gap-2 text-sm text-slate-500">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              Tu email — te enviamos el acceso por correo
            </p>
            <p className="flex items-start gap-2 text-sm text-slate-500">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              WhatsApp — también te llega el enlace ahí
            </p>
            <p className="flex items-start gap-2 text-sm text-slate-500">
              <FolderOpen className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              Si no lo ves, revisa tu carpeta de spam
            </p>
          </div>
        </div>

        {/* Support */}
        <p className="mb-3 text-[13px] text-slate-400">
          Cualquier duda escríbenos
        </p>
        <a
          href={WHATSAPP_SOPORTE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#22c55e]"
        >
          <MessageCircle className="h-4 w-4" />
          Escríbenos por WhatsApp
        </a>
      </div>
    </div>
  )
}
