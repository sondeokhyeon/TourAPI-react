import React, { useContext } from "react";
import { CONTAINER, CONTENTS } from "../Common/GlobalStyles";
import { DataContext } from "../Common/Context";

export default () => {
  const { data, dispatch } = useContext(DataContext);
  const btnAction = async () => {
    await dispatch({
      type: "SPOT",
      payload: { areaCode: 1, sigunguCode: 1, elementCount: 1 }
    });
    console.log(data);
  };
  return (
    <CONTENTS>
      <CONTAINER>
        <h1>관광지</h1>
        <button onClick={btnAction}>테스트</button>
      </CONTAINER>
    </CONTENTS>
  );
};
