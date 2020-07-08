import React from "react";
import styled from "styled-components";

const WRAP = styled.div`
  position: relative;
  margin-bottom: 10px;
  ${({ theme }) =>
    theme.mobile(`
    display: flex;
    width: 100%;
  `)}
`;
const MAJOR = styled.ul`
  ${({ theme }) => theme.mobile(`margin: 20px 0px;`)}
  & li {
    display: inline-block;
    cursor: pointer;
    padding: 13px 5px 13px 10px;
    margin: 10px 0px;
    font-size: 1.2rem;
    ${({ theme }) =>
      theme.mobile(
        `
         padding: 1px 5px 13px 10px;
         margin: 2px 0px;
         display: none;
        `
      )}
  }
`;

const MINOR = styled.select`
  display: ${(props) => props.display};
  margin-left: 10px;
  height: 30px;
  font-size: 20px;
  width: 130px;
  position: absolute;
  bottom: 66px;
  left: 130px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    bottom: 38px;
    position: static;
  }
  @media screen and (min-width: 800px) and (max-width: 1290px) {
    bottom: 128px;
  }
`;

const M_MINOR = styled.select`
  display: none;

  @media screen and (min-width: 300px) and (max-width: 800px) {
    display: block;
    margin-left: 10px;
    height: 30px;
    font-size: 20px;
    width: 100px;
  }
`;

const AreaList = ({
  areaCode,
  setAreaCode,
  major,
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
      <M_MINOR
        onChange={(e) => {
          const index = e.target.selectedIndex;
          const options = e.target.childNodes[index];
          changeAction(e.target.value, options.label);
        }}
        value={major}
      >
        <option value="">{major}</option>
        <option value="1">서울</option>
        <option value="31">경기도</option>
        <option value="2">인천</option>
        <option value="32">강원도</option>
        <option value="8">세종시</option>
        <option value="3">대전</option>
        <option value="33">충북</option>
        <option value="34">충남</option>
        <option value="4">대구</option>
        <option value="37">전북</option>
        <option value="38">전남</option>
        <option value="5">광주</option>
        <option value="35">경북</option>
        <option value="36">경남</option>
        <option value="7">울산</option>
        <option value="6">부산</option>
        <option value="39">제주도</option>
      </M_MINOR>
      <MINOR
        display={minorDisplay}
        onChange={(e) => {
          pageNo.current = 1;
          setMinorCode(e.target.value);
        }}
        value={minorCode}
      >
        <option value="">{major} 전체</option>
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
