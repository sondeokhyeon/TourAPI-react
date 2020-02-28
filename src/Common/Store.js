import axios from "axios";

export default async (data, { type, payload }) => {
  switch (type) {
    case "spot":
      return await axiosHandler(
        "get",
        "areaBasedList",
        `contentTypeId=12&areaCode=${payload.areaCode}&sigunguCode=${payload.sigunguCode}&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=24&pageNo=${payload.elementCount}`
      );

    default:
      return;
  }
};

const axiosHandler = async (method, svurl, config) => {
  axios[method](
    `https://api.visitkorea.or.kr/openapi/service/rest/KorService/${svurl}?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&${config}`
  )
    .then(result => {
      console.log("resultCode : ", result.response.header.resultCode);
      //   if (!result.response.header.resultCode !== "0000") {
      //     alert("error발생");
      //     return false;
      //   }
      return result;
    })
    .catch(err => {
      console.log(err);
    });
};
