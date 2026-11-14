import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Award, Check, Download, ExternalLink,
  GraduationCap, Mail, MapPin, Menu, Moon, Network, Phone,
  Send, Sparkles, Sun, X,
} from 'lucide-react'
import { motion } from 'framer-motion'
import illustration from './assets/sinchana-tech-illustration.jpeg'
import { projects, skills } from './data'
import './App.css'

const profile = {
  name: 'Sinchana A R',
  email: 'sinchanargowdaa34@gmail.com',
  phone: '8310619760',
  location: 'Bengaluru, Karnataka',
  linkedin: 'https://linkedin.com/in/sinchana-ar-ba489031b',
  github: 'https://github.com/sinchanaar01',
}

const education = [
  { icon: GraduationCap, date: 'ONGOING', degree: 'B.E. - Artificial Intelligence & Machine Learning (VTU), 7th Semester', institution: 'Rajeev Institute of Technology, Hassan', location: 'Hassan' },
  { icon: GraduationCap, date: '2023', degree: 'PU (Pre-University)', institution: 'Scholars PU College, Mandya', location: '88% - Mandya' },
  { icon: GraduationCap, date: '2021', degree: 'SSLC', institution: 'Cambridge Public School, Mandya', location: '92.96% - Mandya' },
]

const certifications = [
  { title: 'GEN-AI Camp', issuer: 'Certificate of Completion, AlgoUniversity (Mentored by a Microsoft Engineer)' },
  { title: 'Fundamentals of Artificial Intelligence', issuer: 'IBM SkillsBuild' },
  { title: 'Introduction to MongoDB', issuer: 'MongoDB, Inc.' },
  { title: 'User Interface (UI) Automation with Modern Design in Studio', issuer: 'UiPath' },
]

const navItems = [
  { label: 'Home', target: 'top' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Skills', target: 'skills' },
  { label: 'Contact', target: 'contact' },
]

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>
}

function SkillRows() {
  return <div className="mt-[60px] divide-y divide-slate-800/60 rounded-2xl border border-slate-800/60 bg-[#0f1115] px-5 sm:px-7">
    {Object.entries(skills).map(([category, items]) => <div className="py-5 md:grid md:grid-cols-[minmax(12rem,0.75fr)_minmax(0,1.25fr)] md:items-center md:gap-6" key={category}>
      <h3 className="mb-3 font-heading text-sm font-semibold text-slate-100 md:mb-0">{category}</h3>
      <div className="flex flex-wrap gap-2">{items.map((skill) => <span className="rounded-full bg-slate-800/80 px-3 py-1.5 text-xs text-slate-300" key={skill}>{skill}</span>)}</div>
    </div>)}
  </div>
}

function ProjectCard({ project, index }) {
  return <motion.article className="project-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.08 }}>
    <div className="project-top"><span className="project-number">{String(index + 1).padStart(2, '0')}</span><span className="project-meta">SELECTED PROJECT</span><span className="status-pill"><Check size={12} /> FEATURED WORK</span></div>
    <div className="project-card-body"><div><h3>{project.title}</h3><p>{project.description}</p><div className="pill-list">{project.tags.map((tag) => <span className="pill" key={tag}>{tag}</span>)}</div></div></div>
    <div className="project-actions"><a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">View code <ArrowUpRight size={15} /></a><a className="text-link text-link-muted" href={project.live} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink size={14} /></a></div>
  </motion.article>
}

function GitHubIcon() {
  return <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.5-1.3-1.23-1.65-1.23-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.67 2.22 3.77 1.57.1-.73.4-1.23.7-1.51-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.75 1.04.75 2.1v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" /></svg>
}

function LinkedInIcon() {
  return <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" /></svg>
}

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => { document.documentElement.dataset.theme = darkMode ? 'dark' : 'light' }, [darkMode])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .2, .5] })
    navItems.forEach(({ target }) => { const element = document.getElementById(target); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const handleIllustrationMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setPointer({ x: ((event.clientX - bounds.left) / bounds.width - .5) * 2, y: ((event.clientY - bounds.top) / bounds.height - .5) * 2 })
  }

  return <div className="site-shell">
    <header className="site-header"><a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">S</span><span className="brand-slash">/</span>AR</a><nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">{navItems.map((item) => <a className={activeSection === item.target ? 'is-active' : ''} href={`#${item.target}`} key={item.target} onClick={closeMenu}>{item.label}</a>)}</nav><div className="header-actions"><a className="header-contact" href={`mailto:${profile.email}`}>Let&apos;s connect <ArrowUpRight size={15} /></a><button className="icon-button" type="button" onClick={() => setDarkMode((value) => !value)} aria-label="Toggle color theme">{darkMode ? <Sun size={17} /> : <Moon size={17} />}</button><button className="icon-button menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div></header>

    <main id="top">
      <section className="hero section-wrap"><div className="hero-copy"><div className="hero-status">OPEN TO OPPORTUNITIES</div><h1>Hi, I&apos;m <em>Sinchana.</em></h1><p className="hero-lead">AI/ML student building intelligent, data-driven and practical software systems.</p><p className="hero-support">Curious by nature, practical by craft. I move between models, interfaces, and the data pipelines that make them useful.</p><div className="hero-actions"><a className="primary-button" href="#projects">View projects <ArrowDownRight size={16} /></a><a className="secondary-button" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a><a className="secondary-button" href="/resume.pdf" download>Resume <Download size={15} /></a><a className="secondary-button" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a></div><a className="hero-contact-link" href="#contact">Contact me <ArrowDownRight size={15} /></a><div className="hero-location"><MapPin size={15} /> Bengaluru, Karnataka <span /> Open to relocate</div></div><div className="hero-art-wrap" onMouseMove={handleIllustrationMove} onMouseLeave={() => setPointer({ x: 0, y: 0 })}><div className="art-label art-label-top">SINCHANA / 01</div><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-frame"><img className="hero-art" src={illustration} alt="Illustrated portrait of Sinchana surrounded by technology icons" style={{ '--pointer-x': `${pointer.x * 1.5}deg`, '--pointer-y': `${pointer.y * -1.5}deg` }} /><span className="art-sticker sticker-one">AI</span><span className="art-sticker sticker-two">&lt;/&gt;</span></div><div className="art-label art-label-bottom">BUILD WITH CURIOSITY <span>&rarr;</span></div></div></section>

      <section id="about" className="section-wrap page-section about-section"><div className="section-intro"><SectionLabel number="01">About me</SectionLabel><h2>Curious mind.<br /><span>Practical builder.</span></h2><p>Motivated Artificial Intelligence &amp; Machine Learning student with hands-on experience across intelligent systems, responsive web apps, and prediction pipelines.</p></div><div className="about-grid"><div className="about-note"><Sparkles size={18} /><p>I like the space where a thoughtful idea becomes a working system: clear enough to use, sturdy enough to trust.</p></div><div className="about-facts"><div><strong>AI / ML</strong><span>NLP, Generative AI, predictive modeling</span></div><div><strong>DATA</strong><span>SQL, analysis, validation and pipelines</span></div><div><strong>FULL STACK</strong><span>React.js, TypeScript, Node.js, FastAPI</span></div><div><strong>ENGINEERING</strong><span>Practical systems with responsive UI and REST APIs</span></div></div></div></section>

      <section id="projects" className="section-wrap page-section projects-section"><div className="section-heading-row"><div className="section-intro"><SectionLabel number="02">Selected work</SectionLabel><h2>Made to be <span>useful.</span></h2></div><p className="section-aside">{projects.length} projects<br />AI/ML + full-stack practice</p></div><div className="project-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}</div></section>

      <section id="experience" className="section-wrap page-section experience-section"><div className="section-intro"><SectionLabel number="03">Experience in practice</SectionLabel><h2>Learning by <span>building.</span></h2></div><div className="practice-grid"><article><span>01 / INTELLIGENT SYSTEMS</span><h3>Turning complex information into useful decisions.</h3><p>Exploring NLP, Generative AI, and predictive modeling through AI-driven solutions.</p></article><article><span>02 / DIGITAL PRODUCTS</span><h3>Making interfaces feel clear and capable.</h3><p>Building maintainable responsive experiences with React.js, TypeScript, and REST APIs.</p></article><article><span>03 / DATA PIPELINES</span><h3>Designing reliable paths from input to insight.</h3><p>Working with Python, data analysis, validation, and practical prediction pipelines.</p></article></div></section>

      <section id="skills" className="section-wrap page-section skills-section"><div className="section-heading-row"><div className="section-intro"><SectionLabel number="04">Technical toolkit</SectionLabel><h2>The stack I <span>reach for.</span></h2></div><p className="section-aside">tools for thinking,<br />making, and shipping</p></div><SkillRows /></section>

      <section id="education" className="section-wrap page-section education-section"><div className="section-intro"><SectionLabel number="05">Education</SectionLabel><h2>Always in <span>motion.</span></h2></div><div className="education-layout"><div className="education-list">{education.map((item) => { const Icon = item.icon; return <div className="education-row" key={item.degree}><div className="card-icon"><Icon size={18} /></div><div><h3>{item.degree}</h3><p>{item.institution} - {item.location}</p></div><span className="education-date">{item.date}</span></div> })}</div><div className="language-note"><span className="eyebrow">Languages</span><h3>How I communicate</h3><div className="pill-list"><span className="pill">English</span><span className="pill">Kannada</span><span className="pill">Hindi</span></div></div></div></section>

      <section id="certifications" className="section-wrap page-section certifications-section"><div className="section-intro"><SectionLabel number="06">Credentials</SectionLabel><h2>Learning beyond the <span>classroom.</span></h2></div><div className="cert-grid">{certifications.map((cert) => <article className="cert-card" key={cert.title}><Award size={19} /><div><h3>{cert.title}</h3><p>{cert.issuer}</p></div><Check className="cert-check" size={16} /></article>)}</div></section>

      <section id="contact" className="contact-section"><div className="section-wrap contact-layout"><div className="contact-copy"><SectionLabel number="07">Contact</SectionLabel><h2>Let&apos;s build something <span>useful.</span></h2><p>Have an idea, an opportunity, or just want to talk tech? My inbox is open.</p><div className="direct-contact"><a href={`mailto:${profile.email}`}><Mail size={17} /><span>{profile.email}</span></a><a href={`tel:${profile.phone}`}><Phone size={17} /><span>{profile.phone}</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Network size={17} /><span>LinkedIn</span><ArrowUpRight size={14} /></a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setFormSent(true) }}><label>Name<input type="text" name="name" placeholder="Your name" required /></label><label>Email<input type="email" name="email" placeholder="you@example.com" required /></label><label>Message<textarea name="message" placeholder="Tell me a little about your idea..." rows="4" required /></label><button className="primary-button" type="submit"><Send size={15} /> {formSent ? 'Message ready to send' : 'Send message'}</button>{formSent && <span className="form-note">Thanks. Please use the email link to complete delivery.</span>}</form></div></section>
    </main>

    <footer className="site-footer"><div className="section-wrap footer-inner"><div><a className="brand" href="#top"><span className="brand-mark">S</span><span className="brand-slash">/</span>AR</a><p className="text-slate-600 dark:text-slate-400">AI/ML student - Full Stack &amp; GenAI aspirant</p></div><nav><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav><div className="footer-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a></div><small className="text-slate-600 dark:text-slate-400">Copyright 2026 Sinchana A R. Built with curiosity.</small></div></footer>
  </div>
}

export default App


