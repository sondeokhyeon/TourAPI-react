/* global kakao */
import React, {useEffect} from "react";
import useAsync from "../util/useAsync";
import styled from "styled-components";
import { getDetailInfo } from "../util/API";
import noImage from "../images/noimage.jpg"
//import {Map, Marker} from 'react-kakao-maps'
//import LOADING from "../Common/Loading";

const CONTAINER = styled.div`
  position: fixed;
  background-color: #0000003d;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
`;

const INNER_CONTAINER = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center; */
  background-color: white;
  color: black;
  margin: 3rem auto 0;
  width: 100%;
  height: 800px;
  overflow: auto;
  ${({theme}) => theme.mobile(
    `
    width: 100%;
    `
  )}
`;

const MODAL_CONTAINER = styled.div`
  position:absolute;
  width:50%;
  left:25%;
  top:0;
  ${({theme}) => theme.mobile(
    `
    width: 100%;
    left:0;
    `
  )}
`;

const BUTTON_WRAP = styled.div`
  text-align:center;
`;

const MODAL_SHUTDOWN = styled.div`
  width:100%;
  height:100%;
`;

const Detail = ({ detailInfo, setDetailInfo }) => {
    console.log(1)
    const contentId = detailInfo.split("/")[0];
    const itemNo = detailInfo.split("/")[1];
    const [state] = useAsync(getDetailInfo, { contentId, itemNo }, true);
    const { loading, data, error } = state;
  
    function closeModal() {
      setDetailInfo(false);
    }

    useEffect(() => {
      document.querySelector('body').style.overflow = 'hidden';
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        if(container) {
          new window.kakao.maps.Map(container, {
            center: new kakao.maps.LatLng(data.info.mapy, data.info.mapx),
          });
        }
      });
      return () => {
        document.querySelector('body').style.removeProperty('overflow')
      }
    })
    
    if (loading) return <span>Loaindg...</span>;
    if (error)
      return <div>ERROR!(통신 및 원인 불명의 에러가 발생하였습니다.</div>;
    if (!data) return <span>데이터가없습니다</span>;

    return (
      <CONTAINER >
      <MODAL_SHUTDOWN onClick={closeModal}></MODAL_SHUTDOWN>
        <MODAL_CONTAINER>
        <INNER_CONTAINER>
          <INFO_DETAIL info={data.info}  />
          <INTRO_DETAIL intro={data.intro} />
        </INNER_CONTAINER>
        <BUTTON_WRAP>
          <button onClick={closeModal}>CLOSE</button>
        </BUTTON_WRAP>
        </MODAL_CONTAINER>
      </CONTAINER>
    )
  }
  
const IMG = styled.img`
  margin:23px;
  width: 95%;
  @media screen and (min-width: 300px) and (max-width: 1290px) {
    width:88%;
  }
`;

const TITLE = styled.h1`
  margin: 25px 0px;
  font-size:2rem !important;
  text-align:center;
`;

const ADDR = styled.div`
  text-align:center;
`;

const DESCIPTION = styled.div`
  margin-top: 25px;
  width: 95%;
  p {
    padding: 10px 15px;
    font-size: 15px;
    word-break: keep-all;
    line-height: 2;
  }
`;

const INFO_MAP = styled.div`
  width:94%;
  height:300px;
  margin: 20px auto;
`;

const INFO_DETAIL = ({ info }) => {
  return (
    <>
      <IMG src={info.firstimage ? info.firstimage : noImage} alt={info.title} />
      <TITLE>{info.title}</TITLE>
      <ADDR> 주소 : {info.addr1} </ADDR>
      <INFO_MAP id="map" ></INFO_MAP>
      <DESCIPTION>
        <p dangerouslySetInnerHTML={{ __html: info.overview }}></p>
      </DESCIPTION>
    </>
  )
}

function INTRO_DETAIL({ intro }) {
  return <div dangerouslySetInnerHTML={{ __html: intro.usetime }} />;
}

export default React.memo(Detail);
