import styled from '@emotion/styled';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Main from './pages/Main';
import Reservation from './pages/Reservation';

const Container = styled.div`
  padding: 2vw 10vw;
  width: 100vw;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
`;
const Body = styled.div`
  margin-top: 4vw;
`;
function App() {
  return (
    <Container>
      <Header>
        <Link to="/">
        <span className="text-3xl">Logo</span>
        </Link>
        <span className="text-xl">other</span>
        <span className="text-xl">other</span>
        <Link to="/reservation">
          <span className="text-xl text-[#59AACA]">실시간예약</span>
        </Link>
      </Header>
      <Body>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reservation" element={<Reservation/>}/>
        </Routes>
      </Body>
    </Container>
  );
}

export default App;
