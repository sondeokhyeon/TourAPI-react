import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CONTAINER, CONTENTS } from "../Style/GlobalStyles";

const ROW = styled.div`
  margin-top: 100px;
  & :nth-child(3) {
    line-break: loose;
  }
`;

const ITEM = styled.div`
  display: inline-block;
  width: 20rem;
  height: 200px;
  text-align: center;
  margin: 30px;
  line-height: 420px;
  border: 1px solid #c3c3c3;
`;

const MENU = ({ item }) => {
  return (
    <Link to={item.url}>
      <ITEM>{item.title}</ITEM>
    </Link>
  );
};

export default React.memo(() => {
  return (
    <CONTENTS>
      <CONTAINER>
        <h1>여행정보</h1>
        <ROW>
          {items.map((item, index) => (
            <MENU item={item} key={index} />
          ))}
        </ROW>
      </CONTAINER>
    </CONTENTS>
  );
});

const items = [
  {
    no: 0,
    title: "관광지",
    image: "",
    url: "/spot"
  },
  {
    no: 1,
    title: "축제·행사",
    image: "",
    url: "/festival"
  },
  {
    no: 2,
    title: "추천 여행코스",
    image: "",
    url: "/course"
  },
  {
    no: 3,
    title: "음식점 정보",
    image: "",
    url: "/"
  },
  {
    no: 4,
    title: "숙박업소",
    image: "",
    url: "/eatery"
  },
  {
    no: 5,
    title: "위치기반",
    image: "",
    url: "/acc"
  }
];
