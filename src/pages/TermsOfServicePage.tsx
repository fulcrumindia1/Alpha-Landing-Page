/**
 * TermsOfServicePage.tsx — Fulcrum OS Terms of Service
 * Matches existing design system: dark/light theme, Inter font, shadcn/ui components
 */
import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ArrowLeft, Scale, Shield, Users, FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function TermsOfServicePage() {
  usePageMeta({ title: "Terms of Service", description: "Read the Fulcrum-India Terms of Service governing use of the platform.", path: "/terms" });
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon"><ArrowLeft className="w-4 h-4" /></Button>
          </Link>
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            <span className="font-bold">Terms of Service</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-black mb-2">Terms of Service</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: June 2026 · Fulcrum-India</p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-bold text-primary">Institutional Memory Commitment</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fulcrum-India is built on the principle of <strong className="text-foreground">institutional memory</strong>. 
              Every entrepreneur's journey — successes, rejections, document issues, bank interactions — becomes 
              knowledge that helps the next entrepreneur. By using this platform, you contribute to this collective 
              knowledge base while maintaining full control over your personal data.
            </p>
          </div>

          <div className="space-y-8">
            <Section icon={Users} title="1. Who We Serve">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fulcrum-India serves <strong className="text-foreground">first-generation entrepreneurs</strong> from 
                SC/ST/OBC and other underrepresented communities in India. Our platform connects you with 
                Guides, government schemes, and funding opportunities.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Aspirants (entrepreneurs seeking funding)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Guides (verified guides and mentors)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Administrators (government officers and coordinators)</li>
              </ul>
            </Section>

            <Section icon={FileText} title="2. Data Collection & Usage">
              <p className="text-sm text-muted-foreground leading-relaxed">
                We collect only the data necessary to match you with schemes, guides, and funding opportunities:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Identity:</strong> Phone number, name, district, state (for scheme eligibility)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Business:</strong> Business type, stage, funding needs (for scheme matching)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Journey:</strong> Application status, milestones, document completion (for tracking)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Community:</strong> SC/ST/OBC/General (for SCSP/TSP fund tracking)</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Documents are NOT stored on our platform.</strong> They are shared 
                directly between you and your guide via phone/WhatsApp. We only track document completion status.
              </p>
            </Section>

            <Section icon={Shield} title="3. Privacy & Data Protection">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Your personal data is never sold to third parties</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Aggregate, anonymized data may be used for government reporting</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> You can request data deletion at any time</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> All data is stored in India (compliant with data residency requirements)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Aadhaar data is used only for KYC purposes as required by schemes</li>
              </ul>
            </Section>

            <Section icon={AlertTriangle} title="4. Government Scheme Disclaimer">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fulcrum-India is a <strong className="text-foreground">facilitation platform</strong>, not a government entity. 
                While we provide information about government schemes, the final approval rests with the respective 
                banks and government departments. We do not guarantee funding approval.
              </p>
              <div className="mt-3 bg-warning/10 border border-warning/20 rounded-xl p-4">
                <p className="text-xs text-warning font-bold mb-1">⚠️ Important</p>
                <p className="text-xs text-muted-foreground">
                  Always verify scheme details from official government sources. Fulcrum-India provides guidance 
                  based on community knowledge and historical data, but scheme terms may change.
                </p>
              </div>
            </Section>

            <Section icon={Scale} title="5. RTI Compliance">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fulcrum-India supports the Right to Information (RTI) Act, 2005. Our platform:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Tracks fund flow from government schemes to beneficiaries</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Provides transparency in SCSP/TSP fund utilization</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Maintains audit trails for all journey events</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Supports RTI requests for fund tracking data</li>
              </ul>
            </Section>

            <Section icon={Users} title="6. Community Guidelines">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Treat all users with respect regardless of community, gender, or background</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Do not submit fraudulent documents or false information</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Guides must provide honest guidance and not charge fees beyond what schemes allow</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> Report any misuse of the platform to administrators</li>
              </ul>
            </Section>

            <Section icon={FileText} title="7. Unique Number System">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Each user receives a unique identifier:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">FUL-A-XXXXXX</strong> — Aspirant (Entrepreneur)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">FUL-B-XXXXXX</strong> — Guide (Guide/Mentor)</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">FUL-X-XXXXXX</strong> — Administrator</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                This number is your permanent identity on the platform. It cannot be changed and is linked to 
                all your journeys and contributions to institutional memory.
              </p>
            </Section>

            <div className="border-t border-border pt-8 mt-8">
              <p className="text-xs text-muted-foreground leading-relaxed">
                By using Fulcrum-India, you agree to these terms. For questions, contact us at{" "}
                <a href="mailto:legal@fulcrumindia.online" className="text-primary font-semibold hover:underline">
                  legal@fulcrumindia.online
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                © 2026 Fulcrum-India. Built with ❤️ in India. Aligned with India Stack, DPIIT, and SCSP/TSP guidelines.
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
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
