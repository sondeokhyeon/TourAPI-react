import React from "react";
import useAsync from "../util/useAsync";
import styled from "styled-components";
import { getDetailInfo } from "../util/API";
import noImage from "../images/noimage.jpg";
//import LOADING from "../Common/Loading";

const MODAL_CONTAINER = styled.div`
  position: fixed;
  background-color: #0000003d;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const INNER_CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  margin: 3rem auto 0;
  width: 50%;
  height: 800px;
  overflow: auto;
  @media screen and (min-width: 300px) and (max-width: 1290px) {
    width: 100%;
  }
`;

const Detail = ({ detailInfo, setDetailInfo }) => {
  const contentId = detailInfo.split("/")[0];
  const itemNo = detailInfo.split("/")[1];
  const [state] = useAsync(getDetailInfo, { contentId, itemNo }, true);
  const { loading, data, error } = state;

  function closeModal() {
    setDetailInfo(false);
  }

  if (loading) return null;
  if (error)
    return <div>ERROR!(통신 및 원인 불명의 에러가 발생하였습니다.</div>;
  if (!data) return null;
  return (
    <MODAL_CONTAINER>
      <INNER_CONTAINER>
        <INFO_DETAIL info={data.info} />
        <INTRO_DETAIL intro={data.intro} />
      </INNER_CONTAINER>
      <button onClick={closeModal}>CLOSE</button>
    </MODAL_CONTAINER>
  );
};

const IMG = styled.img`
  @media screen and (min-width: 300px) and (max-width: 1290px) {
    width: 100%;
  }
`;
const TITLE = styled.h1`
  margin: 25px 0px;
`;
const ADDR = styled.div``;
const DESCIPTION = styled.div`
  width: 95%;
  padding: 10px 50px;
  p {
    font-size: 15px;
    word-break: keep-all;
    line-height: 2;
  }
`;

function INFO_DETAIL({ info }) {
  return (
    <>
      <IMG src={info.firstimage ? info.firstimage : noImage} alt={info.title} />
      <TITLE>{info.title}</TITLE>
      <ADDR>{info.addr1}</ADDR>
      <DESCIPTION>
        <p dangerouslySetInnerHTML={{ __html: info.overview }}></p>
      </DESCIPTION>
    </>
  );
}

function INTRO_DETAIL({ intro }) {
  return <div dangerouslySetInnerHTML={{ __html: intro.usetime }} />;
}

export default Detail;
