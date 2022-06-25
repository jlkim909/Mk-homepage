import React from "react";
import styled from "@emotion/styled";
import ResultBox from "../components/ResultBox/ResultBox";
import titleImage from "../image/result/result1.jpg";
// import photoList from "../image/result";
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8vw;
  padding-left: 16vw;
  gap: 12vw;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

function Results() {
  return (
    <Container>
      <ResultBox
        title="전주 효천지구 대방노블랜드"
        textField="전주 효천지구 대방노블랜드(Feat. 모자이크타일 안하는 시공)"
        titleImage={titleImage}
      />
      <ResultBox />
      <ResultBox />
      <ResultBox />
      <ResultBox />
      <ResultBox />
    </Container>
  );
}

export default Results;
