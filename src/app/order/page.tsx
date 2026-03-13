"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

function OrderForm() {
  const searchParams = useSearchParams();
  const packageName = searchParams.get("package") === "120-crown" ? "120크라운 패키지" : "스타터 패키지";

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    clinicName: "",
    phoneNumber: "",
    contactName: "",
    notes: "",
  });
  const [errors, setErrors] = useState({
    clinicName: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    let hasError = false;
    const newErrors = { clinicName: "", phoneNumber: "" };

    if (!formData.clinicName.trim()) {
      newErrors.clinicName = "치과 이름을 입력해 주세요.";
      hasError = true;
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "전화번호를 입력해 주세요.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          packageName,
          source: searchParams.get("source"),
          submitted_at: new Date().toISOString()
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "서버 응답 오류");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission failed", error);
      alert("전송 중 문제가 발생했습니다. 다시 시도해 주세요.\n(혹은 환경변수가 설정되지 않아 오류가 발생했을 수 있습니다.)");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="glass p-12 rounded-3xl border border-[var(--color-primary-500)]/30 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary-500)] to-blue-500"></div>
        <div className="w-20 h-20 rounded-full bg-[var(--color-primary-900)]/30 flex items-center justify-center text-[var(--color-primary-500)] mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">주문 요청이 접수되었습니다</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
          주문 요청이 접수되었습니다. 확인 후 빠르게 연락드리겠습니다.
          <br /><br />
          추가 문의가 있으시면 카카오채널로 바로 상담하실 수 있습니다.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="http://pf.kakao.com/_Lkxmen" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-8 py-4 bg-[#FAE100] hover:bg-[#F4D500] text-black rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
          >
            카카오채널로 상담 이어가기
          </a>
          <Link href="/" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors flex items-center justify-center">
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="glass p-8 md:p-12 rounded-3xl border border-[var(--color-border)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-500)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="mb-8 p-4 bg-[var(--color-primary-900)]/20 border border-[var(--color-primary-500)]/30 rounded-xl inline-flex flex-col gap-1">
        <span className="text-xs font-bold text-[var(--color-primary-400)] uppercase tracking-wider">선택한 패키지</span>
        <span className="text-lg font-semibold text-white">{packageName}</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="space-y-2">
          <label htmlFor="clinicName" className="block text-sm font-medium text-gray-300 text-left">
            치과 이름 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="clinicName"
            name="clinicName"
            value={formData.clinicName}
            onChange={handleChange}
            placeholder="예) 서울드림치과"
            className={`w-full px-5 py-4 bg-black/40 border ${errors.clinicName ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[var(--color-primary-500)]'} rounded-xl text-white placeholder-gray-600 focus:outline-none transition-colors`}
            disabled={isLoading}
          />
          {errors.clinicName && <p className="text-red-400 text-sm mt-1 text-left">{errors.clinicName}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 text-left">
            전화번호 <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="예) 010-1234-5678 또는 02-123-4567"
            className={`w-full px-5 py-4 bg-black/40 border ${errors.phoneNumber ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[var(--color-primary-500)]'} rounded-xl text-white placeholder-gray-600 focus:outline-none transition-colors`}
            disabled={isLoading}
          />
          {errors.phoneNumber && <p className="text-red-400 text-sm mt-1 text-left">{errors.phoneNumber}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 text-left">
            담당자명 <span className="text-gray-500 text-xs font-normal">(선택)</span>
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            placeholder="예) 원장 홍길동 / 실장 김원템"
            className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-primary-500)] transition-colors"
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-300 text-left">
            요청 사항 <span className="text-gray-500 text-xs font-normal">(선택)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="궁금한 점이나 특별한 요청사항이 있다면 남겨주세요."
            rows={4}
            className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-primary-500)] transition-colors resize-y"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-5 mt-6 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] disabled:bg-[var(--color-primary-800)] disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.2)]"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              요청 처리 중...
            </>
          ) : (
            "주문 요청하기"
          )}
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          주문 요청을 남겨주시면 확인 후 빠르게 연락드리겠습니다.
        </p>
      </form>
    </div>
  );
}

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-[var(--color-primary-500)] selection:text-white pt-24 pb-20">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-500)] to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-2xl text-center">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          메인으로 돌아가기
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            스타터 패키지 <span className="text-[var(--color-primary-500)]">주문</span>
          </h1>
          <p className="text-lg text-gray-400">
            아래 정보를 남겨주시면 확인 후 빠르게 연락드리겠습니다.
          </p>
        </div>

        <Suspense fallback={<div className="glass p-12 rounded-3xl min-h-[400px] flex items-center justify-center"><Loader2 className="w-10 h-10 animate-spin text-[var(--color-primary-500)]" /></div>}>
          <OrderForm />
        </Suspense>
      </div>
    </main>
  );
}
