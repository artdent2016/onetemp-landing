"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "원템프 서비스를 위해 제공되는 3D 프린터의 종류는 무엇인가요?",
    answer: "원템프는 진료 환경에 최적화된 최신형 FDM 방식의 3D 프린터를 원내에 무상으로 제공합니다. 냄새가 없고 관리가 편리하여 스태프들이 사용하기에 매우 적합합니다.",
  },
  {
    question: "프린터 사용법이나 고장 시 AS는 어떻게 되나요?",
    answer: "원템프 장비는 택배 발송 후 자가 설치 방식으로 운영되며, 큰 어려움 없이 쉽게 설치할 수 있도록 안내해드립니다. 현재 50개 이상의 치과에서 이 방식으로 성공적으로 운영 중입니다. 사용 중 문의가 발생할 경우 원격으로 빠르게 기술 지원을 제공하며, 하드웨어 이상 시에는 절차에 따라 신속하게 대응해드립니다.",
  },
  {
    question: "한 번 충전(120 크라운)한 수량은 사용 기한이 있나요?",
    answer: "네, 충전하신 120 크라운의 사용 기한은 1년입니다. 월 10개 정도 사용하는 기준으로 크게 무리 없이 운영하실 수 있는 수준이며, 병원 운영 상황에 맞춰 1년 내에서 여유롭게 사용하실 수 있습니다.",
  },
  {
    question: "기존에 사용하던 소재를 그대로 사용해도 되나요?",
    answer: "아니요. 원템프 장비는 식약처 허가 전용 소재를 기반으로 최적화되어 있습니다. 안정적인 출력 품질을 위해 전용 소재를 사용해야 하며, 해당 소재는 사용량에 맞춰 지속 공급됩니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">자주 묻는 질문</h2>
        <p className="text-gray-400 text-lg">
          가장 많이 해주시는 질문을 모았습니다.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-colors ${
              openIndex === index 
                ? 'border-[var(--color-primary-500)]/50 glass' 
                : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-border)]/50'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-semibold text-lg pr-8">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 flex-shrink-0 text-[var(--color-primary-400)]" />
              ) : (
                <Plus className="w-5 h-5 flex-shrink-0 text-gray-500" />
              )}
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-[var(--color-border)] pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
