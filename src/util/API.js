import axios from "axios";

export async function getMinorList(arg) {
  const { param } = arg;
  const response = await axios.get(
    `https://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&${param}`
  );
  return response.data;
}

export async function getMajorList(arg) {
  const { major, param } = arg;
  const url = `https://api.visitkorea.or.kr/openapi/service/rest/KorService/${major}?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&${param}`;
  const response = await axios.get(url);
  return response.data;
}

export async function getDetailInfo(arg) {
  const { contentId, itemNo } = arg;
  const url = `contentTypeId=${itemNo}&contentId=${contentId}&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y`;
  const id_info = `https://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&${url}`;
  const item_info = `https://api.visitkorea.or.kr/openapi/service/rest/KorService/detailIntro?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&${url}`;
  const info = await axios.get(id_info);
  const intro = await axios.get(item_info);
  return {
    info: info.data.response.body.items.item,
    intro: intro.data.response.body.items.item,
  };
}
