'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Preloader from '@/components/Preloader'
import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import CryptoJourney from '@/components/CryptoJourney'
import CurrentlyBuilding from '@/components/CurrentlyBuilding'
import Philosophy from '@/components/Philosophy'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="min-h-screen bg-[#0A0A0B] text-text-primary"
      >
        <Preloader />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <CryptoJourney />
          <CurrentlyBuilding />
          <Philosophy />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}