"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // API 호출 시뮬레이션
    console.log("Fetching schedules from Madang-Backend...");
  }, []);

  return (
    <main style={{ padding: '2rem', background: '#F7FAFC', minHeight: '100vh' }}>
      <h1 style={{ color: '#4A5568' }}>마당 일정관리 (Madang Schedule)</h1>
      <div style={{ marginTop: '2rem' }}>
        <p>에이전트 군단이 개발한 첫 번째 실전 프로젝트입니다.</p>
        {/* 리스트 렌더링 영역 */}
      </div>
    </main>
  );
}
