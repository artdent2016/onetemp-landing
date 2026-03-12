"use client";

import { motion } from "framer-motion";

type TestimonialData = {
  title?: string;
  clinicName?: string;
  doctorName?: string;
  videoPath: string;
};

const testimonials: TestimonialData[] = [
  {
    title: "원템프 사용 후기",
    clinicName: "더서울치과",
    videoPath:
      "https://ujzqqjf9n116mccj.public.blob.vercel-storage.com/%EB%8D%94%EC%84%9C%EC%9A%B8%EC%B9%98%EA%B3%BC.mp4",
  },
  {
    title: "원템프 제작 후기",
    clinicName: "서울드림치과",
    videoPath:
      "https://ujzqqjf9n116mccj.public.blob.vercel-storage.com/%EC%84%9C%EC%9A%B8%EB%93%9C%EB%A6%BC%EC%B9%98%EA%B3%BC%20%EC%A0%9C%EC%9E%91%20%EC%98%81%EC%83%81.mp4",
  },
  {
    title: "원템프 사용 후기",
    clinicName: "서울드림치과",
    videoPath:
      "https://ujzqqjf9n116mccj.public.blob.vercel-storage.com/%EC%84%9C%EC%9A%B8%EB%93%9C%EB%A6%BC%EC%B9%98%EA%B3%BC.mp4",
  },
  {
    title: "원템프 사용 후기",
    clinicName: "연세sk치과",
    videoPath:
      "https://ujzqqjf9n116mccj.public.blob.vercel-storage.com/%EC%97%B0%EC%84%B8sk%EC%B9%98%EA%B3%BC.mp4",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-[var(--color-surface)]">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[var(--color-primary-600)]/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            실제 사용 <span className="text-[var(--color-primary-500)]">치과 원장님 후기</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            원템프를 실제로 사용 중인 치과 원장님의 후기를 영상으로 확인해보세요.
            <br />
            생생한 현장의 목소리가 원템프의 가치를 증명합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={`${item.clinicName}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl border border-[var(--color-border)] overflow-hidden flex flex-col hover:border-[var(--color-primary-500)]/30 transition-colors group shadow-lg"
            >
              <div className="relative aspect-video bg-black overflow-hidden border-b border-[var(--color-border)]">
                <video
                  src={item.videoPath}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-[var(--color-background)]/50 backdrop-blur-sm flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-100">
                  {item.title || "원템프 사용 후기"}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="font-semibold text-[var(--color-primary-400)]">
                    {item.clinicName || "원템프 사용 병원"}
                  </span>
                  {item.doctorName && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      <span>{item.doctorName}</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}