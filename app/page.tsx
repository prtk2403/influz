import {
  ArrowRight,
  Bot,
  Users,
  FileText,
  BarChart3,
  Search,
  MessageSquare,
  TrendingUp,
  Star,
  Check,
  Zap,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#EDF0F5]">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#635BFF] to-[#FF6B6B] rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#2B2D42]">influz.xyz</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-[#2B2D42] hover:text-[#635BFF] transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-[#2B2D42] hover:text-[#635BFF] transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-[#2B2D42] hover:text-[#635BFF] transition-colors">
                Pricing
              </a>
              <Button variant="outline" className="border-[#635BFF] text-[#635BFF] hover:bg-[#635BFF] hover:text-white">
                Sign In
              </Button>
              <Button className="bg-[#32D6A6] hover:bg-[#32D6A6]/90 text-white">Get Early Access</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EDF0F5] via-white to-[#635BFF]/5 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#635BFF]/10 text-[#635BFF] border-[#635BFF]/20 hover:bg-[#635BFF]/20">
                🚀 Now in Beta - Join the Waitlist
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#2B2D42] leading-tight">
                The AI Agent That{" "}
                <span className="bg-gradient-to-r from-[#635BFF] to-[#FF6B6B] bg-clip-text text-transparent">
                  Automates
                </span>{" "}
                Your Influencer Marketing
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover, reach out, negotiate, and pay creators — all in one multilingual AI-powered platform. Scale
                your campaigns while we handle the heavy lifting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#32D6A6] hover:bg-[#32D6A6]/90 text-white text-lg px-8 py-4 rounded-xl"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#635BFF] text-[#635BFF] hover:bg-[#635BFF] hover:text-white text-lg px-8 py-4 rounded-xl"
                >
                  Book a Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#32D6A6]" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#32D6A6]" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-[#635BFF]/10 to-[#FF6B6B]/10 rounded-3xl flex items-center justify-center">
                <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#635BFF] to-[#FF6B6B] rounded-2xl mx-auto flex items-center justify-center">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded-full w-32 mx-auto"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-24 mx-auto"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#32D6A6] rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#2B2D42]">Powerful Features for Modern Marketing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run successful influencer campaigns, powered by AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#635BFF] to-[#635BFF]/70 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2B2D42]">Creator Discovery Engine</h3>
                <p className="text-gray-600">
                  Smart search with audience insights & filters to find the perfect creators for your brand
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B6B] to-[#FF6B6B]/70 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2B2D42]">AI Outreach & Negotiation</h3>
                <p className="text-gray-600">
                  Multilingual, voice-capable agents that handle outreach and negotiations automatically
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#32D6A6] to-[#32D6A6]/70 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2B2D42]">Contract & Payment Automation</h3>
                <p className="text-gray-600">
                  Auto-generated contracts and milestone-based payouts for seamless collaboration
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2B2D42] to-[#2B2D42]/70 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2B2D42]">Performance Dashboard</h3>
                <p className="text-gray-600">Real-time campaign metrics, engagement tracking, and ROI analysis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-[#EDF0F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#2B2D42]">How It Works</h2>
            <p className="text-xl text-gray-600">From campaign creation to performance tracking in 5 simple steps</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: Zap, title: "Campaign Created", desc: "Set your goals and budget" },
              { icon: Search, title: "Creators Discovered", desc: "AI finds perfect matches" },
              { icon: MessageSquare, title: "Outreach & Deal", desc: "Automated negotiations" },
              { icon: FileText, title: "Contract Signed", desc: "Legal docs generated" },
              { icon: TrendingUp, title: "Performance Tracked", desc: "Real-time analytics" },
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-[#635BFF]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#32D6A6] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-[#2B2D42]">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Audiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#2B2D42]">Built for Everyone</h2>
            <p className="text-xl text-gray-600">Whether you're a brand or creator, we've got you covered</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#635BFF] to-[#FF6B6B] rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2D42]">For Brands</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Save 80% of time on campaign management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Scale campaigns across multiple platforms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Track ROI with detailed analytics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Automated compliance and contracts</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#635BFF] hover:bg-[#635BFF]/90 text-white rounded-xl">
                  Start Your Campaign
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] to-[#32D6A6] rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2D42]">For Creators</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Get discovered by relevant brands</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Clear expectations and fair negotiations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Faster payments with milestone tracking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Professional contract management</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white rounded-xl">
                  Join as a Creator
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-[#EDF0F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#2B2D42]">Loved by Marketing Teams</h2>
            <p className="text-xl text-gray-600">See what our early users are saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "influz.xyz helped us close 50 creators in 48 hours — in 3 languages. The AI negotiation feature is a game-changer.",
                author: "Sarah Chen",
                role: "Marketing Lead @ StartupX",
                rating: 5,
              },
              {
                quote:
                  "We've scaled our influencer campaigns 10x while reducing manual work by 80%. The ROI tracking is incredibly detailed.",
                author: "Marcus Rodriguez",
                role: "Growth Director @ TechCorp",
                rating: 5,
              },
              {
                quote:
                  "As a creator, I love how transparent the process is. Payments are always on time and contracts are crystal clear.",
                author: "Emma Thompson",
                role: "Content Creator @ 500K followers",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#32D6A6] text-[#32D6A6]" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#635BFF] to-[#FF6B6B] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-[#2B2D42]">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wide">Trusted by teams using</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {["YouTube", "Instagram", "Stripe", "OpenAI", "DocuSign", "Razorpay"].map((brand) => (
                <div key={brand} className="text-center">
                  <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 font-semibold">{brand}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section id="pricing" className="py-20 bg-[#EDF0F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#2B2D42]">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Affordable for startups. Powerful enough for agencies.</p>
            <Card className="border-0 shadow-xl rounded-3xl max-w-md mx-auto">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#2B2D42]">Early Access</h3>
                  <p className="text-gray-600">Join our beta and get lifetime benefits</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6]" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6]" />
                    <span>50% off first year</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6]" />
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#32D6A6]" />
                    <span>Feature requests priority</span>
                  </div>
                </div>
                <Button className="w-full bg-[#32D6A6] hover:bg-[#32D6A6]/90 text-white rounded-xl">
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#635BFF] to-[#FF6B6B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Ready to Run Smarter Campaigns?</h2>
            <p className="text-xl text-white/90">
              Join thousands of brands and creators already using influz.xyz to automate their influencer marketing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#635BFF] hover:bg-gray-100 text-lg px-8 py-4 rounded-xl">
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#635BFF] text-lg px-8 py-4 rounded-xl"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B2D42] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#635BFF] to-[#FF6B6B] rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">influz.xyz</span>
              </div>
              <p className="text-gray-400">The AI-powered platform for modern influencer marketing automation.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 influz.xyz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
