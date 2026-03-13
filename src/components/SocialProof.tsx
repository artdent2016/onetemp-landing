"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

type ClinicData = {
  clinicName: string;
  doctorName?: string;
  region?: string;
  dateAdded?: string;
};

const clinics: ClinicData[] = [
  // 🟢 [완전히 명칭이 일치하는 기존 치과들]
  { clinicName: "감탄치과" },
  { clinicName: "과천 리더스치과" },
  { clinicName: "박세진치과" },
  { clinicName: "사과나무치과" },
  { clinicName: "서울럭스치과" },
  { clinicName: "서울리더스치과" },
  { clinicName: "서울미소치과" },
  { clinicName: "서울플러스치과" },
  { clinicName: "서울하이안치과 반포" },
  { clinicName: "서울하이안치과 사당" },
  { clinicName: "엘에이치과" },
  { clinicName: "엠플란트치과" },
  { clinicName: "연세이탑치과" },
  { clinicName: "이바른치과교정과" },
  { clinicName: "파스텔치과" },
  { clinicName: "서울복음치과" },
  { clinicName: "다온치과" },
  { clinicName: "바른치과" },
  { clinicName: "치과가는날치과" },
  { clinicName: "이상훈치과" },
  { clinicName: "에투알드치과" },
  { clinicName: "서울좋은치과 부천" },
  { clinicName: "서울좋은치과보철과" },
  { clinicName: "대전즐거운치과" },
  { clinicName: "이혁상 더블유치과" },
  { clinicName: "연세프라임치과" },
  { clinicName: "현대웰치과" },
  { clinicName: "서울덴치과" },
  { clinicName: "서울로뎀치과" },
  { clinicName: "부천웰치과" },
  { clinicName: "화성미담치과" },
  { clinicName: "서울대보존과" },
  { clinicName: "JNS오치과" },
  { clinicName: "가이드치과" },
  { clinicName: "더서울치과" },
  { clinicName: "디오연세치과" },
  { clinicName: "삼성이튼치과" },
  { clinicName: "서울드림치과" },
  { clinicName: "서울미래치과" },
  { clinicName: "서울비전치과" },
  { clinicName: "서울스마트치과" },
  { clinicName: "서울에스원치과" },
  { clinicName: "서울정플란트치과" },
  { clinicName: "성베드로치과" },
  { clinicName: "연세sk치과" },
  { clinicName: "연세하이디치과" },
  { clinicName: "우리삼성치과" },
  { clinicName: "인터서울치과" },
  { clinicName: "크리스탈치과" },
  { clinicName: "신세계치과" },
  { clinicName: "원데이치과" }
];

export default function SocialProof() {
  // Sort clinics by dateAdded (newest first) if available, otherwise preserve original order
  const sortedClinics = [...clinics].sort((a, b) => {
    if (a.dateAdded && b.dateAdded) {
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    }
    return 0; // Preserve existing order if no dateAdded
  });

  return (
    <section className="py-24 relative bg-[var(--color-surface)] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-primary-900)]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            현재 <span className="text-[var(--color-primary-500)]">운영 중인 치과</span> 및 원장님
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            현재 50개 이상의 치과가 원템프를 도입해 운영 중입니다. <br />
            이미 많은 원장님들께서 원템프의 혁신을 경험하고 계십니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedClinics.map((clinic, index) => (
            <motion.div
              key={`${clinic.clinicName}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="glass p-5 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary-500)]/30 hover:bg-white/5 transition-colors flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--color-primary-900)]/30 flex items-center justify-center flex-shrink-0 text-[var(--color-primary-500)] group-hover:bg-[var(--color-primary-500)]/20 transition-colors">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-semibold text-gray-200 truncate" title={clinic.clinicName}>
                  {clinic.clinicName}
                </h3>
                {clinic.doctorName && (
                  <p className="text-sm text-gray-500 truncate mt-0.5">{clinic.doctorName}</p>
                )}
                {/* Optional Region Tag (commented out for now, can be enabled later) */}
                {/* {clinic.region && (
                   <span className="inline-block px-1.5 py-0.5 bg-gray-800 text-gray-400 text-[10px] rounded mt-1">
                     {clinic.region}
                   </span>
                )} */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
