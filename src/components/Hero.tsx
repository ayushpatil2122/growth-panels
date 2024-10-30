import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(191, 255, 0, 0.08), transparent 50%)',
          }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <button className="group mb-8 px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
          <span className="flex items-center">
            Book a 15-min Demo
            <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
          </span>
        </button>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Reward Your Users
          <br />
          <span className="text-[#BFFF00] relative">
            Grow Your SaaS
            <div className="absolute -inset-x-6 -inset-y-3 bg-[#BFFF00]/10 blur-2xl -z-10" />
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/80">
          Reward your users for content they create, testimonials, social actions and so much more from one smart panel you
          embed on your site.
        </p>

        <button className="group px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-xl font-semibold flex items-center mx-auto">
          Get Started Free!
          <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <p className="mt-4 text-sm text-gray-400">No Credit Card Required</p>
      </div>
    </main>
  )
}