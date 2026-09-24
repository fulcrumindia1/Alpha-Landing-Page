import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-md">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}
          className="w-24 h-24 rounded-3xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl font-black text-primary">404</span>
        </motion.div>
        <h1 className="text-3xl font-black mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/">
            <Button variant="outline" className="font-semibold">
              <Home className="w-4 h-4 mr-2" /> Home
            </Button>
          </Link>
          <Link href="/">
            <Button className="font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
              <ArrowLeft className="w-4 h-4 mr-2" /> Go Back
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
