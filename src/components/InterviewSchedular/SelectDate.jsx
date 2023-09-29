import Calendar from "./Calendar";

export default function SelectDate({ onSelect, selectedDate, onPlan }) {
  return (
    <div className="border bg-white border-gray-100 rounded-md text-[#323232]">
      <div className="px-6 py-8 border-b border-gray-100">
        <div className="font-semibold text-[18px]">Select a Date to Plan</div>
        <div className="mt-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam on.
        </div>
      </div>
      <Calendar onChange={onSelect} />
      <div className="p-6">
        <button
          disabled={!selectedDate}
          className="w-full rounded-lg py-4 text-white disabled:bg-gray-100"
          style={{
            background: selectedDate ? 'linear-gradient(97deg, #41C1BA 0%, #596173 133.3%)' : ''
          }}
          onClick={onPlan}
        >
          Plan Interview Day
        </button>
      </div>
    </div>
  );
}
