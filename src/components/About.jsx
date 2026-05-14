import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { BookOpen, GraduationCap, School } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const education = [
    {
      id: 1,
      institution: 'Kalasalingam Academy of Research and Education',
      degree: 'B.Tech IT',
      duration: '2022 – 2026',
      cgpa: 'CGPA: 8.18/10',
      icon: GraduationCap,
    },
    {
      id: 2,
      institution: 'GDMM Junior College',
      degree: 'Intermediate',
      duration: '2020 – 2022',
      cgpa: 'Percentage: 78.3%',
      icon: BookOpen,
    },
    {
      id: 3,
      institution: 'Sri Chaitanya Techno School',
      degree: 'SSC',
      duration: '2019 – 2020',
      cgpa: 'Percentage: 100%',
      icon: School,
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
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-darker">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Profile Photo */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex justify-center md:justify-start"
          >
            <motion.img
              src="/profile.jpg"
              alt="Nalajala Vinod"
              className="w-64 h-64 rounded-lg object-cover shadow-xl border-4 border-primary"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Bio Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I'm an IT undergraduate with hands-on experience in building ML models, full-stack web apps, and IoT systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I've developed AI-powered solutions including a brain tumor detection model with 96% accuracy and a plant disease detection system published at IC3SE-2025. My passion lies in creating intelligent systems that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Skilled in Python, React.js, Flask, and SQL, with a solid grasp of REST APIs and deep learning. I'm always eager to learn and collaborate on innovative projects.
              </p>
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text mb-6">Education</h3>
            {education.map((edu, index) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="glass p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-primary mb-1">{edu.institution}</h4>
                      <p className="text-white font-semibold">{edu.degree}</p>
                      <p className="text-sm text-gray-400">{edu.duration}</p>
                      <p className="text-sm text-secondary font-semibold">{edu.cgpa}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
