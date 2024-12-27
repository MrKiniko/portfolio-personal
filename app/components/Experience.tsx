'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior System Administrator',
    company: 'Tech Solutions Inc.',
    period: '2018 - Present',
    description: 'Managing and optimizing large-scale infrastructure, implementing security protocols, and leading automation initiatives.',
  },
  {
    title: 'System Administrator',
    company: 'DataCorp',
    period: '2015 - 2018',
    description: 'Maintained server infrastructure, implemented backup solutions, and provided technical support for 200+ employees.',
  },
  {
    title: 'Junior System Administrator',
    company: 'StartUp Innovations',
    period: '2013 - 2015',
    description: 'Assisted in daily system operations, troubleshooting, and implementing new technologies in a fast-paced startup environment.',
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
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
}

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-2xl font-bold mb-8"># tail -n 20 /var/log/career.log</h2>
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants} className="bg-orange-900/30 p-4 rounded border border-orange-700">
            <p className="text-orange-300 mb-2">[{exp.period}] {exp.company}</p>
            <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
            <p className="text-orange-100">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

