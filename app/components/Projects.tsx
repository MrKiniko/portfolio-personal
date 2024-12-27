'use client'

import { motion } from 'framer-motion'
import { Folder } from 'lucide-react'

const projects = [
  {
    title: 'Automated Backup System',
    description: 'Developed a robust automated backup system using Bash and Python, ensuring data integrity and quick recovery.',
    tech: ['bash', 'python', 'cron'],
  },
  {
    title: 'Network Monitoring Dashboard',
    description: 'Created a real-time network monitoring dashboard using Grafana and Prometheus, improving system visibility.',
    tech: ['grafana', 'prometheus', 'docker'],
  },
  {
    title: 'Security Audit Tool',
    description: 'Built a custom security audit tool to automate the process of identifying vulnerabilities in the system infrastructure.',
    tech: ['python', 'nmap', 'openvas'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl font-bold mb-8"># ls -l ~/projects</h2>
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-orange-900/30 p-4 rounded border border-orange-700"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Folder className="w-5 h-5 text-orange-300" />
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
            <p className="text-orange-100 mb-2">{project.description}</p>
            <p className="text-orange-300">Technologies: {project.tech.join(', ')}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

