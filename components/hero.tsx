"use client"
import { Inter } from "next/font/google"
import { Instrument_Serif as InstrumentSerif } from "next/font/google"
import { Button } from "@/components/ui/button"
import GlowButton from "./glow-button"

// Fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

const instrumentSerif = InstrumentSerif({
  subsets: ["latin"],
  style: ["italic"],
  weight: "400",
  display: "swap",
})

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 scale-100"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          filter: "brightness(0.7) contrast(1.4) saturate(1.2) blur(0.6px)",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-purple-100/20 via-violet-50/10 to-indigo-100/10 mix-blend-soft-light" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-purple-200/20 via-transparent to-transparent mix-blend-soft-light" />

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 z-10 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%),
                            radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Fiery Floaty Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-60 h-60 bg-gradient-to-br from-purple-400 via-violet-300 to-indigo-100 opacity-20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-[15%] right-[10%] w-72 h-72 bg-gradient-to-br from-white via-purple-100 to-transparent opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-[30%] right-[30%] w-48 h-48 bg-gradient-to-tr from-white via-violet-200 to-transparent opacity-15 rounded-full blur-2xl animate-float-fast" />
      </div>

      {/* Header */}
      <header className="relative z-20 w-full">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className={`${inter.className} text-lg font-medium text-purple-100`}>Serenity</div>
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Gallery", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`${inter.className} text-sm text-purple-200 hover:text-purple-100 transition-colors`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 py-12">
            <h1
              className={`${inter.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-gray-100 leading-tight`}
            >
              Discover the beauty of Natural Serenity
            </h1>
            <p className={`${inter.className} text-lg md:text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed`}>
              Immerse yourself in tranquil landscapes that inspire peace and creativity. Connect with nature's gentle
              embrace.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5 pt-6">
              <GlowButton>Explore Now</GlowButton>
              <Button
                variant="outline"
                className="hover:opacity-90 rounded-2xl border font-light relative overflow-hidden border-white/40 text-white bg-purple-900/30 backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300 hover:bg-white/10"
                onClick={() => {
                  console.log('Learn More clicked')
                  // Add navigation or modal functionality here
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
