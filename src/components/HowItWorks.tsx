"use client";

import { motion } from "framer-motion";
import { UploadCloud, PenTool, Printer } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <UploadCloud className="w-6 h-6" />,
    title: "스캔 데이터 업로드",
    description: "구강 스캐너로 채득한 환자의 데이터를 원템프 플랫폼에 간편하게 업로드합니다.",
  },
  {
    number: "02",
    icon: <PenTool className="w-6 h-6" />,
    title: "전문가의 원격 디자인",
    description: "원템프의 숙련된 전문 디자이너가 실시간으로 데이터를 확인하고 최적의 임시치아를 디자인합니다.",
  },
  {
    number: "03",
    icon: <Printer className="w-6 h-6" />,
    title: "식약처 허가 전용 소재로 즉시 출력",
    description: "디자인이 완료되면, 무상 설치된 장비와 식약처 허가 전용 소재를 통해 치과 원내에서 안전하고 정밀하게 출력이 시작됩니다.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[var(--color-surface)] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-500)] to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            이용 방법은 <span className="text-[var(--color-primary-500)]">놀랍도록 간단합니다</span>
          </h2>
          <p className="text-gray-400 text-lg">
            단 세 단계면 충분합니다. 장비 관리의 스트레스 없이,
            스마트한 디지털 치과 진료 환경을 구축해보세요.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="w-36 h-36 mx-auto bg-[var(--color-background)] rounded-full border border-[var(--color-border)] flex items-center justify-center mb-8 relative z-10 shadow-2xl">
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[var(--color-primary-600)] flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 rounded-full glass border-[var(--color-primary-500)]/30 flex items-center justify-center text-[var(--color-primary-400)]">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
