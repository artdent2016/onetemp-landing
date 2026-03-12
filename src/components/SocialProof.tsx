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
  { clinicName: "다온치과의원" },
  { clinicName: "바른서울치과의원" },
  { clinicName: "치과가는날치과의원" },
  { clinicName: "이상훈치과의원" },
  { clinicName: "엠플란트치과" },
  { clinicName: "에튜알드서울치과" },
  { clinicName: "서울좋은치과의원" },
  { clinicName: "즐거운치과" },
  { clinicName: "이현상 더블유치과" },
  { clinicName: "연세프라임치과의원" },
  { clinicName: "감탄치과" },
  { clinicName: "신세계치과" },
  { clinicName: "연세이탑치과" },
  { clinicName: "이바른치과교정과" },
  { clinicName: "현대밸치과" },
  { clinicName: "서울럭스치과" },
  { clinicName: "서울텐치과" },
  { clinicName: "박세진치과" },
  { clinicName: "서울리더스치과" },
  { clinicName: "서울로뎀치과" },
  { clinicName: "부천벨치과" },
  { clinicName: "서울하이안치과 사당" },
  { clinicName: "과천 리더스치과" },
  { clinicName: "미담치과" },
  { clinicName: "엘에이치과" },
  { clinicName: "파스텔치과" },
  { clinicName: "서울플러스치과" },
  { clinicName: "사과나무치과" },
  { clinicName: "서울하이안치과 반포" },
  { clinicName: "서울미소치과" },
  { clinicName: "서울대 보존과" },
  { clinicName: "서울복음치과" },
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
