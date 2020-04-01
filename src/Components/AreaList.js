import React from "react";

const AreaList = ({ setAreaCode, major, setMajor, minor, getMinor }) => {
  const changeAction = (code, area) => {
    setMajor(area);
    setAreaCode(code);
    getMinor(code);
  };
  console.log(minor);

  return (
    <div>
      <span>{major}</span>
      <ul>
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
      </ul>
      <ul></ul>
      {minor.map(item => (
        <li key={item.rnum}>{item.name}</li>
      ))}
    </div>
  );
};

export default React.memo(AreaList);
