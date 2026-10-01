"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  BrainCircuit,
  Smartphone,
  Layers3,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import ToptalBadge from "../components/ToptalBadge";

const skills = [
  { name: "Ruby on Rails", icon: Code2 },
  { name: "React / Next.js", icon: Layers3 },
  { name: "TypeScript / JavaScript", icon: Code2 },
  { name: "PostgreSQL / Redis", icon: Database },
  { name: "AWS / Azure", icon: Cloud },
  { name: "AI / LLM Integration", icon: BrainCircuit },
  { name: "REST APIs & Integrations", icon: Layers3 },
  { name: "Android / iOS", icon: Smartphone }
];

const projects = [
  {
    title: "Lease2Ease",
    type: "Property & Lease Management SaaS",
    description:
      "Production SaaS platform supporting property, lease, tenant, dues, payment and workflow management.",
    stack: ["Ruby on Rails", "PostgreSQL", "AWS", "Payments"],
    href: "https://lease2ease.com/"
  },
  {
    title: "Alliv",
    type: "Community Management Platform",
    description:
      "Resident and community management platform with automated dues creation, payment workflows and operational tools.",
    stack: ["Rails", "React", "Payments", "Automation"],
    href: "https://www.allivapp.com/"
  },
  {
    title: "My Carkit",
    type: "Mobile Platform",
    description:
      "Long-running Android and iOS product work involving mobile workflows, APIs and backend services.",
    stack: ["Android", "iOS", "APIs", "Backend"],
    href: "#contact"
  },
  {
    title: "AI Automation",
    type: "AI / LLM Engineering",
    description:
      "AI-enabled workflows using LLM APIs for automation, structured outputs, prompt refinement and product experiences.",
    stack: ["OpenAI", "Claude", "LLMs", "Automation"],
    href: "#ai"
  }
];

const experience = [
  {
    company: "Bittern Technologies",
    role: "AI-Powered Web & Mobile Solutions Architect",
    dates: "May 2025 — Present",
    description:
      "Building AI-enabled web and mobile products, SaaS platforms, APIs and automation workflows using modern full-stack technologies."
  },
  {
    company: "Builder.ai",
    role: "Freelance Ruby on Rails Backend Engineer",
    dates: "May 2021 — Jan 2024",
    description:
      "Developed production Ruby on Rails backend applications, REST APIs, database workflows, integrations, background jobs and performance improvements."
  },
  {
    company: "Full Stack Engineering",
    role: "Full Stack Engineer",
    dates: "Jan 2016 — Present",
    description:
      "10+ years building SaaS products, APIs, payment workflows, integrations and scalable applications across backend and frontend stacks."
  },
  {
    company: "Flexsin",
    role: "Team Lead — Ruby on Rails",
    dates: "Jan 2014 — Jan 2016",
    description:
      "Led Ruby on Rails development, architecture, code reviews and delivery while working closely with product and engineering teams."
  }
];

function SectionTitle({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <nav className="nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("home")}>
            KG<span>.</span>
          </button>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {[
              ["about", "About"],
              ["skills", "Skills"],
              ["projects", "Projects"],
              ["experience", "Experience"],
              ["ai", "AI Engineering"],
              ["contact", "Contact"]
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)}>{label}</button>
            ))}
          </div>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-glow" />
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="availability">
              <span className="pulse" /> Available for remote opportunities
            </div>

            <p className="kicker">SENIOR FULL STACK & AI ENGINEER</p>
            <h1>
              I build <em>scalable products</em> that turn complex ideas into
              reliable software.
            </h1>

            <p className="hero-copy">
              10+ years of experience building production-grade SaaS,
              APIs, automation and AI-powered applications with Ruby on Rails,
              React, Next.js, PostgreSQL and AWS.
            </p>

            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo("projects")}>
                View my work <ArrowUpRight size={18} />
              </button>
              <button className="secondary" onClick={() => scrollTo("contact")}>
                Let&apos;s talk <Mail size={17} />
              </button>
            </div>

            <div className="socials">
              <a href="https://github.com/kapilgoyal6" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/kapilgoyal6/" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-profile"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="profile-ring">
              <Image
                src="/profile.png"
                alt="Kapil Goyal"
                width={520}
                height={520}
                priority
                className="profile-photo"
              />
            </div>
            <div className="profile-caption">
              <strong>Kapil Goyal</strong>
              <span>Senior Full Stack & AI Engineer</span>
              <small>Ruby on Rails · React · Next.js · AI</small>
            </div>
            <ToptalBadge />
          </motion.div>
        </div>
      </section>

      <section id="about" className="section">
        <SectionTitle
          eyebrow="01 — ABOUT"
          title="Engineering with product thinking."
          text="I enjoy taking ownership from architecture and implementation through deployment and production support."
        />
        <div className="about-grid">
          <div className="about-main">
            <p>
              I&apos;m a senior full-stack engineer specializing in Ruby on Rails,
              React/Next.js, PostgreSQL and cloud infrastructure. Over the years,
              I&apos;ve worked across SaaS, property management, payments,
              e-commerce, recruitment, mobile and AI-powered products.
            </p>
            <p>
              My approach is pragmatic: ship a solid first version, measure real
              usage, remove bottlenecks and evolve the architecture as the product
              grows. I care about maintainable code, reliable APIs and a polished
              user experience.
            </p>
          </div>
          <div className="stats-grid">
            <div><strong>10+</strong><span>Years Engineering</span></div>
            <div><strong>8+</strong><span>Years Mobile</span></div>
            <div><strong>10+</strong><span>Years AWS / Cloud</span></div>
            <div><strong>20+</strong><span>Technologies</span></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section alt">
        <SectionTitle eyebrow="02 — TOOLKIT" title="Technologies I work with." />
        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div className="skill-card" key={skill.name} whileHover={{ y: -5 }}>
                <Icon size={22} />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="projects" className="section">
        <SectionTitle
          eyebrow="03 — SELECTED WORK"
          title="Products I&apos;ve helped build."
          text="A selection of platforms and engineering work spanning SaaS, mobile, automation and AI."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              className="project-card"
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              key={project.title}
              whileHover={{ y: -7 }}
            >
              <div className="project-number">0{index + 1}</div>
              <div className="project-icon"><Layers3 size={21} /></div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title} <ExternalLink size={16} /></h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="experience" className="section alt">
        <SectionTitle eyebrow="04 — EXPERIENCE" title="A decade of building software." />
        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={`${item.company}-${item.dates}`}>
              <div className="timeline-dot" />
              <div className="timeline-head">
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                </div>
                <span>{item.dates}</span>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ai" className="section">
        <div className="ai-panel">
          <div>
            <span className="eyebrow">05 — AI ENGINEERING</span>
            <h2>Building with AI, not just talking about it.</h2>
            <p>
              I integrate LLMs into real products and engineering workflows,
              focusing on useful automation, structured outputs, prompt refinement,
              verification and reliable production behavior.
            </p>
          </div>
          <div className="ai-list">
            {[
              "OpenAI & Anthropic API integrations",
              "LLM-powered product features",
              "Prompt engineering & structured JSON outputs",
              "AI-assisted software development",
              "Automation & agentic workflows",
              "Human-in-the-loop verification"
            ].map((item) => (
              <div key={item}><CheckCircle2 size={18} /> {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-box">
          <span className="eyebrow">06 — CONTACT</span>
          <h2>Have a product to build?</h2>
          <p>
            I&apos;m open to remote full-stack, backend, AI engineering and product
            engineering opportunities.
          </p>
          <div className="contact-actions">
            <a className="primary" href="mailto:kapilgoyal6@gmail.com">
              <Mail size={18} /> Email me
            </a>
            <a
              className="secondary"
              href="https://www.linkedin.com/in/kapilgoyal6/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              className="secondary"
              href="https://github.com/kapilgoyal6"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <strong>Kapil Goyal<span>.</span></strong>
          <p>Senior Full Stack & AI Engineer</p>
        </div>
        <div className="footer-meta">
          <span><MapPin size={15} /> India · Remote</span>
          <span>© {new Date().getFullYear()} Kapil Goyal</span>
        </div>
      </footer>
    </main>
  );
}
