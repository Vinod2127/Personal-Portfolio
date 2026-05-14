import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  Code2,
  Database,
  Cog,
  Package,
  Zap,
  Boxes,
} from 'lucide-react'

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      skills: ['Python', 'SQL', 'JavaScript'],
    },
    {
      title: 'Web Dev',
      icon: Zap,
      skills: ['HTML', 'CSS', 'React.js', 'Flask'],
    },
    {
      title: 'Core Concepts',
      icon: Cog,
      skills: ['OOPs', 'DBMS', 'REST APIs', 'Data Structures'],
    },
    {
      title: 'Tools',
      icon: Package,
      skills: ['Git', 'VS Code', 'Google Colab', 'Arduino IDE'],
    },
    {
      title: 'ML/AI',
      icon: Boxes,
      skills: ['Deep Learning', 'PyTorch', 'TensorFlow', 'Computer Vision'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold gradient-text">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm rounded-full font-semibold cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
