'use client'

import { motion } from 'framer-motion'
import { Server, Shield, Terminal, Cloud, Database, Network } from 'lucide-react'

const skills = [
  { name: 'Server Management', icon: Server, command: 'systemctl' },
  { name: 'Security', icon: Shield, command: 'iptables' },
  { name: 'Scripting & Automation', icon: Terminal, command: 'bash' },
  { name: 'Cloud Services', icon: Cloud, command: 'aws-cli' },
  { name: 'Database Administration', icon: Database, command: 'mysql' },
  { name: 'Network Administration', icon: Network, command: 'netstat' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl font-bold mb-8"># cat skills.txt</h2>
      <motion.div 
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill.name} 
            className="bg-orange-900/30 p-4 rounded border border-orange-700"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4">
              <skill.icon className="w-6 h-6 text-orange-300" />
              <div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <p className="text-orange-300">$ {skill.command} --version</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

