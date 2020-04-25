import React from "react";
import styled from "styled-components";
import noImage from "../images/noimage.jpg";
import { Link } from "react-router-dom";

const T_INFO = styled.div`
  display: inline-block;
  border: 1px solid #d9d9d9;
  width: 280px;
  height: 300px;
  margin: 10px;
  box-sizing: border-box;
`;

const T_IMG = styled.img`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
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

const DetailList = ({ item }) => {
  if (item.length === 0) {
    return null;
  } else if (item[0] === undefined) {
    return <div>정보가 없습니다</div>;
  } else {
    return item.map((i, index) => {
      return (
        i && (
          <Link
            to={`detail/${i.contentid}/${i.contenttypeid}`}
            target="_blank"
            key={index}
          >
            <T_INFO>
              <T_IMG
                src={i.firstimage ? i.firstimage : noImage}
                alt={i.title}
              />
              <T_TITLE>{i.title}</T_TITLE>
              <T_ADDR>{i.addr1}</T_ADDR>
            </T_INFO>
          </Link>
        )
      );
    });
  }
};

export default DetailList;
