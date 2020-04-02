import React, { useEffect, useRef, useState } from "react";
import { CONTAINER, CONTENTS } from "../Style/GlobalStyles";
import Loading from "../Common/Loading";
import {
  getSpotList,
  getMinorList,
  useDataState,
  useDataDispatch
} from "../Common/Store";
import AreaList from "./AreaList";
import "../Style/spot.scss";
import noImage from "../images/noimage.jpg";

export default () => {
  const [areaCode, setAreaCode] = useState("");
  const param = `contentTypeId=12&areaCode=${areaCode}&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=24&pageNo=`;
  const state = useDataState();
  const dispatch = useDataDispatch();
  const pageNo = useRef(1);
  const [major, setMajor] = useState("전체");
  const height = useRef(1920);

  useEffect(() => {
    getSpotList(dispatch, null, { param: param + pageNo.current });
  }, [dispatch, pageNo, param]);

  const { loading, data, error } = state;
  if (loading) return <Loading />;
  if (error) return <div>Error...</div>;
  if (!data) return null;
  const getData = async () => {
    await getSpotList(dispatch, data.info, {
      param: param + (pageNo.current += 1)
    });
    await window.scroll({
      top: height.current
    });
    height.current += 1920;
  };

  console.log(data);

  return (
    <CONTENTS id="container">
      <CONTAINER>
        <h1>관광지</h1>
        <AreaList
          setAreaCode={setAreaCode}
          major={major}
          setMajor={setMajor}
          minor={data.minor}
          getMinor={no => {
            getMinorList(dispatch, null, {
              param: "numOfRows=50&MobileOS=ETC&MobileApp=test&areaCode=" + no
            });
          }}
        />
        <div className="container">
          {data && <DetailView item={data.info} />}
        </div>
        <button
          onClick={() => {
            getData();
          }}
        >
          더보기
        </button>
      </CONTAINER>
    </CONTENTS>
  );
};

const DetailView = ({ item }) => {
  return item.map((i, index) => (
    <div key={index} className="tinfo">
      <img
        className="infoimg"
        src={i.firstimage ? i.firstimage : noImage}
        alt={i.title}
      />
      <div className="infoTitle">{i.title}</div>
      <div className="infoAddr">{i.addr1}</div>
    </div>
  ));
};
