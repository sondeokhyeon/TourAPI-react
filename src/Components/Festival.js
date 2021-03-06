import React, { useState, useEffect, useRef, useContext } from "react";
import moment from "moment";
import {
  useDataState,
  useDataDispatch,
  getMajorList,
  getMinorList,
} from "../Common/Store";
import {
  CONTAINER,
  CONTENTS,
  MAIN_TITLE,
  CONT_HEADER,
  MORE_BTN,
  SUB_TITLE,
  BACK_DIM,
} from "../Style/GlobalStyles";
import Loading from "../Common/Loading";
import InfoList from "../Common/InfoList";
import AreaList from "../Common/AreaList";
import { headerContext } from "../App";

export default React.memo(() => {
  const state = useDataState();
  const dispatch = useDataDispatch();
  const {headerDispatch, DATA} = useContext(headerContext);
  
  const [areaCode, setAreaCode] = useState("");
  const [minorCode, setMinorCode] = useState("");
  const [major, setMajor] = useState("전체");
  const [minorDisplay, setMinorDisplay] = useState("none");

  const height = useRef(1920);
  const pageNo = useRef(1);
  const today = moment().format("YYYYMM") + "01";
  const param = `contentTypeId=12&areaCode=${areaCode}&sigunguCode=${minorCode}&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=24&eventStartDate=${today}&pageNo=`;

  useEffect(() => {
    getMajorList(dispatch, null, {
      major: "searchFestival",
      param: param + pageNo.current,
    });
  }, [dispatch, pageNo, param]);

  const { loading, data, error } = state;

  if (loading) return <Loading />;
  if (error) return <div>Error...</div>;
  if (!data) return <div> Data Not Found </div>;

  const getData = async () => {
    await getMajorList(dispatch, data.info, {
      major: "searchFestival",
      param: param + (pageNo.current += 1),
    });
    await window.scroll({
      top: height.current,
    });
    height.current += 1920;
  };
  return (
    <CONTENTS>
    { DATA === "0px" && <BACK_DIM onClick={() => {
        headerDispatch({type : 'TOGGLE'});
      }}/>}
      <CONTAINER>
        <MAIN_TITLE>{today.substring(6,4)}월 축제 행사</MAIN_TITLE>
        <CONT_HEADER>
          <SUB_TITLE>{major}</SUB_TITLE>
          <AreaList
            areaCode={areaCode}
            setAreaCode={setAreaCode}
            major={major}
            setMajor={setMajor}
            minor={data.minor}
            setMinorCode={setMinorCode}
            minorCode={minorCode}
            minorDisplay={minorDisplay}
            setMinorDisplay={setMinorDisplay}
            getMinor={(no) => {
              getMinorList(dispatch, null, {
                param:
                  "numOfRows=50&MobileOS=ETC&MobileApp=test&areaCode=" + no,
              });
            }}
            pageNo={pageNo}
          />
        </CONT_HEADER>
        <div className="container">
          {data.info && (
            <InfoList item={data.info}  />
          )}
        </div>
        {data.info.length >= 24 && data.info[data.info.length - 1] && (
          <MORE_BTN
            onClick={() => {
              getData();
            }}
          >
            더보기
          </MORE_BTN>
        )}
      </CONTAINER>
    </CONTENTS>
  );
});
