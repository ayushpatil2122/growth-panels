import { ArrowRight, Check } from 'lucide-react'

export default function MarketingArmy() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Transform your users into a marketing army
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
          Embed your own GrowthPanel on your site and turn your existing users into a happy marketing army. 
          Reward them with discounts for completing tasks like video testimonials, social posts, and reviews.
        </p>
        <div className="mt-12 bg-gray-800 rounded-xl p-6 max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <div className="bg-[#BFFF00] rounded-full p-1">
              <Check className="w-6 h-6 text-black" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">Fast Install</h3>
              <p className="text-gray-400">Seamlessly embed your GrowthPanel on your site in seconds.</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-gray-400">No cash flow upfront needed to reward your users</p>
      </div>
    </section>
  )
}