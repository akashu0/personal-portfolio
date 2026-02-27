"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(".reveal-text", { y: 100, opacity: 0 });
      gsap.set(".reveal-sub", { y: 30, opacity: 0 });
      gsap.set(".reveal-badge", { scale: 0.8, opacity: 0 });
      gsap.set(imageRef.current, { scale: 1.1, opacity: 0 });
      gsap.set(".stat-item", { y: 20, opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.2
      });

      // Staggered entrance
      tl.to(".reveal-badge", { scale: 1, opacity: 1, duration: 0.6 })
        .to(imageRef.current, { scale: 1, opacity: 1, duration: 1.2 }, "-=0.4")
        .to(".reveal-text", {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1
        }, "-=0.8")
        .to(".reveal-sub", {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8
        }, "-=0.6")
        .to(".stat-item", {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6
        }, "-=0.4");

      // Continuous floating animation
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Scroll parallax
      gsap.to(imageRef.current, {
        y: -80,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-rich-black selection:bg-indigo-500/30"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[96px]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content - 7 columns */}
          <div ref={contentRef} className="lg:col-span-7 space-y-8">

            {/* Status Badge */}
            <div className="reveal-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 tracking-wide">
                Available
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="overflow-hidden">
                <span className="reveal-text block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[0.9]">
                  Akash Kumar
                </span>
              </h1>
              <div className="overflow-hidden">
                <span className="reveal-text block text-2xl sm:text-3xl lg:text-4xl font-light text-zinc-500 dark:text-zinc-400 tracking-tight">
                  Full Stack Developer
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="reveal-sub text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-light">
              Crafting digital experiences with modern web technologies.
              Specialized in building scalable applications with{" "}
              <span className="text-zinc-900 dark:text-zinc-200 font-medium border-b-2 border-indigo-500/30">
                React, Node.js & Cloud Architecture
              </span>.
            </p>

            {/* CTA Buttons */}
            <div className="reveal-sub flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/akashkumar.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium transition-colors relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                Download Resume
              </a>
            </div>

            {/* Stats */}
            <div className="reveal-sub flex gap-8 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50">
              <div className="stat-item">
                <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">5+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mt-1">Years Exp.</div>
              </div>
              <div className="stat-item">
                <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">50+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div className="stat-item">
                <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">30+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mt-1">Clients</div>
              </div>
            </div>
          </div>

          {/* Right Image - 5 columns */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageRef}
              className="relative aspect-5/3 w-full max-w-md mx-auto lg:max-w-none"
            >
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-linear-to-tr from-indigo-500/20 to-violet-500/20 rounded-[2.5rem] blur-2xl opacity-60" />

              {/* Main Image Container */}
              <div className="relative h-full rounded-4xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-zinc-900/10 dark:shadow-black/20">
                <Image
                  src="/lightmode.png"
                  alt="Akash Kumar - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/60 via-transparent to-transparent opacity-60" />

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 dark:bg-black/20 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                      AK
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Akash Kumar</div>
                      <div className="flex items-center gap-1 text-white/70 text-xs">
                        <span>Full Stack Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Badge */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700 flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-sm font-bold text-green-600 dark:text-green-400 leading-tight">
                    Open to
                  </div>
                  <div className="text-sm font-bold text-green-600 dark:text-green-400 leading-tight">
                    Work
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">
                    Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 flex justify-center pt-2">
          <div className="w-1 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}