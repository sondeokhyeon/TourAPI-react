import axios from "axios";

export async function getSpotList(arg) {
  const { param } = arg;
  const response = await axios.get(
    "https://api.visitkorea.or.kr/openapi/service/rest/KorService/" +
      "areaBasedList" +
      "?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&" +
      param
  );
  return response.data;
  // console.log(param.split("pageNo="));
  // const result = {
  //   response: {
  //     header: {
  //       responseTime: "2020-03-26T16:02:46.761+09:00",
  //       resultCode: 22,
  //       resultMsg: "LIMITED NUMBER OF SERVICE REQUESTS EXCEEDS ERROR."
  //     },
  //     body: {
  //       items: {
  //         item: [
  //           { addr2: 1 },
  //           { addr2: 2 },
  //           { addr2: 3 },
  //           { addr2: 4 },
  //           { addr2: 5 },
  //           { addr2: 6 },
  //           { addr2: 7 },
  //           { addr2: 8 },
  //           { addr2: 9 },
  //           { addr2: 10 },
  //           { addr2: 11 },
  //           { addr2: 12 },
  //           { addr2: 13 },
  //           { addr2: 14 },
  //           { addr2: 15 },
  //           { addr2: 16 }
  //         ]
  //       }
  //     }
  //   }
  // };

  // return result;
}
