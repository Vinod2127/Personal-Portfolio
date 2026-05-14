import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { BookOpen, Award, ExternalLink, Download } from 'lucide-react'

export default function Publications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const publications = [
    {
      id: 1,
      title: 'Automated Disease Detection Using ResNet9 and YOLOv8',
      conference: 'IC3SE-2025',
      status: 'Under Publication',
      certificate:
        'https://drive.google.com/file/d/16jKsOPzVTMTeOnxAwqWj5PvABQs9SMA7/view?usp=drive_link',
    },
  ]

  const certifications = [
    {
      id: 1,
      title: 'Database Management Systems (DBMS)',
      issuer: 'CodeChef',
      certificate: 'https://www.codechef.com/certificates/public/582f3b9',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="publications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Publications & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Publications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="flex items-center mb-6">
              <BookOpen className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold gradient-text">Publications</h3>
            </div>

            <div className="space-y-4">
              {publications.map((pub) => (
                <motion.div
                  key={pub.id}
                  variants={itemVariants}
                  className="glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-white flex-1 text-lg">
                      {pub.title}
                    </h4>
                    <span className="ml-2 px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded whitespace-nowrap">
                      {pub.status}
                    </span>
                  </div>

                  <p className="text-primary font-semibold mb-3">
                    {pub.conference}
                  </p>

                  {pub.certificate && (
                    <motion.a
                      href={pub.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-semibold text-sm"
                    >
                      <Download size={16} />
                      View Certificate
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-secondary mr-3" />
              <h3 className="text-2xl font-bold gradient-text">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="font-bold text-white mb-2 text-lg">
                    {cert.title}
                  </h4>

                  <p className="text-secondary font-semibold mb-3">
                    {cert.issuer}
                  </p>

                  <motion.a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold text-sm"
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
