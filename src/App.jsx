import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Award, BrainCircuit, BriefcaseBusiness, Check,
  Code2, Database, Download, ExternalLink, GraduationCap, Mail, MapPin, Menu,
  Moon, Network, Phone, Send, Sparkles, Sun, X,
} from 'lucide-react'
import illustration from './assets/sinchana-tech-illustration.jpeg'
import './App.css'

const profile = {
  name: 'Sinchana A R',
  email: 'sinchanargowdaa34@gmail.com',
  phone: '8310619760',
  location: 'Bengaluru, Karnataka',
  linkedin: 'https://linkedin.com/in/sinchana-ar-ba489031b',
  github: 'https://github.com/sinchanaar01',
}

const skillGroups = [
  { label: 'Programming Languages', icon: Code2, skills: ['Python', 'C'] },
  { label: 'AI & Machine Learning', icon: BrainCircuit, skills: ['Machine Learning', 'NLP', 'Generative AI', 'Predictive Modeling'] },
  { label: 'Web Development', icon: Network, skills: ['React.js', 'TypeScript', 'Node.js', 'FastAPI', 'REST APIs', 'Responsive UI'] },
  { label: 'Databases', icon: Database, skills: ['SQL'] },
  { label: 'Tools & Platforms', icon: BriefcaseBusiness, skills: ['VS Code', 'Jupyter Notebook', 'Google Colab', 'Excel', 'Power BI', 'Tableau'] },
]

const projects = [
  {
    number: '01', date: 'ACADEMIC PROJECT', status: 'COMPLETED', featured: true,
    title: 'Enterprise Policy Compliance AI',
    description: 'AI-driven system to analyze and ensure compliance with enterprise policies using NLP. Streamlined document verification to boost organizational efficiency and accuracy.',
    pipeline: ['INGEST', 'EMBED', 'RETRIEVE', 'VERIFY'], technologies: ['Python', 'NLP', 'Generative AI', 'APIs'], codeUrl: 'https://github.com/sinchanaar01/enterprise-policy-compliance-ai-',
  },
  {
    number: '02', date: 'ACADEMIC PROJECT', status: 'COMPLETED',
    title: 'Accredian Enterprise Clone',
    description: 'Recreated core functionality and UI of the Accredian platform as a responsive enterprise web app with dynamic REST API data handling.',
    pipeline: ['DESIGN', 'BUILD', 'INTEGRATE'], technologies: ['React.js', 'TypeScript', 'Node.js', 'REST APIs', 'Responsive UI'], codeUrl: 'https://github.com/sinchanaar01/accredian-enterprise-clone', demoUrl: 'https://accredian-clone-taupe.vercel.app/',
  },
  {
    number: '03', date: 'ACADEMIC PROJECT', status: 'COMPLETED',
    title: 'Solar Panel Degradation Predictor',
    description: 'ML model to predict solar panel degradation using historical performance and environmental data for proactive maintenance.',
    pipeline: ['PREPROCESS', 'TRAIN', 'EVALUATE'], technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Predictive Modeling'], codeUrl: 'https://github.com/sinchanaar01/solar-panel-degradation-predictor', demoUrl: 'https://solar-panel-degradation-predictor-ssrn.onrender.com',
  },
  {
    number: '04', date: 'PERSONAL PROJECT', status: 'SHIPPED',
    title: 'NSE Market Data Downloader',
    description: 'Production-minded Python data pipeline that automatically fetches, validates, deduplicates, and stores four NSE market datasets with reliable ingestion and execution tracking.',
    pipeline: ['FETCH', 'VALIDATE', 'DEDUPLICATE', 'STORE'], technologies: ['Python', 'HTTPX', 'AsyncIO', 'Pydantic', 'SQLite', 'Pytest', 'Docker', 'GitHub Actions'], codeUrl: 'https://github.com/sinchanaar01/nse-market-data-downloader',
  },
]

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

function SkillCard({ group, index }) {
  const Icon = group.icon
  return <article className="skill-card"><div className="skill-card-top"><span className="skill-index">0{index + 1}</span><div className="card-icon"><Icon size={18} /></div></div><h3>{group.label}</h3><div className="pill-list">{group.skills.map((skill) => <span className="pill" key={skill}>{skill}</span>)}</div></article>
}

function ProjectCard({ project }) {
  return <article className={project.featured ? 'project-card project-card-featured' : 'project-card'}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-meta">{project.date}</span><span className="status-pill"><Check size={12} /> {project.status}</span></div><div className="project-card-body"><div><h3>{project.title}</h3><p>{project.description}</p><div className="pipeline">{project.pipeline.map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, '0')}</b>{step}</span>)}</div><div className="pill-list">{project.technologies.map((technology) => <span className="pill" key={technology}>{technology}</span>)}</div></div></div><div className="project-actions"><a className="text-link" href={project.codeUrl} target="_blank" rel="noopener noreferrer">View code <ArrowUpRight size={15} /></a>{project.demoUrl && <a className="text-link text-link-muted" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink size={14} /></a>}</div></article>
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
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

      <section id="projects" className="section-wrap page-section projects-section"><div className="section-heading-row"><div className="section-intro"><SectionLabel number="02">Selected work</SectionLabel><h2>Made to be <span>useful.</span></h2></div><p className="section-aside">04 projects<br />academic + personal practice</p></div><div className="project-list">{projects.map((project) => <ProjectCard project={project} key={project.number} />)}</div></section>

      <section id="experience" className="section-wrap page-section experience-section"><div className="section-intro"><SectionLabel number="03">Experience in practice</SectionLabel><h2>Learning by <span>building.</span></h2></div><div className="practice-grid"><article><span>01 / INTELLIGENT SYSTEMS</span><h3>Turning complex information into useful decisions.</h3><p>Exploring NLP, Generative AI, and predictive modeling through AI-driven solutions.</p></article><article><span>02 / DIGITAL PRODUCTS</span><h3>Making interfaces feel clear and capable.</h3><p>Building maintainable responsive experiences with React.js, TypeScript, and REST APIs.</p></article><article><span>03 / DATA PIPELINES</span><h3>Designing reliable paths from input to insight.</h3><p>Working with Python, data analysis, validation, and practical prediction pipelines.</p></article></div></section>

      <section id="skills" className="section-wrap page-section skills-section"><div className="section-heading-row"><div className="section-intro"><SectionLabel number="04">Technical toolkit</SectionLabel><h2>The stack I <span>reach for.</span></h2></div><p className="section-aside">tools for thinking,<br />making, and shipping</p></div><div className="skills-grid">{skillGroups.map((group, index) => <SkillCard group={group} index={index} key={group.label} />)}</div></section>

      <section id="education" className="section-wrap page-section education-section"><div className="section-intro"><SectionLabel number="05">Education</SectionLabel><h2>Always in <span>motion.</span></h2></div><div className="education-layout"><div className="education-list">{education.map((item) => { const Icon = item.icon; return <div className="education-row" key={item.degree}><div className="card-icon"><Icon size={18} /></div><div><h3>{item.degree}</h3><p>{item.institution} - {item.location}</p></div><span className="education-date">{item.date}</span></div> })}</div><div className="language-note"><span className="eyebrow">Languages</span><h3>How I communicate</h3><div className="pill-list"><span className="pill">English</span><span className="pill">Kannada</span><span className="pill">Hindi</span></div></div></div></section>

      <section id="certifications" className="section-wrap page-section certifications-section"><div className="section-intro"><SectionLabel number="06">Credentials</SectionLabel><h2>Learning beyond the <span>classroom.</span></h2></div><div className="cert-grid">{certifications.map((cert) => <article className="cert-card" key={cert.title}><Award size={19} /><div><h3>{cert.title}</h3><p>{cert.issuer}</p></div><Check className="cert-check" size={16} /></article>)}</div></section>

      <section id="contact" className="contact-section"><div className="section-wrap contact-layout"><div className="contact-copy"><SectionLabel number="07">Contact</SectionLabel><h2>Let&apos;s build something <span>useful.</span></h2><p>Have an idea, an opportunity, or just want to talk tech? My inbox is open.</p><div className="direct-contact"><a href={`mailto:${profile.email}`}><Mail size={17} /><span>{profile.email}</span></a><a href={`tel:${profile.phone}`}><Phone size={17} /><span>{profile.phone}</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Network size={17} /><span>LinkedIn</span><ArrowUpRight size={14} /></a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setFormSent(true) }}><label>Name<input type="text" name="name" placeholder="Your name" required /></label><label>Email<input type="email" name="email" placeholder="you@example.com" required /></label><label>Message<textarea name="message" placeholder="Tell me a little about your idea..." rows="4" required /></label><button className="primary-button" type="submit"><Send size={15} /> {formSent ? 'Message ready to send' : 'Send message'}</button>{formSent && <span className="form-note">Thanks. Please use the email link to complete delivery.</span>}</form></div></section>
    </main>

    <footer className="site-footer"><div className="section-wrap footer-inner"><div><a className="brand" href="#top"><span className="brand-mark">S</span><span className="brand-slash">/</span>AR</a><p>AI/ML student - Full Stack &amp; GenAI aspirant</p></div><nav><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav><div className="footer-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Network size={18} /></a></div><small>Copyright 2026 Sinchana A R. Built with curiosity.</small></div></footer>
  </div>
}

export default App


