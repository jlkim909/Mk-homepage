import styled from '@emotion/styled';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Main from './pages/Main';
import Reservation from './pages/Reservation';
import Results from './pages/Results';

const Container = styled.div`
  width: 100vw;
  height:100vh;
`;
const Header = styled.div`
  position:fixed;
  padding-left:10vw;
  width:100vw;
  height:8vh;
  top:0;
  z-index:1;
  border-bottom:1px solid lightgray;
  background-color:white;
  display: flex;
  align-items: center;
  gap: 10%;
`;
const Body = styled.div`
  width:100%;
  height:92vh;
  margin-top:8vh;
`;
function App() {
  return (
    <Container>
      <Header>
        <Link to="/">
        <span className="text-3xl">Logo</span>
        </Link>
        <Link to="/results">
          <span className="text-xl">결과물</span>
        </Link>
        <span className="text-xl">Q&A</span>
        <Link to="/reservation">
          <span className="text-xl text-[#59AACA]">실시간예약</span>
        </Link>
      </Header>
      <Body>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/results" element={<Results/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
        </Routes>
      </Body>
    </Container>
  );
}

export default App;
