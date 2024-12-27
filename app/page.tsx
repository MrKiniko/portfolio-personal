'use client'

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  return (
    <div className="space-y-20">
      <motion.div initial="initial" animate="animate" variants={fadeInUp}>
        <Hero />
      </motion.div>
      <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true }}>
        <Skills />
      </motion.div>
      <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true }}>
        <Experience />
      </motion.div>
      <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true }}>
        <Projects />
      </motion.div>
      <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true }}>
        <Contact />
      </motion.div>
    </div>
  )
}

