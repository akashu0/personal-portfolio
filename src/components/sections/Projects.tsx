"use client";

import { memo, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  liveUrl: string;
  featured?: boolean;
}

const projects = [
  {
    title: "EduGuardian",
    category: "Education Platform",
    image: "/images/projects/edu.png",
    description: "Study abroad consultancy platform helping students explore universities and manage applications with a streamlined digital experience.",
    liveUrl: "https://www.myeduguardian.com/",
    featured: true
  },
  {
    title: "EduGuardian CRM",
    category: "CRM System",
    image: "/images/projects/crm.png",
    description: "Advanced CRM connecting 3+ databases with role-based access for 50+ users. Boosted sales by 20% and improved lead conversion by 10–20%.",
    liveUrl: "https://crm.myeduguardian.com/",
    featured: true
  },
  {
    title: "Selligo",
    category: "E-commerce",
    image: "/images/projects/selligo.png",
    description: "E-commerce platform for selling old phones with secure payment integration and smooth product evaluation workflow.",
    liveUrl: "https://selligo.in/"
  },
  {
    title: "LMS Backend",
    category: "Microservices",
    image: "/images/projects/lms.png",
    description: "Learning Management System backend built with scalable microservices architecture and secure APIs.",
    liveUrl: "https://mindsat.netlify.app/"
  },
  {
    title: "Swappify",
    category: "Marketplace",
    image: "/images/projects/swappify.png",
    description: "Marketplace for selling old phones and laptops with pricing logic and workflow automation.",
    liveUrl: "https://swappify.in/"
  },
  {
    title: "Cashback Platform",
    category: "Affiliate System",
    image: "/images/projects/cashback.png",
    description: "Cashback and coupon-based affiliate platform with referral tracking and performance optimization.",
    liveUrl: "https://musical-shortbread-d8a1a5.netlify.app/"
  },
  {
    title: "Niftiland",
    category: "Real Estate",
    image: "/images/projects/nifitiland.png",
    description: "Digital real estate investment platform allowing users to buy small property shares with personalized dashboards.",
    liveUrl: "https://test-niftiland.netlify.app/"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-[#fafafa] dark:bg-rich-black overflow-hidden selection:bg-indigo-500/30"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 space-y-4"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Selected Works
          </h2>
          <div className="flex items-center gap-4 pt-2">
            <div className="w-16 h-px bg-indigo-500/40" />
            <p className="text-zinc-500 dark:text-zinc-500 text-sm font-medium tracking-wide">Recent Projects</p>
          </div>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Regular Projects - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeaturedProjectCard = memo(function FeaturedProjectCard({
  project,
  index
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative aspect-16/10 rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-700"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          {/* Category */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            {project.category}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>

          {/* CTA */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 rounded-full font-semibold text-sm hover:bg-indigo-50 transition-colors duration-300 group/btn"
          >
            View Project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Number Badge */}
      <div className="absolute top-6 right-6">
        <span className="text-5xl font-bold text-white/10">
          0{index + 1}
        </span>
      </div>
    </motion.div>
  );
});

const ProjectCard = memo(function ProjectCard({
  project,
  index
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-indigo-500/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Link Icon */}
        <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <ExternalLink className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            {project.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-4 flex-1">
          {project.description}
        </p>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 group/link"
        >
          View Project
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
});