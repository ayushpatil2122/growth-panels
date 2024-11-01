'use client'

import { useEffect, useRef } from 'react'

function SlowGan({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
    }> = []


    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: `rgba(139, 92, 246, ${Math.random() * 0.5 + 0.1})`
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, rect.width, rect.height)

      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > rect.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > rect.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}

export default function PowerOfCommunity() {
  return (
    <section className="bg-black min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white">
            The Power of{" "}
            <span className="text-[#BFFF00]">Community</span>
          </h1>
          <p className="text-2xl text-gray-400 lg:text-right self-end">
            Unlock your Startup's potential, leverage your existing userbase and skyrocket your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-zinc-900/50 rounded-3xl p-8">
            <div className="text-6xl font-medium text-white mb-4">50%</div>
            <h2 className="text-xl text-white mb-2">Loyal Users</h2>
            <p className="text-gray-400 text-sm">
              of a company's revenue comes from around 8% of its most loyal consumers
            </p>
          </div>

          <div className="bg-[#8B5CF6] rounded-3xl p-8 md:col-span-2 lg:col-span-1">
            <div className="text-6xl font-medium text-black mb-4">60%</div>
            <h2 className="text-2xl text-black mb-2">Profitability Increase</h2>
            <p className="text-black/70 text-sm">
              Retaining existing customers can significantly boost your company's profitability
            </p>
          </div>

          <div className="relative h-[300px] rounded-3xl overflow-hidden bg-zinc-900/30">
            <SlowGan className="absolute inset-0 w-full h-full" />
          </div>

          <div className="relative h-[300px] rounded-3xl overflow-hidden bg-zinc-900/30">
            <SlowGan className="absolute inset-0 w-full h-full" />
          </div>


          <div className="bg-white rounded-3xl p-8">
            <div className="text-6xl font-medium text-black mb-4">67%</div>
          </div>

        
          <div className="bg-zinc-900/50 rounded-3xl p-8">
            <div className="text-6xl font-medium text-white mb-4">77%</div>
            <h2 className="text-xl text-white mb-2">Community Engagement</h2>
            <p className="text-gray-400 text-sm">
              Advanced external community programs that successfully connect engagement with business value have been shown to positively affect revenue
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}