import React from "react";
import { CONTAINER, CONTENTS } from "../Style/GlobalStyles";
import Loading from "../Common/Loading";
import { getSpotList, useDataState, useDataDispatch } from "../Common/Store";

export default () => {
  const state = useDataState();
  const dispatch = useDataDispatch();

  const getData = () => {
    getSpotList(dispatch);
  };
  const { loading, data, error } = state;

  if (loading) return <Loading />;
  if (error) return <div>Error...</div>;
  if (!data)
    return (
      <CONTENTS>
        <CONTAINER>
          <button onClick={getData}>테스트</button>
        </CONTAINER>
      </CONTENTS>
    );

  const {
    response: {
      body: {
        items: { item }
      }
    }
  } = data;

  return (
    <CONTENTS>
      <CONTAINER>
        <h1>관광지</h1>
        <button onClick={getData}>테스트</button>
      </CONTAINER>
      <div>
        {item.map((i, index) => (
          <div key={index}>{i.addr2}</div>
        ))}
      </div>
    </CONTENTS>
  );
};
