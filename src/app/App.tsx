import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Download,
  Code,
  Server,
  Database,
  Layers,
  Cloud,
  Wrench,
  GraduationCap,
  Target,
  Award,
  MapPin,
  FolderGit2
} from 'lucide-react';
import { Toaster } from 'sonner';
import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import { GitHubProjects } from './components/GitHubProjects';
import { TypingAnimation } from './components/TypingAnimation';
import { ContactForm } from './components/ContactForm';

export default function App() {
  const githubUsername = 'SHasHwatModi05';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id === 'home' ? 'hero' : id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'Middlewares', 'Authentication'],
    database: ['MongoDB', 'Supabase'],
    fullstack: ['Full Stack Development'],
    clouddevops: ['AWS (EC2, S3, CloudFront, IAM)', 'CI/CD Pipelines'],
    tools: ['Git', 'GitHub', 'GitHub Actions', 'GitHub Pages', 'VS Code']
  };

  // Certificates from Google Drive
  const certificates = [
    {
      title: 'RIFT HACKATHON',
      description: 'Built a scalable full-stack application with cloud integration',
      link: 'https://drive.google.com/file/d/1VFtgKEY_EIR7ysdsAEDyq0pbuufu1kHS/view'
    },
    {
      title: 'PROMPTFORGE',
      description: 'Developed AI-powered prompts and automation workflows',
      link: 'https://drive.google.com/file/d/1mN1YibRJOesgQgbcRaEtMnZ5qgppnpL1/view'
    },
    {
      title: 'GRAPHIC ERA HACKATHON',
      description: 'Collaborated on real-world problem solving using modern tech stack',
      link: 'https://drive.google.com/file/d/1U1OIeoOBIdZmmGDyVyrvV8BG040ExOUj/view'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <ThemeToggle />
      <Navigation scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-gradient-to-br from-white via-primary/[0.02] to-white">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Animated Gradient Blobs */}
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] mb-6 tracking-tight leading-tight">
                  Shashwat Modi
                  <motion.span
                    className="inline-block w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-primary to-emerald-400 rounded-full ml-2"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold text-[#0f172a] min-h-[80px]"
              >
                <TypingAnimation
                  roles={[
                    'Full Stack Developer',
                    'Cloud & DevOps Enthusiast 🚀'
                  ]}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
              >
                I build scalable, high-performance applications and automate workflows using modern cloud and DevOps technologies.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-emerald-500 text-white rounded-xl font-bold inline-flex items-center gap-3 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 shadow-lg shadow-primary/20"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl font-bold inline-flex items-center gap-3 hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <FolderGit2 className="w-5 h-5" />
                  View Projects
                </motion.button>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex gap-4 pt-4"
              >
                {[
                  { icon: Github, href: `https://github.com/${githubUsername}`, label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/shashwat-modi-1b1435282/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:modiiofficialwork@gmail.com', label: 'Email' },
                  { icon: Instagram, href: 'https://www.instagram.com/shashwat_modi_?igsh=ZmM1ZGo3Y2gzbmZk', label: 'Instagram' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-slate-600 group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              {/* DevOps Illustration */}
              <div className="relative w-full h-[500px]">
                {/* Cloud Icon */}
                <motion.div
                  className="absolute top-10 left-10 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Cloud className="w-16 h-16 text-sky-500" />
                  <span className="absolute -top-2 -right-2 px-2 py-1 bg-primary text-white text-xs font-bold rounded-full">AWS</span>
                </motion.div>

                {/* Docker Icon */}
                <motion.div
                  className="absolute top-40 right-20 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Database className="w-16 h-16 text-blue-600" />
                  <span className="absolute -top-2 -right-2 px-2 py-1 bg-primary text-white text-xs font-bold rounded-full">Docker</span>
                </motion.div>

                {/* Kubernetes Icon */}
                <motion.div
                  className="absolute bottom-32 left-20 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <Server className="w-16 h-16 text-blue-500" />
                  <span className="absolute -top-2 -right-2 px-2 py-1 bg-primary text-white text-xs font-bold rounded-full">K8s</span>
                </motion.div>

                {/* CI/CD Pipeline Icon */}
                <motion.div
                  className="absolute bottom-10 right-10 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Code className="w-16 h-16 text-emerald-600" />
                  <span className="absolute -top-2 -right-2 px-2 py-1 bg-primary text-white text-xs font-bold rounded-full">CI/CD</span>
                </motion.div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d="M 120 80 Q 300 150 360 200"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <motion.path
                    d="M 360 200 Q 300 350 140 400"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 2, delay: 2, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Background Gradient Blob */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-full blur-3xl -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
              About <motion.span
                className="text-primary"
                whileHover={{ scale: 1.05, display: "inline-block" }}
              >Me</motion.span>
            </h2>
            <motion.div
              className="w-24 h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full shadow-lg shadow-primary/30 mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                I'm <strong className="text-foreground text-lg md:text-xl">Shashwat Modi</strong>, a Full Stack Developer and Cloud & DevOps enthusiast with a strong interest in building scalable, efficient, and production-ready applications. I enjoy transforming ideas into functional digital solutions and continuously exploring modern technologies to enhance my development skills.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                My expertise lies in working across the entire development stack—from creating responsive, user-friendly frontends to designing and managing robust, cloud-native backend systems. I focus on writing clean, maintainable code and implementing best practices like <span className="text-primary font-semibold">CI/CD</span> automation, performance optimization, and infrastructure as code to ensure reliable and efficient deployments.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Currently, I'm deepening my knowledge in <span className="text-primary font-semibold">AWS</span>, <span className="text-primary font-semibold">Kubernetes</span>, and <span className="text-primary font-semibold">Docker</span>, while building end-to-end deployment pipelines using GitHub Actions. I am passionate about DevOps culture, automation, and continuous improvement, and I strive to build systems that are not only functional but also scalable, secure, and future-ready.
              </motion.p>
            </motion.div>

            <div className="space-y-5">
              {[
                { icon: GraduationCap, title: 'Education', text: 'Computer Science & Engineering' },
                { icon: Target, title: 'Objective', text: 'To leverage full-stack development and DevOps skills to create impactful solutions while growing as a cloud-native engineer.' },
                { icon: Award, title: 'Hackathons', text: 'RIFT • PromptForge • Graphic Era' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="p-6 bg-card border-2 border-border rounded-xl hover:bg-primary/5 hover:border-primary hover:shadow-xl hover:shadow-primary/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-base md:text-lg">{item.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-b from-secondary/20 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
              Skills <motion.span
                className="text-primary"
                whileHover={{ scale: 1.05, display: "inline-block" }}
              >& Expertise</motion.span>
            </h2>
            <motion.div
              className="w-24 h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full shadow-lg shadow-primary/30 mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Frontend', skills: skills.frontend },
              { icon: Server, title: 'Backend', skills: skills.backend },
              { icon: Database, title: 'Database', skills: skills.database },
              { icon: Layers, title: 'Full Stack', skills: skills.fullstack },
              { icon: Cloud, title: 'Cloud & DevOps', skills: skills.clouddevops },
              { icon: Wrench, title: 'Tools', skills: skills.tools }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="p-8 bg-card border-2 border-border rounded-xl hover:bg-primary/5 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="w-10 h-10 text-primary mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.12, y: -3 }}
                      className="px-3.5 py-2 text-sm bg-primary/10 text-primary rounded-full font-semibold border border-primary/30 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
              Featured <motion.span
                className="text-primary"
                whileHover={{ scale: 1.05, display: "inline-block" }}
              >Projects</motion.span>
            </h2>
            <motion.div
              className="w-24 h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full mb-6 shadow-lg shadow-primary/30 mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-muted-foreground text-base md:text-lg font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Auto-fetched from <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">GitHub</a>
            </motion.p>
          </motion.div>

          <GitHubProjects username={githubUsername} maxRepos={6} />
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-gradient-to-b from-secondary/20 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
              Certificates <motion.span
                className="text-primary"
                whileHover={{ scale: 1.05, display: "inline-block" }}
              >& Achievements</motion.span>
            </h2>
            <motion.div
              className="w-24 h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full shadow-lg shadow-primary/30 mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="p-8 bg-card border-2 border-border rounded-xl hover:bg-primary/5 hover:border-primary hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 group flex flex-col"
              >
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <Award className="w-12 h-12 text-primary drop-shadow-lg" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">{cert.title}</h3>
                <p className="text-muted-foreground text-base mb-8 leading-relaxed flex-grow">{cert.description}</p>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block w-full px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 shadow-lg text-center"
                >
                  View Certificate
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
              Get In <motion.span
                className="text-primary"
                whileHover={{ scale: 1.05, display: "inline-block" }}
              >Touch</motion.span>
            </h2>
            <motion.div
              className="w-24 h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full shadow-lg shadow-primary/30 mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                className="text-muted-foreground text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I'm always open to discussing new projects, opportunities, or just a friendly chat about tech.
              </motion.p>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3 text-muted-foreground text-base md:text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <a
                    href="mailto:modiiofficialwork@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    modiiofficialwork@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-start gap-3 text-muted-foreground text-base md:text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Culture Living Boys Hostel, Knowledge Park 3, Greater Noida, Uttar Pradesh, India</span>
                </motion.div>
              </div>

              {/* Response time badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-primary">Usually responds within 24 hours</span>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Shashwat Modi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}