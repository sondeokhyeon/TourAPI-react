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
  margin-top:25px;
  width: 100%;
  text-align:center;
`;

const TITLE = styled.h1`
  margin: 25px 0px;
  font-size:2rem !important;
  text-align:center;
`;

const SUB_TITLE = styled.h2`
  margin: 25px; 0px;
  font-size: 1.5rem !important;
  text-align:center;
`;

const ADDR = styled.div`
  text-align:center;
  margin-bottom:25px;
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
      <SUB_TITLE>소개</SUB_TITLE>
      <DESCIPTION>
        <p dangerouslySetInnerHTML={{ __html: info.overview }}></p>
      </DESCIPTION>
    </>
  )
}


const INTRO_CONTAINER = styled.div`
  margin:30px;
  &:last-child {
    border-bottom:1px solid #c3c3c3;
  }
`;
const WRAPER = styled.dl`
  display:flex;
  text-align:center;
  border-top:1px solid #c3c3c3;

`;
const TIT = styled.dt`
  flex:1;
  padding:10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CONT = styled.dd`
  flex:1;
  padding:10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function INTRO_DETAIL({ intro }) {
      return (
        <INTRO_CONTAINER >
          <SUB_TITLE>상세 정보</SUB_TITLE>
          { intro.infocenter && 
          <WRAPER>
            <TIT>문의 및 안내</TIT>
            <CONT dangerouslySetInnerHTML={{__html : intro.infocenter }}/>
          </WRAPER>
          }
          {intro.accomcount && 
            <WRAPER>
              <TIT>수용인원</TIT>
              <CONT>{intro.accomcount}</CONT>
            </WRAPER>
          }
          {intro.restdate && 
            <WRAPER>
              <TIT>쉬는날</TIT>
              <CONT>{intro.restdate}</CONT>
            </WRAPER>
          }
          {intro.opendate && 
            <WRAPER>
              <TIT>개장일</TIT>
              <CONT>{intro.opendate}  </CONT>
            </WRAPER>
          }
          {intro.useseason && 
            <WRAPER>
              <TIT>이용시기</TIT>
              <CONT>{intro.useseason}</CONT>
            </WRAPER>
          }
          {intro.usetime && 
            <WRAPER>
              <TIT>이용시간</TIT>
              <CONT dangerouslySetInnerHTML={{__html : intro.usetime}}></CONT>
            </WRAPER>
          }
          {intro.expguide && 
            <WRAPER>
              <TIT>체험안내</TIT>
              <CONT dangerouslySetInnerHTML={{__html : intro.expguide}}></CONT>
            </WRAPER>
          }
          {intro.expagerange && 
            <WRAPER>
              <TIT>체험가능연령</TIT>
              <CONT dangerouslySetInnerHTML={{__html : intro.expagerange}}></CONT>
            </WRAPER>
          }

        {intro.accomcount && <WRAPER>
          <TIT>수용인원 	 </TIT>
          <CONT>{intro.accomcount}  </CONT>
        </WRAPER>}
        {intro.chkbabycarriage && <WRAPER>
          <TIT>유모차대여여부 	 </TIT>
          <CONT>{intro.chkbabycarriage}  </CONT>
        </WRAPER>}
        {intro.eventplace && <WRAPER>
          <TIT>행사장소  </TIT>
          <CONT>{intro.eventplace}  </CONT>
        </WRAPER>}
        {intro.placeinfo && <WRAPER>
          <TIT>행사장위치안내 	 </TIT>
          <CONT dangerouslySetInnerHTML={{__html :intro.placeinfo}}/>
        </WRAPER>}
        {intro.usetimefestival && <WRAPER>
          <TIT>이용요금 	 </TIT>
          <CONT dangerouslySetInnerHTML={{__html:intro.usetimefestival}}/>
        </WRAPER>}
        {intro.discountinfofestival && <WRAPER>
          <TIT>할인정보 	 </TIT>
          <CONT>{intro.discountinfofestival}  </CONT>
        </WRAPER>}
        {intro.bookingplace && <WRAPER>
          <TIT>예매처 	 </TIT>
          <CONT dangerouslySetInnerHTML={{__html:intro.bookingplace}}/>
        </WRAPER>}
        {intro.eventstartdate && <WRAPER>
          <TIT>행사시작일 	 </TIT>
          <CONT>{intro.eventstartdate}  </CONT>
        </WRAPER>}
        {intro.eventenddate && <WRAPER>
          <TIT>행사종료일	   </TIT>
          <CONT>{intro.eventenddate}  </CONT>
        </WRAPER>}
        {intro.agelimit && <WRAPER>
          <TIT>관람가능연령	   </TIT>
          <CONT>{intro.agelimit}  </CONT>
        </WRAPER>}
        {intro.spendtimefestival && <WRAPER>
          <TIT>관람소요시간 </TIT>
          <CONT>{intro.spendtimefestival}  </CONT>
        </WRAPER>}
        {intro.playtime && <WRAPER>
          <TIT>공연시간  </TIT>
          <CONT dangerouslySetInnerHTML={{__html:intro.playtime}}/>
        </WRAPER>}
        {intro.sponsor1 && <WRAPER>
          <TIT>주최자  </TIT>
          <CONT>{intro.sponsor1}  </CONT>
        </WRAPER>}
        {intro.sponsor1tel && <WRAPER>
          <TIT>주최자연락처 </TIT>
          <CONT>{intro.sponsor1tel}  </CONT>
        </WRAPER>}
        {intro.theme && <WRAPER>
          <TIT>코스테마	   </TIT>
          <CONT>{intro.theme}  </CONT>
        </WRAPER>}
        {intro.schedule && <WRAPER>
          <TIT>코스일정  </TIT>
          <CONT>{intro.schedule}  </CONT>
        </WRAPER>}
        {intro.distance && <WRAPER>
          <TIT>코스총거리	   </TIT>
          <CONT>{intro.distance}  </CONT>
        </WRAPER>}
        {intro.taketime && <WRAPER>
          <TIT>코스총소요시간  </TIT>
          <CONT>{intro.taketime}  </CONT>
        </WRAPER>}
        {intro.infocenterleports && <WRAPER>
          <TIT>문의 및 안내  </TIT>
          <CONT>{intro.infocenterleports}  </CONT>
        </WRAPER>}
        {intro.reservation && <WRAPER>
          <TIT>예약 안내	   </TIT>
          <CONT>{intro.reservation}  </CONT>
        </WRAPER>}
        {intro.usefeeleports && <WRAPER>
          <TIT>입장료	   </TIT>
          <CONT>{intro.usefeeleports}  </CONT>
        </WRAPER>}
        {intro.accomcountleports && <WRAPER>
          <TIT>수용인원 </TIT>
          <CONT>{intro.accomcountleports}  </CONT>
        </WRAPER>}
        {intro.openperiod && <WRAPER>
          <TIT>개장시간  </TIT>
          <CONT>{intro.openperiod}  </CONT>
        </WRAPER>}
        {intro.usetimeleports && <WRAPER>
          <TIT>이용시간  </TIT>
          <CONT>{intro.usetimeleports}  </CONT>
        </WRAPER>}
        {intro.restdateleports && <WRAPER>
          <TIT>쉬는날 	 </TIT>
          <CONT>{intro.restdateleports}  </CONT>
        </WRAPER>}
        {intro.parkingleports && <WRAPER>
          <TIT>주차시설  </TIT>
          <CONT>{intro.parkingleports}  </CONT>
        </WRAPER>}
        {intro.parkingfeeleports && <WRAPER>
          <TIT>주차요금		   </TIT>
          <CONT>{intro.parkingfeeleports}  </CONT>
        </WRAPER>}
        {intro.chkbabycarriageleports && <WRAPER>
          <TIT>유모차대여여부 	 </TIT>
          <CONT>{intro.chkbabycarriageleports}  </CONT>
        </WRAPER>}
        {intro.chkcreditcardleports && <WRAPER>
          <TIT>신용카드가능여부  </TIT>
          <CONT>{intro.chkcreditcardleports}  </CONT>
        </WRAPER>}
        {intro.chkpetleports && <WRAPER>
          <TIT>애완동물가능여부 </TIT>
          <CONT>{intro.chkpetleports}  </CONT>
        </WRAPER>}
        {intro.infocenterlodging && <WRAPER>
          <TIT>문의 및 안내  </TIT>
          <CONT>{intro.infocenterlodging}  </CONT>
        </WRAPER>}
        {intro.reservationlodging && <WRAPER>
          <TIT>예약 안내	   </TIT>
          <CONT>{intro.reservationlodging}  </CONT>
        </WRAPER>}
        {intro.reservationurl && <WRAPER>
          <TIT>예약 안내홈페이지 </TIT>
          <CONT dangerouslySetInnerHTML={{__html:intro.reservationurl}} />
        </WRAPER>}
        {intro.subfacility && <WRAPER>
          <TIT>부대시설	   </TIT>
          <CONT>{intro.subfacility}  </CONT>
        </WRAPER>}
        {intro.chkcooking && <WRAPER>
          <TIT>객실내취사여부  </TIT>
          <CONT>{intro.chkcooking}  </CONT>
        </WRAPER>}
        {intro.foodplace && <WRAPER>
          <TIT>식음료장  </TIT>
          <CONT>{intro.foodplace}  </CONT>
        </WRAPER>}
        {intro.roomcount && <WRAPER>
          <TIT>객실수		   </TIT>
          <CONT>{intro.roomcount}  </CONT>
        </WRAPER>}
        {intro.accomcountlodging && <WRAPER>
          <TIT>수용가능인원 	 </TIT>
          <CONT>{intro.accomcountlodging}  </CONT>
        </WRAPER>}
        {intro.checkintime && <WRAPER>
          <TIT>체크인 시간 	 </TIT>
          <CONT>{intro.checkintime}  </CONT>
        </WRAPER>}
        {intro.checkouttime && <WRAPER>
          <TIT>체크아웃 시간  </TIT>
          <CONT>{intro.checkouttime}  </CONT>
        </WRAPER>}
        {intro.parkinglodging && <WRAPER>
          <TIT>주차가능 여부  </TIT>
          <CONT>{intro.parkinglodging}  </CONT>
        </WRAPER>}
        {intro.shopguide && <WRAPER>
          <TIT>매장안내 </TIT>
          <CONT>{intro.shopguide}  </CONT>
        </WRAPER>}
        {intro.infocentershopping && <WRAPER>
          <TIT>문의및안내 </TIT>
          <CONT>{intro.infocentershopping}  </CONT>
        </WRAPER>}
        {intro.opentime && <WRAPER>
          <TIT>영업시간</TIT>
          <CONT>{intro.opentime}  </CONT>
        </WRAPER>}
        {intro.restdateshopping && <WRAPER>
          <TIT>쉬는날  </TIT>
          <CONT>{intro.restdateshopping}  </CONT>
        </WRAPER>}
        {intro.scaleshopping && <WRAPER>
          <TIT>규모 </TIT>
          <CONT>{intro.scaleshopping}  </CONT>
        </WRAPER>}
        {intro.fairday && <WRAPER>
          <TIT>장서는날 </TIT>
          <CONT>{intro.fairday}  </CONT>
        </WRAPER>}
        {intro.culturecenter && <WRAPER>
          <TIT>문화센터바로가기  </TIT>
          <CONT>{intro.culturecenter}  </CONT>
        </WRAPER>}
        {intro.restroom && <WRAPER>
          <TIT>화장실 </TIT>
          <CONT>{intro.restroom}  </CONT>
        </WRAPER>}
        {intro.chkbabycarriageshopping && <WRAPER>
          <TIT>신용카드가능여부	   </TIT>
          <CONT>{intro.chkbabycarriageshopping}  </CONT>
        </WRAPER>}
        {intro.chkcreditcardshopping && <WRAPER>
          <TIT>신용카드가능여부	   </TIT>
          <CONT>{intro.chkcreditcardshopping}  </CONT>
        </WRAPER>}
        {intro.chkpetshopping && <WRAPER>
          <TIT>애완동물가능여부	   </TIT>
          <CONT>{intro.chkpetshopping}  </CONT>
        </WRAPER>}
        {intro.parkingshopping && <WRAPER>
          <TIT>주차시설	   </TIT>
          <CONT>{intro.parkingshopping}  </CONT>
        </WRAPER>}
        {intro.saleitemcost && <WRAPER>
          <TIT>판매품목별가격 </TIT>
          <CONT>{intro.saleitemcost} </CONT>
        </WRAPER>
        }
        {intro.firstmenu && <WRAPER>
          <TIT>대표메뉴 </TIT>
          <CONT>{intro.firstmenu}  </CONT>
        </WRAPER>}
        {intro.treatmenu && <WRAPER>
          <TIT>취급메뉴 </TIT>
          <CONT>{intro.treatmenu}  </CONT>
        </WRAPER>}
        {intro.discountinfofood && <WRAPER>
          <TIT>할인정보 </TIT>
          <CONT>{intro.discountinfofood}  </CONT>
        </WRAPER>}
        {intro.parkingfood && <WRAPER>
          <TIT>주차가능 여부</TIT>
          <CONT>{intro.parkingfood}  </CONT>
        </WRAPER>}
        {intro.smoking && <WRAPER>
          <TIT>급연/흡연 여부  </TIT>
          <CONT>{intro.smoking}  </CONT>
        </WRAPER>}
        {intro.packing && <WRAPER>
          <TIT>포장가능 여부  </TIT>
          <CONT>{intro.packing}  </CONT>
        </WRAPER>}
        {intro.restdatefood && <WRAPER>
          <TIT>쉬는날  </TIT>
          <CONT>{intro.restdatefood}  </CONT>
        </WRAPER>}
        {intro.chkcreditcardfood && <WRAPER>
          <TIT>신용카드가능여부	   </TIT>
          <CONT>{intro.chkcreditcardfood}  </CONT>
        </WRAPER>}
        </INTRO_CONTAINER>
      )
    }
export default React.memo(Detail);
