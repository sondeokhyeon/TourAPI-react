import React from 'react';
import styled from 'styled-components';
import { SUB_TITLE } from './Detail'

const INTRO_CONTAINER = styled.div`
margin:30px;
padding-bottom:7px;
border-bottom: 1px solid #c3c3c3;
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

export default ({ intro }) => {
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
        <CONT dangerouslySetInnerHTML={{__html:intro.subfacility}} />
      </WRAPER>}
      {intro.chkcooking && <WRAPER>
        <TIT>객실내취사여부  </TIT>
        <CONT>{intro.chkcooking}  </CONT>
      </WRAPER>}
      {intro.foodplace && <WRAPER>
        <TIT>식음료장  </TIT>
        <CONT dangerouslySetInnerHTML={{__html:intro.foodplace}} />
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

