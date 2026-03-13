"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Printer } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-500)] to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-[var(--color-primary-100)] text-sm font-medium"
          >
            <Printer size={16} />
            <span>식약처 허가 전용 소재 및 3D 프린터 지원</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            임시치아의 새로운 기준,
            <br />
            <span className="text-gradient-primary">
              원템프가 혁신합니다
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            스캔 데이터만 업로드하세요. 원격으로 전문 디자이너가 디자인하고, 
            식약처 허가 전용 소재로 치과에서 즉시 출력합니다. 
            크라운 당 5,000원에 경험하는 안전하고 정밀한 프리미엄 서비스.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/order?source=hero-120-crown-package&package=120-crown" className="w-full sm:w-auto px-8 py-4 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group">
              120크라운 패키지 시작하기
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact?source=hero-consultation" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-white rounded-xl font-semibold transition-all flex justify-center">
              서비스 상담 신청
            </Link>
          </motion.div>
        </div>

        {/* Placeholder placeholder for video/image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="aspect-video bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden flex items-center justify-center relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-900)]/20 to-transparent"></div>
            <div className="text-center z-10">
              <div className="w-20 h-20 rounded-full bg-[var(--color-primary-500)]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary-500)] flex items-center justify-center pl-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-300 font-medium">원템프 서비스 소개 영상 (Placeholder)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
