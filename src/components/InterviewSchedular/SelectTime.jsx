import moment from "moment";
import { useState } from "react";
import StepBar from "./StepBar";
import DatePicker from "react-datepicker";

const YesButton = ({ value, onClick }) => (
  <button
    className={`border rounded-md flex items-center gap-2 px-12 py-4 text-[12px] ${
      value ? "border-[#249690] font-medium" : "border-[#C7E5E4]"
    }`}
    style={{
      background: "rgba(36, 150, 144, 0.06)",
    }}
    onClick={() => onClick(true)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
    >
      <path
        d="M16.75 7.5H13V3.75C12.9995 3.25287 12.8018 2.77625 12.4503 2.42472C12.0988 2.0732 11.6221 1.8755 11.125 1.875H9.79187C9.49134 1.87628 9.20123 1.98525 8.97418 2.18214C8.74713 2.37904 8.59818 2.6508 8.55438 2.94813L8.02625 6.64625L5.79063 10H1.75V18.75H14.875C16.0349 18.7487 17.1469 18.2873 17.9671 17.4671C18.7873 16.6469 19.2487 15.5349 19.25 14.375V10C19.2492 9.33721 18.9855 8.70181 18.5169 8.23315C18.0482 7.76448 17.4128 7.50083 16.75 7.5ZM5.5 17.5H3V11.25H5.5V17.5ZM18 14.375C17.999 15.2035 17.6694 15.9978 17.0836 16.5836C16.4978 17.1694 15.7035 17.499 14.875 17.5H6.75V10.8144L9.22375 7.10375L9.7925 3.125H11.125C11.2908 3.125 11.4497 3.19085 11.5669 3.30806C11.6842 3.42527 11.75 3.58424 11.75 3.75V8.75H16.75C17.0814 8.75033 17.3992 8.88213 17.6335 9.11648C17.8679 9.35083 17.9997 9.66858 18 10V14.375Z"
        fill="#249690"
      />
    </svg>
    <span>Yes</span>
  </button>
);

const NoButton = ({ value, onClick }) => (
  <button
    className={`border rounded-md flex items-center gap-2 px-12 py-4 text-[12px] ${
      !value ? "border-[#249690] font-medium" : "border-[#C7E5E4]"
    }`}
    style={{
      background: "rgba(36, 150, 144, 0.06)",
    }}
    onClick={() => onClick(false)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.25 12.5H12.5V16.25C12.4995 16.7471 12.3018 17.2238 11.9503 17.5753C11.5988 17.9268 11.1221 18.1245 10.625 18.125H9.29187C8.99134 18.1237 8.70123 18.0148 8.47418 17.8179C8.24713 17.621 8.09818 17.3492 8.05438 17.0519L7.52625 13.3538L5.29063 10H1.25V1.25H14.375C15.5349 1.25132 16.6469 1.71268 17.4671 2.53287C18.2873 3.35305 18.7487 4.46508 18.75 5.625V10C18.7492 10.6628 18.4855 11.2982 18.0169 11.7669C17.5482 12.2355 16.9128 12.4992 16.25 12.5ZM5 2.5H2.5V8.75H5V2.5ZM17.5 5.625C17.499 4.7965 17.1694 4.00222 16.5836 3.41639C15.9978 2.83055 15.2035 2.50099 14.375 2.5H6.25V9.18563L8.72375 12.8962L9.2925 16.875H10.625C10.7908 16.875 10.9497 16.8092 11.0669 16.6919C11.1842 16.5747 11.25 16.4158 11.25 16.25V11.25H16.25C16.5814 11.2497 16.8992 11.1179 17.1335 10.8835C17.3679 10.6492 17.4997 10.3314 17.5 10V5.625Z"
        fill="#249690"
      />
    </svg>
    <span>No</span>
  </button>
);

export default function SelectTime({ date, step, onNext, onPrev }) {
  const [time, setTime] = useState();
  const [rooms, setRooms] = useState(0);
  const [length, setLength] = useState("");
  const [addBreak, setAddBreak] = useState(true);
  const [breakStartTime, setBreakStartTime] = useState("");
  const [breakDuration, setBreakDuration] = useState("");
  const [addMeal, setAddMeal] = useState(true);
  const [mealStartTime, setMealStartTime] = useState("");
  const [mealDuration, setMealDuration] = useState("");
  const [editRoomName, setEditRoomName] = useState(true);

  const goNext = () => {
    onNext({
      time,
      rooms,
      length,
      addBreak,
      breakStartTime,
      breakDuration,
      addMeal,
      mealStartTime,
      mealDuration,
    });
  };

  return (
    <div className="border bg-white border-gray-100 rounded-md text-graytext h-full flex flex-col">
      <div className="px-6 py-8 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[18px]">
            {moment(date).format("MMMM D")}
          </span>
          <button className="underline text-[#0032E1]">Change</button>
        </div>
        <div className="mt-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam on.
        </div>
      </div>

      <div className="p-6 basis-full">
        <StepBar step={step} />
        {step === 1 && (
          <div>
            <div className="mt-6 font-semibold text-graytext">
              What time would you like your interview day to begin?
            </div>
            <div className="mt-6 flex justify-between">
              {["08:00 am", "09:00 am", "10:00 am", "12:00 pm", "02:00 pm"].map(
                (t) => (
                  <button
                    key={t}
                    className={`border rounded-md px-3 py-4 ${
                      t === moment(time).format("hh:mm a")
                        ? "border-[#249690] font-semibold"
                        : "border-[#C7E5E4]"
                    }`}
                    style={{
                      background: "rgba(36, 150, 144, 0.06)",
                    }}
                    onClick={() =>
                      setTime(moment(date).format("YYYY-MM-DD") + " " + t)
                    }
                  >
                    {t}
                  </button>
                )
              )}
            </div>
            <div className="text-graytext mt-6 text-[14px] font-medium">
              Enter Manually
            </div>
            <div className="gme-timepicker mt-6">
              <DatePicker
                className="border border-[#DCDCDC] bg-[#F3F3F3] rounded-md px-3 py-4 min-w-[160px]"
                selected={typeof time === "string" ? "" : time}
                onChange={(t) => setTime(t)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Enter Time"
                dateFormat="hh:mm aa"
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="mt-6 font-semibold text-graytext">
              How many interview rooms would you like to have?
            </div>
            <div className="mt-6 flex justify-between">
              {[2, 4, 5, 8, 10].map((r) => (
                <button
                  key={r}
                  className={`border rounded-md px-3 py-4 ${
                    r === rooms
                      ? "border-[#249690] font-semibold"
                      : "border-[#C7E5E4]"
                  }`}
                  style={{
                    background: "rgba(36, 150, 144, 0.06)",
                  }}
                  onClick={() => setRooms(r)}
                >
                  {r} Rooms
                </button>
              ))}
            </div>
            <div className="text-graytext mt-6 text-[14px] font-medium">
              Enter Manually
            </div>
            <div className="gme-timepicker mt-6">
              <input
                className="border border-[#DCDCDC] bg-[#F3F3F3] rounded-md px-3 py-4 min-w-[160px]"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                placeholder="Enter a number"
                type="number"
                min={0}
                max={10}
              />
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div className="mt-6 font-semibold text-graytext">
              How long would you like each interview to be?
            </div>
            <div className="mt-6 flex justify-between gap-3">
              {[15, 30, 45, 60, 90].map((r) => (
                <button
                  key={r}
                  className={`border rounded-md basis-full py-4 ${
                    r === length
                      ? "border-[#249690] font-semibold"
                      : "border-[#C7E5E4]"
                  }`}
                  style={{
                    background: "rgba(36, 150, 144, 0.06)",
                  }}
                  onClick={() => setLength(r)}
                >
                  {r} min
                </button>
              ))}
            </div>
            <div className="text-graytext mt-6 text-[14px] font-medium">
              Enter Manually
            </div>
            <div className="gme-timepicker mt-6">
              <input
                className="border border-[#DCDCDC] bg-[#F3F3F3] rounded-md px-3 py-4 min-w-[160px]"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="Enter Time"
                type="number"
                min={15}
              />
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <div className="mt-6 font-semibold text-graytext">
              Would you like any break time in between each room?
            </div>
            <div className="mt-6 flex gap-3">
              <YesButton value={addBreak} onClick={setAddBreak} />
              <NoButton value={addBreak} onClick={setAddBreak} />
            </div>
            {addBreak && (
              <div className="mt-6 flex gap-3">
                <div className="basis-1/2 gme-timepicker">
                  <label
                    htmlFor="breakstart"
                    className="text-graytext text-[14px] font-medium"
                  >
                    Start Time
                  </label>
                  <DatePicker
                    id="breakstart"
                    placeholderText="Enter Time"
                    className="border border-[#DCDCDC] bg-[#F3F3F3] rounded-md w-full px-3 py-4 min-w-[160px]"
                    selected={breakStartTime}
                    onChange={(t) => setBreakStartTime(t)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Enter Time"
                    dateFormat="hh:mm aa"
                  />
                </div>
                <div className="basis-1/2">
                  <label
                    htmlFor="breakduration"
                    className="text-graytext text-[14px] font-medium"
                  >
                    Duration
                  </label>
                  <input
                    id="breakduration"
                    className="border border-[#DCDCDC] bg-[#F3F3F3] rounded-md w-full px-3 py-4 min-w-[160px]"
                    value={breakDuration}
                    onChange={(e) => setBreakDuration(e.target.value)}
                    placeholder="Enter Time"
                    type="number"
                    min={15}
                  />
                </div>
              </div>
            )}
          </div>
        )}
        {step === 5 && (
          <div>
            <div className="mt-6 font-semibold text-graytext">
              Would you like to have any time built in for additional activities
              such as presentations or meals?
            </div>
            <div className="mt-6 flex gap-3">
              <YesButton value={addMeal} onClick={setAddMeal} />
              <NoButton value={addMeal} onClick={setAddMeal} />
            </div>
          </div>
        )}
        {step === 6 && (
          <div>
            <div className="mt-6 font-semibold text-graytext">
              Please enter any additional times you would like to account for
              Meal:
            </div>
            <div className="mt-6 flex gap-3">
              <div className="basis-1/2 gme-timepicker">
                <label
                  htmlFor="mealstart"
                  className="text-graytext text-[14px] font-medium"
                >
                  Start Time
                </label>
                <DatePicker
                  id="mealstart"
                  placeholderText="Enter Time"
                  className="border border-[#DCDCDC] bg-[#F3F3F3] rounded-md w-full px-3 py-4 min-w-[160px]"
                  selected={mealStartTime}
                  onChange={(t) => setMealStartTime(t)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Enter Time"
                  dateFormat="hh:mm aa"
                />
              </div>
              <div className="basis-1/2">
                <label
                  htmlFor="mealduration"
                  className="text-graytext text-[14px] font-medium"
                >
                  Duration
                </label>
                <input
                  id="mealduration"
                  className="border border-[#DCDCDC] bg-[#F3F3F3] rounded-md w-full px-3 py-4 min-w-[160px]"
                  value={mealDuration}
                  onChange={(e) => setMealDuration(e.target.value)}
                  placeholder="Enter Time"
                  type="number"
                  min={15}
                />
              </div>
            </div>
          </div>
        )}
        {step === 7 && (
          <div>
            <div className="mt-6 font-semibold text-graytext">
              Would be cool if they have the ability to edit the room names on
              the grid
            </div>
            <div className="mt-6 flex gap-3">
              <YesButton value={editRoomName} onClick={setEditRoomName} />
              <NoButton value={editRoomName} onClick={setEditRoomName} />
            </div>
          </div>
        )}
        {step === 8 && (
          <div className="flex flex-col items-center justify-center py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g clip-path="url(#clip0_2210_7308)">
                <path
                  d="M12.7996 24.0016L22.3996 32.0016L35.1996 16.0016M23.9996 46.4016C21.058 46.4016 18.1452 45.8222 15.4275 44.6965C12.7098 43.5708 10.2405 41.9208 8.16042 39.8408C6.08039 37.7607 4.43041 35.2914 3.30471 32.5737C2.179 29.856 1.59961 26.9432 1.59961 24.0016C1.59961 21.06 2.179 18.1471 3.30471 15.4295C4.43041 12.7118 6.08039 10.2424 8.16042 8.16237C10.2405 6.08234 12.7098 4.43237 15.4275 3.30666C18.1452 2.18096 21.058 1.60156 23.9996 1.60156C29.9405 1.60156 35.638 3.96156 39.8388 8.16237C44.0396 12.3632 46.3996 18.0607 46.3996 24.0016C46.3996 29.9424 44.0396 35.6399 39.8388 39.8408C35.638 44.0416 29.9405 46.4016 23.9996 46.4016Z"
                  stroke="#249690"
                  stroke-width="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_2210_7308">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="text-graytext font-semibold mt-4">
              Interview Day Planned
            </div>
            <div className="text-graytext font-light text-[12px] max-w-md mt-4 text-center">
              Your Interview Day has been Planned. Now, you can see the
              dedicated slots and breaks on the right side.
            </div>
            <a
              href="/"
              className="text-[#0032E1] font-medium opacity-80 mt-6 underline text-[14px]"
            >
              Return to Interview Home
            </a>
          </div>
        )}
      </div>
      <div className="pt-16 pb-8 px-8">
        {step > 0 && (
          <button
            className="px-12 rounded-lg py-4 text-white disabled:bg-gray-100 mr-4"
            style={{
              background: "linear-gradient(97deg, #41C1BA 0%, #596173 133.3%)",
            }}
            onClick={onPrev}
          >
            Previous
          </button>
        )}
        {step < 8 && (
          <button
            disabled={!time}
            className="px-12 rounded-lg py-4 text-white disabled:bg-gray-100"
            style={{
              background: time
                ? "linear-gradient(97deg, #41C1BA 0%, #596173 133.3%)"
                : "",
            }}
            onClick={goNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
