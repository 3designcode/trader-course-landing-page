// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check as CheckIcon } from "lucide-react"


export default function BlackFridayPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4 bg-red-600 text-white">BLACK FRIDAY DEAL</Badge>
        <h1 className="text-5xl font-bold mb-6">
          Master Trading at <span className="text-red-600">50% OFF</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Limited time offer ends in 24 hours. Transform your trading journey today!
        </p>
        <Button size="lg" className="bg-red-600 hover:bg-red-700">
          Claim Your Discount
        </Button>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* E-book Package */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl">Trading E-book</CardTitle>
              <CardDescription>Complete written guide to trading</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-gray-400 line-through text-lg">$199</span>
                <span className="text-4xl font-bold ml-2">$99</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckIcon className="mr-2" /> 300+ pages of trading strategies
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2" /> Technical analysis guide
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2" /> Risk management templates
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Buy E-book Now
              </Button>
            </CardFooter>
          </Card>

          {/* Video Course Package */}
          <Card className="bg-gray-900 border-gray-800 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-yellow-500">BEST VALUE</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Complete Video Course</CardTitle>
              <CardDescription>Comprehensive video training</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-gray-400 line-through text-lg">$499</span>
                <span className="text-4xl font-bold ml-2">$249</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckIcon className="mr-2" /> 50+ hours of video content
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2" /> Live trading demonstrations
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Buy E-book Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            © 2024 Trading Academy. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
)};