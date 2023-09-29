"use client";
import Calendar from "@/components/InterviewSchedular/Calendar";
import InterviewPlanner from "@/components/InterviewSchedular/InterviewPlanner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="gme flex min-h-screen p-24">
      <div className="max-w-7xl">
        <InterviewPlanner />
      </div>
    </main>
  );
}
