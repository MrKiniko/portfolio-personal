import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joaquín Vera Fenollar - System Administrator',
  description: 'Portfolio de Joaquín Vera Fenollar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetBrainsMono.className} bg-black text-orange-500`}>
        <div className="fixed inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/terminal-background.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

