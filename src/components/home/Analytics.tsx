'use client'

import { useEffect, useRef } from 'react'
import { Settings, X } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

function LineChart({ data, color }: { data: number[], color: string }) {
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
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    ctx.clearRect(0, 0, rect.width, rect.height)

    const points = data.map((value, index) => ({
      x: (index / (data.length - 1)) * rect.width,
      y: rect.height - ((value / 100) * rect.height)
    }))

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y)
      } else {
        const prevPoint = points[index - 1]
        const ctrl = {
          x: (prevPoint.x + point.x) / 2,
          y: prevPoint.y
        }
        const ctrl2 = {
          x: (prevPoint.x + point.x) / 2,
          y: point.y
        }
        ctx.bezierCurveTo(ctrl.x, ctrl.y, ctrl2.x, ctrl2.y, point.x, point.y)
      }
    })
    ctx.stroke()

    ctx.fillStyle = '#9CA3AF'
    ctx.font = '12px Inter'
    ctx.textAlign = 'center'
    const dates = ['Dec 10', 'Dec 14', 'Dec 18', 'Dec 22', 'Dec 26', 'Dec 30', 'Jan 3', 'Jan 7']
    dates.forEach((date, index) => {
      const x = (index / (dates.length - 1)) * rect.width
      ctx.fillText(date, x, rect.height - 5)
    })
  }, [data, color])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default function Analytics() {
  // Sample data for charts
  const generateData = () => Array.from({ length: 8 }, () => 40 + Math.random() * 60)

  return (
    <div className="w-full min-h-screen bg-zinc-950 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <div className="space-y-6">
          <MetricCard
            title="Total Tasks Completed"
            value="2678"
            change="+2.9%"
            chartColor="#000000"
            data={generateData()}
          />
          
          <MetricCard
            title="Active Participating Users"
            value="97"
            change="+2.9%"
            chartColor="#8B5CF6"
            data={generateData()}
          />
          
          <MetricCard
            title="Total Campaign Spend on Rewards"
            value="$1,200"
            change="+2.9%"
            chartColor="#8B5CF6"
            data={generateData()}
          />
        </div>

        <div className="space-y-6">
          <MetricCard
            title="Tasks Completion Rate"
            value="75.4%"
            change="+2.9%"
            chartColor="#8B5CF6"
            data={generateData()}
          />
          
          <MetricCard
            title="Average Reward Value"
            value="$37"
            change="+2.9%"
            chartColor="#8B5CF6"
            data={generateData()}
          />
          
          <Card className="p-6 bg-white rounded-3xl">
            <h3 className="font-medium mb-4">Most Popular Tasks</h3>
            <div className="space-y-3">
              {[
                { count: 67, label: "New Follows on X" },
                { count: 47, label: "New Blogs" },
                { count: 41, label: "New Testimonials" },
                { count: 29, label: "New Video Testimonials" },
                { count: 27, label: "New Mentions on X" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{item.count}</span>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card className="p-6 bg-white rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="h-4 w-4 bg-purple-500 rounded-full" />
                </div>
                <span className="text-sm text-gray-600">
                  So far this month, you've saved <span className="text-purple-600 font-medium">$25!</span> Your next bill on 01/01/24 will be <span className="text-purple-600 font-medium">$55</span>
                </span>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Settings className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            <Tabs defaultValue="social" className="w-full">
              <TabsList className="mb-6">
                {["Social Media", "Referral", "Content Creation", "Reviews", "Bonuses"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab.toLowerCase().replace(" ", "-")}
                    className="text-sm text-gray-600"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="grid md:grid-cols-2 gap-4">
              <TaskCard
                platform="X"
                title="Share a pre-composed post on X"
                description="We've written something great for you to share about GrowthPanels"
                reward={5}
              />
              <TaskCard
                platform="LinkedIn"
                title="Share an update on LinkedIn"
                description="We've written something great for you to share about GrowthPanels"
                reward={2.50}
              />
              <TaskCard
                platform="X"
                title="Follow us on X"
                description="We've written something great for you to share about GrowthPanels"
                reward={5}
                completed
              />
              <TaskCard
                platform="TikTok"
                title="Mention us in a TikTok Video"
                description="Make a TikTok video about GrowthPanels and share with your followers"
                reward={50}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface MetricCardProps {
    title : string, 
    value : string,
    change: string,
    chartColor : string,
    data : number[]
}

function MetricCard({ title, value, change, chartColor, data }: MetricCardProps) {
  return (
    <Card className="p-6 bg-white rounded-3xl">
      <div className="mb-4">
        <h3 className="text-sm text-gray-600 mb-2">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold">{value}</span>
          <span className="text-sm text-green-600">{change}</span>
          <span className="text-xs text-gray-400">in selected period</span>
        </div>
      </div>
      <div className="h-32">
        <LineChart data={data} color={chartColor} />
      </div>
    </Card>
  )
}

function TaskCard({ platform, title, description, reward, completed }: {
  platform: string
  title: string
  description: string
  reward: number
  completed?: boolean
}) {
  return (
    <div className="p-6 rounded-2xl bg-gray-50">
      <div className="flex gap-4 mb-4">
        <div className="h-8 w-8 bg-gray-200 rounded-lg" />
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      {completed ? (
        <div className="text-sm text-gray-600">
          You earned <span className="text-purple-600 font-medium">${reward}</span> for completing this task
        </div>
      ) : (
        <button className="w-full py-2 px-4 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
          Earn ${reward.toFixed(2)} off your next bill
        </button>
      )}
    </div>
  )
}