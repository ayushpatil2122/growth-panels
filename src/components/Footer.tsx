import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <Link 
              href="/" 
              className="inline-flex items-center px-3 py-1 rounded-full bg-white text-black font-semibold text-sm"
            >
              GROWTHPANELS
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-white">Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="text-gray-400 hover:text-white transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-white">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-400 hover:text-white transition-colors">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                  Docs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-white">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-gray-400 text-sm text-center">
          © Made by Dan, Matt and Pete
        </div>
      </div>
    </footer>
  )
}