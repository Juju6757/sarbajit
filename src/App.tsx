import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Linkedin, ChevronDown, Download, Briefcase, GraduationCap, Award, Code, ExternalLink, FolderGit2, Sun, Moon } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import TiltCard from './components/TiltCard';

const data = {
  basics: {
    name: "Sarbajit Rout",
    title: "AI&ML Engineer | Python | DSA | Web | And More.....",
    summary: "Passionate CSE student with hands-on experience in Machine Learning, I possess skills in designing responsive, user-friendly interfaces and developing efficient, scalable applications using multiple technology stacks. I am eager to contribute to a growth-oriented organization while enhancing my technical and professional skills. Proficient in Python, HTML, CSS, JavaScript. Eager to build outcome-driven projects and solve real-world problems.",
    location: "Rayagada, Odisha, India",
    email: "sarbajit.rout2006@gmail.com",
    phone: "",
    links: [
      "www.linkedin.com/in/sarbajit-rout-i10am07"
    ]
  },
  experience: [
    {
      company: "Future Interns",
      role: "Machine Learning Intern",
      dates: "January 2026 - February 2026 (1 month)",
      location: "",
      bullets: [
        "Hands-On Experience through industry relevant tasks and Outcome-Driven Projects.",
        "Developed a bulk candidate screening tool which helped the company to gain candidates of a particular niche selected from bulk resume data."
        
      ],
      link: "https://bulk-candidate-screening.streamlit.app/",
      howItWorkedLink: "https://www.linkedin.com/posts/sarbajit-rout-i10am07_machinelearning-nlp-datascience-ugcPost-7429447828479037440-EOxP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAPLu4B5QUSZWx2xfJYD5-WBVO3v0Mqufg"
    },
    {
      company: "Cognifyz Technologies",
      role: "Machine Learning Intern",
      dates: "January 2026 - February 2026 (1 month)",
      location: "",
      bullets: [
        "Hands-On Experience through industry relevant tasks and Outcome-Driven Projects.",
        "Developed Restaurant Recommendation System, Cuisine Classification, Restaurant Rating Prediction System using Machine Learning."
      ],
    }
  ],
  achievements: [],
  projects: [
    {
      name: "Attendance Management System",
      title: "Student Attendance Web Application - Teacher Portal",
      description: "A secure, comprehensive web-based student attendance management system built with HTML, CSS, and JavaScript. Features teacher authentication to ensure only authorized users can access and modify attendance data.",
      link: "https://juju6757.github.io/Attandance-web-app2/"
    }
  ],
  skills: [
    {
      group: "Top Skills",
      skills: [
        "Machine Learning",
        "Python",
        "Full Stack Web Development",
        "Data Structures & Algorithms"
      ]
    }
  ],
  education: [
    {
      institution: "Rayagada Autonomous College, Rayagada",
      degree: "BCA, Computer Science",
      dates: "July 2024 - August 2028"
    },
    {
      institution: "Sai Software Solutions, Rayagada",
      degree: "Post Graduate Diploma in Computer Application (PGDCA)",
      dates: "2022 - 2023",
    },
    {
      institution: "Rayagada Autonomous College, Rayagada",
      degree: "Higher Secondary (12th), Science",
      dates: "2022 - 2024"
    },
    {
      institution: "Swamy Vivekananda Vidya Mandir, Rayagada",
      degree: "Matriculation, CHSE Board",
      dates: "2022"
    }
  ],
  certifications: [
    {
      name: "Entrepreneurship-cum-Skill Development Programme (E-SDP) in Artificial Intelligence and Machine Learning",
      link: "https://www.linkedin.com/posts/sarbajit-rout-i10am07_newcertification-ai-machinelearning-share-7434088945128493056-uSCJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAPLu4B5QUSZWx2xfJYD5-WBVO3v0Mqufg"
    },
    {
      name: "Getting Started with Artificial Intelligence",
      link: "https://www.linkedin.com/posts/sarbajit-rout-i10am07_getting-started-with-artificial-intelligence-share-7407095059411685376--Ble?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAPLu4B5QUSZWx2xfJYD5-WBVO3v0Mqufg"
    },
    {
      name: "Introduction to HTML",
      link: "https://www.linkedin.com/posts/sarbajit-rout-i10am07_sarbajit-rout-has-successfully-completed-share-7372895514821926912-Bq4w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAPLu4B5QUSZWx2xfJYD5-WBVO3v0Mqufg"
    }
  ],
  awards: [],
  extra: []
};

function Splash() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl font-bold tracking-tighter text-white mb-8"
        >
          SR
        </motion.div>
        <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeading({ icon: Icon, title }: { icon: any, title: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex items-center gap-3 mb-12"
    >
      <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <Icon className="w-6 h-6 text-zinc-300" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [flipAngles, setFlipAngles] = useState({ x: 0, y: 0, z: 0 });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setFlipAngles(prev => ({
      x: prev.x + (Math.floor(Math.random() * 2) + 1) * 360,
      y: prev.y + (Math.floor(Math.random() * 2) + 1) * 360,
      z: prev.z + (Math.floor(Math.random() * 2) + 1) * 360,
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent text-zinc-300 font-sans selection:bg-white/20">
      <AnimatedBackground />
      
      <AnimatePresence>
        {loading && <Splash />}
      </AnimatePresence>

      <motion.button
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-colors cursor-pointer"
        onClick={toggleTheme}
        animate={{ 
          rotateX: flipAngles.x, 
          rotateY: flipAngles.y, 
          rotateZ: flipAngles.z 
        }}
        transition={{ type: "spring", stiffness: 60, damping: 10 }}
        aria-label="Toggle Theme"
      >
        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </motion.button>
      
      {!isDarkMode && (
        <style>{`
          html { filter: invert(1) hue-rotate(180deg); background: white; }
          img, video { filter: invert(1) hue-rotate(180deg); }
        `}</style>
      )}

      {!loading && (
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 pb-10 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 w-full">
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl flex-1 flex flex-col w-full"
              >
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-400 mb-8 backdrop-blur-sm self-start"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for opportunities
                </motion.div>
                
                <AnimatePresence>
                  {!isDesktop && (
                    <motion.div
                      layoutId="profile-photo"
                      className="w-48 h-48 md:w-64 md:h-64 mb-8 self-start"
                    >
                      <TiltCard delay={0.4}>
                        <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-2">
                          <img 
                            src="pic.webp" 
                            alt="Sarbajit Rout" 
                            className="w-full h-full object-cover rounded-2xl"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </TiltCard>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.h1 layout className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                  {data.basics.name}
                </motion.h1>
                <motion.h2 layout className="text-2xl md:text-3xl font-medium text-zinc-400 mb-8">
                  {data.basics.title}
                </motion.h2>
                <motion.p layout className="text-lg md:text-xl text-zinc-500 mb-12 max-w-2xl leading-relaxed">
                  {data.basics.summary}
                </motion.p>

                <motion.div layout className="flex flex-wrap items-center gap-4 mb-16">
                  <button 
                    onClick={() => scrollToSection('experience')}
                    className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
                  >
                    View Experience
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button 
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm"
                    onClick={() => window.print()}
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </button>
                </motion.div>

                <motion.div layout className="flex flex-wrap items-center gap-6 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {data.basics.location}
                  </div>
                  <a href={`mailto:${data.basics.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    {data.basics.email}
                  </a>
                  <a href={`https://${data.basics.links[0]}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {isDesktop && (
                  <motion.div
                    layoutId="profile-photo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-80 h-96 xl:w-96 xl:h-[32rem] shrink-0"
                  >
                    <TiltCard delay={0.4}>
                      <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-2">
                        <img 
                          src="pic.webp" 
                          alt="Sarbajit Rout" 
                          className="w-full h-full object-cover rounded-2xl"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </TiltCard>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <SectionHeading icon={Briefcase} title="Experience" />
            <div className="space-y-6">
              {data.experience.map((exp, i) => (
                <TiltCard key={i} delay={i * 0.1}>
                  <div
                    className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                        <div className="text-zinc-400 font-medium">{exp.company}</div>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 whitespace-nowrap">
                        {exp.dates}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, j) => {
                        const urlRegex = /(https?:\/\/[^\s)]+)/g;
                        const parts = bullet.split(urlRegex);
                        return (
                          <li key={j} className="flex items-start gap-3 text-zinc-400">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                            <span className="leading-relaxed">
                              {parts.map((part, k) => 
                                part.match(/^https?:\/\//) ? (
                                  <a key={k} href={part} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2">
                                    {part}
                                  </a>
                                ) : (
                                  part
                                )
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    {((exp as any).link || (exp as any).howItWorkedLink) && (
                      <div className="mt-6 flex flex-wrap gap-4">
                        {(exp as any).link && (
                          <a
                            href={(exp as any).link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors"
                          >
                            View Project
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {(exp as any).howItWorkedLink && (
                          <a
                            href={(exp as any).howItWorkedLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors"
                          >
                            How it Works
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </TiltCard>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <SectionHeading icon={FolderGit2} title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.projects.map((project, i) => (
                <TiltCard key={i} delay={i * 0.1}>
                  <div
                    className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm overflow-hidden flex flex-col h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                      <div className="text-zinc-300 font-medium mb-4">{project.title}</div>
                      <p className="text-zinc-400 leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors self-start"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </TiltCard>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <SectionHeading icon={GraduationCap} title="Education" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.education.map((edu, i) => (
                <TiltCard key={i} delay={i * 0.1}>
                  <div
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors h-full"
                  >
                    <div className="text-sm text-zinc-500 mb-3">{edu.dates}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                    <div className="text-zinc-400">{edu.institution}</div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            {/* Skills Section */}
            <section>
              <SectionHeading icon={Code} title="Skills" />
              <div className="space-y-8">
                {data.skills.map((group, i) => (
                  <TiltCard key={i} delay={0}>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
                      <h3 className="text-lg font-medium text-white mb-4">{group.group}</h3>
                      <div className="flex flex-wrap gap-3">
                        {group.skills.map((skill, j) => (
                          <span 
                            key={j}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 hover:bg-white/10 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <SectionHeading icon={Award} title="Certifications" />
              <div className="space-y-4">
                {data.certifications.map((cert, i) => (
                  <TiltCard key={i} delay={i * 0.1}>
                    <div
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <Award className="w-5 h-5 text-zinc-300" />
                        </div>
                        <div className="font-medium text-zinc-200">{cert.name}</div>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center shrink-0 gap-2 px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
                      >
                        Certificate
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="py-12 px-6 text-center text-zinc-600 text-sm border-t border-white/5">
            <p>© {new Date().getFullYear()} {data.basics.name}. All rights reserved.</p>
          </footer>
        </main>
      )}
    </div>
  );
}
