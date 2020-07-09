
import React from 'react';
import styled from 'styled-components';
import noImage from "../../images/noimage.jpg"
import { SUB_TITLE } from './Detail'

const IMG = styled.img`
margin-top:25px;
width: 100%;
text-align:center;
`;

const TITLE = styled.h1`
margin: 25px 0px;
font-size:2rem !important;
text-align:center;
`;

const DESCIPTION = styled.div`
margin: 25px 0px;
width: 99%;
background-color:#e1e1e1;
p {
  padding: 10px 15px;
  font-size: 15px;
  word-break: keep-all;
  line-height: 2;
}
`;

const INFO_DETAIL = ({ info }) => {
  return (
    <>
      <IMG src={info.firstimage ? info.firstimage : noImage} alt={info.title} />
      <TITLE>{info.title}</TITLE>
      <SUB_TITLE>소개</SUB_TITLE>
      <DESCIPTION>
        <p dangerouslySetInnerHTML={{ __html: info.overview }}></p>
      </DESCIPTION>
    </>
  )
}

export default React.memo(INFO_DETAIL)