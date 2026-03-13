import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { clinicName, phoneNumber, contactName, notes, packageName, source } = data;

    if (!clinicName || !phoneNumber) {
      return NextResponse.json(
        { message: "필수 정보(치과 이름, 전화번호)가 누락되었습니다." },
        { status: 400 }
      );
    }

    // We will need environment variables for the sender email and password
    // GMAIL_USER and GMAIL_PASS
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error("Missing GMAIL_USER or GMAIL_PASS environment variables");
      // Fallback temporarily to allow testing without failing completely if env vars are unset
      // In production, you would want this to fail appropriately.
      // But let's keep it throwing an error since sending requires it.
      return NextResponse.json(
        { message: "서버 설정 오류: 이메일 전송에 필요한 환경변수(GMAIL_USER, GMAIL_PASS)가 없습니다." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // This should be a 16-character App Password, not the regular account password
      },
    });

    const mailOptions = {
      from: `"원템프 주문 알림" <${process.env.GMAIL_USER}>`,
      to: "onetemp2025@gmail.com",
      subject: `[신규 주문 요청] ${clinicName} - ${packageName || "패키지 미상"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-top: 4px solid #14b8a6; border-radius: 8px;">
          <h2 style="color: #14b8a6; margin-top: 0;">신규 스타터 패키지 주문 요청</h2>
          <p>새로운 주문 요청이 접수되었습니다. 확인 후 빠르게 연락해 주세요.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <th style="text-align: left; padding: 12px 10px; border-bottom: 1px solid #eee; width: 150px; color: #666;">치과 이름</th>
              <td style="padding: 12px 10px; border-bottom: 1px solid #eee; font-weight: bold;">${clinicName}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px 10px; border-bottom: 1px solid #eee; color: #666;">전화번호</th>
              <td style="padding: 12px 10px; border-bottom: 1px solid #eee; font-weight: bold;">${phoneNumber}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px 10px; border-bottom: 1px solid #eee; color: #666;">담당자명</th>
              <td style="padding: 12px 10px; border-bottom: 1px solid #eee;">${contactName || "미입력"}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px 10px; border-bottom: 1px solid #eee; color: #666;">선택 패키지</th>
              <td style="padding: 12px 10px; border-bottom: 1px solid #eee;">${packageName || "미입력"}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px 10px; border-bottom: 1px solid #eee; color: #666;">접수 경로</th>
              <td style="padding: 12px 10px; border-bottom: 1px solid #eee;">${source || "미입력"}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px 10px; border-bottom: 1px solid #eee; color: #666;">요청 사항</th>
              <td style="padding: 12px 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${notes || "미입력"}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px 10px; border-bottom: 1px solid #eee; color: #666;">제출 일시</th>
              <td style="padding: 12px 10px; border-bottom: 1px solid #eee;">${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "주문 요청이 접수되었습니다." }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "전송 중 문제가 발생했습니다. 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}
