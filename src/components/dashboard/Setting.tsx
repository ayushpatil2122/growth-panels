import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Setting() {
    return <>
        <main className="flex-1 overflow-y-auto ml-64">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-2xl font-semibold mb-8">Settings</h1>

          <div className="space-y-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-1">Name</h3>
                <p className="text-sm text-gray-500 mb-2">Your name is used to identify you on the site.</p>
                <Input placeholder="Name" className="max-w-md" />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-sm text-gray-500 mb-2">Your email address is used to log in and send you notifications.</p>
                <Input placeholder="Email" className="max-w-md" />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Company Name</h3>
                <p className="text-sm text-gray-500 mb-2">Your company name is used to identify your business on the site and on your GrowthPanel.</p>
                <Input placeholder="Company Name" className="max-w-md" />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Domain</h3>
                <p className="text-sm text-gray-500 mb-2">The domain you are going to embed the GrowthPanel on.</p>
                <Input placeholder="Domain" className="max-w-md" />
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white">Save changes</Button>
              <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">Delete account</Button>
            </div>
          </div>
        </div>
      </main>
    </>
}