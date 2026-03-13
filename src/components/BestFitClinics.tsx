"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const clinicsList = [
  "매일 임시치아를 깎느라 진료 시간이 줄어드는 원장님",
  "스태프의 임시치아 제작 숙련도 차이로 고민이신 원장님",
  "외주 기공소의 높은 단가와 배송 지연이 부담스러우신 원장님",
  "구강 스캐너는 도입했으나 3D 프린터 운용에 부담을 느끼시는 분",
  "원터치 디지털 워크플로우를 병원에 도입하고 싶은 병원",
];

export default function BestFitClinics() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left / Title area */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                어떤 치과에 <br />
                <span className="text-[var(--color-primary-500)]">가장 필요할까요?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                원템프는 진료 효율을 높이고 비용을 절감하고자 하는
                모든 스마트한 치과 병원에 완벽한 솔루션을 제공합니다.
              </p>
                          
              <div className="aspect-video bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden relative group">
                <img
                  src="/clinic-usage.png"
                  alt="치과 장비 및 3D 스캐너 활용 이미지"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual in case the user hasn't uploaded the image yet
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-[var(--color-surface)] flex flex-col items-center justify-center">
                        <p class="text-[var(--color-primary-400)] text-sm font-medium p-4 text-center">
                          이미지를 public 폴더에<br/>'clinic-usage.png'로 저장해 주세요.
                        </p>
                      </div>
                    `;
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right / Check list */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {clinicsList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors border-l-4 border-l-transparent hover:border-l-[var(--color-primary-500)] cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary-900)]/50 flex items-center justify-center flex-shrink-0 text-[var(--color-primary-400)] font-bold">
                    ✓
                  </div>
                  <p className="text-lg font-medium text-gray-200">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
