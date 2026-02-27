"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  ArrowUpRight
} from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    description: "Building responsive, interactive user interfaces",
    icon: Code2,
    color: "indigo",
    skills: [
      "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js",
      "HTML5", "CSS3", "Tailwind CSS", "Vite", "Material UI",
      "Shadcn UI", "Bootstrap", "Framer Motion", "Redux Toolkit", "Context API", "Zustand"
    ]
  },
  {
    name: "Backend",
    description: "Scalable server-side architecture & APIs",
    icon: Server,
    color: "violet",
    skills: ["Node.js", "Express.js", "REST API", "NestJS", "RabbitMQ", "WebSockets", "Python", "FastAPI"]
  },
  {
    name: "Database",
    description: "Data modeling & management systems",
    icon: Database,
    color: "rose",
    skills: ["MongoDB", "PostgreSQL", "Mongoose", "NoSQL", "Redis", "MySQL"]
  },
  {
    name: "DevOps & Cloud",
    description: "Deployment, CI/CD & infrastructure",
    icon: Cloud,
    color: "emerald",
    skills: ["Docker", "Nginx", "AWS EC2", "AWS S3", "Google Cloud", "Firebase", "GitHub Actions"]
  },
];

const tools = [
  { name: "Git", category: "Version Control" },
  { name: "Postman", category: "API Testing" },
  { name: "Figma", category: "Design" },
  { name: "VS Code", category: "Editor" },
  { name: "GitHub", category: "Platform" },
  { name: "Insomnia", category: "API Testing" },
  { name: "Notion", category: "Productivity" },
  { name: "Vercel", category: "Deployment" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Slower, more visible parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-32 lg:py-40 bg-[#fafafa] dark:bg-rich-black overflow-hidden selection:bg-indigo-500/30"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header - Slower entrance */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight"
          >
            Tech Stack &<br />
            <span className="text-zinc-400 dark:text-zinc-600">Capabilities</span>
          </motion.h2>
        </motion.div>

        {/* Bento Grid Layout - Slower staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              className="group relative p-8 lg:p-10 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className={`p-4 rounded-2xl bg-${category.color}-500/10 text-${category.color}-600 dark:text-${category.color}-400`}
                  >
                    <category.icon className="w-7 h-7" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 text-zinc-400 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              {/* Skills Tags - Slower stagger */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + skillIndex * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-700 dark:hover:text-indigo-300 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-500 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Decorative Corner - Slower fade */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${category.color}-500/5 rounded-bl-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            </motion.div>
          ))}
        </div>

        {/* Tools Section - Slower entrance */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Development Tools
            </h3>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
          </motion.div>

          {/* Tools Grid - Slower stagger */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-5 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 text-center hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-500 cursor-default hover:shadow-lg hover:shadow-indigo-500/5"
              >
                <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                  {tool.name}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  {tool.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA - Slower entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-zinc-600 dark:text-zinc-400 mb-6 text-lg"
          >
            Always learning new technologies to stay ahead
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-500/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            Currently exploring AI/ML integration
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}