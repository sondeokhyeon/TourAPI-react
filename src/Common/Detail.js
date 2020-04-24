import React from "react";
import useAsync from "../util/useAsync";
import { getDetailInfo } from "../util/API";

const Detail = ({ match }) => {
  const {
    params: { contentId, itemNo },
  } = match;
  const [state] = useAsync(getDetailInfo, { contentId, itemNo }, true);
  const { loading, data, error } = state;
  console.log(loading, data, error);
  return <div>DETAIL</div>;
};

export default Detail;
