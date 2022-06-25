import React, { useEffect, useRef, useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import styled from "@emotion/styled";
import { BsArrowRight } from "react-icons/bs";
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
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
  const [selectedDate, setSelecetedDate] = useState();

  return (
    <Container>
      <Calendar selectedDate={selectedDate} handleSelect={setSelecetedDate} />
      <div className="flex flex-col items-center" style={{ flex: "2" }}>
        <BsArrowRight style={{ fontSize: "3vw" }} />
        <span style={{ fontSize: "1vw" }}>{`${formateDate(
          selectedDate
        )} 예약`}</span>
      </div>
    </Container>
  );
}

export default Reservation;
