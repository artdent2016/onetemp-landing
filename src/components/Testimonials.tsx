"use client";

import { motion } from "framer-motion";

type TestimonialData = {
  title?: string;
  clinicName?: string;
  doctorName?: string;
  videoPath: string;
  thumbnailPath?: string;
};

const testimonials: TestimonialData[] = [
  {
    clinicName: "더서울치과",
    videoPath: "/videos/더서울치과.mp4",
  },
  {
    title: "원템프 제작 후기",
    clinicName: "서울드림치과",
    videoPath: "/videos/서울드림치과 제작 영상.mp4",
  },
  {
    clinicName: "서울드림치과",
    videoPath: "/videos/서울드림치과.mp4",
  },
  {
    clinicName: "연세SK치과",
    videoPath: "/videos/연세sk치과.mp4",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-[var(--color-surface)]">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[var(--color-primary-600)]/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            실제 사용 <span className="text-[var(--color-primary-500)]">치과 원장님 후기</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            원템프를 실제로 사용 중인 치과 원장님의 후기를 영상으로 확인해보세요. <br/>
            생생한 현장의 목소리가 원템프의 가치를 증명합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl border border-[var(--color-border)] overflow-hidden flex flex-col hover:border-[var(--color-primary-500)]/30 transition-colors group shadow-lg"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden border-b border-[var(--color-border)] group/video">
                <video 
                  src={item.videoPath}
                  controls 
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-90 group-hover/video:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none'; // Hide broken video
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex'; // Show fallback
                  }}
                >
                  <source src={item.videoPath} type="video/mp4" />
                  해당 브라우저에서 지원하지 않는 영상 포맷입니다.
                </video>
                
                {/* Fallback Error UI (Hidden by default, shown by onError) */}
                <div 
                  className="absolute inset-0 bg-gray-900 hidden flex-col items-center justify-center text-center p-6"
                  style={{ display: 'none' }}
                >
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3 text-red-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <p className="text-gray-300 text-sm font-medium">영상을 재생할 수 없습니다.</p>
                  <p className="text-gray-500 text-xs mt-1">파일 포맷이 브라우저에서 지원되지 않거나 손상되었을 수 있습니다.</p>
                </div>
              </div>
              
              {/* Text Content */}
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
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
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
