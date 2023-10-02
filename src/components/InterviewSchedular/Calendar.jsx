"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Calendar({ onChange }) {
  const [startDate, setStartDate] = useState(null);
  const onChangeDate = (date) => {
    console.log(date)
    setStartDate(date);
    onChange && onChange(date);
  };
  return (
    <div className="gme-datepicker">
      <DatePicker selected={startDate} onChange={onChangeDate} inline />
    </div>
  );
}
