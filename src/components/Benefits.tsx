"use client";

import { motion } from "framer-motion";
import { Clock, TrendingDown, Stethoscope, Laptop } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-[var(--color-primary-500)]" />,
    title: "제작 시간 단축",
    description: "스캔 직후 즉시 디자인에 착수하여, 원내 장비로 바로 출력합니다. 대기 시간을 획기적으로 줄여 환자의 만족도를 높입니다.",
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-[var(--color-primary-500)]" />,
    title: "압도적인 비용 절감",
    description: "크라운 당 단돈 5,000원. 기공소 외주 비용 대비 파격적인 단가로 치과 운영의 수익성을 크게 개선합니다.",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-[var(--color-primary-500)]" />,
    title: "진료 본연에 집중",
    description: "원내에서 직접 임시치아를 제작하는 번거로움에서 벗어나, 환자 진료 및 치과 운영에 온전히 집중할 수 있습니다.",
  },
  {
    icon: <Laptop className="w-8 h-8 text-[var(--color-primary-500)]" />,
    title: "장비 및 식약처 허가 소재 무상 지원",
    description: "고가의 3D 프린터를 구매하실 필요가 없습니다. 원템프는 출력에 최적화된 최신 장비와 식약처 허가 전용 소재를 무상으로 제공합니다.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            왜 <span className="text-[var(--color-primary-500)]">원템프</span>인가요?
          </h2>
          <p className="text-gray-400 text-lg">
            기존의 번거롭고 값비싼 임시치아 제작 과정, 원템프가 완전히 혁신합니다.
            시간과 비용은 줄이고, 원장님의 효율은 극대화하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary-500)]/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-900)]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
