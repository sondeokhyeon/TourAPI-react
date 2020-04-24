import React from "react";
import styled from "styled-components";

const WRAP = styled.div`
  position: sticky;
  height: 90px;
  width: 1194px;
`;
const MAJOR = styled.ul`
  & li {
    display: inline-block;
    cursor: pointer;
    padding: 13px 5px 13px 10px;
    margin: 10px 0px;
    font-size: 1.2rem;
  }
`;

const MINOR = styled.select`
  display: ${(props) => props.display};
  margin-left: 10px;
  margin: 0px 5px 5px 10px;
  float: right;
`;

const AreaList = ({
  areaCode,
  setAreaCode,
  setMajor,
  minor,
  setMinorDisplay,
  minorDisplay,
  setMinorCode,
  minorCode,
  getMinor,
  pageNo,
}) => {
  const changeAction = (code, area) => {
    if (areaCode === code) {
      return false;
    }
    setMinorDisplay("block");
    setMajor(area);
    getMinor(code);
    setAreaCode(code);
    pageNo.current = 1;
    setMinorCode("");
  };

  // const setDiv = ({ ...minor }, length) => {
  //   let test = "";
  //   for (var i = 0; i < length; i++) {
  //     console.log(minor[i]);
  //     if (i === 0) test += "<div>";
  //     test += `<div onClick=${() => test()}>
  //                ${minor[i].name}
  //              </div>`;
  //     if (i % 3 === 0) {
  //       if (i === 0) {
  //         continue;
  //       }
  //       test += "</div>";
  //       if (i <= length) {
  //         test += "<div>";
  //       }
  //     }
  //   }
  //   return test;
  // };

  return (
    <WRAP>
      <MAJOR>
        <li onClick={() => changeAction("1", "서울")}>서울</li>
        <li onClick={() => changeAction("31", "경기도")}>경기도</li>
        <li onClick={() => changeAction("2", "인천")}>인천</li>
        <li onClick={() => changeAction("32", "강원도")}>강원도</li>
        <li onClick={() => changeAction("8", "세종시")}>세종시</li>
        <li onClick={() => changeAction("3", "대전")}>대전</li>
        <li onClick={() => changeAction("33", "충북")}>충북</li>
        <li onClick={() => changeAction("34", "충남")}>충남</li>
        <li onClick={() => changeAction("4", "대구")}>대구</li>
        <li onClick={() => changeAction("37", "전북")}>전북</li>
        <li onClick={() => changeAction("38", "전남")}>전남</li>
        <li onClick={() => changeAction("5", "광주")}>광주</li>
        <li onClick={() => changeAction("35", "경북")}>경북</li>
        <li onClick={() => changeAction("36", "경남")}>경남</li>
        <li onClick={() => changeAction("7", "울산")}>울산</li>
        <li onClick={() => changeAction("6", "부산")}>부산</li>
        <li onClick={() => changeAction("39", "제주도")}>제주도</li>
      </MAJOR>
      <MINOR
        display={minorDisplay}
        onChange={(e) => {
          pageNo.current = 1;
          setMinorCode(e.target.value);
        }}
        value={minorCode}
      >
        <option value="">전체</option>
        {minor.map((item, index) => (
          <option key={index} value={item.code}>
            {item.name}
          </option>
        ))}
      </MINOR>
    </WRAP>
  );
};

export default React.memo(AreaList);
