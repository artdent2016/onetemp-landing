"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative bg-[var(--color-surface)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            투명하고 <span className="text-[var(--color-primary-500)]">합리적인 가격</span>
          </h2>
          <p className="text-gray-400 text-lg">
            숨겨진 추가 비용은 없습니다. 사용한 만큼만 지불하고,
            장비는 무상으로 대여받으세요.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Transparent Single Price */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-10 rounded-3xl border border-[var(--color-border)] h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-300">임시치아 단가</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-5xl font-bold text-white">5,000</span>
              <span className="text-xl font-medium text-gray-400 mb-1">원 / 크라운</span>
            </div>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-primary-900)] flex items-center justify-center">
                  <Check className="w-4 h-4 text-[var(--color-primary-400)]" />
                </div>
                디자인 비용 전액 포함
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-primary-900)] flex items-center justify-center">
                  <Check className="w-4 h-4 text-[var(--color-primary-400)]" />
                </div>
                추가 수정 무료 지원
              </li>
              <li className="flex items-center gap-3 opacity-50">
                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                </div>
                <span className="line-through">장비 보증금 및 렌탈료 (0원)</span>
              </li>
            </ul>
          </motion.div>

          {/* Starter Package */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-b from-[var(--color-primary-900)]/40 to-[var(--color-surface)] p-10 rounded-3xl border border-[var(--color-primary-500)]/50 relative overflow-hidden h-full flex flex-col"
          >
            <div className="absolute top-0 right-0 py-2 px-6 bg-[var(--color-primary-500)] text-white text-sm font-bold rounded-bl-2xl">
              가장 많이 선택하는
            </div>
            
            <h3 className="text-2xl font-semibold mb-2 text-[var(--color-primary-100)]">스타터 패키지</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-5xl font-bold text-white">600,000</span>
              <span className="text-xl font-medium text-gray-400 mb-1">원</span>
            </div>
            
            <p className="text-sm text-gray-400 mb-8 border-b border-white/10 pb-6">
              첫 도입을 위한 가장 합리적인 선택.
              택배 발송 후 자가 설치 방식으로 누구나 쉽게 시작할 수 있습니다.
            </p>
            
            <ul className="space-y-4 text-gray-200 flex-grow mb-8">
              <li className="flex items-center gap-3 font-medium">
                <Check className="w-5 h-5 text-[var(--color-primary-400)]" />
                선결제 120 크라운 제공
              </li>
              <li className="flex items-center gap-3 font-medium">
                <Check className="w-5 h-5 text-[var(--color-primary-400)]" />
                최신 장비 무상 대여 (택배 발송)
              </li>
              <li className="flex items-center gap-3 font-medium">
                <Check className="w-5 h-5 text-[var(--color-primary-400)]" />
                식약처 허가 전용 소재 제공
              </li>
              <li className="flex items-center gap-3 font-medium">
                <Check className="w-5 h-5 text-[var(--color-primary-400)]" />
                누구나 쉬운 자가 설치 가이드 및 원격 지원 제공
              </li>
            </ul>
            
            <Link href="/order?source=pricing-starter-package&package=starter-package" className="w-full py-4 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-white rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] block text-center">
              스타터 패키지 구매하기
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
