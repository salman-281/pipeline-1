"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Code2,
  Globe,
  Link2,
  MapPin,
  Menu,
  Shield,
  Star,
  Users,
  X,
  Zap,
  ChevronRight,
  ExternalLink,
  Award,
  Layers,
  FileText,
  UserCheck,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGoogle,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";
import Features from "@/pages/Features";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

// ─── Animation Variants ─────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};



const scaleIn: Variants  = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};


const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};


// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  const words = ["Portfolio.", "Resume.", "Identity."];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Accent blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-50 blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
     

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl  lg:text-8xl font-black text-zinc-900 tracking-tighter leading-[0.95] mb-6"
        >
          Your Entire
          Professional{" "}
          <span className="relative inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 inline-block"
              >
                {words[wordIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
          One Profile.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Weyou brings your portfolio, resume, social accounts, projects, and career history
          together into one powerful, recruiter-ready professional identity.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer w-full sm:w-auto bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-zinc-700 transition-colors flex items-center justify-center gap-3"
          >
            Create Your Profile <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#profile-preview"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer w-full sm:w-auto border-2 border-zinc-200 text-zinc-900 px-8 py-4 rounded-xl text-base font-bold hover:border-orange-600 transition-colors flex items-center justify-center gap-3"
          >
            View Example Profile <ExternalLink size={16} />
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-zinc-400"
        >
          {[
            { icon: <Users size={15} />, label: "12,000+ professionals" },
            { icon: <Briefcase size={15} />, label: "3,500+ recruiters" },
            { icon: <Star size={15} />, label: "4.9/5 rating" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 font-medium">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
}


function HowItWorks() {
  const steps: Step[] = [
    { number: "01", title: "Create your profile", description: "Sign up in seconds. Set up your bio, photo, location, and professional headline." },
    { number: "02", title: "Add your work & projects", description: "Import from GitHub, paste your resume, or add experiences manually. It's all drag-and-drop." },
    { number: "03", title: "Connect your accounts", description: "Link GitHub, LinkedIn, Twitter, Google and more. Weyou pulls in your public data automatically." },
    { number: "04", title: "Share one identity link", description: "Get your weyou.io/username link. One URL that says everything about who you are professionally." },
  ];

  return (
    <section id="profiles" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="max-w-xl mb-20">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              Four steps to your
              <br />
              complete identity.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border border-zinc-200">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className={`p-8 lg:p-10 cursor-default hover:bg-zinc-50 transition-colors duration-200 ${
                  i < steps.length - 1 ? "border-b lg:border-b-0 lg:border-r border-zinc-200" : ""
                }`}
              >
                <div className="text-5xl font-black text-zinc-100 mb-6 leading-none">{step.number}</div>
                <h3 className="text-xl font-black text-zinc-900 mb-3">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                <div className="mt-6">
                  <ChevronRight size={18} className="text-zinc-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Profile Preview ──────────────────────────────────────────────────────────

function ProfilePreview() {
  const skills = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker", "GraphQL", "Rust"];
  const projects = [
    { name: "DevFlow CLI", desc: "Developer productivity toolkit", stars: 2.1, lang: "Rust" },
    { name: "Prism UI", desc: "Component library for React", stars: 4.8, lang: "TypeScript" },
    { name: "Queryjet", desc: "Visual database query builder", stars: 1.3, lang: "TypeScript" },
  ];

  return (
    <section id="profile-preview" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="text-center max-w-xl mx-auto mb-20">
            <span className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4 block">
              Profile Preview
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              What your profile
              <br />
              looks like.
            </h2>
            <p className="text-zinc-400 text-lg">
              A modern, information-dense card that tells your entire story instantly.
            </p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="max-w-3xl mx-auto border border-zinc-800 bg-zinc-900 rounded-2xl overflow-hidden cursor-default"
          >
            {/* Profile Header */}
            <div className="border-b border-zinc-800 p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                    <span className="text-3xl font-black text-white">AK</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-zinc-900" />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-2xl font-black text-white">Alex Kim</h3>
                    <div className="flex items-center gap-1.5 bg-blue-500/20 border border-blue-500/30 px-2.5 py-0.5 rounded-full">
                      <Shield size={11} className="text-blue-400" />
                      <span className="text-xs font-bold text-blue-400">Verified</span>
                    </div>
                  </div>
                  <p className="text-zinc-400 font-medium mb-3">Senior Software Engineer · Open to work</p>
                  <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={13} /> Stripe Inc.
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} /> San Francisco, CA
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Globe size={13} /> weyou.io/alexkim
                    </span>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex gap-3 text-zinc-500">
                  {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.15, color: "#fff" }}
                      className="cursor-pointer transition-colors"
                    >
                      <Icon size={20} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="border-b border-zinc-800 p-8">
              <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="border border-zinc-700 text-zinc-300 text-xs font-semibold px-3 py-1.5 rounded-lg cursor-default hover:border-zinc-500 hover:text-white transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="p-8">
              <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">
                Featured Projects
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {projects.map((p) => (
                  <motion.div
                    key={p.name}
                    whileHover={{ borderColor: "#52525b" }}
                    className="border border-zinc-800 rounded-xl p-4 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-bold text-white">{p.name}</h4>
                      <span className="text-xs text-zinc-500 flex items-center gap-1">
                        <Star size={10} fill="currentColor" /> {p.stars}k
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 mb-3">{p.desc}</p>
                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                      {p.lang}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── For Recruiters ───────────────────────────────────────────────────────────

function ForRecruiters() {
  const benefits = [
    {
      icon: <Zap size={20} />,
      title: "Complete candidate view",
      desc: "Projects, experience, skills, certifications — all visible before the first call.",
    },
    {
      icon: <FileText size={20} />,
      title: "Projects + experience, together",
      desc: "Stop asking for portfolio links. Everything is in one verified, up-to-date profile.",
    },
    {
      icon: <Shield size={20} />,
      title: "Verified identity & credentials",
      desc: "Every profile is verified. No fake experiences, no inflated skill sets.",
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Instant direct contact",
      desc: "One click to reach candidates through their preferred contact method.",
    },
  ];

  return (
    <section id="recruiters" className="py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4 block">
                For Recruiters
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-6">
                Hire faster with
                <br />
                complete profiles.
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-10">
                Stop scrolling through disconnected LinkedIn profiles, GitHub pages, and PDFs.
                Weyou gives you everything you need to make decisions, fast.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-7 py-3.5 rounded-xl text-sm font-bold hover:bg-zinc-700 transition-colors"
              >
                Access Recruiter Dashboard <ArrowRight size={15} />
              </motion.a>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <motion.div
                  key={b.title}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  className="border border-zinc-200 bg-white p-6 rounded-xl cursor-default transition-all duration-200 hover:border-zinc-900"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4 text-zinc-700">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-1.5 text-base">{b.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Priya Nair",
      role: "Full Stack Developer",
      company: "Shopify",
      content:
        "I deleted my personal website and took my resume offline the day I created my Weyou profile. It literally replaced everything.",
      avatar: "PN",
    },
    {
      name: "Marcus Webb",
      role: "Senior Recruiter",
      company: "Stripe",
      content:
        "We've cut time-to-first-interview by 40% since we started sourcing from Weyou. The profiles are just so much richer than LinkedIn.",
      avatar: "MW",
    },
    {
      name: "Yuki Tanaka",
      role: "Design Engineer",
      company: "Vercel",
      content:
        "My Weyou profile got me two unsolicited offers last month. I didn't apply anywhere — they found me through my profile.",
      avatar: "YT",
    },
  ];

  const colors = ["from-violet-500 to-blue-500", "from-emerald-500 to-cyan-500", "from-orange-500 to-pink-500"];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="text-center max-w-lg mx-auto mb-20">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              Loved by builders
              <br />& hiring teams.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="bg-white p-10 cursor-default hover:bg-zinc-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-zinc-700 text-base leading-relaxed mb-8 font-medium">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[i]} flex items-center justify-center`}
                  >
                    <span className="text-white text-xs font-black">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 text-sm">{t.name}</p>
                    <p className="text-zinc-500 text-xs">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect to get started and show your work.",
      features: ["1 professional profile", "Up to 5 projects", "Resume upload", "Social links", "Public profile URL"],
      cta: "Start Free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "For serious professionals and job seekers.",
      features: [
        "Everything in Free",
        "Unlimited projects",
        "Analytics dashboard",
        "Custom domain",
        "Priority in recruiter search",
        "Verified badge",
        "Remove Weyou branding",
      ],
      cta: "Get Pro",
      highlight: true,
    },
    {
      name: "Teams",
      price: "$29",
      period: "per month",
      description: "For agencies and companies showcasing talent.",
      features: [
        "Everything in Pro",
        "5 team member profiles",
        "Team page",
        "Employer branding",
        "Bulk exports",
        "API access",
        "Dedicated support",
      ],
      cta: "Start Teams Trial",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="text-center max-w-lg mx-auto mb-20">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4 block">
              Pricing
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              Simple, honest
              <br />
              pricing.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={scaleIn}
                className={`relative rounded-2xl p-8 cursor-default transition-all duration-200 ${
                  plan.highlight
                    ? "bg-zinc-900 border-2 border-zinc-900"
                    : "bg-white border border-zinc-200 hover:border-zinc-400"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <p
                    className={`text-xs font-black uppercase tracking-widest mb-3 ${
                      plan.highlight ? "text-zinc-400" : "text-zinc-400"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-2">
                    <span
                      className={`text-5xl font-black tracking-tight ${
                        plan.highlight ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className={`text-sm mb-2 ${plan.highlight ? "text-zinc-500" : "text-zinc-400"}`}>
                      /{plan.period}
                    </span>
                  </div>
                  <p className={`text-sm ${plan.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                    {plan.description}
                  </p>
                </div>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`cursor-pointer w-full block text-center py-3 rounded-xl text-sm font-bold mb-8 transition-colors ${
                    plan.highlight
                      ? "bg-white text-zinc-900 hover:bg-zinc-200"
                      : "bg-gradient-to-r from-red-600 to-orange-600 text-white hover:bg-zinc-700"
                  }`}
                >
                  {plan.cta}
                </motion.a>

                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle
                        size={15}
                        className={plan.highlight ? "text-emerald-400 flex-shrink-0" : "text-emerald-500 flex-shrink-0"}
                      />
                      <span
                        className={`text-sm ${plan.highlight ? "text-zinc-300" : "text-zinc-600"}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="py-32 bg-white">
      <div className="w-full px-6 text-center">
        <AnimatedSection>
          <motion.div
            variants={scaleIn}
            className="border border-zinc-200 rounded-3xl p-16 sm:p-24 bg-zinc-950 overflow-hidden relative"
          >
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: "48px 48px",
              }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div variants={fadeUp} className="relative">
              <div className="inline-flex items-center gap-2 border border-zinc-700 rounded-full px-4 py-1.5 mb-8">
                <Award size={14} className="text-amber-400" />
                <span className="text-xs font-semibold text-zinc-400 tracking-wide uppercase">
                  Join 12,000+ professionals
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter leading-tight mb-6">
                Build Your Professional
                <br />
                Identity Today.
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                One profile. One link. Infinite opportunities. Start free — no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer w-full sm:w-auto bg-white text-zinc-900 px-10 py-4 rounded-xl text-base font-black hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3"
                >
                  Create Your Weyou Profile <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer text-zinc-500 text-sm font-medium hover:text-zinc-300 transition-colors flex items-center gap-2"
                >
                  See how it works <ChevronRight size={15} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}



// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WeyouLandingPage() {
  return (
    <>
      <main className="bg-white">
        <Hero />
        <Features />
        <HowItWorks />
        <ProfilePreview />
        <ForRecruiters />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
    </>
  );
}