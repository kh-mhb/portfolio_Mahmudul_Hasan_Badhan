// import React from 'react';
import { Code2, User, Mail, Home, Brain, BookOpen, Globe, Database, Terminal, Award } from 'lucide-react';
import { useState } from 'react';
import { Briefcase } from 'lucide-react'


function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="cyber-lines"></div>
      <div className="particles"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-lg border-b border-blue-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-6 overflow-x-auto pb-2 scrollbar-hide">
              <button 
                onClick={() => setActiveSection('home')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === 'home' ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-blue-500/10'
                }`}>
                <Home size={20} />
                <span>Home</span>
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === 'about' ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-blue-500/10'
                }`}>
                <User size={20} />
                <span>About</span>
              </button>
              <button 
                onClick={() => setActiveSection('research')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === 'research' ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-blue-500/10'
                }`}>
                <BookOpen size={20} />
                <span>Research</span>
              </button>
              <button
  onClick={() => setActiveSection('experience')}
  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
    ${                  activeSection === 'experience' ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-blue-500/10'

    }`}
>
  <Briefcase size={18} />
  <span>Experience</span>
</button>

              <button 
                onClick={() => setActiveSection('projects')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === 'projects' ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-blue-500/10'
                }`}>
                <Code2 size={20} />
                <span>Projects</span>
              </button>
              {/* contact button disable for now */}
              {/* <button 
                onClick={() => setActiveSection('contact')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === 'contact' ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-blue-500/10'
                }`}>
                <Mail size={20} />
                <span>Contact</span>
              </button> */}
              
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-12 relative z-10">
        {activeSection === 'home' && (
          <section className="min-h-[80vh] flex items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold text-white">
                  Hello, I'm Mahmudul Hasan Badhan
                </h1>
                <p className="text-2xl text-gray-400">
                  Research Assistant
                </p>
                <p className="text-lg text-gray-500 max-w-2xl">
                  Specializing in Machine Learning and Web Development. Passionate about pushing the boundaries
                  of technology through innovative research and practical applications.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
                  <Brain className="w-8 h-8 mb-2 text-blue-400" />
                  <h3 className="font-semibold mb-1">Machine Learning</h3>
                  <p className="text-sm text-gray-400">Deep learning, Neural Networks, Data Analysis</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
                  <Globe className="w-8 h-8 mb-2 text-blue-400" />
                  <h3 className="font-semibold mb-1">Web Development</h3>
                  <p className="text-sm text-gray-400">Full-stack Development, Modern Frameworks</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
                  <BookOpen className="w-8 h-8 mb-2 text-blue-400" />
                  <h3 className="font-semibold mb-1">Research</h3>
                  <p className="text-sm text-gray-400">Published Papers, Conference Presentations</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center space-x-2 transition-all">
                  <Code2 size={20} />
                  <span>View Projects</span>
                </button>
                <button 
                  onClick={() => setActiveSection('research')}
                  className="px-6 py-3 border border-blue-500 hover:bg-blue-500/20 rounded-lg flex items-center space-x-2 transition-all backdrop-blur-sm">
                  <BookOpen size={20} />
                  <span>Research Work</span>
                </button>
              </div>
            </div>
          </section>
        )}
        {activeSection === 'experience' && (
  <section className="space-y-12">

    {/* ================= PROFESSIONAL EXPERIENCE ================= */}
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white">
        Professional Experience
      </h2>

      <div className="grid grid-cols-1 gap-6">
         {/* Research Assistant */}
        <div className="bg-blue-500/10 rounded-lg p-6 space-y-3 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
          <h3 className="text-2xl font-bold">Research Assistant</h3>
          <p className="text-gray-300 font-medium">
            Supervisor: Md. Abu Naser Mojumder
          </p>
          <p className="text-gray-400 text-sm">10/2025 – Present · Sylhet, Bangladesh</p>
          <p className="text-gray-400">
            Working on machine learning and deep learning–based research projects,
            focusing on NLP, low-resource languages, and academic publications.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Deep Learning</span>
            <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">NLP</span>
            <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Research</span>
          </div>
        </div>

        {/* AI Engineer */}
        <div className="bg-blue-500/10 rounded-lg p-6 space-y-3 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
          <h3 className="text-2xl font-bold">AI Engineer (Remote)</h3>
          <p className="text-gray-300 font-medium">Debugger Lab</p>
          <p className="text-gray-400 text-sm">06/2025 – 07/2025 · Mymensingh, Bangladesh</p>
          <p className="text-gray-400">
            Worked on developing and deploying AI models and data pipelines for
            production-level applications, ensuring scalability and performance.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Machine Learning</span>
            <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Data Pipelines</span>
            <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Production AI</span>
          </div>
        </div>

        {/* Python Instructor */}
        <div className="bg-blue-500/10 rounded-lg p-6 space-y-3 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
          <h3 className="text-2xl font-bold">Python Instructor</h3>
          <p className="text-gray-300 font-medium">
            International Center for Global Skills (ICGS)
          </p>
          <p className="text-gray-400 text-sm">02/2024 – 08/2024 · Sylhet, Bangladesh</p>
          <p className="text-gray-400">
            Taught Python fundamentals and real-world programming applications,
            mentoring students through hands-on projects and problem-solving.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Python</span>
            <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Teaching</span>
            <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Applied Programming</span>
          </div>
        </div>

       

      </div>
    </div>

    {/* ================= LEADERSHIP & ACADEMIC ACTIVITIES ================= */}
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white">
        Leadership & Academic Activities
      </h2>

      <div className="grid grid-cols-1 gap-6">

        <div className="bg-blue-500/10 rounded-lg p-6 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
          <h3 className="text-2xl font-bold">
            Vice President — SEC CSE Society
          </h3>
          <p className="text-gray-400 text-sm">2025</p>
          <p className="text-gray-400">
            Led academic and technical initiatives, coordinated events, and supported
            student engagement in computing and research-focused activities.
          </p>
        </div>

        <div className="bg-blue-500/10 rounded-lg p-6 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
          <h3 className="text-2xl font-bold">
            Organising Secretary — SEC CSE Society
          </h3>
          <p className="text-gray-400 text-sm">2024</p>
          <p className="text-gray-400">
            Managed event planning, logistics, and coordination for academic and
            extracurricular programs within the CSE community.
          </p>
        </div>

        <div className="bg-blue-500/10 rounded-lg p-6 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
          <h3 className="text-2xl font-bold">
            Organising Secretary — CSE Research Club
          </h3>
          <p className="text-gray-400 text-sm">2025</p>

          <p className="text-gray-400">
            Organized research-focused seminars and workshops, promoting undergraduate
            research culture and collaboration.
          </p>
        </div>

        <div className="bg-blue-500/10 rounded-lg p-6 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
          <h3 className="text-2xl font-bold">
            Web Coordinator — SEC Programming Club
          </h3>
          <p className="text-gray-400 text-sm">2024-2025</p>

          <p className="text-gray-400">
            Maintained web presence, managed online content, and supported digital
            engagement for programming-related activities.
          </p>
        </div>

      </div>
    </div>

  </section>
)}



        {activeSection === 'about' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-400">
                  I'm a Computer Science & Engineering student passionate about machine learning and web development.
                  My research focuses on applying AI to solve real-world problems, while my development work
                  brings these solutions to life through web applications.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Areas of Focus</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
                      <Brain className="w-6 h-6 mb-2 text-blue-400" />
                      <h4 className="font-semibold">Machine Learning & AI</h4>
                      <ul className="list-disc list-inside text-gray-400 text-sm mt-2">
                        <li>Deep Learning Architectures</li>
                        <li>Natural Language Processing</li>
                        <li>Computer Vision</li>
                        <li>Speech Processing</li>
                      </ul>
                    </div>
                    <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
                      <Globe className="w-6 h-6 mb-2 text-blue-400" />
                      <h4 className="font-semibold">Web Development</h4>
                      <ul className="list-disc list-inside text-gray-400 text-sm mt-2">
                        <li>Full-stack Development</li>
                        <li>Modern JavaScript Frameworks</li>
                        <li>RESTful APIs</li>
                        <li>Database Design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-lg p-6 space-y-4 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
                  <h3 className="text-2xl font-bold">Technical Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold flex items-center space-x-2">
                        <Terminal size={16} />
                        <span>Programming Languages</span>
                      </h4>
                      <p className="text-gray-400">Python, JavaScript/TypeScript, Java, C++</p>
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center space-x-2">
                        <Brain size={16} />
                        <span>ML/AI Frameworks</span>
                      </h4>
                      <p className="text-gray-400">TensorFlow, PyTorch, scikit-learn, NumPy</p>
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center space-x-2">
                        <Globe size={16} />
                        <span>Web Technologies</span>
                      </h4>
                      <p className="text-gray-400">React, Node.js, Express, Next.js</p>
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center space-x-2">
                        <Database size={16} />
                        <span>Databases</span>
                      </h4>
                      <p className="text-gray-400">MongoDB, PostgreSQL, Redis</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-6 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
                  <h3 className="text-2xl font-bold mb-4">Education</h3>
                  <div className="space-y-2">
                    <p className="font-semibold">B.Tech in Computer Science & Engineering</p>
                    <p className="text-gray-400">Shahjalal University of Science and Technology</p>
                    <p className="text-gray-500">Passing Year: July 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'research' && (
  <section className="space-y-8">
    <h2 className="text-4xl font-bold text-white">Research Work</h2>

    <div className="grid grid-cols-1 gap-6">

      {/* Paper 1 */}
      <div className="bg-blue-500/10 rounded-lg p-6 space-y-4 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              A Comparative Study of Deep Learning Models for Bias Detection in Bangla Job Advertisements
            </h3>
            <p className="text-gray-400">ICCIT 2025, IEEE</p>
          </div>
          <Award className="text-blue-400" size={24} />
        </div>
        <p className="text-gray-400">
          This paper presents a comparative analysis of multiple deep learning architectures
          for detecting bias in Bangla job advertisements, focusing on fairness, accuracy,
          and real-world applicability.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Bias Detection</span>
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Deep Learning</span>
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">NLP</span>
        </div>
      </div>

      {/* Paper 2 */}
      <div className="bg-blue-500/10 rounded-lg p-6 space-y-4 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              Sentence-Level Indigenous Language Identification in Bangladesh: 
              A Comparative Study of Attention-Based RNNs and Transformer Models
            </h3>
            <p className="text-gray-400">ICCIT 2025, IEEE</p>
          </div>
          <Award className="text-blue-400" size={24} />
        </div>
        <p className="text-gray-400">
          This study explores sentence-level indigenous language identification using
          attention-based RNNs and Transformer models, highlighting performance
          differences across low-resource languages in Bangladesh.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Language Identification</span>
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Transformers</span>
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Attention Models</span>
        </div>
      </div>

      {/* Paper 3 */}
      <div className="bg-blue-500/10 rounded-lg p-6 space-y-4 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              Exploring Regional Variation in Bangla: Automating Dialect Classification Using Deep Learning
            </h3>
            <p className="text-gray-400">ICCIT 2025, IEEE</p>
          </div>
          <Award className="text-blue-400" size={24} />
        </div>
        <p className="text-gray-400">
          This research investigates regional variations in Bangla by developing deep
          learning-based dialect classification models, contributing to sociolinguistic
          analysis and language technology.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Dialect Classification</span>
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Deep Learning</span>
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Bangla NLP</span>
        </div>
      </div>

      {/* Paper 4 */}
      <div className="bg-blue-500/10 rounded-lg p-6 space-y-4 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              Preserving Bangla Literary Heritage: Deep Learning for Automated Poem Meter Classification
            </h3>
            <p className="text-gray-400">ICCIT 2025, IEEE</p>
          </div>
          <Award className="text-blue-400" size={24} />
        </div>
        <p className="text-gray-400">
          This paper proposes a deep learning-based framework for automated Bangla poem
          meter classification, supporting digital preservation and computational
          literary analysis.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Poem Meter Classification</span>
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Literary NLP</span>
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Deep Learning</span>
        </div>
      </div>

      {/* Paper 5 */}
      <div className="bg-blue-500/10 rounded-lg p-6 space-y-4 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              Ethnic Language Classification in Bangladesh Using Machine Learning
            </h3>
            <p className="text-gray-400">ICCIT 2025, IEEE</p>
          </div>
          <Award className="text-blue-400" size={24} />
        </div>
        <p className="text-gray-400">
          This work applies traditional and machine learning models to classify ethnic
          languages in Bangladesh, addressing challenges of low-resource and imbalanced
          datasets.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Ethnic Languages</span>
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Machine Learning</span>
          <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Text Classification</span>
        </div>
        
      </div>
       

    </div>
  </section>
)}


        {activeSection === 'projects' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ML Projects */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center space-x-2">
                  <Brain size={24} />
                  <span>Machine Learning Projects</span>
                </h3>
                <div className="bg-blue-500/10 rounded-lg p-6 space-y-4 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
                  <h4 className="text-xl font-bold">Infant Cry Detection</h4>
                  <p className="text-gray-400">
                     A machine learning model to detect and classify infant cries using audio preprocessing, feature extraction, and deep learning for real-time monitoring
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {/* <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">TensorFlow</span> */}
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Pytorch</span>
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Machine Learning</span>
                  </div>
                  <a href="https://childcryanalysis-lfyyao7rchj9dbsgxr7duf.streamlit.app/" target='_blank' className="text-blue-400 hover:text-blue-300 flex items-center space-x-2">
                    <span>View Project</span>
                    <Code2 size={16} />
                  </a>
                </div>
              </div>

              {/* Web Development Projects */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center space-x-2">
                  <Globe size={24} />
                  <span>Web Development Projects</span>
                </h3>
                <div className="bg-blue-500/10 rounded-lg p-6 space-y-4 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
                  <h4 className="text-xl font-bold">Savoria Restaurant</h4>
                  <p className="text-gray-400">
                    Built a responsive restaurant website with dynamic content, interactive UI, and API-ready architecture
using modern web development practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">React</span>
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">API Integration Patterns</span>
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Modern CSS Animations</span>
                  </div>
                  <a href="https://savoria-food-place.netlify.app/" target='_blank' className="text-blue-400 hover:text-blue-300 flex items-center space-x-2">
                    <span>View Project</span>
                    <Code2 size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Contact Me</h2>
            <div className="max-w-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 backdrop-blur-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center space-x-2 transition-all"
                >
                  <Mail size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;