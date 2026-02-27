"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Download, ArrowUpRight, Code2, Cloud, Layers } from "lucide-react";

const stats = [
  { value: "15+", label: "Projects Shipped", icon: Code2 },
  { value: "1000+", label: "Hours of Code", icon: Layers },
  { value: "5+", label: "Microservices", icon: Cloud },
  { value: "10+", label: "Technologies", icon: Code2 },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center py-24 lg:py-32 bg-[#fafafa] dark:bg-rich-black overflow-hidden selection:bg-indigo-500/30"
    >
      {/* Background Grid - Matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Gradient Ambient Light */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6">
        <motion.div
          style={{ scale, opacity }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                About Me
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.1]">
                Building digital
                <br />
                <span className="text-zinc-400 dark:text-zinc-600">experiences that</span>
                <br />
                <span className="text-indigo-600 dark:text-indigo-500">matter.</span>
              </h2>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-2xl"
            >
              <p>
                Self-taught Full Stack Developer who pivoted from a BCA degree to building production-grade systems. I've shipped 15+ projects across e-commerce, microservices, and cloud storage, dedicating 1000+ hours to mastering the{" "}
                <span className="text-zinc-900 dark:text-zinc-200 font-medium border-b-2 border-indigo-500/30">
                  MERN stack
                </span>{" "}
                and modern DevOps practices.
              </p>
              <p>
                I specialize in distributed backends — breaking monoliths into Node.js microservices, containerizing with Docker, managing async communication via RabbitMQ, and deploying on AWS EC2/S3. On the frontend, I pair React & Next.js with GSAP and Framer Motion to build interfaces that feel as good as they perform.
              </p>
            </motion.div>

            {/* Stats Grid - Bento Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="group relative p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="w-4 h-4 text-indigo-500/60" />
                  </div>
                  <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-600 dark:text-indigo-400 mb-2">
                  Looking For
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Fast-paced environments where I can build scalable systems from the ground up.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-600 dark:text-indigo-400 mb-2">
                  Currently Learning
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  React Native for cross-platform apps, Python for AI integrations.
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="/akashkumar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium transition-colors"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Right Image - 5 columns */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-linear-to-tr from-indigo-500/20 to-violet-500/20 rounded-[2.5rem] blur-2xl opacity-60" />

              {/* Image Container */}
              <div className="relative aspect-4/5 w-full max-w-md mx-auto lg:max-w-none rounded-4xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-zinc-900/5 dark:shadow-black/20">
                <motion.div style={{ y }} className="absolute inset-0 h-[115%] w-full -top-[7.5%]">
                  <Image
                    src="/ak.jpg"
                    alt="Akash Kumar — Full Stack Developer"
                    fill
                    className="object-cover hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/40 via-transparent to-transparent" />

                {/* Floating Tag */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Open to opportunities
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700 flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Years Exp.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}