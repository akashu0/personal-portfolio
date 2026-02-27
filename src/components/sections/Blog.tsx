"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealHeader } from "@/components/ui/reveal-header";
import { useState } from "react";
import { ArticleModal } from "@/components/ui/article-modal";
import Image from "next/image";

const posts = [
  {
    category: "Journey",
    readTime: "5 min read",
    title: "From Idea to Usable Tool: Building Real-World Products",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    excerpt: "How raw ideas turned into scalable, production-ready platforms through full-stack architecture, real users, and measurable business impact.",
    content: `Turning an idea into a usable, production-ready tool is where real full-stack engineering begins. For me, it was never just about writing code — it was about solving business problems with scalable systems.

Every project started with a simple question: "How can this be built better?" From study abroad platforms to CRM systems handling 50+ users with role-based access, to e-commerce marketplaces with secure payment integrations — each product required thoughtful architecture, clean APIs, optimized databases, and intuitive frontend experiences.

Building usable tools meant handling authentication flows, integrating third-party services like payment gateways and cloud storage, structuring microservices for scalability, and ensuring performance under real-world usage. It meant transforming business workflows into automated systems that increased sales by 20% and improved operational efficiency.

The journey from idea to execution taught me that full-stack development is not just about MERN or Next.js — it's about understanding users, designing scalable backend systems, and delivering measurable outcomes. Every deployment wasn't just a launch — it was a solution in action.`
  },
  {
    category: "Tech",
    readTime: "8 min read",
    title: "Designing Scalable Backend Systems",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    excerpt: "How I structure backend systems for scale using modular services, clean APIs, queues, and containerization.",
    content: `While building production-grade platforms like CRM systems and marketplaces, I learned that scalability starts with architecture decisions.

Instead of tightly coupled monoliths, I design modular services:
- Auth Layer with JWT & role-based access
- Core API services separated by domain
- Async workers for background jobs
- Optimized database schemas with indexing

Containerization ensures predictable deployments and structured logging makes systems production-ready.`
  },
  {
    category: "Tech",
    readTime: "6 min read",
    title: "Building Production-Ready E-commerce Platforms",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    excerpt: "From authentication to payments — what actually makes an e-commerce system reliable in real-world use.",
    content: `An e-commerce system is more than a cart and checkout.

It requires:
- Secure authentication
- Payment gateway integrations
- Order lifecycle management
- Admin dashboards
- SEO & performance optimization

Real-world systems must handle failed payments, stock conflicts, and edge cases gracefully.`
  },
  {
    category: "System Design",
    readTime: "7 min read",
    title: "From Monolith to Microservices: When It Makes Sense",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    excerpt: "Understanding when to stay simple and when to split services for growth.",
    content: `Microservices are powerful — but not always necessary.

I adopt them when:
- Independent scaling is required
- Async processing becomes complex
- Reliability is critical

Architecture decisions should follow product needs — not trends.`
  },
  {
    category: "Performance",
    readTime: "5 min read",
    title: "Optimizing Full Stack Applications for Speed",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    excerpt: "Practical techniques to improve frontend performance and backend response time.",
    content: `Performance impacts conversions and retention.

Frontend:
- Code splitting
- Lazy loading
- Image optimization

Backend:
- DB indexing
- Query optimization
- Caching layers

Performance is a feature, not an afterthought.`
  },
  {
    category: "Product Engineering",
    readTime: "6 min read",
    title: "Turning Business Workflows into Software",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    excerpt: "How real-world business operations become automated digital systems.",
    content: `Every strong product starts with understanding workflows.

Mapping processes into APIs and dashboards improves operational efficiency and measurable growth.

Full-stack engineering is system thinking combined with business understanding.`
  },
  {
    category: "Design",
    readTime: "4 min read",
    title: "Designing Clean & Functional Interfaces",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    excerpt: "How thoughtful UI decisions improve usability and trust.",
    content: `Good UI reduces cognitive load.

Clear hierarchy, consistent spacing, and feedback-driven interactions create trust — especially in dashboards and payment flows.

Design is clarity, not decoration.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <section id="blog" className="py-24 bg-background border-t border-violet-500/10 relative overflow-hidden">


      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="flex items-end justify-between mb-16">
          <RevealHeader className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Case <span className="gradient-text">Studies</span>
          </RevealHeader>
          <div className="hidden md:block text-xs font-mono uppercase tracking-widest text-[#7B82A8]">
            Deep dives into my projects
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {posts.map((post, index) => (
            <ScrollReveal
              key={index}
              delay={index * 80}
              className={`${index === 0 ? "md:col-span-2" : "md:col-span-1"}`}
            >
              <article
                className="group relative h-full overflow-hidden rounded-3xl cursor-pointer cosmos-card border-violet-500/15 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-shadow duration-500"
                onClick={() => setSelectedPost(post)}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 lg:bg-black/40 lg:group-hover:bg-black/50 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-space/95 via-space/30 to-transparent" />
                </div>

                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#7B82A8] mb-3">
                    <span className="px-2 py-1 border border-violet-500/30 rounded-full bg-violet-500/15 text-violet-300 backdrop-blur-md">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className={`font-bold text-violet-300 lg:text-white mb-3 leading-tight lg:group-hover:text-violet-300 transition-colors ${index === 0 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                    {post.title}
                  </h3>
                  {index === 0 && (
                    <p className="text-[#C0C4D8] text-base md:text-lg font-light line-clamp-2 max-w-xl">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="mt-6 transform translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300">
                    <span className="text-sm font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      Read Article <span>→</span>
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ArticleModal
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          article={selectedPost}
        />
      </div>
    </section>
  );
}
