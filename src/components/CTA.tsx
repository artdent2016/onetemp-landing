"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background with gradient and blur */}
      <div className="absolute inset-0 bg-[var(--color-primary-900)]/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-primary-500)]/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-3xl text-center border border-[var(--color-primary-500)]/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-primary-400)]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            치과 운영의 새로운 패러다임, <br />
            <span className="text-gradient-primary">지금 시작하세요</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            원템프와 함께라면 임시치아 제작의 스트레스에서 완전히 해방됩니다.
            스타터 패키지로 우리 병원의 디지털 전환을 앞당기세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] hover:-translate-y-1">
              스타터 패키지 도입하기
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 glass hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all hover:-translate-y-1">
              비대면 서비스 상담 신청
            </button>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
