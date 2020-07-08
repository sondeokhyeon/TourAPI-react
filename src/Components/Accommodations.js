import React, {useState, useEffect, useContext, useRef} from "react";
import { getMajorList, getMinorList, useDataDispatch, useDataState } from '../Common/Store'
import {  headerContext } from '../App'
import Loading from '../Common/Loading'
import { CONTAINER, CONTENTS, BACK_DIM, CONT_HEADER, MAIN_TITLE, MORE_BTN, SUB_TITLE } from "../Style/GlobalStyles";
import AreaList from '../Common/AreaList'
import DetailList from '../Common/DetailList'

export default () => {

  const state = useDataState();
  const dispatch = useDataDispatch();
  const {headerDispatch, DATA} = useContext(headerContext);

  const [areaCode, setAreaCode] = useState("");
  const [major, setMajor] = useState("전체");
  const [minorDisplay, setMinorDisplay] = useState("none");
  const [minorCode, setMinorCode] = useState("");

  const height = useRef(1920);
  const pageNo = useRef(1);
  const param = `contentTypeId=32&areaCode=${areaCode}&sigunguCode=${minorCode}&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=24&pageNo=`;

  useEffect(() => {
    getMajorList(dispatch, null, {
      major: "areaBasedList",
      param: param + pageNo.current,
    });
  }, [dispatch, pageNo, param]);

  const { loading, data, error } = state;
  if (loading) return <Loading />;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  const getData = async () => {
    await getMajorList(dispatch, data.info, {
      major: "areaBasedList",
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
        <MAIN_TITLE>숙박업소정보</MAIN_TITLE>
        <CONT_HEADER header={DATA}>
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
            <DetailList item={data.info}/>
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
};
