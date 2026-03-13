import Link from "next/link";
import { PhoneCall, MessageCircle, ArrowLeft } from "lucide-react";

const PHONE_NUMBER = "010-8144-2875"; // Placeholder
const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_Lkxmen"; // Placeholder

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-[var(--color-primary-500)] selection:text-white pt-24 pb-20">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-500)] to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          메인으로 돌아가기
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            원템프 <span className="text-[var(--color-primary-500)]">도입 문의</span>
          </h1>
          <p className="text-xl text-gray-400">
            전화 또는 카카오채널로 편하게 문의해 주세요. <br className="hidden md:block" />
            빠르게 안내드리겠습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
            className="glass p-10 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-primary-500)]/30 transition-all flex flex-col items-center justify-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-primary-900)]/30 flex items-center justify-center text-[var(--color-primary-500)] mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary-500)] group-hover:text-white transition-all">
              <PhoneCall className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">전화 문의</h2>
            <p className="text-gray-400 mb-4">빠르고 직접적인 상담이 필요할 때</p>
            <span className="text-xl font-semibold text-[var(--color-primary-400)]">
              {PHONE_NUMBER}
            </span>
            <span className="mt-6 px-6 py-3 bg-white/5 rounded-xl font-medium text-white group-hover:bg-[var(--color-primary-600)] transition-colors w-full">
              전화 걸기
            </span>
          </a>

          <a
            href={KAKAO_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-10 rounded-3xl border border-[var(--color-border)] hover:border-[#FAE100]/30 transition-all flex flex-col items-center justify-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-[#FAE100]/10 flex items-center justify-center text-[#FAE100] mb-6 group-hover:scale-110 group-hover:bg-[#FAE100] group-hover:text-black transition-all">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">카카오채널 문의</h2>
            <p className="text-gray-400 mb-4">채팅으로 편리하게 문의하고 싶을 때</p>
            <span className="text-lg font-medium text-gray-300">
              {KAKAO_CHANNEL_URL}
            </span>
            <span className="mt-6 px-6 py-3 bg-white/5 rounded-xl font-medium text-white group-hover:bg-[#FAE100] group-hover:text-black transition-colors w-full">
              카카오채널 문의하기
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
