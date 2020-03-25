import axios from "axios";

export async function getSpotList() {
  const response = await axios.get(
    `https://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&contentTypeId=12&areaCode=1&sigunguCode=1&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=24&pageNo=1`
  );
  return response.data;
}
