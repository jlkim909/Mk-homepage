import React, { useCallback, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect } from "react";
import DateItem from "./DateItem";
import "./Calendar.scss";

const formateDate = (dateData) => {
  let month = dateData?.month + 1;
  if (month < 10) {
    month = `0${month}`;
  }

  let year = dateData?.year;
  return `${year}.${month}`;
};

const getDate = () => {
  const data = new Date();
  const date = data.getDate();
  const month = data.getMonth();
  const year = data.getFullYear();
  const numberOfDates = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay() + 1;
  return {
    data,
    date,
    month,
    year,
    numberOfDates,
    firstDay,
  };
};

const nextMonth = (date) => {
  const year = date.year + parseInt(date.month / 11);
  const month = date.month >= 11 ? 0 : date.month + 1;
  const numberOfDates = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay() + 1;
  return {
    month: month,
    year: year,
    firstDay: firstDay,
    numberOfDates: numberOfDates,
  };
};

const previousMonth = (date) => {
  const month = date.month <= 0 ? 11 : date.month - 1;
  const year = date.month <= 0 ? date.year - 1 : date.year;
  const numberOfDates = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay() + 1;
  return {
    month: month,
    year: year,
    firstDay: firstDay,
    numberOfDates: numberOfDates,
  };
};

function Calendar({ selectedDate, handleSelect }) {
  const [firstDate, setFirstDate] = useState();
  const [secondDate, setSecondDate] = useState();

  const onClickNextBtn = useCallback(() => {
    setFirstDate(secondDate);
    setSecondDate(nextMonth(secondDate));
  }, [secondDate]);

  const onClickPreviousBtn = useCallback(() => {
    setSecondDate(firstDate);
    setFirstDate(previousMonth(firstDate));
  }, [firstDate]);

  const setDates = useCallback(
    (dateData) => {
      if (!selectedDate || !dateData) return;
      const result = [];
      const currentTime = new Date();
      const currentYear = currentTime.getFullYear();
      const currentMonth = currentTime.getMonth();
      const currentDate = currentTime.getDate();
      for (let i = 0; i < dateData.numberOfDates; i++) {
        result.push(
          <DateItem
            key={i}
            date={i + 1}
            dateData={dateData}
            selectedDate={selectedDate}
            handleClick={handleSelect}
            isValidate={
              currentYear < dateData.year
                ? true
                : currentYear === dateData.year && currentMonth < dateData.month
                ? true
                : currentMonth === dateData.month && i + 1 >= currentDate
                ? true
                : false
            }
          />
        );
      }
      return result;
    },
    [selectedDate, handleSelect]
  );

  useEffect(() => {
    const currentDate = getDate();
    setFirstDate({
      month: currentDate.month,
      year: currentDate.year,
      firstDay: currentDate.firstDay,
      numberOfDates: currentDate.numberOfDates,
    });
    setSecondDate(nextMonth(currentDate));
    handleSelect({
      date: currentDate.date,
      year: currentDate.year,
      month: currentDate.month,
    });
  }, [handleSelect]);

  return (
    <div className="container">
      <div className="header">
        <BsChevronLeft className="left" onClick={onClickPreviousBtn} />
        <span style={{ flex: "1" }}>{formateDate(firstDate)}</span>
        <span style={{ flex: "1" }}>{formateDate(secondDate)}</span>
        <BsChevronRight className="right" onClick={onClickNextBtn} />
      </div>
      <div className="line" />
      <div className="body">
        <div className="monthContainer">
          <div className="days">
            <div>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </div>
          <div className="dates">
            <div
              style={{
                gridColumnStart:
                  firstDate?.firstDay > 0 ? firstDate?.firstDay - 1 : 1,
              }}
            />
            {setDates(firstDate)}
          </div>
        </div>
        <div className="monthContainer">
          <div className="days">
            <div>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </div>
          <div className="dates">
            <div
              style={{
                gridColumnStart:
                  secondDate?.firstDay > 0 ? secondDate?.firstDay - 1 : 1,
              }}
            />
            {setDates(secondDate)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
