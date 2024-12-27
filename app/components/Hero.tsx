'use client'

import { motion } from 'framer-motion'
import { ArrowDownCircle, Circle } from 'lucide-react'
import Image from 'next/image'

const TypeWriter = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="space-y-6">
        <motion.div 
          className="text-2xl space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TypeWriter text="$ whoami" />
          <div className="flex justify-center">
            <Image
              src="/memoji.png"
              alt="Memoji avatar"
              width={150}
              height={150}
              className="rounded-full"
              priority
            />
          </div>
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Joaquín Vera Fenollar
        </motion.h1>
        <motion.h2 
          className="text-2xl text-orange-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          System Administrator
        </motion.h2>
        <motion.p 
          className="text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Administración de Sistemas Informáticos en Red.
          Ciberseguridad en Entornos TI.
        </motion.p>
        <motion.div
          className="flex items-center space-x-2 text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        >
          <Circle className="w-3 h-3 fill-current" />
          <span>Disponible para trabajar</span>
        </motion.div>
        <motion.a 
          href="#contact" 
          className="inline-flex items-center bg-orange-700 text-orange-100 px-6 py-3 rounded hover:bg-orange-600 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.7 }}
        >
          ./contact.sh
          <ArrowDownCircle className="ml-2" />
        </motion.a>
      </div>
    </section>
  )
}

