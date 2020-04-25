import React from "react";
import useAsync from "../util/useAsync";
import { getDetailInfo } from "../util/API";
import LOADING from "../Common/Loading";

const Detail = ({ match }) => {
  const {
    params: { contentId, itemNo },
  } = match;
  const [state] = useAsync(getDetailInfo, { contentId, itemNo }, true);
  const { loading, data, error } = state;

  if (loading) return <LOADING />;
  if (error)
    return <div>ERROR!(통신 및 원인 불명의 에러가 발생하였습니다.</div>;
  if (!data) return <div>ERROR! 데이터가 없습니다.</div>;
  console.log(data);
  return (
    <div>
      <INFO_DETAIL info={data.info} />
      <INTRO_DETAIL intro={data.intro} />
    </div>
  );
};

function INFO_DETAIL({ info }) {
  return (
    <div>
      <img src={info.firstimage} alt={info.title} />
      <h1>{info.title}</h1>
      <div>{info.addr1}</div>
      <div>{info.overview}</div>
    </div>
  );
}

function INTRO_DETAIL({ intro }) {
  return <div>{intro.usetime}</div>;
}

export default Detail;
