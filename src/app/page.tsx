'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import History from '@/components/History'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import ChefSpotlight from '@/components/ChefSpotlight'


export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100">
      <Header />
      <main>
        <Hero />
        <History />
        <Menu />
        <ChefSpotlight />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
