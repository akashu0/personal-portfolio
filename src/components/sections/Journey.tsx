"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const journey = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Nexsolvix",
    description: "Leading development of scalable real-world platforms including Study Abroad Portal, CRM with multi-database architecture, Used Devices Marketplace, and Digital Real Estate systems.",
    type: "work",
    location: "Hybrid"
  },
  {
    year: "2020-2023",
    role: "Fullstack Developer",
    company: "PaxoWealth",
    description: "Contributed to full-stack development of business automation tools and workflow systems using the MERN stack.",
    type: "work",
    location: "Onsite"
  },
  // {
  //   year: "2022-2022",
  //   role: "Full Stack Developer",
  //   company: "Freelance",
  //   description: "Delivered end-to-end web solutions including e-commerce platforms, CRM systems, and marketplace platforms with scalable architecture.",
  //   type: "work",
  //   location: "India"
  // },

  {
    year: "2017 - 2020",
    role: "BCA - Computer Applications",
    company: "Maharaja Agrasen Himalayan Garhwal University",
    description: "Built strong foundations in programming, databases, and software architecture through academic projects and system design.",
    type: "education",
    location: "Uttarakhand, India"
  }
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-[#fafafa] dark:bg-rich-black overflow-hidden selection:bg-indigo-500/30"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Experience & Education
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            My <span className="text-zinc-400 dark:text-zinc-600">Journey</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 max-w-md mx-auto">
            5+ years of building scalable systems and delivering impactful solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800 hidden lg:block -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-linear-to-b from-indigo-500 via-violet-500 to-transparent origin-top"
            />
          </div>

          {/* Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800 lg:hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-linear-to-b from-indigo-500 via-violet-500 to-transparent origin-top"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-0">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? "" : "lg:direction-rtl"
                  }`}
              >
                {/* Center Dot */}
                <div className="absolute left-8 lg:left-1/2 top-6 w-4 h-4 -translate-x-1/2 z-10">
                  <div className="w-full h-full rounded-full bg-indigo-500 border-4 border-[#fafafa] dark:border-rich-black shadow-lg shadow-indigo-500/30" />
                </div>

                {/* Content Card */}
                <div className={`pl-20 lg:pl-0 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"
                  }`}>
                  <div className="group relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-indigo-500/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10">

                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4 ${index % 2 === 0 ? "lg:ml-auto" : ""
                      }`}>
                      <Calendar className="w-3 h-3" />
                      {item.year}
                    </div>

                    {/* Role & Company */}
                    <div className="mb-4">
                      <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "lg:justify-end" : ""
                        }`}>
                        <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {item.type === "education" ? (
                            <GraduationCap className="w-4 h-4" />
                          ) : (
                            <Briefcase className="w-4 h-4" />
                          )}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                          {item.role}
                        </h3>
                      </div>
                      <p className={`text-sm text-zinc-500 dark:text-zinc-500 ${index % 2 === 0 ? "lg:text-right" : ""
                        }`}>
                        {item.company}
                      </p>
                    </div>

                    {/* Description */}
                    <p className={`text-zinc-600 dark:text-zinc-400 text-sm lg:text-base leading-relaxed mb-4 ${index % 2 === 0 ? "lg:ml-auto lg:max-w-sm" : "lg:max-w-sm"
                      }`}>
                      {item.description}
                    </p>

                    {/* Location */}
                    <div className={`flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-600 ${index % 2 === 0 ? "lg:justify-end" : ""
                      }`}>
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-indigo-500/5 to-transparent rounded-bl-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? "lg:col-start-2" : ""}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}