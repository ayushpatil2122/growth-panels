export function CatalyzeGrowth() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <button className="bg-[#BFFF00] text-black px-4 py-2 rounded-full text-sm font-semibold mb-4 hover:bg-[#A6E600] transition-colors">
              What is a GrowthPanel?
            </button>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Catalyze Growth
              <br />
              Through Genuine User
              <br />
              Engagement
            </h2>
            <p className="text-xl text-gray-600">
              Elevate Your Platform Beyond Conventional Growth Strategies
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              title="Rewards"
              description="Offer incentives to drive growth and product adoption"
              icon={
                <div className="bg-purple-600 p-4 rounded-2xl mb-4">
                  <div className="text-white text-sm mb-2">We've written something great for you to share about GrowthPanels</div>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm w-full hover:bg-purple-700 transition-colors">
                    Earn $5 off your next bill
                  </button>
                </div>
              }
            />
            <Card
              title="Mentions"
              description="Reward users for talking about your company"
              icon={
                <div className="bg-purple-600 p-4 rounded-2xl mb-4 text-white">
                  <div className="flex justify-between mb-2">
                    <span>Sales</span>
                    <span className="text-blue-300">$32,182.84</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Commissions</span>
                    <span className="text-red-300">$8,045.72</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Net</span>
                    <span>+ $24,137.12</span>
                  </div>
                </div>
              }
            />
            <Card
              title="UGC"
              description="Incentivise your users to create content about your company"
              icon={
                <div className="bg-gray-100 p-4 rounded-2xl mb-4 flex items-center justify-between">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-black" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                  <div className="text-center">
                    <div className="font-bold">Create a TikTok about our service</div>
                    <div className="text-sm text-gray-600">Get $25 off your next bill</div>
                  </div>
                </div>
              }
            />
            <Card
              title="Reviews"
              description="Get more reviews, video testimonials, case studies and more"
              icon={
                <div className="bg-gray-100 p-4 rounded-2xl mb-4 grid grid-cols-4 gap-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  ))}
                </div>
              }
            />
          </div>
        </div>
      </section>
    )
  }
  
  function Card({ title, description, icon } : any) {
    return (
      <div className="bg-gray-100 p-6 rounded-2xl">
        {icon}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }