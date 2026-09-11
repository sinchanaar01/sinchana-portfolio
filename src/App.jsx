import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Award, BrainCircuit, BriefcaseBusiness, Check,
  Code2, Database, Download, ExternalLink, GraduationCap,
  Mail, MapPin, Menu, Moon, Network, Phone, Send, Sun, X,
} from 'lucide-react'
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
]

const education = [
  { icon: GraduationCap, date: 'ONGOING', degree: 'B.E. — Artificial Intelligence & Machine Learning (VTU), 7th Semester', institution: 'Rajeev Institute of Technology, Hassan', location: 'Hassan' },
  { icon: GraduationCap, date: '2023', degree: 'PU (Pre-University)', institution: 'Scholars PU College, Mandya', location: '88% · Mandya' },
  { icon: GraduationCap, date: '2021', degree: 'SSLC', institution: 'Cambridge Public School, Mandya', location: '92.96% · Mandya' },
]

const certifications = [
  { title: 'GEN-AI Camp', issuer: 'Certificate of Completion, AlgoUniversity (Mentored by a Microsoft Engineer)' },
  { title: 'Fundamentals of Artificial Intelligence', issuer: 'IBM SkillsBuild' },
  { title: 'Introduction to MongoDB', issuer: 'MongoDB, Inc.' },
  { title: 'User Interface (UI) Automation with Modern Design in Studio', issuer: 'UiPath' },
]

function SkillCard({ group }) {
  const Icon = group.icon
  return <article className="soft-card skill-card"><div className="card-icon"><Icon size={19} /></div><h3>{group.label}</h3><div className="pill-list">{group.skills.map((skill) => <span className="pill" key={skill}>{skill}</span>)}</div></article>
}

function ProjectCard({ project }) {
  return <article className={project.featured ? 'soft-card project-card featured-project' : 'soft-card project-card'}><div className="project-top"><span className="project-date">{project.date}</span><span className="status-pill"><Check size={12} /> {project.status}</span></div><div className="project-card-body"><span className="project-number">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p><div className="pipeline">{project.pipeline.map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, '0')}</b>{step}</span>)}</div><div className="pill-list">{project.technologies.map((technology) => <span className="pill" key={technology}>{technology}</span>)}</div></div></div><div className="project-actions"><a className="small-button teal-outline" href={project.codeUrl} target="_blank" rel="noopener noreferrer"><Code2 size={15} /> View Code <ArrowUpRight size={14} /></a>{project.demoUrl ? <a className="small-button amber-button" href={project.demoUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} /> Live Demo</a> : project.featured && <a className="small-button amber-button" href="#" onClick={(event) => event.preventDefault()}><ExternalLink size={14} /> Live Demo</a>}</div></article>
}

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formSent, setFormSent] = useState(false)

  useEffect(() => { document.documentElement.dataset.theme = darkMode ? 'dark' : 'light' }, [darkMode])
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className="site-header"><a className="brand" href="#top" onClick={closeMenu}>S<span>/</span>AR</a><nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">{['About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'].map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}</a>)}</nav><div className="header-actions"><button className="icon-button" type="button" onClick={() => setDarkMode((value) => !value)} aria-label="Toggle color theme">{darkMode ? <Sun size={17} /> : <Moon size={17} />}</button><a className="header-contact" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a><button className="icon-button menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div></header>

    <main id="top">
      <section className="hero section-wrap"><div className="hero-content"><span className="status-badge"><span className="pulse-dot" /> Open to opportunities</span><h1>Sinchana <span>A R</span></h1><h2>AI/ML Student · Full Stack &amp; GenAI Aspirant</h2><p className="hero-tagline">Building intelligent, scalable applications that solve real-world problems.</p><div className="location"><MapPin size={15} /> Bengaluru, Karnataka <i /> Open to relocate</div><div className="hero-actions"><a className="large-button teal-button" href="#projects">View Projects <ArrowDown size={16} /></a><a className="large-button outline-button" href="#contact">Contact Me <ArrowUpRight size={16} /></a><a className="large-button amber-button" href="/resume.pdf" download>Download Resume <Download size={16} /></a></div></div><div className="hero-rail"><div className="visual-panel"><div className="visual-grid" /><svg className="network-graphic" viewBox="0 0 240 190" role="img" aria-label="Scattered data network with broken connections"><g className="network-segments"><path d="M25 122 L52 89" /><path d="M52 89 L91 103" /><path d="M118 65 L147 38" /><path d="M147 38 L184 55" /><path d="M161 137 L203 118" /></g><circle cx="25" cy="122" r="4" className="network-dot network-white" /><circle cx="52" cy="89" r="4.5" className="network-dot network-amber" /><circle cx="91" cy="103" r="3.5" className="network-dot network-white" /><circle cx="118" cy="65" r="3.5" className="network-dot network-white" /><circle cx="147" cy="38" r="4.5" className="network-dot network-amber" /><circle cx="184" cy="55" r="3.5" className="network-dot network-white" /><circle cx="161" cy="137" r="4.5" className="network-dot network-amber" /><circle cx="203" cy="118" r="3.5" className="network-dot network-white" /></svg><div className="visual-caption"><span>BUILD</span><span>LEARN</span><span>IMPACT</span></div></div><div className="connect-card soft-card"><div className="connect-heading"><span>Connect</span><ArrowUpRight size={15} /></div><a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub <ArrowUpRight size={13} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Network size={16} /> LinkedIn <ArrowUpRight size={13} /></a></div></div></section>

      <section id="about" className="section-wrap page-section"><div className="section-intro"><span className="eyebrow">01 / About</span><h2>Curious mind.<br /><span>Practical builder.</span></h2><p>Motivated Artificial Intelligence &amp; Machine Learning student with hands-on experience across intelligent systems, responsive web apps, and prediction pipelines.</p></div><div className="about-cards"><article className="soft-card about-card"><div className="card-icon"><BrainCircuit size={19} /></div><h3>AI-first thinking</h3><p>Exploring NLP, Generative AI, and predictive modeling to turn complex information into useful decisions.</p></article><article className="soft-card about-card"><div className="card-icon"><Code2 size={19} /></div><h3>Full stack craft</h3><p>Building maintainable experiences with Python, FastAPI, React.js, TypeScript, and REST APIs.</p></article></div></section>

      <section id="skills" className="section-wrap page-section"><div className="section-intro compact-intro"><span className="eyebrow">02 / Capabilities</span><h2>The stack I <span>reach for.</span></h2></div><div className="skills-grid">{skillGroups.map((group) => <SkillCard group={group} key={group.label} />)}</div></section>

      <section id="projects" className="section-wrap page-section"><div className="section-heading-row"><div className="section-intro compact-intro"><span className="eyebrow">03 / Selected work</span><h2>Projects with <span>purpose.</span></h2></div><span className="section-note">Academic &amp; personal work<br />in progress and practice</span></div><div className="project-feature-grid"><ProjectCard project={projects[0]} /><div className="project-side-grid">{projects.slice(1).map((project) => <ProjectCard project={project} key={project.number} />)}</div></div></section>

      <section id="education" className="section-wrap page-section"><div className="section-intro compact-intro"><span className="eyebrow">04 / Education</span><h2>Always in <span>motion.</span></h2></div><div className="education-layout"><div className="soft-card education-card">{education.map((item) => { const Icon = item.icon; return <div className="education-row" key={item.degree}><div className="card-icon"><Icon size={18} /></div><div><h3>{item.degree}</h3><p>{item.institution} · {item.location}</p></div><span className="education-date">{item.date}</span></div> })}</div><div className="soft-card languages-card"><span className="eyebrow">Languages</span><h3>How I communicate</h3><div className="pill-list"><span className="pill">English</span><span className="pill">Kannada</span><span className="pill">Hindi</span></div></div></div></section>

      <section id="certifications" className="section-wrap page-section certifications-section"><div className="section-intro compact-intro"><span className="eyebrow">05 / Credentials</span><h2>Learning beyond the <span>classroom.</span></h2></div><div className="cert-grid">{certifications.map((cert) => <article className="soft-card cert-card" key={cert.title}><Award size={19} /><div><h3>{cert.title}</h3><p>{cert.issuer}</p></div><Check className="cert-check" size={16} /></article>)}</div></section>

      <section id="contact" className="contact-section"><div className="section-wrap contact-layout"><div className="contact-copy"><span className="eyebrow">06 / Contact</span><h2>Let&apos;s build something <span>useful.</span></h2><p>Have an idea, an opportunity, or just want to talk tech? My inbox is open.</p><div className="direct-contact"><a href={`mailto:${profile.email}`}><Mail size={17} /><span>{profile.email}</span></a><a href={`tel:${profile.phone}`}><Phone size={17} /><span>{profile.phone}</span></a></div></div><form className="contact-form soft-card" onSubmit={(event) => { event.preventDefault(); setFormSent(true) }}><label>Name<input type="text" name="name" placeholder="Your name" required /></label><label>Email<input type="email" name="email" placeholder="you@example.com" required /></label><label>Message<textarea name="message" placeholder="Tell me a little about your idea..." rows="4" required /></label><button className="large-button teal-button" type="submit"><Send size={15} /> {formSent ? 'Message ready to send' : 'Send Message'}</button>{formSent && <span className="form-note">Thanks. Please use the email link to complete delivery.</span>}</form></div></section>
    </main>

    <footer className="site-footer"><div className="section-wrap footer-inner"><div><a className="brand" href="#top">S<span>/</span>AR</a><p>AI/ML student · Full Stack &amp; GenAI aspirant</p></div><nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav><div className="footer-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Network size={18} /></a></div><small>© 2026 Sinchana A R. Built with curiosity.</small></div></footer>
  </div>
}

export default App
