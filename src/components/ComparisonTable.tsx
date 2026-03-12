"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisonData = [
  { feature: "크라운 당 제작 비용", traditional: "15,000 ~ 30,000원", onetemp: "단돈 5,000원" },
  { feature: "평균 소요 시간", traditional: "기공소 왕복 소요 (1~3일)", onetemp: "디자인 30분, 출력 20분" },
  { feature: "원내 인건비 부담", traditional: "높음 (스태프 숙련도 필요)", onetemp: "매우 낮음 (스캔 후 클릭 1번)" },
  { feature: "초기 장비 도입 비용", traditional: "수백만 원 (3D 프린터 직접 구매)", onetemp: "0원 (단기 렌탈 무료)" },
  { feature: "퀄리티 균일도", traditional: "제작자에 따라 다름", onetemp: "전문 디자이너의 일정한 품질" },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-[var(--color-surface)] relative">
       <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            기존 방식과의 <span className="text-[var(--color-primary-500)]">비교 불가</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            원템프를 도입하는 순간부터 원장님 병원의 모든 것이 달라집니다. <br/>
            수치로 증명되는 압도적인 차이를 확인하세요.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-background)] shadow-2xl shadow-[var(--color-primary-900)]/10"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[#0d0d0d]">
            <div className="p-6 font-semibold text-gray-400 text-left">비교 항목</div>
            <div className="p-6 font-semibold text-center border-l border-[var(--color-border)] text-gray-400">
              기존 임시치아 제작
            </div>
            <div className="p-6 text-center border-l border-t-2 border-l-[var(--color-border)] border-t-[var(--color-primary-500)] bg-[var(--color-primary-900)]/10">
              <span className="font-bold text-xl text-[var(--color-primary-400)]">원템프 솔루션</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[var(--color-border)]">
            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-3 group hover:bg-white/5 transition-colors">
                <div className="p-6 text-gray-300 font-medium flex items-center">
                  {row.feature}
                </div>
                
                <div className="p-6 border-l border-[var(--color-border)] text-gray-400 flex flex-col items-center justify-center text-center">
                  <span className="mb-2"><X className="w-5 h-5 text-red-500 opacity-70" /></span>
                  {row.traditional}
                </div>
                
                <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-primary-900)]/5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <span className="mb-2"><Check className="w-6 h-6 text-[var(--color-primary-400)]" /></span>
                  <span className="font-bold text-white relative z-10">{row.onetemp}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
