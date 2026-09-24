/**
 * productFacts.ts
 *
 * Single Source of Truth for all public marketing copy, canonical URLs,
 * and verified product capabilities of Fulcrum-India.
 *
 * Prevents stale, unsupported, or contradictory marketing claims.
 */

export const PRODUCT_NAME = "Fulcrum-India";
export const PUBLIC_SITE_URL = "https://fulcrumindia.online";
export const APP_URL = "https://app.fulcrumindia.online/";
export const CONTACT_EMAIL = "contact@fulcrumindia.online";
export const PRIVACY_EMAIL = "privacy@fulcrumindia.online";
export const LEGAL_EMAIL = "legal@fulcrumindia.online";

export const TAGLINE = "Every Entrepreneur Deserves Guidance";
export const SUPPORTING_MESSAGE =
  "Build your profile. Find the right guidance. Discover relevant schemes. Track your entrepreneurial journey.";
export const PHILOSOPHY_NOTE = "From idea to informed action — one entrepreneur at a time.";

export const CORE_DESCRIPTION =
  "Fulcrum-India is an operating system and guided orchestration layer for Indian micro and small enterprises. It helps first-generation, underserved, and underrepresented entrepreneurs build structured business profiles, connect with mentors, discover relevant government schemes, and track their progress.";

export const USER_ROLES = {
  aspirant: {
    title: "Entrepreneur",
    description: "Builds a structured business profile, explores relevant government schemes, receives guidance, and tracks journey milestones.",
  },
  guide: {
    title: "Guide",
    subtitle: "Your ongoing business mentor",
    description: "Provides sustained guidance through business planning, journey milestone navigation, and scheme application preparation.",
  },
  sme: {
    title: "SME (Subject Matter Expert)",
    subtitle: "Specialist expertise when you need it",
    description: "Provides targeted domain inputs in specialist areas including GST & taxation, FSSAI & compliance, patents & legal advisory, and technical guidance.",
  },
};

export const SCHEME_MATCHING_DESCRIPTION =
  "Fulcrum evaluates profile factors — including state, district, industry sector, business stage, and investment requirements — to surface relevant government schemes through deterministic evaluation.";

export const SCHEME_DISCLAIMER =
  "Scheme recommendations are informational. Final eligibility and approval are determined by the respective government departments and financial institutions according to official scheme criteria.";

export const JOURNEY_DESCRIPTION =
  "A chronological timeline that records milestones, guidance received, scheme applications, and progress in one connected workspace.";

export const INSTITUTIONAL_MEMORY_DESCRIPTION =
  "Fulcrum keeps journeys, milestones, guidance, and decisions connected over time — creating a record of what happened and what was learned along the way.";

/**
 * Interactive "Fulcrum in 30 Seconds" Orientation options
 */
export const ORIENTATION_OPTIONS = [
  {
    id: "starting",
    label: "I'm starting a business",
    headline: "Turn your early concept into a structured profile",
    detail: "Complete your basic enterprise details, understand requirements for your sector, and identify government schemes designed for new ventures.",
    highlight: "Seed Stage & Incorporation Discovery",
    steps: ["Define business concept & sector", "Identify initial document checklist", "Explore early-stage schemes"],
  },
  {
    id: "running",
    label: "I'm already running a business",
    headline: "Organize your operations and explore expansion schemes",
    detail: "Record your turnover, enterprise tier, and capital needs to discover growth incentives, subsidies, and compliance requirements.",
    highlight: "Operational Growth & Scheme Subsidies",
    steps: ["Update stage & capital requirements", "Map relevant state & central schemes", "Track milestones chronologically"],
  },
  {
    id: "guidance",
    label: "I need guidance",
    headline: "Connect with business mentorship & specialist support",
    detail: "Entrepreneurs can be connected with an assigned Guide for ongoing mentorship and domain SMEs for taxation, legal, and regulatory questions.",
    highlight: "Guide Mentorship & Domain SME Advisory",
    steps: ["Discuss business strategy with a Guide", "Get specialist answers on GST & FSSAI", "Prepare accurate applications"],
  },
  {
    id: "schemes",
    label: "I want to explore schemes",
    headline: "Surface opportunities matched to your profile factors",
    detail: "Stop sorting through unstructured lists. Fulcrum evaluates your geography, sector, and investment requirements to surface relevant opportunities.",
    highlight: "Deterministic Factor-Based Matching",
    steps: ["Input geography, sector & stage", "Review Recommended & Potentially Eligible schemes", "Understand official eligibility criteria"],
  },
] as const;

/**
 * Factual Answer-Engine Optimization (AEO) Q&A Knowledge Base
 * Fully crawlable on-page and in JSON-LD.
 */
export const AEO_FAQS = [
  {
    question: "What is Fulcrum-India?",
    answer:
      "Fulcrum-India is an operating system and guided orchestration layer for Indian micro and small enterprises. It helps entrepreneurs organize their business information, receive structured guidance, discover relevant government schemes, and track their journey in one place.",
  },
  {
    question: "Who is Fulcrum for?",
    answer:
      "Fulcrum is built for Indian entrepreneurs — including first-generation founders, micro-enterprises, and small businesses — whether starting a venture, expanding an existing business, or navigating government support programs.",
  },
  {
    question: "What does a Guide do?",
    answer:
      "A Guide serves as an ongoing business mentor. Guides assist entrepreneurs with strategic business planning, milestone navigation, and scheme application preparation through the platform.",
  },
  {
    question: "What does an SME do?",
    answer:
      "A Subject Matter Expert (SME) provides specialist domain guidance in targeted areas where technical knowledge is critical, such as GST & taxation, FSSAI compliance, patents, licensing, and legal advisory.",
  },
  {
    question: "How does Fulcrum help entrepreneurs?",
    answer:
      "Fulcrum brings together your business profile, mentorship from Guides, specialist SME support, relevant scheme discovery, and a chronological journey timeline into a single connected platform.",
  },
  {
    question: "How does scheme matching work?",
    answer:
      "Fulcrum uses deterministic evaluation matching an entrepreneur's specific profile factors against official scheme parameters to highlight Recommended schemes (high relevance) and Potentially Eligible schemes (partial match requiring review).",
  },
  {
    question: "What information is considered for scheme relevance?",
    answer:
      "Scheme evaluation considers geographic location (state and district), industry sector (e.g., food processing, manufacturing, agriculture), enterprise stage (seed, early, growth), demographic factors, and investment/capital requirements.",
  },
  {
    question: "Does Fulcrum guarantee scheme eligibility?",
    answer:
      "No. Fulcrum surfaces schemes based on profile relevance for informational purposes. Final eligibility criteria and formal determinations are made solely by the respective government ministries, nodal agencies, or implementing bodies.",
  },
  {
    question: "Does Fulcrum guarantee funding?",
    answer:
      "No. Fulcrum does not provide or guarantee loans, subsidies, or grants. Credit underwriting and financial disbursement decisions rest exclusively with designated lending institutions, banks, and scheme authorities.",
  },
  {
    question: "Is Fulcrum a bank?",
    answer:
      "No. Fulcrum-India is a technology orchestration platform, not a bank, non-banking financial company (NBFC), or financial institution. It does not disburse funds or make credit decisions.",
  },
  {
    question: "How does an entrepreneur get started?",
    answer:
      "Entrepreneurs can get started by accessing the production platform at app.fulcrumindia.online to create their profile and begin their journey.",
  },
];
