import { useState } from "react";
import ScheduleList from "./ScheduleList";
import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";

export default function ({ onPlan, list }) {
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
            date={date}
            step={step}
            onNext={(v) => {
              setData(v);

              if (step === 5 && !v.addMeal) {
                setStep(step + 2);
              } else {
                setStep(step + 1);
              }

              if (step === 7) {
                onPlan({ v, step: 8 });
              }
            }}
            onPrev={() => setStep(step - 1)}
            onAddNew={(v) => {
              onPlan(v);
              setData({});
              setStep(0);
            }}
            onChangeDate={() => setStep(0)}
            onReturn={() => {
              setData({});
              setStep(0);
            }}
          />
        )}
      </div>
      <div className="basis-1/2">
        <ScheduleList data={data} list={list} />
      </div>
    </div>
  );
}
