import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="flex justify-end mb-8">
          <span className="bg-[#CCFF00] text-black px-4 py-1 rounded-full text-sm font-medium">
            Pricing
          </span>
        </div>
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Tailored Plans for Every
            <br />
            Stage of Your Business
          </h1>
          <p className="text-xl text-muted-foreground">
            Start enging your users for free
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full border border-gray-800 p-1">
            <Button variant="ghost" className="rounded-full text-white">
              Monthly
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-zinc-950 border-gray-800">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium tracking-wide uppercase text-gray-400">LAUNCH</h3>
                <div className="text-4xl font-bold text-white">Free</div>
                <p className="text-sm text-gray-400">Reward Users Up To $250/month</p>
                <Button className="w-full bg-black hover:bg-zinc-900 text-white">
                  Sign up free
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span className="text-gray-300">Unlimited Users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span className="text-gray-300">$250 Monthly Reward Cap*</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span className="text-gray-300">GrowthPanels Branding</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-950 border-gray-800">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium tracking-wide uppercase text-gray-400">ACCELERATE</h3>
                <div className="text-4xl font-bold text-white">$59<span className="text-lg font-normal text-gray-400">/month</span></div>
                <p className="text-sm text-gray-400">Reward Users Up To $5,000/month</p>
                <Button className="w-full bg-black hover:bg-zinc-900 text-white">
                  Get Started Free
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span className="text-gray-300">Unlimited Users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span className="text-gray-300">$5,000 Monthly Reward Cap*</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span className="text-gray-300">No GrowthPanels.com Branding</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-950 border-gray-800">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium tracking-wide uppercase text-gray-400">ELEVATE</h3>
                <div className="text-4xl font-bold text-white">$177<span className="text-lg font-normal text-gray-400">/month</span></div>
                <p className="text-sm text-gray-400">Reward Users Up To $15,000/month</p>
                <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white">
                  Get Started Free
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span className="text-gray-300">Unlimited Users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span className="text-gray-300">$15,000 Monthly Reward Cap*</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span className="text-gray-300">No GrowthPanels Branding</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}