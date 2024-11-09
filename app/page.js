// app/page.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight, CheckCircle2, Star, Users, BookOpen, Video, ArrowRight } from 'lucide-react';


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 h-[80vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-6">Master the Crypto Markets with CryptoLord</h1>
        <p className="text-2xl text-slate-300 mb-8">Transform Your Trading Journey from Novice to Pro</p>
        <div className="bg-emerald-500/10 text-emerald-500 p-6 rounded-lg mb-8">
          <h2 className="text-4xl font-bold">$2.1M+ in Crypto Profits</h2>
          <p className="text-emerald-400 text-xl">Proven System & Strategy</p>
        </div>
        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-xl py-6 px-8">
        Get Started Now <ChevronRight className="ml-2 h-6 w-6" />
      </Button>
      </header>

      {/* Features Section */}
      <section className="bg-slate-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Master</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Technical Analysis Mastery",
                description: "Learn to read charts like a pro and spot high-probability setups",
                icon: <BookOpen className="w-6 h-6 text-emerald-500" />
              },
              {
                title: "Risk Management Framework",
                description: "Protect your capital with battle-tested risk management system",
                icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              },
              {
                title: "Entry & Exit Strategies",
                description: "Discover the proprietary 'Triple Confirmation' method",
                icon: <Star className="w-6 h-6 text-emerald-500" />
              },
              {
                title: "Mobile Trading Setup",
                description: "Trade from anywhere with our mobile setup guide",
                icon: <Video className="w-6 h-6 text-emerald-500" />
              },
              {
                title: "Automation Tools",
                description: "Use trading bots and automation tools to execute trades 24/7",
                icon: <Users className="w-6 h-6 text-emerald-500" />
              },
              {
                title: "Mindset & Psychology",
                description: "Master the mental game of trading",
                icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-slate-300">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "CryptoLord's course changed my life. I went from losing trades to achieving consistent 12% monthly returns.",
                author: "Mike R.",
                role: "Professional Trader"
              },
              {
                text: "Finally, a crypto course that delivers real value. No fluff, just practical strategies that work.",
                author: "Sarah K.",
                role: "Day Trader"
              },
              {
                text: "The community support is incredible. Having direct access to CryptoLord has accelerated my learning.",
                author: "James T.",
                role: "Full-time Trader"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">{testimonial.text}</p>
                  <div>
                    <p className="font-bold text-slate-400">{testimonial.author}</p>
                    <p className="text-slate-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {[
                {
                  question: "Is this suitable for beginners?",
                  answer: "Absolutely! The course starts with fundamentals and progressively moves to advanced strategies. Complete beginners welcome."
                },
                {
                  question: "How much time do I need to dedicate to learning?",
                  answer: "The course is self-paced, but we recommend 5-7 hours per week for optimal results. Most students complete the curriculum in 4-6 weeks."
                },
                {
                  question: "Do I need a large amount of capital to start?",
                  answer: "No. We recommend starting with what you can afford to risk. Our students start anywhere from $500 to $50,000."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-600">
                  <AccordionTrigger className="text-lg text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-700/50 text-slate-200 border-slate-600">
              <CardHeader>
                <CardTitle>Essential Package</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$497</span>
                  <span className="text-slate-400 line-through ml-2">$697</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {['Complete Ebook', 'Trading Templates', 'Basic Discord Access'].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-b from-emerald-300/100 to-slate-300/100 border-emerald-200">
              <CardHeader>
                <Badge className="w-fit mb-4">Most Popular</Badge>
                <CardTitle>Premium Package</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$897</span>
                  <span className="text-slate-900 line-through ml-2">$1,497</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    'Everything in Essential Package',
                    'Full Video Course Library',
                    'Advanced Bot Configurations',
                    'Private Discord Channels',
                    'Weekly Live Trading Sessions',
                    '1-on-1 Strategy Call'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 t mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                  Get Premium Access
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Trading Community</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Take the first step toward profitable trading - join our free Discord community today!
          </p>
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
            Join Discord Community <ArrowRight className="ml-2" />
          </Button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
            {[
              'Daily market analysis',
              'Trading setup sharing',
              'Community support',
              'Educational content'
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center text-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-600">
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
