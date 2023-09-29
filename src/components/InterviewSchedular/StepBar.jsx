export default function StepBar({ step, total = 8 }) {
  return (
    <div className="w-full rounded-full bg-[#E9E9E9] overflow-hidden">
      <div
        className="bg-primary h-[24px] rounded-full transition-all"
        style={{
          width: `${(100 / total) * step}%`,
        }}
      />
    </div>
  );
}
