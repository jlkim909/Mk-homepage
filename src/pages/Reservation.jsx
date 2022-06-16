import React, { useEffect, useRef, useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import styled from "@emotion/styled";
import { BsArrowRight } from "react-icons/bs";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: 1s ease;
`;
const formateDate = (dateData) => {
  let month = dateData?.month + 1;
  if (month < 10) {
    month = `0${month}`;
  }

  let date = dateData?.date;
  return `${month}.${date}`;
};

function Reservation() {
  const ref = useRef();
  const [selectedDate, setSelecetedDate] = useState();
  useEffect(() => {
    ref.current.style.opacity = 1;
  }, []);
  return (
    <Container ref={ref}>
      <Calendar selectedDate={selectedDate} handleSelect={setSelecetedDate} />
      <div className="flex flex-col items-center" style={{ flex: "2" }}>
        <BsArrowRight style={{ fontSize: "3rem" }} />
        <span style={{ fontSize: "1rem" }}>{`${formateDate(
          selectedDate
        )} 예약`}</span>
      </div>
    </Container>
  );
}

export default Reservation;
