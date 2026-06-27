import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import GitHub from '@/components/GitHub'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Preloader from '@/components/Preloader'

export default function Page() {
  return (
    <main className="min-h-screen bg-ink text-text-primary antialiased">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Reveal><Services /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><GitHub /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </main>
  )
}
