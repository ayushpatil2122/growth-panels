import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-bold bg-white text-black px-4 py-2 rounded-full">GROWTHPANELS</div>
        <div className="flex space-x-4">
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
                Sign Up free
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10"
                }
              }}
            />
            <button className="text-sm font-bold bg-white text-black px-4 py-2 rounded-full">
              Dashboard
            </button>
          </SignedIn>
        </div>
      </div>
    </header>
  )
}