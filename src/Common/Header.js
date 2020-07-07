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
  @media only screen and (min-width: 300px) and (max-width: 600px) {
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
  @media only screen and (min-width: 300px) and (max-width: 600px) {
    margin: 0 auto;
    height: 185px;
    background-color: white;
  }
`;

const LI = styled.li`
  padding: 10px 0;
  transition: background-color 0.3s;
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
  @media only screen and (min-width: 300px) and (max-width: 600px) {
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
  padding: 60px;
  font-size: 21px;
  color: white;
  text-decoration: none;
  margin: 50px auto;
  font-weight: 600;
  ${({ theme }) => theme.mobile(`display:none;`)}
  & span {
    position: relative;
    right: 7px;
  }
`;

const BTN_WRAP = styled.div`
  display: none;
  @media only screen and (min-width: 300px) and (max-width: 600px) {
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
    const script = document.createElement('script')
    script.src = process.env.REACT_APP_KAKAO_URL
    script.async = true;
    document.body.appendChild(script)
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
           <NavLink to="/spot">관광지 정보</NavLink>
          </LI>
          <LI>
            <NavLink to="/festival"  >축제·행사 정보</NavLink>
          </LI>
          <LI>
            <NavLink to="/course"  >추천 여행코스 정보</NavLink>
          </LI>
          <LI>
            <NavLink to="/eatery"   >음식점 정보</NavLink>
          </LI>
          <LI>
            <NavLink to="/acc" >숙박업소 정보</NavLink>
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