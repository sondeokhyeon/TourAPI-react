import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import noImage from "../images/noimage.jpg";

const T_INFO = styled(Link)`
  display: inline-block;
  border: 1px solid #d9d9d9;
  width: 250px;
  height: 300px;
  margin: 10px; 
  box-sizing: border-box;
  color:black;
  text-decoration:none;
  ${({theme}) => theme.mobile(
    `
      width: 95%;
      height: 300px;
      margin: 20px 10px;
    `
  )}
`;

const T_IMG = styled.img`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  ${({theme}) => theme.mobile(
    `
      height: 225px;
    `
  )}
`;

const T_TITLE = styled.div`
  padding-top: 20px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const T_ADDR = styled.div`
  padding-top: 10px;
  text-align: center;
  font-size: 13px;
  width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const InfoList = ({ item }) => {
  if (item.length === 0) {
    return null;
  } else if (item[0] === undefined) {
    return <div>정보가 없습니다</div>;
  } else {
    return item.map((i, index) => {
      return (
        i && (
          <T_INFO key={index} to={`/detail/${i.contenttypeid}/${i.contentid}`} target="_blink">
            <T_IMG src={i.firstimage ? i.firstimage : noImage} alt={i.title} />
            <T_TITLE>{i.title}</T_TITLE>
            <T_ADDR>{i.addr1}</T_ADDR>
          </T_INFO>
        )
      );
    });
  }
};

export default React.memo(InfoList);
