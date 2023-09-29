import { useEffect, useState } from "react";

export default function ScheduleList({ data }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const {
      time,
      rooms,
      length,
      addBreak,
      breakStartTime,
      breakDuration,
      addAdditionalActivity,
    } = data;

    if (time && rooms) {
      const rs = [];

      for (let i = 0; i < rooms; i++) {}
    }
  }, [data]);

  return (
    <div className="px-6 py-8 border bg-white border-gray-100 rounded-md text-[#323232] h-full flex flex-col">
      <div className="font-semibold text-[18px]">Your Interview Day</div>
      <div className="mt-6">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam on.
      </div>
      {/* {time ? (
        <div className="mt-6 basis-full flex justify-center border-[#D8D8D8] border rounded-md gap-3">
          <table></table>
        </div>
      ) : ( */}
      <div className="mt-6 basis-full flex flex-col items-center justify-center border-[#D8D8D8] border rounded-md gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="50"
          viewBox="0 0 51 50"
          fill="none"
        >
          <path
            d="M42.1663 20.8333V14.5833C42.1663 12.2821 40.3009 10.4167 37.9997 10.4167H12.9997C10.6985 10.4167 8.83301 12.2821 8.83301 14.5833V20.8333M42.1663 20.8333V39.5833C42.1663 41.8845 40.3009 43.75 37.9997 43.75H12.9997C10.6985 43.75 8.83301 41.8845 8.83301 39.5833V20.8333M42.1663 20.8333H8.83301M17.1663 6.25V14.5833M33.833 6.25V14.5833"
            stroke="#D3D9DD"
            strokeWidth="4.16667"
            strokeLinecap="round"
          />
        </svg>
        <div className="text-[#444] text-center max-w-[360px]">
          Plan your Day by Selecting a Date. Your Responses Will Generate the
          Day
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="103"
          height="118"
          viewBox="0 0 103 118"
          fill="none"
        >
          <g clipPath="url(#clip0_938_9374)">
            <path
              d="M14.6495 96.9317L25.8564 101.99C25.1648 102.807 24.2409 103.394 23.2076 103.672C22.1743 103.951 21.0806 103.909 20.072 103.551C14.6053 101.798 9.24011 99.7419 4.0014 97.3933C1.0257 96.0106 1.02633 93.2106 3.66875 91.3052C8.07746 88.1122 12.6621 85.1512 17.1688 82.0942C17.4368 81.9203 17.7409 81.6483 18.0149 81.6664C18.8609 81.7386 19.7088 81.9248 20.5588 82.075C20.4186 82.7949 20.5424 83.763 20.0863 84.2209C18.634 85.7065 16.9977 87.0042 15.4354 88.3698C14.4416 89.1425 13.6727 90.1671 13.2088 91.3373C14.8568 91.1737 16.5168 91.0941 18.1549 90.8604C34.2572 88.6359 49.1901 81.2059 60.6761 69.7036C72.1622 58.2013 79.5711 43.2579 81.7729 27.1525C82.3919 22.8786 82.4788 18.5306 82.8478 14.2067C82.9761 12.7028 83.1845 11.2088 83.3488 9.70685L84.4109 9.49108C84.9347 10.3092 85.8145 11.0694 85.9543 11.8994C86.3959 14.9115 86.6218 17.9513 86.6303 20.9956C86.1195 51.6675 65.9813 79.689 36.2549 90.7144C30.5764 92.8172 24.5142 93.8818 18.6218 95.3865C17.3978 95.7183 16.1497 95.832 14.9157 96.0437C14.7576 96.3377 14.7076 96.6377 14.6495 96.9317Z"
              fill="#249690"
              fillOpacity="0.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_938_9374">
              <rect
                width="38.36"
                height="118.7"
                fill="white"
                transform="translate(71.7788) rotate(36.8826)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* )} */}
    </div>
  );
}
