"use client";
import Calendar from "@/components/InterviewSchedular/Calendar";
import InterviewPlanner from "@/components/InterviewSchedular/InterviewPlanner";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [scheduleList, setScheduleList] = useState([]);

  return (
    <main className="gme flex min-h-screen p-24">
      <div className="max-w-7xl">
        <InterviewPlanner
          onPlan={(v) => setScheduleList([...scheduleList, v])}
          list={scheduleList}
        />
      </div>
    </main>
  );
}
