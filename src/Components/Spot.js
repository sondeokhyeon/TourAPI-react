import React, { useEffect, useRef } from "react";
import { CONTAINER, CONTENTS } from "../Style/GlobalStyles";
import Loading from "../Common/Loading";
import { getSpotList, useDataState, useDataDispatch } from "../Common/Store";
import AreaList from "./AreaList";

export default () => {
  const param =
    "contentTypeId=12&areaCode=1&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=24&pageNo=";
  const pageNo = useRef(0);
  const state = useDataState();
  const dispatch = useDataDispatch();

  useEffect(() => {
    getSpotList(dispatch, null, { param: param + (pageNo.current += 1) });
  }, [dispatch]);

  const { loading, data, error } = state;
  if (loading) return <Loading />;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  const getData = () => {
    getSpotList(dispatch, data, {
      param: param + (pageNo.current += 1)
    });
  };

  return (
    <CONTENTS>
      <CONTAINER>
        <h1>관광지</h1>
      </CONTAINER>
      <AreaList />
      <div>
        {data && <DetailView item={data} />}
        <button
          onClick={() => {
            getData();
          }}
        >
          더보기
        </button>
      </div>
    </CONTENTS>
  );
};

const DetailView = ({ item }) => {
  return item.map((i, index) => <div key={index}>{i.addr2}</div>);
};
