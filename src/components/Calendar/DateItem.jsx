import React from "react";

function DateItem({ date, selectedDate, dateData, handleClick, isValidate }) {
  const dateStyle = isValidate
    ? selectedDate?.date === date &&
      selectedDate?.year === dateData.year &&
      selectedDate?.month === dateData.month
      ? "date isValidateDate selectedDate"
      : "date isValidateDate"
    : "date";
  return (
    <div
      className={dateStyle}
      onClick={() => {
        if (isValidate)
          handleClick({
            date: date,
            year: dateData.year,
            month: dateData.month,
          });
      }}
    >
      {date}
    </div>
  );
}

export default DateItem;
