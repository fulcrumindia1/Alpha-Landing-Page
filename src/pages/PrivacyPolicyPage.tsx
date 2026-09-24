/**
 * PrivacyPolicyPage.tsx — Fulcrum OS Privacy Policy
 * Matches existing design system exactly
 */
import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ArrowLeft, Lock, Eye, Database, Trash2, Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PrivacyPolicyPage() {
  usePageMeta({ title: "Privacy Policy", description: "Learn how Fulcrum-India collects, uses, and protects your personal data.", path: "/privacy" });
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/"><Button variant="ghost" size="icon"><ArrowLeft className="w-4 h-4" /></Button></Link>
          <div className="flex items-center gap-2"><Lock className="w-5 h-5 text-primary" /><span className="font-bold">Privacy Policy</span></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-black mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: June 2026 · Fulcrum-India</p>

          <div className="bg-success/5 border border-success/20 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-3"><Shield className="w-5 h-5 text-success" /><span className="font-bold text-success">Our Commitment</span></div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fulcrum-India is committed to <strong className="text-foreground">data minimization and transparency</strong>. 
              We collect only what's necessary, store it securely in India, and never sell your data. 
              Your documents are never stored on our platform — only their completion status is tracked.
            </p>
          </div>

          <div className="space-y-8">
            <Section icon={Database} title="1. What We Collect">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-border"><th className="text-left py-2 font-bold">Data</th><th className="text-left py-2 font-bold">Purpose</th><th className="text-left py-2 font-bold">Required?</th></tr></thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50"><td className="py-2">Phone Number</td><td>Identity, OTP verification</td><td className="text-success">Yes</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2">Full Name</td><td>Profile identity</td><td className="text-success">Yes</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2">District & State</td><td>Guide matching, scheme eligibility</td><td className="text-success">Yes</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2">Community</td><td>SCSP/TSP fund tracking</td><td className="text-warning">Optional</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2">Business Type</td><td>Scheme matching</td><td className="text-success">Yes</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2">Journey Events</td><td>Institutional memory</td><td className="text-success">Auto</td></tr>
                    <tr><td className="py-2">Documents</td><td>NOT stored (shared via phone)</td><td className="text-muted-foreground">N/A</td></tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section icon={Eye} title="2. How We Use Your Data">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Scheme Matching:</strong> Your business type, location, and community help match you with relevant government schemes</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Guide Matching:</strong> Your district, language, and industry help match an appropriate guide for you</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Institutional Memory:</strong> Anonymized journey data helps future entrepreneurs avoid common mistakes</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Fund Tracking:</strong> Aggregate data helps track SCSP/TSP fund flow to intended beneficiaries</li>
              </ul>
            </Section>

            <Section icon={Lock} title="3. Data Security">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary">•</span> All data encrypted at rest and in transit (TLS 1.3)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Data stored in India (compliant with data residency laws)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Documents are NEVER stored on our platform</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Access controlled by role-based permissions</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Audit logs for all admin actions</li>
              </ul>
            </Section>

            <Section icon={Download} title="4. Your Rights">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Access:</strong> View all your data at any time via your account profile</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Correction:</strong> Update your profile information anytime</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Deletion:</strong> Request complete data deletion (except anonymized institutional memory)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Export:</strong> Download your journey data as CSV/PDF</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
            </Section>

            <Section icon={Trash2} title="5. Data Retention">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Active account data: Retained until you request deletion</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Anonymized institutional memory: Retained indefinitely (cannot identify individuals)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Audit logs: Retained for 7 years (government compliance)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Deleted accounts: Permanently removed within 30 days</li>
              </ul>
            </Section>

            <div className="border-t border-border pt-8 mt-8">
              <p className="text-xs text-muted-foreground leading-relaxed">
                For privacy-related inquiries, contact{" "}
                <a href="mailto:privacy@fulcrumindia.online" className="text-primary font-semibold hover:underline">
                  privacy@fulcrumindia.online
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                © 2026 Fulcrum-India. Compliant with IT Act 2000, SPDI Rules 2011, and DPDP Act 2023.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Icon className="w-5 h-5 text-primary" /></div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
