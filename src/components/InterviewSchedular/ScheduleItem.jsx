export default function ScheduleItem() {
  return (
    <div className="border border-secondary px-3 py-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="text-graytext text-[18px] font-semibold">
          Interview Day (6 Rooms)
        </div>
        <div className="p-2 border border-[#49AA53] bg-[#F2F9F8] rounded-md flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M14.4329 13.2497C13.481 11.6041 12.0142 10.4241 10.3023 9.86475C11.1491 9.36066 11.8069 8.59255 12.1749 7.67837C12.5429 6.76419 12.6006 5.7545 12.3392 4.80435C12.0778 3.85419 11.5117 3.01612 10.7279 2.41883C9.94408 1.82153 8.98587 1.49805 8.00041 1.49805C7.01496 1.49805 6.05674 1.82153 5.27293 2.41883C4.48911 3.01612 3.92304 3.85419 3.66163 4.80435C3.40022 5.7545 3.45793 6.76419 3.82591 7.67837C4.19388 8.59255 4.85177 9.36066 5.69854 9.86475C3.98666 10.4235 2.51979 11.6035 1.56791 13.2497C1.53301 13.3067 1.50985 13.37 1.49982 13.436C1.48978 13.502 1.49307 13.5694 1.50949 13.6341C1.52591 13.6988 1.55512 13.7596 1.59541 13.8128C1.63569 13.8661 1.68624 13.9107 1.74405 13.9441C1.80187 13.9775 1.86579 13.999 1.93204 14.0073C1.9983 14.0156 2.06554 14.0105 2.1298 13.9924C2.19407 13.9743 2.25405 13.9435 2.30622 13.9018C2.35838 13.8601 2.40168 13.8084 2.43354 13.7497C3.61104 11.7147 5.69229 10.4997 8.00041 10.4997C10.3085 10.4997 12.3898 11.7147 13.5673 13.7497C13.5992 13.8084 13.6424 13.8601 13.6946 13.9018C13.7468 13.9435 13.8068 13.9743 13.871 13.9924C13.9353 14.0105 14.0025 14.0156 14.0688 14.0073C14.135 13.999 14.199 13.9775 14.2568 13.9441C14.3146 13.9107 14.3651 13.8661 14.4054 13.8128C14.4457 13.7596 14.4749 13.6988 14.4913 13.6341C14.5078 13.5694 14.511 13.502 14.501 13.436C14.491 13.37 14.4678 13.3067 14.4329 13.2497ZM4.50041 5.99975C4.50041 5.30751 4.70568 4.63082 5.09027 4.05525C5.47485 3.47968 6.02148 3.03108 6.66102 2.76617C7.30056 2.50126 8.0043 2.43195 8.68323 2.567C9.36216 2.70205 9.9858 3.03539 10.4753 3.52487C10.9648 4.01436 11.2981 4.638 11.4332 5.31693C11.5682 5.99586 11.4989 6.6996 11.234 7.33914C10.9691 7.97868 10.5205 8.52531 9.94491 8.90989C9.36934 9.29448 8.69265 9.49975 8.00041 9.49975C7.07246 9.49875 6.1828 9.12969 5.52664 8.47353C4.87047 7.81736 4.50141 6.9277 4.50041 5.99975Z"
              fill="#49AA53"
            />
          </svg>
          <div className="text-[#49AA53] text-[12px] font-light">
            20 Applicants
          </div>
        </div>
      </div>
      <div className="mt-4 text-primary text-[14px] font-medium">
        November 22, 2023
      </div>
      <div className="mt-4 text-[14px] text-graytext">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ilam.
      </div>
      <div className="mt-8 flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M10 19.25C8.26942 19.25 6.57769 18.7368 5.13876 17.7754C3.69983 16.8139 2.57832 15.4473 1.91606 13.8485C1.25379 12.2496 1.08051 10.4903 1.41813 8.79296C1.75575 7.09563 2.58911 5.53653 3.81282 4.31282C5.03653 3.08911 6.59563 2.25575 8.29296 1.91813C9.9903 1.58051 11.7496 1.75379 13.3485 2.41606C14.9473 3.07832 16.3139 4.19983 17.2754 5.63876C18.2368 7.07769 18.75 8.76942 18.75 10.5C18.75 12.8206 17.8281 15.0462 16.1872 16.6872C14.5462 18.3281 12.3206 19.25 10 19.25ZM10 3C8.51664 3 7.0666 3.43987 5.83323 4.26398C4.59986 5.08809 3.63856 6.25943 3.07091 7.62988C2.50325 9.00032 2.35473 10.5083 2.64411 11.9632C2.9335 13.418 3.64781 14.7544 4.6967 15.8033C5.7456 16.8522 7.08197 17.5665 8.53683 17.8559C9.99168 18.1453 11.4997 17.9968 12.8701 17.4291C14.2406 16.8614 15.4119 15.9001 16.236 14.6668C17.0601 13.4334 17.5 11.9834 17.5 10.5C17.5 8.51088 16.7098 6.60323 15.3033 5.1967C13.8968 3.79018 11.9891 3 10 3Z"
            fill="#249690"
          />
          <path
            d="M12.8688 14.25L9.375 10.7562V4.875H10.625V10.2375L13.75 13.3687L12.8688 14.25Z"
            fill="#249690"
          />
        </svg>
        <div>
          <div className="font-medium">
            <span className="text-graytext mr-2">Room Timings</span>
            <span className="text-secondary">(Full Day)</span>
          </div>
          <div className="text-[14px] font-light text-graytext mt-2">
            Full Day (08:00 am - 16:00 pm)
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="27"
          viewBox="0 0 20 27"
          fill="none"
        >
          <path d="M7 14H15V15H7V14Z" fill="#FF9F2D" />
          <path
            d="M11 6.0041C8.94501 5.93512 6.94833 6.7384 5.44839 8.23757C3.94845 9.73674 3.06787 11.8092 3 14C3.06787 16.1908 3.94845 18.2633 5.44839 19.7624C6.94833 21.2616 8.94501 22.0649 11 21.9959C13.055 22.0649 15.0517 21.2616 16.5516 19.7624C18.0516 18.2633 18.9321 16.1908 19 14C18.9321 11.8092 18.0516 9.73674 16.5516 8.23757C15.0517 6.7384 13.055 5.93512 11 6.0041ZM11 20.6632C9.27717 20.7296 7.59981 20.0658 6.33484 18.8171C5.06987 17.5684 4.32027 15.8364 4.25 14C4.32027 12.1636 5.06987 10.4316 6.33484 9.18288C7.59981 7.93416 9.27717 7.27039 11 7.33675C12.7228 7.27039 14.4002 7.93416 15.6652 9.18288C16.9301 10.4316 17.6797 12.1636 17.75 14C17.6797 15.8364 16.9301 17.5684 15.6652 18.8171C14.4002 20.0658 12.7228 20.7296 11 20.6632Z"
            fill="#FF9F2D"
          />
        </svg>
        <div className="mt-1">
          <div className="font-medium">
            <span className="text-graytext mr-2">Breaks (2)</span>
          </div>
          <div className="text-[14px] font-light text-graytext mt-2">
            Lunch Break (12:00 pm - 01:00 pm)
          </div>
          <div className="text-[14px] font-light text-graytext mt-2">
            Lecture (12:00 pm - 01:00 pm)
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 text-[#0032E1] opacity-80 text-[14px] font-medium">
        <span>View Room Details</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M8.50065 14.1663L7.49128 13.1747L11.4579 9.20801H2.83398V7.79134H11.4579L7.49128 3.82467L8.50065 2.83301L14.1673 8.49967L8.50065 14.1663Z"
            fill="#0032E1"
          />
        </svg>
      </div>
    </div>
  );
}