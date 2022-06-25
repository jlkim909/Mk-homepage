import React, { useCallback, useState, useRef } from "react";
import "./Main.scss";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { debounce } from "underscore";
import resultImg1 from "../image/result/result1.jpg";
import resultImg2 from "../image/result/result2.jpg";
import resultImg3 from "../image/result/result3.jpg";
import resultImg4 from "../image/result/result4.jpg";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function Main() {
  const animatedItem = useScrollFadeIn("left", 2);
  const animatedItem2 = useScrollFadeIn("left", 2);
  const animatedItem3 = useScrollFadeIn("right", 2);
  const animatedItem4 = useScrollFadeIn("left", 2);
  const mainRef = useRef();
  const [page, setPage] = useState(1);
  const onClickDown = useCallback(() => {
    mainRef.current.scrollTo({
      top: (mainRef.current.scrollHeight / 7) * page,
      behavior: "smooth",
    });
    setPage((prev) => prev + 1);
  }, [page]);

  const onScrollControl = debounce(
    useCallback((e) => {
      const pageHeight = e.target.scrollHeight / 7;
      if (e.target.scrollTop < pageHeight) {
        setPage(1);
      } else if (e.target.scrollTop < pageHeight * 2) {
        setPage(2);
      } else if (e.target.scrollTop < pageHeight * 3) {
        setPage(3);
      } else if (e.target.scrollTop < pageHeight * 4) {
        setPage(4);
      } else if (e.target.scrollTop < pageHeight * 5) {
        setPage(5);
      } else if (e.target.scrollTop < pageHeight * 6 - 50) {
        setPage(6);
      } else {
        setPage(7);
      }
    }, []),
    200
  );
  return (
    <div className="mainContainer" ref={mainRef} onScroll={onScrollControl}>
      <div className="screen1">
        <div className="title">
          곰팡이와 세균없는 깨끗한 욕실
          <br />
          줄눈하는남자에서 쉽고 간편하게
        </div>
      </div>
      <div className="screen2">
        <div className="title">
          <span className="text-3xl text-[#59AACA]">줄눈이란? </span> 욕실과
          베란다 타일 사이에 있는 <span className="highlight">접합부의 틈</span>
          을 뜻합니다.
          <br />
          <br /> 신축 아파트 입주시 욕실과 베란다 대리석 사이에 있는 줄눈
          시멘트계 줄눈으로써{" "}
          <span className="highlight">
            시멘트계 줄눈은 물을 흡수 하기 때문에
          </span>{" "}
          <br />
          <span className="highlight">
            처음에는 하얗던 줄눈이 시간이 갈수록 변색이 되며,
          </span>{" "}
          욕실을 청소시 물에 노출되고 지속적인 솔질로 인해 점점 갈리게 되고
          부식되면서
          <br />
          <span className="highlight">
            눈에 보이지않는 미세먼지가 날릴 수 있으며
          </span>
          시간이 지날 수록 자연스럽게 곰팡이가 생기는 건 당연하다고 볼 수
          있습니다.
        </div>
      </div>
      <div className="screen3" {...animatedItem}>
        <img src={resultImg3} alt="" />
        <div className="textContainer">
          <span className="title">향균, 방오! 친환경 줄눈제</span>
          <br />
          <span className="content">
            지저분해진 줄눈, 시공 후 매일매일 깨끗한 욕실
          </span>
          <span className="content">
            먼지가 발생하지 않는 소재로 공기오염 걱정없이 늘 깨끗한 환경을
            유지해요!
          </span>
        </div>
      </div>
      <div className="screen3 bg-[#F6F6F6]" {...animatedItem2}>
        <div className="textContainer">
          <span className="title">세련된 인테리어 효과</span>
          <br />
          <span className="content">
            균일하고 깔끔한 시공으로 고급스러운 인테리어와 위생적인 환경을
            만듭니다!
          </span>
        </div>
        <img src={resultImg4} alt="" />
      </div>
      <div className="screen3" {...animatedItem3}>
        <img src={resultImg2} alt="" />
        <div className="textContainer">
          <span className="title">전용 실리콘으로 깔끔하게</span>
          <br />
          <span className="content">
            벽면은 줄눈과 같은 색상의 실리콘을 사용하여 마감합니다!
          </span>
        </div>
      </div>
      <div className="screen3 bg-[#F6F6F6]" {...animatedItem4}>
        <div className="textContainer">
          <span className="title">많은 경험을 가진 전문가</span>
          <br />
          <span className="content">
            줄눈을 10년넘게 해온 베테랑 입니다. 많은 노하우를 통해 고객님이
            만족하는 깔끔하고 완벽한 줄눈 시공하겠습니다!
          </span>
        </div>
        <img src={resultImg1} alt="" />
      </div>
      <div className="screen4">
        <div className="leftContainer">
          <div className="title">
            <span style={{ fontSize: "0.75em" }}>
              이제 <span style={{ color: "#EDC12F" }}>영업 수수료</span>가 전혀
              들어가지 않는
            </span>
            <span>
              줄눈 전문 <span style={{ color: "#F96363" }}>시공자</span>와
              <span style={{ color: "#F96363" }}>직접 계약</span>하세요
            </span>
            <span style={{ fontSize: "3em" }}>줄눈하는남자</span>
          </div>
          <div className="content">
            <span>줄눈하는남자</span>
            <span>대표자 : 유대한</span>
            <span>사업자 등록번호 : 123-12-12345</span>
            <span>위치 : 전주시 완산구 효천중앙로 11</span>
            <span>M. 010-9312-0031</span>
          </div>
        </div>
        <div className="rightContainer">
          <div className="box1">
            <span className="title">고객님과 약속합니다.</span>
            <ul className="textContainer">
              <li>시작부터 끝가지 정직하게 시공</li>
              <li>프로디테일러가 꼼꼼하게 시공</li>
              <li>A/S는 완벽하게 보장</li>
            </ul>
          </div>
          <div className="linkContainer">
            <div className="title">바로가기</div>
            <div className="linkBtn" style={{ backgroundColor: "#F96363" }}>
              결과물
            </div>
            <Link
              className="linkBtn "
              style={{ backgroundColor: "#59AACA" }}
              to="/reservation"
            >
              실시간 예약
            </Link>
          </div>
        </div>
      </div>
      {page <= 6 ? (
        <BsChevronCompactDown className="downBtn" onClick={onClickDown} />
      ) : null}
    </div>
  );
}

export default Main;
