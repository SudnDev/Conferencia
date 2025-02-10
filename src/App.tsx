import React, { useState } from 'react';
import { Globe, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const translations = {
  en: {
    title: 'John Doe',
    role: 'Senior Software Engineer',
    description: 'Passionate about creating beautiful and functional web applications with modern technologies. Specializing in scalable solutions and elegant user interfaces.',
    skills: 'Skills & Expertise',
    connect: 'Connect With Me',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'Twitter'
  },
  es: {
    title: 'John Doe',
    role: 'Ingeniero de Software Senior',
    description: 'Apasionado por crear aplicaciones web hermosas y funcionales con tecnologías modernas. Especializado en soluciones escalables e interfaces elegantes.',
    skills: 'Habilidades y Experiencia',
    connect: 'Conecta Conmigo',
    email: 'Correo',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'Twitter'
  },
  fr: {
    title: 'John Doe',
    role: 'Ingénieur Logiciel Senior',
    description: 'Passionné par la création d\'applications web belles et fonctionnelles avec des technologies modernes. Spécialisé dans les solutions évolutives et les interfaces élégantes.',
    skills: 'Compétences et Expertise',
    connect: 'Me Contacter',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'Twitter'
  }
};

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];

const skills = [
  'React', 'TypeScript', 'Node.js', 'GraphQL', 
  'AWS', 'Docker', 'MongoDB', 'Next.js'
];

function App() {
  const [language, setLanguage] = useState('en');
  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
      {/* Header Image - Full Width */}
      <div 
        className="w-full h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent">
          <div className="w-full px-8 h-full flex justify-between items-start pt-6">
            <h1 className="text-white text-4xl font-bold">{t.title}</h1>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white/20 text-white border border-white/30 rounded-lg px-4 py-2 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="text-black">
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Content Blocks - Full Width */}
      <div className="relative">
        {/* Profile Block */}
        <div className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 px-8 py-16">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">{t.role}</h2>
            <p className="text-white/90 text-lg">
              {t.description}
            </p>
          </div>
        </div>

        {/* Skills Block */}
        <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">{t.skills}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div key={skill} 
                  className="bg-white/10 rounded-lg px-6 py-4 text-white backdrop-blur-sm
                    hover:bg-white/20 transition-all duration-300 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Block */}
        <div className="w-full bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">{t.connect}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-lg px-6 py-4 text-white backdrop-blur-sm group">
                <Mail className="group-hover:scale-110 transition-transform duration-300" size={24} />
                <span>{t.email}</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-lg px-6 py-4 text-white backdrop-blur-sm group">
                <Github className="group-hover:scale-110 transition-transform duration-300" size={24} />
                <span>{t.github}</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-lg px-6 py-4 text-white backdrop-blur-sm group">
                <Linkedin className="group-hover:scale-110 transition-transform duration-300" size={24} />
                <span>{t.linkedin}</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-lg px-6 py-4 text-white backdrop-blur-sm group">
                <Twitter className="group-hover:scale-110 transition-transform duration-300" size={24} />
                <span>{t.twitter}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;