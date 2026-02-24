"use client";
import { useState, useEffect } from 'react';

/**
 * Madang-Schedule v2 Main View
 * Enhanced with Cheongsa's Design System and Server-side Hydration
 */
export default function MadangHome() {
  const [schedules, setSchedules] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/schedules`);
        const data = await res.json();
        setSchedules(data);
      } catch (err) {
        console.error("Connection to STARK grid failed.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
            마당 일정관리 <span className="text-blue-600 font-light">v2.0</span>
          </h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-blue-200 shadow-md hover:bg-blue-700 transition-all">
            + 새 일정
          </button>
        </header>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid gap-4">
            {schedules.map((item: any) => (
              <div key={item.id} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                  <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm ml-4">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
