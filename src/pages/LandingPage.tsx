import {
  motion, AnimatePresence,
  useMotionValue, useTransform, useSpring,
  useInView, useScroll, useMotionTemplate, useReducedMotion,
} from "framer-motion";
import {
  ArrowRight, Sun, Moon, Users, FileCheck, TrendingUp,
  CheckCircle2, ChevronRight, Compass, BookOpen,
  HelpCircle, Briefcase, Scale, ShieldCheck,
  GraduationCap, UserCheck, ClipboardList, Sparkles,
  MapPin, Factory, Sprout, IndianRupee, Layers, Lightbulb,
  Target, Workflow, Award, Shield, Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";

const APP_URL = "https://app.fulcrumindia.online/";

/* ── TiltCard Component ── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useTransform(y, [-0.5, 0.5], [4, -4]);
  const rY = useTransform(x, [-0.5, 0.5], [-4, 4]);
  const gX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const gY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const bg = useMotionTemplate`radial-gradient(220px circle at ${gX}% ${gY}%, rgba(99,102,241,0.12), transparent 70%)`;

  const handle = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }, [x, y, prefersReduced]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{
        rotateX: prefersReduced ? 0 : rX,
        rotateY: prefersReduced ? 0 : rY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <motion.div style={{ background: bg }} className="absolute inset-0 rounded-2xl pointer-events-none z-10" />
      {children}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION 1: HOW IT WORKS (STAGGERED 4 STEPS)
══════════════════════════════════════════════════ */
const HOW_STEPS = [
  {
    icon: ClipboardList,
    title: "1. Build Your Profile",
    desc: "Complete your entrepreneurial profile — business details, sector, geography, stage and investment needs.",
  },
  {
    icon: UserCheck,
    title: "2. Get Guidance",
    desc: "Entrepreneurs can be connected with an assigned Guide for ongoing mentorship and domain SMEs for specialist support.",
  },
  {
    icon: Compass,
    title: "3. Discover Relevant Schemes",
    desc: "See government schemes recommended based on your profile factors — not an overwhelming random list.",
  },
  {
    icon: TrendingUp,
    title: "4. Build Your Journey",
    desc: "Track milestones, guidance received, scheme applications and progress — all in one chronological journey.",
  },
];

function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {HOW_STEPS.map((step, i) => (
        <motion.div
          key={step.title}
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: prefersReduced ? 0 : i * 0.14, duration: 0.5, ease: "easeOut" }}
        >
          <TiltCard className="relative bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-default">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-primary font-black text-lg">{i + 1}</span>
              </div>
              <step.icon className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-black text-lg mb-2">{step.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION 2: WHAT FULCRUM BRINGS TOGETHER
══════════════════════════════════════════════════ */
const ARCH_ITEMS = [
  {
    title: "Your Profile",
    desc: "A structured view of your entrepreneurial journey.",
    icon: ClipboardList,
    accent: "from-blue-500/20 to-indigo-500/20",
    border: "group-hover:border-blue-500/50",
    iconColor: "text-blue-500",
  },
  {
    title: "Your Guide",
    desc: "Business mentorship and ongoing guidance.",
    icon: UserCheck,
    accent: "from-indigo-500/20 to-purple-500/20",
    border: "group-hover:border-indigo-500/50",
    iconColor: "text-indigo-500",
  },
  {
    title: "Your SME",
    desc: "Specialist support when domain expertise matters.",
    icon: BookOpen,
    accent: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    iconColor: "text-purple-500",
  },
  {
    title: "Your Schemes",
    desc: "Relevant opportunities based on your profile.",
    icon: Compass,
    accent: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50",
    iconColor: "text-amber-500",
  },
  {
    title: "Your Journey",
    desc: "Milestones, guidance and progress kept together.",
    icon: TrendingUp,
    accent: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-500",
  },
];

function WhatBringsTogetherSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveItem(prev => (prev + 1) % ARCH_ITEMS.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div ref={ref} className="space-y-10">
      {/* Central Hub visualization */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {ARCH_ITEMS.map((item, i) => {
          const isActive = activeItem === i;
          return (
            <motion.div
              key={item.title}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: prefersReduced ? 0 : i * 0.1, duration: 0.4 }}
              onMouseEnter={() => setActiveItem(i)}
              className={`relative bg-card border rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
                isActive
                  ? "border-primary shadow-lg shadow-primary/10 -translate-y-1"
                  : "border-border hover:border-border/80"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-4 transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
              <h4 className="font-bold text-base mb-1.5 flex items-center gap-2">
                {item.title}
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                )}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Connected Architecture Flow line */}
      <div className="relative p-6 sm:p-8 rounded-2xl bg-card border border-border/70 overflow-hidden">
        <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
          <Workflow className="w-4 h-4" /> Integrated Lifecycle
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed mb-6">
          Instead of keeping your notes in one place, schemes in another, and mentorship conversations over scattered chats, Fulcrum weaves your <strong className="text-foreground">Profile</strong>, <strong className="text-foreground">Guide</strong>, <strong className="text-foreground">SME</strong>, <strong className="text-foreground">Schemes</strong>, and <strong className="text-foreground">Journey</strong> into a single unified workspace.
        </p>

        {/* Horizontal connected node path */}
        <div className="hidden md:flex items-center justify-between relative pt-2">
          <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-border -translate-y-1/2 z-0" />
          {ARCH_ITEMS.map((item, i) => (
            <div key={item.title} className="relative z-10 flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center bg-card transition-colors ${
                i === activeItem ? "border-primary text-primary shadow-sm shadow-primary/30" : "border-border text-muted-foreground"
              }`}>
                <item.icon className="w-3.5 h-3.5" />
              </div>
              <span className={`text-[11px] font-semibold mt-2 transition-colors ${
                i === activeItem ? "text-primary" : "text-muted-foreground"
              }`}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION 3: BUILT AROUND THE ENTREPRENEUR
══════════════════════════════════════════════════ */
const ENTREPRENEUR_STEPS = [
  { label: "IDEA", sub: "Shaping the concept", icon: Lightbulb },
  { label: "YOUR PROFILE", sub: "Structured factors", icon: ClipboardList },
  { label: "GUIDANCE", sub: "Mentor & SME support", icon: UserCheck },
  { label: "ACTION", sub: "Applications & tasks", icon: Target },
  { label: "PROGRESS", sub: "Milestones unlocked", icon: Award },
];

function BuiltAroundEntrepreneurSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  return (
    <div ref={ref} className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Entrepreneur-Centric</h2>
        <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">Built around the entrepreneur.</h3>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Whether you're shaping an idea, building a business or working through the next challenge, Fulcrum brings guidance and relevant information into one journey.
        </p>
      </div>

      {/* Visual Pipeline */}
      <div className="relative max-w-4xl mx-auto p-4 sm:p-8 bg-card border border-border rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
          {ENTREPRENEUR_STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: prefersReduced ? 0 : i * 0.12, duration: 0.4 }}
              className="relative flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-background/50 border border-border/60 hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2.5">
                <step.icon className="w-5 h-5" />
              </div>
              <div className="font-black text-xs sm:text-sm tracking-wider">{step.label}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{step.sub}</div>

              {i < ENTREPRENEUR_STEPS.length - 1 && (
                <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-muted-foreground">
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION 4: YOUR JOURNEY (HERO TIMELINE ANIMATION)
══════════════════════════════════════════════════ */
const JOURNEY_STEPS = [
  { icon: ClipboardList, label: "Profile Created", sub: "Entrepreneurial profile completed" },
  { icon: UserCheck, label: "Guide Assigned", sub: "Business mentorship begins" },
  { icon: Layers, label: "Business Details Added", sub: "Sector, geography, stage recorded" },
  { icon: Compass, label: "Scheme Opportunities Identified", sub: "Relevant schemes surfaced from profile factors" },
  { icon: HelpCircle, label: "Guidance Received", sub: "Consultation with Guide & SME" },
  { icon: TrendingUp, label: "Progress Tracked", sub: "Milestones and ongoing updates" },
];

function JourneyTimeline() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % JOURNEY_STEPS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      {JOURNEY_STEPS.map((step, i) => {
        const done = i < active;
        const current = i === active;
        const Icon = step.icon;

        return (
          <div key={step.label} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  scale: current ? [1, 1.1, 1] : 1,
                  boxShadow: current ? "0 0 0 6px rgba(99,102,241,0.18)" : "none",
                }}
                transition={{ duration: 0.6, repeat: current ? Infinity : 0 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm border-2 transition-all duration-300 ${
                  done ? "bg-primary border-primary text-white" :
                  current ? "bg-primary/10 border-primary text-primary" :
                  "bg-muted/30 border-border text-muted-foreground"
                }`}
              >
                {done ? <CheckCircle2 className="w-5 h-5 text-white" /> : <Icon className="w-4 h-4" />}
              </motion.div>
              {i < JOURNEY_STEPS.length - 1 && (
                <div className="w-0.5 h-7 my-1 bg-border overflow-hidden relative">
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-primary"
                    animate={{ height: done ? "100%" : "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              )}
            </div>
            <div className="pb-3 flex-1">
              <div className={`font-bold text-sm transition-colors duration-300 ${
                current ? "text-primary font-black" : done ? "text-foreground" : "text-muted-foreground"
              }`}>{step.label}</div>
              <AnimatePresence>
                {(current || done) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-muted-foreground mt-0.5 leading-relaxed"
                  >
                    {step.sub}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION 5: WHY FULCRUM (CREDIBLE COMPARISON)
══════════════════════════════════════════════════ */
const COMPARISONS = [
  { before: "Information in different places", after: "One connected profile" },
  { before: "Guidance happens separately", after: "Guide + SME connected to the journey" },
  { before: "Schemes are difficult to navigate", after: "Relevant schemes surfaced from profile factors" },
  { before: "Progress is easy to lose track of", after: "Chronological journey" },
  { before: "Decisions get disconnected from history", after: "Journey context stays together" },
];

function WhyFulcrumComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  return (
    <div ref={ref} className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
      <div className="grid grid-cols-2 bg-muted/40 border-b border-border">
        <div className="px-4 py-3 text-[11px] sm:text-xs font-black uppercase tracking-widest text-muted-foreground border-r border-border">
          Before
        </div>
        <div className="px-4 py-3 text-[11px] sm:text-xs font-black uppercase tracking-widest text-primary">
          With Fulcrum
        </div>
      </div>
      {COMPARISONS.map((row, i) => (
        <motion.div
          key={row.before}
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: prefersReduced ? 0 : i * 0.08, duration: 0.4 }}
          className="grid grid-cols-2 border-t border-border/60 hover:bg-primary/[0.02] transition-colors group"
        >
          <div className="px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-muted-foreground border-r border-border/60 flex items-center gap-2">
            <span className="text-muted-foreground/50 text-xs">✕</span>
            <span>{row.before}</span>
          </div>
          <div className="px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>{row.after}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION 6: STRENGTHENED GUIDE + SME
══════════════════════════════════════════════════ */
function GuideSmeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const guideCapabilities = [
    "Business planning and strategy",
    "Mentorship and ongoing support",
    "Scheme application guidance",
    "Journey milestone planning",
  ];

  const smeCapabilities = [
    { icon: Scale, label: "GST & Taxation" },
    { icon: ShieldCheck, label: "FSSAI / Compliance" },
    { icon: Briefcase, label: "Legal & Patents" },
    { icon: GraduationCap, label: "Technical Guidance" },
  ];

  return (
    <div ref={ref} className="space-y-12">
      {/* Visual Relationship model: YOU in center connected to GUIDE & SME */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-2xl relative"
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            Relationship Architecture
          </div>
          <h4 className="text-xl sm:text-2xl font-black">Coordinated Support Centered on You</h4>
        </div>

        {/* Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-center">
          {/* Left: Guide */}
          <div className="p-4 rounded-xl border border-primary/30 bg-primary/[0.04]">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5" />
            </div>
            <div className="font-bold text-sm">GUIDE</div>
            <div className="text-xs text-muted-foreground mt-0.5">Your ongoing business mentor</div>
          </div>

          {/* Center: Entrepreneur */}
          <div className="relative py-2">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-black text-sm flex items-center justify-center mx-auto shadow-lg shadow-primary/20 ring-4 ring-primary/15">
              YOU
            </div>
            <div className="text-xs font-bold mt-2">The Entrepreneur</div>
          </div>

          {/* Right: SME */}
          <div className="p-4 rounded-xl border border-secondary/30 bg-secondary/[0.04]">
            <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="font-bold text-sm">SME</div>
            <div className="text-xs text-muted-foreground mt-0.5">Specialist domain expertise</div>
          </div>
        </div>
      </motion.div>

      {/* Two Detailed Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Guide Card */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <TiltCard className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-xl">Guide</h4>
                <p className="text-xs text-primary font-semibold">Your ongoing business mentor.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Provides sustained guidance through each stage, helps shape milestones, and assists with scheme application decisions.
            </p>
            <div className="space-y-3 mb-6">
              {guideCapabilities.map(cap => (
                <div key={cap} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{cap}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic border-l-2 border-primary/30 pl-3">
              Entrepreneurs can be connected with an assigned Guide for ongoing business mentorship and support.
            </p>
          </TiltCard>
        </motion.div>

        {/* SME Card */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TiltCard className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-xl">SME</h4>
                <p className="text-xs text-secondary font-semibold">Specialist expertise when you need it.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Subject Matter Experts provide targeted domain inputs in critical areas where technical or legal nuance matters most.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {smeCapabilities.map(cap => (
                <div key={cap.label} className="bg-background/60 border border-border/60 rounded-xl p-3 text-center">
                  <cap.icon className="w-4 h-4 text-secondary mx-auto mb-1.5" />
                  <span className="text-xs font-semibold">{cap.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic border-l-2 border-secondary/30 pl-3">
              SMEs provide specialist domain inputs based on specific journey requirements and availability.
            </p>
          </TiltCard>
        </motion.div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION 7: SCHEME INTELLIGENCE & MATCHING ANIMATION
══════════════════════════════════════════════════ */
const PROFILE_FACTORS = [
  { icon: MapPin, label: "Tamil Nadu", type: "Geography" },
  { icon: Factory, label: "Food Processing", type: "Sector" },
  { icon: Sprout, label: "Seed Stage", type: "Stage" },
  { icon: IndianRupee, label: "Investment Range", type: "Capital" },
];

function SchemeMatchingEngineAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeFactorIndex, setActiveFactorIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveFactorIndex(i => (i + 1) % (PROFILE_FACTORS.length + 2));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const isEvaluating = activeFactorIndex === PROFILE_FACTORS.length;
  const isCompleted = activeFactorIndex > PROFILE_FACTORS.length;

  return (
    <div ref={ref} className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
      {/* 1. Profile Factors */}
      <div>
        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center justify-between">
          <span>1. Your Profile Factors</span>
          <span className="text-[10px] text-muted-foreground font-normal">Active Input</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {PROFILE_FACTORS.map((f, i) => {
            const isHighlighted = i <= activeFactorIndex;
            return (
              <div
                key={f.label}
                className={`p-2.5 rounded-xl border text-center transition-all duration-300 ${
                  isHighlighted ? "border-primary/50 bg-primary/5 shadow-xs" : "border-border/60 bg-background/50"
                }`}
              >
                <f.icon className={`w-4 h-4 mx-auto mb-1 ${isHighlighted ? "text-primary" : "text-muted-foreground"}`} />
                <div className="text-xs font-bold truncate">{f.label}</div>
                <div className="text-[10px] text-muted-foreground">{f.type}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Evaluation Flow connector */}
      <div className="flex flex-col items-center justify-center py-1">
        <motion.div
          animate={{ scale: isEvaluating ? [1, 1.08, 1] : 1 }}
          transition={{ duration: 0.6, repeat: isEvaluating ? Infinity : 0 }}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-2 transition-colors ${
            isEvaluating || isCompleted
              ? "bg-primary text-white border-primary shadow-sm shadow-primary/25"
              : "bg-muted/30 border-border text-muted-foreground"
          }`}
        >
          <Compass className={`w-3.5 h-3.5 ${isEvaluating ? "animate-spin" : ""}`} />
          <span>{isEvaluating ? "Evaluating profile factors..." : "Deterministic Match Engine"}</span>
        </motion.div>
      </div>

      {/* 3. Matched Categories (Recommended & Potentially Eligible) */}
      <div className="space-y-3">
        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          2. Surface Opportunities
        </div>

        {/* Recommended */}
        <div className="bg-emerald-500/5 border border-emerald-500/25 rounded-xl p-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <div className="font-bold text-sm text-emerald-600 dark:text-emerald-400">Recommended</div>
              <div className="text-xs text-muted-foreground">High relevance to your profile</div>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
            Direct Match
          </span>
        </div>

        {/* Potentially Eligible */}
        <div className="bg-amber-500/5 border border-amber-500/25 rounded-xl p-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-sm text-amber-600 dark:text-amber-400">Potentially Eligible</div>
              <div className="text-xs text-muted-foreground">Partial match — review details</div>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
            Review Criteria
          </span>
        </div>
      </div>
    </div>
  );
}

function SchemeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      {/* Left: Dynamic matching visual */}
      <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
        <SchemeMatchingEngineAnimation />
      </motion.div>

      {/* Right: Narrative without hardcoded count */}
      <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6">
        <div>
          <h3 className="text-3xl lg:text-4xl font-black mb-3 tracking-tight">
            Relevant schemes,<br />not a random list.
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Fulcrum evaluates your profile factors — geography, sector, enterprise stage, and investment requirements — to surface the schemes most relevant to you.
          </p>
        </div>

        {/* Growing Catalogue Card */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
            <FileCheck className="w-4 h-4" /> Scheme Catalogue
          </div>
          <div className="text-2xl sm:text-3xl font-black">
            A growing scheme catalogue
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">
            Government schemes organised and evaluated against relevant entrepreneur profile factors.
          </div>
          <div className="h-1.5 bg-muted/40 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Deterministic matching based on profile factors
          </div>
        </div>

        {/* Quiet disclaimer */}
        <p className="text-xs text-muted-foreground/80 italic leading-relaxed pl-3 border-l border-border">
          *Scheme recommendations are informational. Final eligibility is determined by the respective scheme's official criteria.
        </p>
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION 8: CONSULTATION AREAS
══════════════════════════════════════════════════ */
const CONSULT_AREAS = [
  { label: "GST & Tax Filing", icon: "📋" },
  { label: "FSSAI & Compliance", icon: "🏥" },
  { label: "Business Planning", icon: "📊" },
  { label: "Scheme Applications", icon: "📝" },
  { label: "Technical Guidance", icon: "⚙️" },
];

function ConsultationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
        <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">
          When you need help,<br />
          <span className="animate-shimmer">ask the right person.</span>
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
          Need guidance on GST, compliance, business planning or scheme applications? Reach out to your assigned Guide or SME directly through the platform.
        </p>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Button className="font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </a>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" /> Domains of Guidance
          </div>
          <div className="space-y-2.5">
            {CONSULT_AREAS.map((area, i) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, x: 12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl border border-border/70 hover:border-primary/30 hover:bg-primary/[0.02] transition-colors"
              >
                <span className="text-lg">{area.icon}</span>
                <span className="font-semibold text-sm">{area.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION 9: INSTITUTIONAL MEMORY (SOFTENED)
══════════════════════════════════════════════════ */
const MEMORY_CONCEPTS = [
  { label: "Journey", desc: "Every path traced" },
  { label: "Milestone", desc: "Every target reached" },
  { label: "Decision", desc: "Every strategic turn" },
  { label: "Guidance", desc: "Every mentor input" },
];

function InstitutionalMemorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
        <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Institutional Memory</h2>
        <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-5">
          Every journey leaves<br />
          <span className="animate-shimmer">knowledge behind.</span>
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
          Fulcrum keeps journeys, milestones, guidance and decisions connected over time — creating a record of what happened and what was learned along the way.
        </p>
        <div className="p-4 rounded-xl bg-card border border-border/80 text-xs sm:text-sm text-muted-foreground leading-relaxed border-l-4 border-l-primary">
          By preserving contextual history, entrepreneurs and mentors avoid repeating missteps, streamlining future submissions and reviews.
        </div>
      </motion.div>

      {/* Sequential Convergence Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4"
      >
        <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
          Connected Continuity
        </div>
        <div className="space-y-3">
          {MEMORY_CONCEPTS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.15 }}
              className="flex items-center justify-between p-3 rounded-xl border border-border/70 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-bold text-sm">{c.label}</span>
              </div>
              <span className="text-xs text-muted-foreground">{c.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Converged outcome */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="pt-3 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary"
        >
          <span>Outcome:</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Connected history
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   NAVIGATION COMPONENT WITH SLIDING ACTIVE INDICATOR
══════════════════════════════════════════════════ */
const NAV_LINKS = [
  { id: "how-it-works", label: "How It Works" },
  { id: "brings-together", label: "Overview" },
  { id: "journey", label: "Journey" },
  { id: "guidance", label: "Guidance" },
  { id: "schemes", label: "Schemes" },
];

function NavigationBar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("how-it-works");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of NAV_LINKS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-[3px] left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border h-16 flex items-center justify-between px-4 sm:px-6 lg:px-12 gap-2">
      {/* Brand */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.03 }}
        className="flex items-center gap-2 text-base sm:text-xl font-black cursor-pointer select-none"
      >
        <img src="/favicon.svg" alt="Fulcrum Logo" className="w-6 h-6 rounded-md shadow-xs" />
        <span className="whitespace-nowrap">Fulcrum<span className="text-primary">-India</span></span>
      </motion.a>

      {/* Nav links with animated active indicator */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        {NAV_LINKS.map(link => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveSection(link.id)}
              className={`relative py-1.5 transition-colors ${
                isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {isActive && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-card hover:bg-primary/10 hover:border-primary/40 transition-colors text-muted-foreground hover:text-primary"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </motion.button>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" className="hidden sm:flex font-semibold hover:text-primary hover:bg-primary/5">
            Sign In
          </Button>
        </a>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Button className="font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 group text-xs sm:text-sm h-9 px-3 sm:h-10 sm:px-4">
              Get Started
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </a>
      </div>
    </nav>
  );
}

/* ══════════════════════════════════════════════════
   MAIN PAGE CONTROLLER
══════════════════════════════════════════════════ */
export default function LandingPage() {
  usePageMeta({
    title: "Entrepreneur Guidance, Journey & Scheme Intelligence",
    description: "Build your profile, connect with guidance, discover relevant government schemes, and track your entrepreneurial journey — all in one place.",
    path: "/",
  });

  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Hero Spotlight Mouse
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const spX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const spY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(550px circle at ${spX}% ${spY}%, rgba(99,102,241,0.12) 0%, transparent 70%)`;
  const o1x = useTransform(spX, [0, 100], [-14, 14]);
  const o1y = useTransform(spY, [0, 100], [-10, 10]);
  const o2x = useTransform(spX, [0, 100], [12, -12]);
  const o2y = useTransform(spY, [0, 100], [8, -8]);

  const handleMouse = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (prefersReduced) return;
    const r = heroRef.current!.getBoundingClientRect();
    mouseX.set(((e.clientX - r.left) / r.width) * 100);
    mouseY.set(((e.clientY - r.top) / r.height) * 100);
  }, [mouseX, mouseY, prefersReduced]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ── Scroll progress bar ── */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent z-[100]"
      />

      {/* ── Fixed Navigation ── */}
      <NavigationBar />

      {/* ══ HERO ══ */}
      <motion.section
        ref={heroRef}
        onMouseMove={handleMouse}
        style={{ background: prefersReduced ? undefined : spotlight }}
        className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center text-center min-h-[90vh]"
      >
        <div className="absolute inset-0 bg-gradient-mesh opacity-45 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-overlay opacity-35 pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div style={{ x: o1x, y: o1y }} className="animate-orb-1 absolute top-[15%] left-[8%] w-80 h-80 rounded-full bg-primary/15 blur-3xl" />
          <motion.div style={{ x: o2x, y: o2y }} className="animate-orb-2 absolute top-[35%] right-[6%] w-[26rem] h-[26rem] rounded-full bg-secondary/12 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Subtle kicker badge */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Shield className="w-3.5 h-3.5" /> Operating System for Indian MSMEs
          </motion.div>

          {/* Sequential headline entrance */}
          <motion.h1
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6"
          >
            Every Entrepreneur <br />
            <span className="animate-shimmer">Deserves Guidance</span>
          </motion.h1>

          <motion.p
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto leading-relaxed"
          >
            Build your profile. Find the right guidance. Discover relevant schemes. Track your entrepreneurial journey.
          </motion.p>

          <motion.p
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.4 }}
            className="text-sm text-muted-foreground mb-10"
          >
            From idea to informed action —{" "}
            <span className="text-foreground font-semibold">one entrepreneur at a time.</span>
          </motion.p>

          {/* CTA Buttons with hover glow */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="relative group">
                <span className="absolute inset-0 rounded-xl bg-primary/35 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button size="lg" className="relative text-sm sm:text-base font-bold h-12 sm:h-14 px-7 sm:px-9 bg-primary hover:bg-primary/95 text-white shadow-xl shadow-primary/25">
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Button variant="outline" size="lg" className="text-sm sm:text-base font-bold h-12 sm:h-14 px-7 sm:px-9 border-primary/30 hover:bg-primary/5 hover:border-primary">
                  Sign In
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* ══ SECTION 1: HOW IT WORKS ══ */}
      <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-card/30 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">How It Works</h2>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-3">Four steps to your journey</h3>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Fulcrum helps you build your entrepreneurial profile, connect with the right guidance, discover relevant schemes and track everything in one place.
            </p>
          </motion.div>
          <HowItWorksSection />
        </div>
      </section>

      {/* ══ SECTION 2: WHAT FULCRUM BRINGS TOGETHER ══ */}
      <section id="brings-together" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Connected Architecture</h2>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-3">
              Everything your journey needs, connected.
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Profile data, business mentorship, domain specialists, and public schemes working together as one system.
            </p>
          </motion.div>
          <WhatBringsTogetherSection />
        </div>
      </section>

      {/* ══ SECTION 3: WHO IS FULCRUM FOR (BUILT AROUND ENTREPRENEUR) ══ */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-card/25 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <BuiltAroundEntrepreneurSection />
        </div>
      </section>

      {/* ══ SECTION 4 & 5: YOUR JOURNEY & WHY FULCRUM ══ */}
      <section id="journey" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Timeline progression */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Your Journey</h2>
            <h3 className="text-3xl lg:text-4xl font-black mb-3 tracking-tight">Watch a journey unfold</h3>
            <p className="text-muted-foreground mb-8 text-sm sm:text-base leading-relaxed">
              Every entrepreneur's journey on Fulcrum follows a structured path — from profile creation through guidance, scheme discovery and ongoing progress tracking.
            </p>
            <JourneyTimeline />
          </motion.div>

          {/* Credible Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Why Fulcrum</h2>
            <h3 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight">Everything in one place</h3>
            <WhyFulcrumComparison />
          </motion.div>
        </div>
      </section>

      {/* ══ SECTION 6: GUIDANCE (GUIDE + SME) ══ */}
      <section id="guidance" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-card/30 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Guidance When It Matters</h2>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-3">The right support, at the right time</h3>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Entrepreneurs can be connected with an assigned Guide for ongoing business mentorship and SMEs for specialist domain support.
            </p>
          </motion.div>
          <GuideSmeSection />
        </div>
      </section>

      {/* ══ SECTION 7: SCHEME INTELLIGENCE ══ */}
      <section id="schemes" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Scheme Intelligence</h2>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight">Discover what's relevant to you</h3>
          </motion.div>
          <SchemeSection />
        </div>
      </section>

      {/* ══ SECTION 8: CONSULTATION ══ */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-card/30 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <ConsultationSection />
        </div>
      </section>

      {/* ══ SECTION 9: INSTITUTIONAL MEMORY ══ */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <InstitutionalMemorySection />
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden flex justify-center">
        <div className="absolute inset-0 bg-gradient-mesh opacity-35 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 bg-card border border-border max-w-5xl w-full rounded-3xl p-6 sm:p-12 lg:p-20 text-center shadow-2xl group overflow-hidden"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/8 via-secondary/8 to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 sm:mb-6 relative z-10">
            Ready to begin <span className="animate-shimmer">your journey?</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
            Build your profile. Connect with guidance. Discover relevant schemes. Track your progress.
          </p>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="relative group/btn">
              <span className="absolute inset-0 rounded-xl bg-primary/30 blur-lg scale-110 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <Button size="lg" className="relative text-base sm:text-lg font-bold h-12 sm:h-14 px-8 sm:px-10 bg-primary hover:bg-primary/95 text-white shadow-xl shadow-primary/25">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t border-border bg-card py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <span className="flex items-center gap-2 text-xl font-black mb-2 whitespace-nowrap">
              <img src="/favicon.svg" alt="Fulcrum Logo" className="w-7 h-7 rounded-md shadow-xs" />
              <span>Fulcrum<span className="text-primary">-India</span></span>
            </span>
            <p className="text-muted-foreground text-sm max-w-sm mt-2 leading-relaxed">
              Helping entrepreneurs build their profile, connect with guidance, discover relevant government schemes and track their entrepreneurial journey.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Platform</h4>
            <div className="space-y-3 flex flex-col text-sm">
              {NAV_LINKS.map(link => (
                <a key={link.id} href={`#${link.id}`} className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Legal</h4>
            <div className="space-y-3 flex flex-col text-sm">
              <a href="/privacy" className="hover:text-primary hover:translate-x-1 transition-all inline-block cursor-pointer">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary hover:translate-x-1 transition-all inline-block cursor-pointer">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Fulcrum-India. All rights reserved.</span>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">
            app.fulcrumindia.online →
          </a>
        </div>
      </footer>
    </div>
  );
}
