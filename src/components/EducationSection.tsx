import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Book } from 'lucide-react';

interface EducationSectionProps {
  isDark: boolean;
}

export function EducationSection({ isDark }: EducationSectionProps) {
  const education = [
    {
      title: "Diploma in Information Technology",
      subtitle: "Specializing in Software Development",
      institution: "Belgium iTversity Campus",
      location: "Pretoria, South Africa",
      period: "Jul 2021 - Dec 2023",
      description: "Comprehensive program covering software development fundamentals, database management, and enterprise application development. Built strong foundation in modern programming languages and development methodologies.",
      highlights: [
        "Software Development Fundamentals",
        "Database Design & Management",
        "Web Development Technologies",
        "Object-Oriented Programming",
        "System Analysis & Design",
        "Project Management"
      ],
      icon: GraduationCap,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "High School Diploma",
      subtitle: "Matric Certificate",
      institution: "Metro Deaf School",
      location: "Minnesota, United States",
      period: "Jan 2019 - Jun 2020",
      description: "Transformative experience completing final years of high school in specialized deaf education environment. Developed strong communication skills in American Sign Language and built cultural awareness.",
      highlights: [
        "American Sign Language Proficiency",
        "Cross-Cultural Communication",
        "Adaptive Learning Strategies",
        "Leadership & Self-Advocacy",
        "Technology Integration",
        "Community Building"
      ],
      icon: Book,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner Foundation", date: "Aug 2025", credly: "https://www.credly.com/users/africa-bulumko-jarana" },
    { name: "iOS Development", date: "Aug 2025", pdf: "./iOS Development.pdf" },
    { name: "Front-End Software Engineering Job Simulation", date: "Aug 2025", pdf: "./Front-End Software Engineering Job Simulation.pdf" },
    { name: "Customer Service Job Simulation", date: "Aug 2025", pdf: "./Customer Service Job Simulation.pdf" },
    { name: "Service Desk Job Simulation", date: "Aug 2025", pdf: "./Service Desk Job Simulation.pdf" },
    { name: "Technology Engineering Job Simulation", date: "Aug 2025", pdf: "./Technology Engineering Job Simulation.pdf" },
    { name: "Microsoft Azure Fundamentals: AZ-900", date: "Aug 2025", pdf: "./Microsoft Azure Fundamentals AZ-900.pdf" },
    { name: "Azure AI Fundamentals: AI-900", date: "Aug 2025", pdf: "./Azure AI Fundamentals  AI-900.pdf" },
    { name: "Advanced Software Engineering Job Simulation", date: "Aug 2025", pdf: "./Advanced Software Engineering Job Simulation.pdf" },
    { name: "ASP.NET Core Foundations", date: "Aug 2025", pdf: "./ASP.NET Core Foundations.pdf" },
    { name: "Unsupervised Learning, Recommenders, Reinforcement Learning", date: "Oct 2025", pdf: "./Unsupervised Learning, Recommenders, Reinforcement Learning.pdf" },
    { name: "AI For Everyone", date: "Aug 2025", pdf: "./AI For Everyone.pdf" },
    { name: "AI Foundations: Prompt Engineering with ChatGPT", date: "Aug 2025", pdf: "./AI Foundations- Prompt Engineering with ChatGPT.pdf" },
    { name: "Supervised Machine Learning: Regression and Classification", date: "Oct 2025", pdf: "./Supervised Machine Learning- Regression and Classification.pdf" },
    { name: "Solving Problems with Creative and Critical Thinking", date: "Oct 2025", pdf: "./Solving Problems with Creative and Critical Thinking.pdf" }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden scroll-mt-20">
      {/* Insanely animated background elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Morphing geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32"
          animate={{
            borderRadius: ["50%", "0%", "25%", "50%"],
            rotate: [0, 360, 180, 360],
            scale: [1, 1.5, 0.8, 1.3, 1],
            background: [
              "linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))",
              "linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(147, 51, 234, 0.3))",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.3))",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: "blur(2xl)",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        />

        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40"
          animate={{
            borderRadius: ["0%", "50%", "25%", "0%"],
            rotate: [360, 0, 180, 0],
            scale: [1.3, 1, 1.8, 0.9, 1.3],
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
            background: [
              "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
              "linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))",
              "linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3))",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: "blur(2xl)",
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Energy waves */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 border-2 border-purple-500/20 rounded-full"
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 0.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{
            transformOrigin: "center",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 border border-blue-500/15 rounded-full"
          animate={{
            scale: [0, 2.5, 0],
            opacity: [0, 0.3, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2,
          }}
          style={{
            transformOrigin: "center",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Academic journey from deaf education excellence to technical mastery
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                className="relative p-4 sm:p-6 md:p-8 rounded-3xl backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300 group"
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
                }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)",
                    }}
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                      rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                    }}
                  >
                    <edu.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {edu.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-purple-600 dark:text-purple-400 mb-2">
                      {edu.subtitle}
                    </p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <motion.p 
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {edu.description}
                </motion.p>

                {/* Highlights */}
                <div>
                  <h4 className="text-lg mb-4 text-purple-600 dark:text-purple-400">
                    Key Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlightIndex}
                        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + highlightIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating decoration */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl text-center mb-6 sm:mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Certifications & Training
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="p-2 sm:p-3 md:p-4 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 group"
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'
                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0"
                    initial={{ rotate: -180 }}
                    whileInView={{ rotate: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Award className="w-5 h-5 text-white" />
                  </motion.div>
                  
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm mb-1 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                    {(cert.pdf || cert.credly) && (
                      <a
                        href={cert.pdf || cert.credly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition-colors mt-1"
                      >
                        <Award className="w-3 h-3" />
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Educational quote */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-3xl backdrop-blur-lg border border-white/20"
          style={{
            background: isDark 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'
              : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.blockquote
            className="text-base sm:text-lg italic text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            "Moving to Metro Deaf School when I was in grade 11 was such a great and important experience for me. 
            It shaped my understanding of accessibility and inclusive communication, preparing me for my journey in technology."
          </motion.blockquote>
          <motion.cite 
            className="text-purple-600 dark:text-purple-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
          >
            - Africa Bulumko Jarana
          </motion.cite>
        </motion.div>
      </div>
    </section>
  );
}