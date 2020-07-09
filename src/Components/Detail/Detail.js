/* global kakao */
import React, {useEffect} from "react";
import useAsync from "../../util/useAsync";
import styled from "styled-components";
import { getDetailInfo } from "../../util/API";
import { CONTAINER, CONTENTS } from '../../Style/GlobalStyles'
import IntroDetail from './IntroDetail';
import InfoDetail from './InfoDetail';
import RepeatInfo from "./RepeatInfo";

export const SUB_TITLE = styled.h2`
  margin: 25px 0px;
  font-size: 1.5rem !important;
  text-align:center;
`;

const INFO_MAP = styled.div`
width:94%;
height:300px;
margin: 20px auto;
`;

const ADDR = styled.div`
text-align:center;
margin-bottom:25px;
`;

const Detail = ({match}) => {
  const { params : {contentId, itemNo}} = match 
  const [state] = useAsync(getDetailInfo, { contentId, itemNo  }, true ,'detail');
  const { loading, data, error } = state;
  let RepeatInfoFlag = false;

  useEffect(() => {
    let container = document.getElementById("map");
    try {
      kakao.maps.load(() => {
        if(container) {
          const mapRef = new kakao.maps.LatLng(data.info.mapy, data.info.mapx)
          const mapContainer = new window.kakao.maps.Map(container, {
            center: mapRef,
            level:4
          });
          const mapMaker = new kakao.maps.Marker({
            position:mapRef
          })
          mapMaker.setMap(mapContainer);
        }
      });
    } catch(error) {
      console.log(error)
    }
  })
    
  if (loading) return <span>Loaindg...</span>;
  if (error)
    return <div>ERROR!(통신 및 원인 불명의 에러가 발생하였습니다.</div>;
  if (!data) return <span>데이터가없습니다</span>;

  
  if(itemNo === "32" || itemNo === "25" ) {
    RepeatInfoFlag = true;
  }

  return (
    <CONTAINER >
      <CONTENTS>
        <InfoDetail info={data.info}  />
        <SUB_TITLE>주소</SUB_TITLE>
        <ADDR>{data.info.addr1} </ADDR>
        <INFO_MAP id="map"></INFO_MAP>
        <IntroDetail intro={data.intro} />
        {RepeatInfoFlag && <RepeatInfo contentId={contentId} itemNo={itemNo}/> }
      </CONTENTS>
    </CONTAINER>
  )
}

export default React.memo(Detail);
