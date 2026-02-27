"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "", // Changed from subject
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        try {
            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current!,
                publicKey
            );

            if (result.text === "OK") {
                setSubmitStatus({
                    type: "success",
                    message: "Message sent successfully! I'll get back to you soon."
                });
                setFormData({ user_name: "", user_email: "", user_phone: "", message: "" });
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus({
                type: "error",
                message: "Something went wrong. Please try again later."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { name: "GitHub", icon: Github, url: "https://github.com/akashu0", color: "hover:text-zinc-900 dark:hover:text-white" },
        { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/akash-kumar-609154217/", color: "hover:text-blue-600" },
    ];

    return (
        <section id="contact" className="relative py-24 lg:py-32 bg-[#fafafa] dark:bg-rich-black overflow-hidden selection:bg-indigo-500/30">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
                        Let&apos;s Work <span className="text-zinc-400 dark:text-zinc-600">Together</span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-500 max-w-md mx-auto">
                        Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* Left Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="space-y-4">
                            <a
                                href="mailto:akashdotcom123@gmail.com"
                                className="group flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-indigo-500/30 transition-all duration-500"
                            >
                                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1">Email</h3>
                                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        akashdotcom123@gmail.com
                                    </p>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        </div>

                        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50">
                            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-4">
                                Connect With Me
                            </h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Available for freelance work
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="p-8 lg:p-10 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("user_name")}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className="peer w-full px-4 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-transparent focus:outline-none focus:border-indigo-500 transition-all duration-300"
                                        placeholder="Name"
                                    />
                                    <label htmlFor="user_name" className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "user_name" || formData.user_name ? "-top-2.5 text-xs text-indigo-600 dark:text-indigo-400 bg-white dark:bg-zinc-900 px-2" : "top-4 text-zinc-500 dark:text-zinc-400"}`}>
                                        Your Name
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("user_email")}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className="peer w-full px-4 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-transparent focus:outline-none focus:border-indigo-500 transition-all duration-300"
                                        placeholder="Email"
                                    />
                                    <label htmlFor="user_email" className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "user_email" || formData.user_email ? "-top-2.5 text-xs text-indigo-600 dark:text-indigo-400 bg-white dark:bg-zinc-900 px-2" : "top-4 text-zinc-500 dark:text-zinc-400"}`}>
                                        Email Address
                                    </label>
                                </div>
                            </div>

                            <div className="relative mb-6">
                                <input
                                    type="tel"
                                    name="user_phone"
                                    id="user_phone"
                                    value={formData.user_phone}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField("user_phone")}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    className="peer w-full px-4 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-transparent focus:outline-none focus:border-indigo-500 transition-all duration-300"
                                    placeholder="Phone Number"
                                />
                                <label htmlFor="user_phone" className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "user_phone" || formData.user_phone ? "-top-2.5 text-xs text-indigo-600 dark:text-indigo-400 bg-white dark:bg-zinc-900 px-2" : "top-4 text-zinc-500 dark:text-zinc-400"}`}>
                                    Phone Number
                                </label>
                            </div>

                            <div className="relative mb-8">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField("message")}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    className="peer w-full px-4 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-transparent focus:outline-none focus:border-indigo-500 transition-all duration-300 resize-none"
                                    placeholder="Message"
                                />
                                <label htmlFor="message" className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "message" || formData.message ? "-top-2.5 text-xs text-indigo-600 dark:text-indigo-400 bg-white dark:bg-zinc-900 px-2" : "top-4 text-zinc-500 dark:text-zinc-400"}`}>
                                    Your Message
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold text-base hover:bg-indigo-600 dark:hover:bg-indigo-50 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </button>

                            {submitStatus.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-6 p-4 rounded-xl text-center text-sm font-medium ${submitStatus.type === "success" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"}`}
                                >
                                    {submitStatus.message}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}