"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Server,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import emailjs from '@emailjs/browser'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      technologies: ["HTML","CSS","React","JavaScript","Bootstrap"],
    },
    {
      name: "Backend Development",
      icon: Server,
      technologies: ["Node.js", "JavaScript", "Express js", "MangoDB", "SQL"],
    },
    { name: "Database", icon: Database, technologies: ["SQL", "MongoDB"] },
    { name: "Languages & Ai", icon: Globe, technologies: ["Java", "Python", "Machine Learning", "Deep Learning","Computer Vision","NLP"] },
  ]

  const projects = [
    {
      title: "YouTube Spam Detection using Machine Learning",
      description:
        "This project focuses on building a machine learning model to detect and classify spam comments on YouTube. By analyzing text features and applying classification algorithms such as Naive Bayes and Support Vector Machine, the system effectively identifies unwanted or harmful comments. The model is trained on labeled datasets to achieve high accuracy and improve content moderation on the platform.",
      image: "/images/spam-photo.jpg",
      technologies: ["MACHINE LEARNING"],
      github: "https://github.com/Naveen-R-77",
      live: "#",
    },
    {
      title: "Plant Disease Detection using Deep Learning",
      description: "This project utilizes deep learning techniques to identify and classify plant diseases from leaf images. A Convolutional Neural Network (CNN) is trained on a large dataset of diseased and healthy leaves to accurately predict plant health. The system aids in early diagnosis and supports farmers in taking timely corrective actions to improve crop yield.",
      image: "/images/DL-photo.jpg",
      technologies: ["DEEP LEARNING", "CNN", "PYTHON"],
      github: "https://github.com/Naveen-R-77",
      live: "#",
    },
    {
      title: "Face Liveness Detection",
      description: "This project aims to distinguish between real human faces and spoofing attacks (like photos or videos) using deep learning techniques. By analyzing facial movements, textures, and depth cues, the system detects whether the face presented to the camera is live or fake. It enhances the security of facial recognition systems against impersonation attempts.",
      image: "/images/live-photo.jpg",
      technologies: ["HTML", "CSS", "CNN", "OPEN CV"],
      github: "https://github.com/Naveen-R-77",
      live: "#",
    },
    {
      title: "Resort Booking System",
      description: "This project is a Java-based application developed to manage resort room bookings efficiently. It allows users to view available rooms, make reservations, and receive booking confirmations. The system includes core features like customer management, room availability tracking, and booking history, all implemented using Java's object-oriented features and file or database handling.",
      image: "/images/resort-photo.jpg",
      technologies: ["Java", "MySQL"],
      github: "https://github.com/Naveen-R-77",
      live: "#",
    },
  ]

  const experiences = [
    {
      title: "💼 Work Experience",
      company: " ",
      period: "2025 - Present",
      location: "TamilNadu, INDIA",
      description:
        "While I may not have formal industry experience yet, I've actively built a strong foundation through hands-on projects, practical learning, and technical exploration. Below is an overview of my journey so far",
    },
   
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setResult(null)
    try {
      await emailjs.send(
        'service_mpnw7l2',
        'template_ctoncvb',
        {
          title: form.subject,
          name: form.name,
          message: form.message,
          email: form.email,
        },
        'YiB3tb1nyXPfCfrP0'
      )
      setResult('Message sent successfully!')
      setForm({ name: '', email: '', subject: '', message: '' })
      if (formRef.current) formRef.current.reset()
    } catch (error) {
      setResult('Failed to send message. Please try again later.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Naveen Ramesh</div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Naveen-R-77"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/naveen-ramesh-bb83b1291"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                AI Engineer
                  <span className="block text-primary">& Full Stack Developer</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  I create exceptional digital experiences through clean code, innovative solutions, and user-centered
                  design.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection("projects")}>
                  View My Work
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  TamilNadu, INDIA
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for work
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl" />
                <Image
                  src="/images/hero3-photo.jpg"
                  alt="Naveen Ramesh"
                  width={400}
                  height={500}
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">About Me</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                I am currently pursuing my third year of B.Tech in Artificial Intelligence and Machine Learning at Kongu Engineering College.
                 With a passion for building innovative and impactful digital solutions, I have successfully completed 5+ projects spanning various domains in software development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                My core expertise lies in full-stack web development, where I specialize in JavaScript technologies including React.js, Node.js, Express, and MongoDB. I have hands-on experience working with both frontend and backend technologies,
                 enabling me to develop responsive user interfaces as well as robust server-side applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                Driven by curiosity and a continuous learning mindset, I enjoy turning complex problems into simple, user-friendly solutions.
                 I am actively enhancing my skills and looking forward to contributing to real-world projects and collaborative development environments.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-semibold">Experience</span>
                  </div>
                  <p className="text-2xl font-bold">Fresher</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Code className="w-5 h-5" />
                    <span className="font-semibold">Projects</span>
                  </div>
                  <p className="text-2xl font-bold">5+ Completed</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/profile-photo.jpg"
                alt="Working"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I work with a diverse set of technologies to bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.github} className="gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.live} className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Work Experience</h2>
            <p className="text-lg text-muted-foreground">My professional journey and key achievements</p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
                {index < experiences.length - 1 && <div className="absolute -bottom-4 left-8 w-px h-8 bg-border" />}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">naveenramesh157@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-muted-foreground">linkedin.com/in/naveen-ramesh-bb83b1291</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-muted-foreground">github.com/Naveen-R-77</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <form ref={formRef} className="space-y-6" onSubmit={handleSendEmail}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    placeholder="Project inquiry"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <Button className="w-full" size="lg" type="submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
                {result && (
                  <div className={`text-center text-sm ${result.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{result}</div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">© {new Date().getFullYear()} Naveen Ramesh. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://github.com/Naveen-R-77"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/naveen-ramesh-bb83b1291"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
