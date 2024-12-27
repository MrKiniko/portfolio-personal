'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      className="bg-orange-900 text-orange-100 py-2 px-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">joaquin_vera@sysadmin:~#</Link>
        <ul className="flex space-x-4">
          <li><Link href="#skills" className="hover:text-orange-300 transition-colors">Skills</Link></li>
          <li><Link href="#experience" className="hover:text-orange-300 transition-colors">Experiencia</Link></li>
          <li><Link href="#projects" className="hover:text-orange-300 transition-colors">Proyectos</Link></li>
          <li><Link href="#contact" className="hover:text-orange-300 transition-colors">Contacto</Link></li>
        </ul>
      </nav>
    </motion.header>
  )
}

