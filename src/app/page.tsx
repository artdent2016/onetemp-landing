import Link from "next/link";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import BestFitClinics from "@/components/BestFitClinics";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-[var(--color-primary-500)] selection:text-white pb-10 overflow-x-hidden">
      {/* Navigation placeholder */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            One<span className="text-[var(--color-primary-500)]">Temp</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#benefits" className="hover:text-white transition-colors">도입 혜택</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">이용 방법</a>
            <a href="#pricing" className="hover:text-white transition-colors">가격 안내</a>
            <a href="#testimonials" className="hover:text-white transition-colors">이용 후기</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <Link href="/contact?source=header-inquiry" className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            도입 문의
          </Link>
        </div>
      </nav>

      <Hero />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <BestFitClinics />
      <SocialProof />
      <Testimonials />
      <ComparisonTable />
      <FAQ />
      <CTA />
      
      {/* Footer Placeholder */}
      <footer className="py-8 border-t border-[var(--color-border)] mt-20 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-6">
          <p>© 2026 OneTemp. All rights reserved. 프리미엄 원격 임시치아 프린팅 서비스</p>
        </div>
      </footer>
    </main>
  );
}
