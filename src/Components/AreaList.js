import React from "react";
import styled from "styled-components";

const WRAP = styled.div``;
const TITLE = styled.h2``;
const MAJOR = styled.ul`
  & li {
    margin-left: 10px;
    display: inline-block;
  }
  & li + li {
    margin: 20px 0;
    padding-left: 25px;
  }
`;
const MINOR = styled.div`
  width: 1200px;

  & div {
    display: flex;
    width: 1000px;
    overflow: scroll;
    & span {
      width: 100px;
    }
  }
`;

const AreaList = ({
  areaCode,
  setAreaCode,
  major,
  setMajor,
  minor,
  getMinor
}) => {
  const changeAction = (code, area) => {
    if (areaCode === code) {
      return false;
    }
    setMajor(area);
    getMinor(code);
    setAreaCode(code);
  };
  const setDiv = ({ minor }) => {
    console.log(minor);
    return (
      <div>
        <div>minor[0].name</div>
        <div>minor[1]</div>
        <div>minor[2]</div>
      </div>
    );
  };

  return (
    <WRAP>
      <TITLE>{major}</TITLE>
      <MAJOR>
        <li className="areaCodes" onClick={() => changeAction("1", "서울")}>
          서울
        </li>
        <li className="areaCodes" onClick={() => changeAction("7", "울산")}>
          울산
        </li>
        <li className="areaCodes" onClick={() => changeAction("35", "경북")}>
          경북
        </li>
        <li className="areaCodes" onClick={() => changeAction("2", "인천")}>
          인천
        </li>
        <li className="areaCodes" onClick={() => changeAction("8", "세종시")}>
          세종시
        </li>
        <li className="areaCodes" onClick={() => changeAction("36", "경남")}>
          경남
        </li>
        <li className="areaCodes" onClick={() => changeAction("3", "대전")}>
          대전
        </li>
        <li className="areaCodes" onClick={() => changeAction("31", "경기도")}>
          경기도
        </li>
        <li className="areaCodes" onClick={() => changeAction("37", "전북")}>
          전북
        </li>
        <li className="areaCodes" onClick={() => changeAction("4", "대구")}>
          대구
        </li>
        <li className="areaCodes" onClick={() => changeAction("32", "강원도")}>
          강원도
        </li>
        <li className="areaCodes" onClick={() => changeAction("38", "전남")}>
          전남
        </li>
        <li className="areaCodes" onClick={() => changeAction("5", "광주")}>
          광주
        </li>
        <li className="areaCodes" onClick={() => changeAction("33", "충북")}>
          충북
        </li>
        <li className="areaCodes" onClick={() => changeAction("39", "제주도")}>
          제주도
        </li>
        <li className="areaCodes" onClick={() => changeAction("6", "부산")}>
          부산
        </li>
        <li className="areaCodes" onClick={() => changeAction("34", "충남")}>
          충남
        </li>
      </MAJOR>
      <MINOR>
        {/* <div> {setDiv(minor)}</div> */}
        {minor.map(item => {
          return <li>{item.name}</li>;
        })}
      </MINOR>
    </WRAP>
  );
};

export default React.memo(AreaList);
