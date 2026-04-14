import { motion, useScroll, useSpring } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Server,
  Database,
  Cloud,
  GitBranch,
  Layers,
  Sparkles,
  Rocket,
  Zap,
  Award,
  Target
} from 'lucide-react';
import { Toaster } from 'sonner';
import { AnimatedGrid } from './components/AnimatedGrid';
import { FloatingParticles } from './components/FloatingParticles';
import { TypingAnimation } from './components/TypingAnimation';
import { SkillCard } from './components/SkillCard';
import { GitHubProjects } from './components/GitHubProjects';
import { CertificateCard } from './components/CertificateCard';
import { ContactForm } from './components/ContactForm';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const githubUsername = 'SHasHwatModi05';

  const roles = [
    'Full Stack Developer',
    'Cloud Enthusiast',
    'DevOps Engineer',
    'Problem Solver'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Professional Certifications
  // Note: LinkedIn doesn't provide a public API for fetching certificates
  // Visit: https://www.linkedin.com/in/shashwat-modi-1b1435282 for verification
  const certificates = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: 'December 2024',
      credentialId: 'AWS-CCP-12345',
      credentialUrl: 'https://www.linkedin.com/in/shashwat-modi-1b1435282'
    },
    {
      title: 'Full Stack Web Development Bootcamp',
      issuer: 'Udemy - Dr. Angela Yu',
      date: 'November 2024',
      credentialId: 'UC-FULLSTACK-2024',
      credentialUrl: 'https://www.linkedin.com/in/shashwat-modi-1b1435282'
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy - Maximilian Schwarzmüller',
      date: 'October 2024',
      credentialId: 'UC-REACT-2024',
      credentialUrl: 'https://www.linkedin.com/in/shashwat-modi-1b1435282'
    },
    {
      title: 'Node.js Developer Certification',
      issuer: 'Udemy',
      date: 'September 2024',
      credentialUrl: 'https://www.linkedin.com/in/shashwat-modi-1b1435282'
    },
    {
      title: 'DevOps & CI/CD with GitHub Actions',
      issuer: 'GitHub Learning Lab',
      date: 'August 2024',
      credentialUrl: 'https://www.linkedin.com/in/shashwat-modi-1b1435282'
    },
    {
      title: 'MongoDB for Developers',
      issuer: 'MongoDB University',
      date: 'July 2024',
      credentialUrl: 'https://www.linkedin.com/in/shashwat-modi-1b1435282'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Toaster position="top-right" />
      <ThemeToggle />
      <FloatingParticles />

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan to-accent z-50 origin-left shadow-lg shadow-primary/50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedGrid />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-12 h-12 text-primary mx-auto" />
              </motion.div>

              <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
                <motion.span
                  className="bg-gradient-to-r from-primary via-cyan to-accent bg-clip-text text-transparent bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "200% center", "0% center"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{
                    textShadow: '0 0 60px rgba(59, 130, 246, 0.15)',
                  }}
                >
                  Shashwat Modi
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-10"
            >
              <p className="text-3xl md:text-4xl font-bold mb-4 h-12">
                <TypingAnimation roles={roles} />
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
                I build{' '}
                <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg">scalable web applications</span>
                {' '}and{' '}
                <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded-lg">CI/CD pipelines</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mb-14"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-10 py-5 bg-gradient-to-r from-primary via-cyan to-accent text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-all flex items-center gap-3 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Rocket className="w-5 h-5 relative z-10" />
                <span className="relative z-10">View Projects</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/80 dark:bg-white/5 backdrop-blur-xl border-2 border-gray-200 dark:border-white/10 text-foreground rounded-2xl font-bold text-lg hover:bg-white dark:hover:bg-white/10 hover:border-primary/50 transition-all flex items-center gap-3 shadow-lg relative group"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <Download className="w-5 h-5 text-primary" />
                <span>Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 rounded-2xl transition-all duration-300" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-6 justify-center"
            >
              {[
                { icon: Github, href: `https://github.com/${githubUsername}`, label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shashwat-modi-1b1435282', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:modiiofficialwork@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all"
                  aria-label={social.label}
                  style={{
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                >
                  <social.icon className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center p-2 backdrop-blur-sm bg-white/60 dark:bg-white/10"
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/30 dark:shadow-primary/50"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-cyan to-accent flex items-center justify-center mx-auto shadow-lg shadow-primary/50">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              About <span className="bg-gradient-to-r from-primary via-cyan to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-2 bg-gradient-to-r from-primary via-cyan to-accent mx-auto rounded-full shadow-lg shadow-primary/50"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                'Full Stack Developer with experience in building responsive web applications and REST APIs.',
                'Skilled in React, Node.js, Express, and MongoDB, with hands-on experience deploying applications on AWS infrastructure.',
                'Familiar with AWS services including EC2, S3, IAM, and CloudFront, and experienced with CI/CD automation using GitHub Actions.',
                'Passionate about building scalable systems and automation that make a difference.'
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="relative text-lg text-foreground/90 leading-relaxed pl-6 py-2 border-l-4 border-primary/30 group-hover:border-primary transition-colors">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: Rocket,
                  title: 'Education',
                  description: 'Computer Science & Engineering',
                  gradient: 'from-primary to-accent'
                },
                {
                  icon: Target,
                  title: 'Objective',
                  description: 'Build impactful, scalable solutions',
                  gradient: 'from-accent to-primary'
                },
                {
                  icon: Sparkles,
                  title: 'Experience',
                  description: 'Full Stack & Cloud Infrastructure',
                  gradient: 'from-primary via-accent to-primary'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.03, x: 8 }}
                  className="relative group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all shadow-lg hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20"
                    style={{
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/50 group-hover:shadow-xl group-hover:shadow-primary/60`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              Skills & <span className="bg-gradient-to-r from-primary via-cyan to-accent bg-clip-text text-transparent">Expertise</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-2 bg-gradient-to-r from-primary via-cyan to-accent mx-auto rounded-full shadow-lg shadow-primary/50"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <SkillCard
              category="Frontend"
              skills={['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design']}
              icon={Code2}
              delay={0}
            />
            <SkillCard
              category="Backend"
              skills={['Node.js', 'Express.js', 'REST APIs']}
              icon={Server}
              delay={0.1}
            />
            <SkillCard
              category="Database"
              skills={['MongoDB', 'Supabase']}
              icon={Database}
              delay={0.2}
            />
            <SkillCard
              category="Full Stack"
              skills={['Full Stack Development']}
              icon={Layers}
              delay={0.3}
            />
            <SkillCard
              category="Cloud & DevOps"
              skills={['AWS (EC2, S3, CloudFront, IAM)', 'CI/CD Pipelines']}
              icon={Cloud}
              delay={0.4}
            />
            <SkillCard
              category="Tools"
              skills={['Git', 'GitHub', 'GitHub Actions', 'GitHub Pages']}
              icon={GitBranch}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              GitHub <span className="bg-gradient-to-r from-primary via-cyan to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-2 bg-gradient-to-r from-primary via-cyan to-accent mx-auto rounded-full shadow-lg shadow-primary/50 mb-6"
            />
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              Live projects fetched from{' '}
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-cyan transition-colors font-semibold"
              >
                @{githubUsername}
              </a>
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <GitHubProjects username={githubUsername} maxRepos={6} />
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              Certificates & <span className="bg-gradient-to-r from-accent via-primary to-cyan bg-clip-text text-transparent">Achievements</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-2 bg-gradient-to-r from-accent via-primary to-cyan mx-auto rounded-full shadow-lg shadow-accent/50 mb-4"
            />
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Professional certifications verified on{' '}
              <a
                href="https://www.linkedin.com/in/shashwat-modi-1b1435282"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-cyan transition-colors font-semibold"
              >
                LinkedIn Profile
              </a>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={index}
                {...cert}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              Get In <span className="bg-gradient-to-r from-primary via-cyan to-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-2 bg-gradient-to-r from-primary via-cyan to-accent mx-auto rounded-full shadow-lg shadow-primary/50"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Let's work together
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'modiiofficialwork@gmail.com',
                    href: 'mailto:modiiofficialwork@gmail.com',
                    gradient: 'from-primary to-accent'
                  },
                  {
                    icon: Github,
                    label: 'GitHub',
                    value: `github.com/${githubUsername}`,
                    href: `https://github.com/${githubUsername}`,
                    gradient: 'from-accent to-primary'
                  },
                  {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/shashwat-modi-1b1435282',
                    href: 'https://www.linkedin.com/in/shashwat-modi-1b1435282',
                    gradient: 'from-cyan to-accent'
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 12, scale: 1.02 }}
                    className="flex items-center gap-4 p-6 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl hover:border-primary/50 transition-all group shadow-lg hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20"
                    style={{
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                    }}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/50 group-hover:shadow-xl group-hover:shadow-primary/60`}>
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{contact.label}</p>
                      <p className="font-bold text-lg text-foreground">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground font-medium"
            >
              © 2026 Shashwat Modi. Crafted with passion.
            </motion.p>
            <div className="flex gap-6">
              {[
                { icon: Github, href: `https://github.com/${githubUsername}` },
                { icon: Linkedin, href: 'https://linkedin.com/in/shashwatmodi' },
                { icon: Mail, href: 'mailto:modiiofficialwork@gmail.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -4, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
