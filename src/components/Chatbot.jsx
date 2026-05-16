import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageSquare, Send, RotateCcw } from 'lucide-react'

// ── Local smart chatbot — no API key needed ──────────────────────────────────
const RESPONSES = [
  {
    patterns: ['hi', 'hello', 'hey', 'greetings', 'morning', 'evening'],
    answer: `Hi there! I'm Vinod's AI assistant. I can tell you all about his projects, skills, and background. What would you like to know?`
  },
  {
    patterns: ['who', 'about', 'introduce', 'tell me', 'yourself', 'vinod', 'nalajala', 'self intro', 'introduction', 'intro'],
    answer: `I'm a final-year B.Tech IT student from Vijayawada, India, passionate about AI/ML and full-stack development. I've built projects in computer vision, home automation, and agricultural tech — with a research publication to my name. I'm actively looking for Software Developer, Full Stack, Python Developer, or ML Engineer roles.`
  },
  {
    patterns: ['project', 'built', 'work', 'made', 'created', 'developed', 'portfolio'],
    answer: `I have built 4 impressive projects:\n\n1. 🧠 Explainable Brain Tumor Detection — EfficientNet-B3 + Grad-CAM, 96% accuracy\n2. 🌿 Plant Disease Detection — YOLOv8 + ResNet9 (published at IC3SE-2025)\n3. 🏠 Voice-Controlled Home Automation — ESP8266 + Alexa\n4. 🚁 Agricultural Drone Image Analysis — Python, YOLO, ResNet\n\nWould you like details on any specific project?`
  },
  {
    patterns: ['skill', 'technology', 'tech', 'know', 'language', 'stack', 'proficient', 'good at'],
    answer: `My technical skills include:\n\n💻 Languages: Python, SQL, JavaScript\n🌐 Web: HTML, CSS, React.js, Flask\n🔧 Core: OOPs, DBMS, REST APIs, Data Structures\n🛠️ Tools: Git, VS Code, Google Colab, Arduino IDE`
  },
  {
    patterns: ['intern', 'job', 'hire', 'opportunity', 'open', 'available', 'recruit', 'position', 'work'],
    answer: `Yes! I am actively seeking opportunities as a Software Developer, Full Stack Developer, Python Developer, or ML Engineer. I'm open to both internships and full-time roles. Feel free to reach out at nalajalavinod@gmail.com or connect with me on LinkedIn!`
  },
  {
    patterns: ['research', 'paper', 'publication', 'publish', 'journal', 'conference', 'ic3se'],
    answer: `I published a research paper titled "Automated Disease Detection Using ResNet9 and YOLOv8" at IC3SE-2025 (currently under publication). The paper covers automated plant disease detection using deep learning models. You can view the certificate on my Google Drive.`
  },
  {
    patterns: ['education', 'study', 'college', 'university', 'degree', 'cgpa', 'gpa', 'btech', 'b.tech', 'academic'],
    answer: `I am pursuing B.Tech in Information Technology at Kalasalingam Academy of Research and Education with a CGPA of 8.18/10 (2022–2026). I scored 78.3% in Intermediate at GDMM Junior College and a perfect 100% in SSC at Sri Chaitanya Techno School.`
  },
  {
    patterns: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'github', 'social'],
    answer: `You can reach me through:\n\n📧 Email: nalajalavinod@gmail.com\n📱 Phone: +91 9505387364\n💼 LinkedIn: linkedin.com/in/vinod-nalajala-a7264b268\n🐙 GitHub: github.com/Vinod2127\n📍 Location: Vijayawada, Andhra Pradesh, India`
  },
  {
    patterns: ['brain', 'tumor', 'efficientnet', 'gradcam', 'grad-cam', 'medical'],
    answer: `My Brain Tumor Detection project uses the EfficientNet-B3 deep learning model with Grad-CAM for explainability — achieving 96% accuracy. It's deployed via Flask and visually highlights tumor regions. Check it out: github.com/Vinod2127/Brain-Tumor-Prediction-With-Explainable-AI`
  },
  {
    patterns: ['drone', 'agricultural', 'agriculture', 'yolo', 'resnet'],
    answer: `My Agricultural Drone Image Analysis project uses YOLO for object detection and ResNet for classification on drone imagery. It's designed to help detect crop health issues from aerial images. GitHub: github.com/Vinod2127/AGRICULTURAL-DRONE-IMAGE-ANALYSIS`
  },
  {
    patterns: ['certification', 'certificate', 'codechef', 'course'],
    answer: `I hold a Database Management Systems (DBMS) certification from CodeChef. You can verify it at: codechef.com/certificates/public/582f3b9`
  },
  {
    patterns: ['home', 'automation', 'iot', 'esp', 'alexa', 'blynk', 'voice'],
    answer: `I built a Voice-Controlled Home Automation system using ESP8266, integrated with Amazon Alexa and the Blynk IoT platform. It allows voice commands to control home appliances remotely. This is a private project.`
  },
]

const DEFAULT_RESPONSE = `I'm not sure about that, but I can help you learn about:\n\n• 📁 My projects\n• 💡 My skills\n• 🎓 Education background\n• 📄 Research publications\n• 💼 Job opportunities\n• 📬 Contact info\n\nWhat would you like to know?`

function getLocalReply(text) {
  const lower = text.toLowerCase()
  for (const { patterns, answer } of RESPONSES) {
    if (patterns.some(p => lower.includes(p))) return answer
  }
  return DEFAULT_RESPONSE
}
// ─────────────────────────────────────────────────────────────────────────────

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const messagesEndRef = useRef(null)

  const suggestedQuestions = [
    "What projects have you built?",
    "What are your top skills?",
    "Are you open to internships?",
    "Tell me about your research paper"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading, isOpen])

  const handleSend = async (text) => {
    if (!text.trim() || isLoading) return

    const userMsg = { role: 'user', content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInputValue('')
    setIsLoading(true)
    setError('')

    // Simulate a short thinking delay for a natural feel
    await new Promise(r => setTimeout(r, 600 + Math.random() * 400))

    const reply = getLocalReply(text)
    setMessages([...newMessages, { role: 'assistant', content: reply }])
    setIsLoading(false)
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 z-50 overflow-visible"
        onClick={() => setIsOpen(true)}
        initial={false}
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-75" />
        <MessageSquare className="text-white relative z-10" size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full h-full md:w-[400px] md:h-[520px] bg-slate-900/80 backdrop-blur-xl border border-white/10 md:rounded-2xl z-50 flex flex-col shadow-2xl overflow-hidden"
            style={{ WebkitBackdropFilter: 'blur(24px)' }}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold">
                    NV
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ask Vinod's AI</h3>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMessages([])}
                  className="p-2 text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-xs font-medium"
                  title="New Chat"
                >
                  <RotateCcw size={16} />
                  <span className="hidden sm:inline">New Chat</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="flex flex-col gap-2 h-full justify-end pb-4">
                  <p className="text-gray-400 text-sm text-center mb-4">Ask anything about my skills, projects, or background!</p>
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="text-left px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-cyan-300 text-sm hover:bg-white/10 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.role === 'user'
                        ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-br-none'
                        : 'bg-white/10 text-gray-200 border border-white/5 rounded-bl-none'
                      }`}>
                      {msg.content}
                    </div>
                  </div>
                ))
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/5 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                    <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </div>
              )}

              {error && (
                <div className="text-red-400 text-xs py-2 px-2 bg-red-500/10 rounded-xl border border-red-500/20">
                  <p className="font-semibold mb-1">⚠️ Error:</p>
                  <p className="break-all">{error}</p>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-white/10 bg-black/20">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend(inputValue)
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white disabled:opacity-50 hover:bg-cyan-400 transition-colors"
                >
                  <Send size={16} className="ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
