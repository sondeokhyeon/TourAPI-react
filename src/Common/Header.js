import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { headerContext } from "../App";

const HEADER = styled.header`
  width: 20%;
  height: 975px;
  float: left;
  position: fixed;
  border-right: 1px solid #b4b4b4;
  @media only screen and (min-width: 300px) and (max-width: 700px) {
    float: none;
    display: block;
    height: 0px;
    position: fixed;
    width: 100%;
    z-index: 10;
    top: ${(props) => props.height}; 
    transition: top 0.5s;
  }
`;

const UL = styled.ul`
  margin: 50px auto;
  height: 450px;
  & li:first-child {
    display:none;
    @media only screen and (min-width: 300px) and (max-width: 700px) {
      display:block;
    } 
  }
  @media only screen and (min-width: 300px) and (max-width: 700px) {
    margin: 0 auto;
    height: 222px;
    background-color: white;
  }
`;

const LI = styled.li`
  padding: 10px 0;

  &:hover {
    background-color: gainsboro;
  }
  & a {
    color: #383838;
    font-weight: 600;
    display: block;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
    line-height: 2.3;
  }
  @media only screen and (min-width: 300px) and (max-width: 700px) {
    border-bottom: 1px solid #ddd;
    padding: 10px 0px;
    margin: 0px;
    & a {
      line-height: 1;
      font-size: 16px;
    }
  }
`;

const HOME_BTN = styled(NavLink)`
  background: red;
  width: 30px;
  display: block;
  border-radius: 100px;
  padding: 3rem;
  font-size: 21px;
  color: white;
  text-decoration: none;
  margin: 50px auto;
  font-weight: 600;
  @media only screen and (min-width: 300px) and (max-width: 700px) {
    display:none;
  }
  & span {
    position: relative;
    right: 7px;
  }
`;

const BTN_WRAP = styled.div`
  display: none;
  @media only screen and (min-width: 300px) and (max-width: 700px) {
    display: inline;
    float:right;
    background-color:white;
  }
`;

const BTN = styled.div`
  margin:15px;
  /* color:white; */
`;

const Header = () => {
  const {headerDispatch, DATA} = useContext(headerContext);
  
  useEffect(() => {
    headerDispatch({type:"INIT"})
  }, [headerDispatch])

  return (
    <>
      <HEADER height={DATA}>
        <div>
          <HOME_BTN to="/" exact>
            <span>INFO</span>
          </HOME_BTN>
        </div>
        <UL>
          <LI>
           <NavLink to="/" onClick={() => headerDispatch({
             type : 'INIT'
           })}>홈으로</NavLink>
          </LI>
          <LI>
           <NavLink to="/spot" onClick={() => headerDispatch({
             type : 'INIT'
           })}>관광지 정보</NavLink>
          </LI>
          <LI>
            <NavLink to="/festival" onClick={() => headerDispatch({
             type : 'INIT'
           })} >축제·행사 정보</NavLink>
          </LI>
          <LI>
            <NavLink to="/course" onClick={() => headerDispatch({
             type : 'INIT'
           })} >추천 여행코스 정보</NavLink>
          </LI>
          <LI>
            <NavLink to="/eatery"  onClick={() => headerDispatch({
             type : 'INIT'
           })} >음식점 정보</NavLink>
          </LI>
          <LI>
            <NavLink to="/acc"onClick={() => headerDispatch({
             type : 'INIT'
           })} >숙박업소 정보</NavLink>
          </LI>
          <BTN_WRAP>
            <BTN
              onClick={() => headerDispatch({
                 type : 'TOGGLE'
              })}
            >
              MENU
            </BTN>
          </BTN_WRAP>
        </UL>
      </HEADER>
    </>
  );
};

export default Header;