import React from 'react';
import { Code2, User, Mail, Home, Brain, BookOpen, Globe, Database, Terminal, Award } from 'lucide-react';
import { useState } from 'react';

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
                onClick={() => setActiveSection('projects')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === 'projects' ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-blue-500/10'
                }`}>
                <Code2 size={20} />
                <span>Projects</span>
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === 'contact' ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-blue-500/10'
                }`}>
                <Mail size={20} />
                <span>Contact</span>
              </button>
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
                  Computer Science & Engineering Student
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
                        <li>Data Analysis & Visualization</li>
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
              <div className="bg-blue-500/10 rounded-lg p-6 space-y-4 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">[Conference Paper Title]</h3>
                    <p className="text-gray-400">[Conference Name, Year]</p>
                  </div>
                  <Award className="text-blue-400" size={24} />
                </div>
                <p className="text-gray-400">
                  Brief description of your research paper. Highlight the key findings,
                  methodology, and impact of your work.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Machine Learning</span>
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Neural Networks</span>
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Data Analysis</span>
                </div>
              </div>

              <div className="bg-blue-500/10 rounded-lg p-6 backdrop-blur-sm hover:bg-blue-500/20 transition-all">
                <h3 className="text-2xl font-bold mb-4">Research Interests</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center space-x-2">
                      <Brain size={16} />
                      <span>Machine Learning</span>
                    </h4>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>Deep Learning Architectures</li>
                      <li>Natural Language Processing</li>
                      <li>Computer Vision</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center space-x-2">
                      <Globe size={16} />
                      <span>Web Technologies</span>
                    </h4>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>Distributed Systems</li>
                      <li>Cloud Computing</li>
                      <li>Web Security</li>
                    </ul>
                  </div>
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
                  <h4 className="text-xl font-bold">[ML Project Name]</h4>
                  <p className="text-gray-400">
                    Description of your machine learning project. Include the problem solved,
                    technologies used, and results achieved.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">TensorFlow</span>
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Python</span>
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Deep Learning</span>
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center space-x-2">
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
                  <h4 className="text-xl font-bold">[Web Project Name]</h4>
                  <p className="text-gray-400">
                    Description of your web development project. Highlight the features,
                    technologies, and your role in development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">React</span>
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">Node.js</span>
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-sm">MongoDB</span>
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center space-x-2">
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