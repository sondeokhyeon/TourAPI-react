import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HEADER = styled.header`
  width: 15%;
  height: 975px;
  float: left;
  position: fixed;
  border-right: 1px solid #b4b4b4;
`;

const UL = styled.ul`
  margin: 200px auto;
  height: 450px;
`;

const LI = styled.li`
  margin: 20px auto;
  & a {
    display: block;
    text-align: center;
    text-decoration: none;
  }
`;

export default () => {
  return (
    <HEADER>
      <UL>
        <LI>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </LI>
        <LI>
          <NavLink to="/spot">관광지</NavLink>
        </LI>
        <LI>
          <NavLink to="/festival">축제·행사</NavLink>
        </LI>
        <LI>
          <NavLink to="/course">추천 여행코스</NavLink>
        </LI>
        <LI>
          <NavLink to="/eatery">음식점 정보</NavLink>
        </LI>
        <LI>
          <NavLink to="/acc">숙박업소정보</NavLink>
        </LI>
        <LI>
          <NavLink to="">위치기반</NavLink>
        </LI>
      </UL>
    </HEADER>
  );
};
