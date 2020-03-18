import React from "react";
import axios from "axios";
import { CONTAINER, CONTENTS } from "../Style/GlobalStyles";
import useFetch from "../util/useFetch";
import Loading from "../Common/Loading";
//import { DataContext } from "../Common/Context";

async function fetchData() {
  const response = await axios.get(
    `https://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&contentTypeId=12&areaCode=1&sigunguCode=1&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=24&pageNo=1`
  );
  return response.data;
}

export default () => {
  // const { data, dispatch } = useContext(DataContext);
  // const btnAction = async () => {
  //   await dispatch({
  //     type: "SPOT",
  //     payload: { areaCode: 1, sigunguCode: 1, elementCount: 1 }
  //   });
  //   console.log(data);
  // };
  const [state, reFetch] = useFetch(fetchData, [], false);
  const { loading, data, error } = state;

  if (loading) return <Loading />;
  if (error) return <div>Error...</div>;
  if (data) {
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
          <button onClick={reFetch}>테스트</button>
        </CONTAINER>
        <div>
          {item.map((i, index) => (
            <div key={index}>{i.addr2}</div>
          ))}
        </div>
      </CONTENTS>
    );
  }
  return <Loading />;
};
