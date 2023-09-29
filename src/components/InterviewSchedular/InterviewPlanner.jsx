import { useState } from "react";
import ScheduleList from "./ScheduleList";
import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";

export default function ({ onPlan }) {
  const [date, setDate] = useState(null);
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  return (
    <div className="flex gap-6">
      <div className="basis-1/2">
        {step === 0 && (
          <SelectDate
            onSelect={(v) => setDate(v)}
            selectedDate={date}
            onPlan={() => setStep(1)}
          />
        )}
        {step > 0 && (
          <SelectTime
            step={step}
            onNext={(v) => {
              setData(v);
              setStep(step + 1);
            }}
          />
        )}
      </div>
      <div className="basis-1/2">
        <ScheduleList data={data} />
      </div>
    </div>
  );
}
