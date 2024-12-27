'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_bnj3aar', 'template_22pnbxs', templateParams, 'EitlrwmLj-xOr_hR_')
      .then((result) => {
        console.log(result.text)
        alert('Mensaje enviado con éxito')
      }, (error) => {
        console.log(error.text)
        alert('Error al enviar el mensaje')
      })

    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-2xl font-bold mb-8"># ./contact.sh</h2>
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div>
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-orange-900/30 rounded border border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-orange-900/30 rounded border border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 bg-orange-900/30 rounded border border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>
        <motion.button 
          type="submit" 
          className="bg-orange-700 text-orange-100 px-6 py-3 rounded hover:bg-orange-600 transition-colors inline-flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
          <Send className="ml-2" />
        </motion.button>
      </motion.form>
    </section>
  )
}

