import Link from 'next/link'

export function Navbar() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-bold bg-white text-black px-4 py-2 rounded-full">GROWTHPANELS</div>
        <nav className="hidden md:flex space-x-6">
          <Link className="hover:text-gray-300" href="/benefits">
            Benefits
          </Link>
          <Link className="hover:text-gray-300" href="/pricing">
            Pricing
          </Link>
          <Link className="hover:text-gray-300" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-gray-300" href="/demo">
            Get Demo
          </Link>
        </nav>
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
            Log in
          </button>
          <button className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
            Sign up free
          </button>
        </div>
      </div>
    </header>
  )
}