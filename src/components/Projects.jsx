import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Github, ExternalLink, Lock, X, Award, Code, Users, Zap } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Explainable Brain Tumor Detection',
      description:
        'Deep learning model for MRI classification with 96% validation accuracy. Integrated Grad-CAM for explainability. Flask REST API for real-time prediction.',
      image: '/projects/brain-tumor.jpg',
      tech: ['Python', 'EfficientNet-B3', 'Flask', 'Grad-CAM', 'Deep Learning'],
      github: 'https://github.com/Vinod2127/Brain-Tumor-Prediction-With-Explainable-AI',
      fullSummary: {
        overview: 'An AI-powered medical imaging system for detecting brain tumors from MRI scans with high accuracy and explainability.',
        challenge: 'Medical AI requires both high accuracy and interpretability. Traditional deep learning models often act as "black boxes," making it difficult for radiologists to trust and understand the predictions.',
        solution: 'Developed an EfficientNet-B3 deep learning model trained on diverse MRI datasets, achieving 96% validation accuracy. Integrated Grad-CAM (Gradient-weighted Class Activation Mapping) to visualize which regions of the MRI the model focuses on during prediction, providing explainability.',
        features: [
          'EfficientNet-B3 architecture with transfer learning',
          '96% accuracy on validation dataset',
          'Grad-CAM visualization for model interpretability',
          'Flask REST API for real-time inference',
          'Supports multiple input formats',
          'Fast processing (<100ms per image)',
        ],
        impact: 'Enables radiologists to make informed decisions by understanding AI predictions. Can assist in early tumor detection, potentially improving patient outcomes.',
        timeline: '3 months (Data collection, Model training, Integration)',
      },
    },
    {
      id: 2,
      title: 'Plant Disease Detection',
      description:
        'Real-time plant disease detection using YOLOv8 for localization and ResNet9 for classification. Supports precision agriculture.',
      image: '/projects/plant-disease.jpg',
      tech: ['Python', 'YOLOv8', 'ResNet9', 'Computer Vision', 'ML'],
      github: 'https://github.com/Vinod2127/Leaf-Disease-Prediction-Using-ResNet9-and-YOLOv8.git',
      fullSummary: {
        overview: 'A computer vision system that detects plant diseases in real-time using object detection and classification, published at IC3SE-2025.',
        challenge: 'Farmers need a quick, accurate way to identify plant diseases early to prevent crop loss. Manual inspection is time-consuming and requires expertise.',
        solution: 'Combined YOLOv8 for precise disease localization on leaves with ResNet9 for accurate disease classification. This two-stage approach provides both detection and classification in a single inference.',
        features: [
          'YOLOv8 for real-time object detection',
          'ResNet9 for disease classification',
          'Supports multiple plant species',
          'Real-time inference on mobile devices',
          'Confidence scores for predictions',
          'Web interface for easy access',
        ],
        impact: 'Helps farmers detect diseases early, reducing crop losses by up to 30%. Published research contributes to advancing agricultural AI technology.',
        timeline: '4 months (Research, Model development, Testing, Publication)',
      },
    },
    {
      id: 3,
      title: 'Voice Controlled Home Automation',
      description:
        'IoT-based smart home system with Alexa voice commands, remote monitoring via Blynk, and real-time device tracking.',
      image: '/projects/home-automation.jpg',
      tech: ['ESP8266', 'Amazon Alexa', 'Blynk', 'IoT', 'Arduino'],
      github: null,
      private: true,
      fullSummary: {
        overview: 'An intelligent home automation system that integrates voice control through Amazon Alexa with remote monitoring capabilities.',
        challenge: 'Modern homes require seamless control of multiple devices from anywhere. Users want convenience, security, and real-time monitoring.',
        solution: 'Built a system using ESP8266 microcontrollers networked with Alexa for voice commands and Blynk for remote monitoring. Enables users to control lights, fans, appliances, and track their status in real-time.',
        features: [
          'Voice control via Amazon Alexa',
          'Remote monitoring through Blynk app',
          'Real-time device status tracking',
          'Multi-device synchronization',
          'Automated scheduling capabilities',
          'Low-power consumption design',
        ],
        impact: 'Provides home owners with a cost-effective smart home solution. Improves quality of life and energy efficiency.',
        timeline: 'Ongoing project (Started in 2024)',
      },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  }

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-darker">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 transform cursor-pointer group"
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-semibold">Click to view details</span>
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && !project.private && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-primary rounded-full hover:bg-secondary transition-colors"
                      >
                        <Github size={24} className="text-white" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={project.private}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (project.private) e.preventDefault()
                      }}
                      whileHover={!project.private ? { scale: 1.2 } : {}}
                      whileTap={!project.private ? { scale: 0.9 } : {}}
                      className={`p-3 rounded-full ${
                        project.private
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-primary hover:bg-secondary'
                      } transition-colors`}
                    >
                      {project.private ? (
                        <Lock size={24} className="text-white" />
                      ) : (
                        <ExternalLink size={24} className="text-white" />
                      )}
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white flex-1">
                      {project.title}
                    </h3>
                    {project.private && (
                      <span className="ml-2 px-2 py-1 bg-red-500/20 text-red-300 text-xs font-semibold rounded">
                        Private
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    {project.github && !project.private && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold"
                      >
                        <Github size={18} />
                        View on GitHub
                      </motion.a>
                    )}
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="ml-auto text-primary hover:text-secondary transition-colors font-semibold text-sm"
                    >
                      View Details →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-lg max-w-3xl w-full my-8 border border-blue-500/20"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} className="text-white" />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="px-6 pb-6 max-h-[70vh] overflow-y-auto">
                {/* Project Header */}
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-400">{selectedProject.description}</p>
                </div>

                {/* Project Image */}
                <motion.img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-8 border border-blue-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                />

                {/* Overview */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <Award size={24} className="text-primary" />
                    Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.fullSummary.overview}
                  </p>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <Zap size={24} className="text-yellow-400" />
                    Challenge
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.fullSummary.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <Code size={24} className="text-green-400" />
                    Solution
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.fullSummary.solution}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <Zap size={24} className="text-primary" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.fullSummary.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <Users size={24} className="text-secondary" />
                    Impact
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.fullSummary.impact}
                  </p>
                </div>

                {/* Timeline */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Timeline</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.fullSummary.timeline}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full font-semibold text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-white/10">
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-primary flex items-center justify-center gap-2"
                    >
                      <Github size={20} />
                      {selectedProject.private ? 'Code (Private)' : 'View on GitHub'}
                    </motion.a>
                  )}
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
