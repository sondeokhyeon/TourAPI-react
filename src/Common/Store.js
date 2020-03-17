import { useReducer } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return state;
    case "SUCESSS":
      return state;
    case "ERROR":
      return state;
    default:
      throw new Error("unhandled actions");
  }
};
// state = axiosHandler(
//   "get",
//   "areaBasedList",
//   `contentTypeId=12&areaCode=${payload.areaCode}&sigunguCode=${payload.sigunguCode}&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=24&pageNo=${payload.elementCount}`
// );

const initState = {
  loading: false,
  data: "",
  error: ""
};

const axiosHandler = async (method, svurl, config) => {
  const [state, dispatch] = useReducer(reducer, initState);

  try {
    dispatch({ type: "LOADING" });
    const result = await axios.get(
      //`https://api.visitkorea.or.kr/openapi/service/rest/KorService/${svurl}?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&${config}`
      `https://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?
      ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D
      &contentTypeId=12
      &areaCode=1
      &sigunguCode=1
      &cat1=
      &cat2=
      &cat3=
      &listYN=Y
      &MobileOS=ETC
      &MobileApp=AppTest
      &arrange=A
      &numOfRows=24
      &pageNo=1`
    );
    dispatch({ type: "SUCESSS", data: result.data });
  } catch (err) {
    dispatch({ type: "ERROR", error: true });
    console.log(err);
  }

  let result = "";
  await axios[method](
    `https://api.visitkorea.or.kr/openapi/service/rest/KorService/${svurl}?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&${config}`
  )
    .then(res => {
      //   if (!result.response.header.resultCode !== "0000") {
      //     alert("error발생");
      //     return false;
      //   }
      result = res;
    })
    .catch(err => {
      console.log("err : ", err);
      return err;
    });
  return result;
};
