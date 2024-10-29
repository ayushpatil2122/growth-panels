import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <main className="bg-black text-white">
      <div className="container mx-auto px-4 text-center py-20">
        <button className="mb-8 px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
          Book a 15-min Demo →
        </button>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Reward Your Users
          <br />
          <span className="text-[#BFFF00]">Grow Your SaaS</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Reward your users for content they create, testimonials, social actions and so much more from one smart panel you
          embed on your site.
        </p>
        <button className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors text-xl font-semibold flex items-center mx-auto">
          Get Started Free! <ArrowRight className="ml-2" />
        </button>
        <p className="mt-4 text-sm text-gray-400">No Credit Card Required</p>
      </div>
    </main>
  )
}