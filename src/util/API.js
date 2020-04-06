import axios from "axios";

export async function getMinorList(arg) {
  const { param } = arg;
  const response = await axios.get(
    "https://api.visitkorea.or.kr/openapi/service/rest/KorService/" +
      "areaCode" +
      "?ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&" +
      param
  );
  return response.data;
}

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
  /*
  const result = {
    response: {
      header: {
        resultCode: "0000",
        resultMsg: "OK"
      },
      body: {
        items: {
          item: [
            {
              addr1: "서울특별시 양천구 신정동",
              areacode: 1,
              cat1: "A02",
              cat2: "A0202",
              cat3: "A02020700",
              contentid: 1116925,
              contenttypeid: 12,
              createdtime: 20101026133528,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/62/2612062_image2_1.bmp",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/62/2612062_image2_1.bmp",
              mapx: "126.8701381400",
              mapy: 37.5066953728,
              mlevel: 6,
              modifiedtime: 20190719133127,
              readcount: 30919,
              sigungucode: 19,
              title: "갈산근린공원",
              zipcode: "08104"
            },
            {
              addr1: "서울특별시 종로구 율곡로23길 16",
              addr2: "(충신동)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0201",
              cat3: "A02010800",
              contentid: 294439,
              contenttypeid: 12,
              createdtime: 20071126155251,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/85/2031885_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/85/2031885_image3_1.jpg",
              mapx: 127.0066015446,
              mapy: 37.5753148419,
              mlevel: 6,
              modifiedtime: 20191016171458,
              readcount: 24182,
              sigungucode: 23,
              title: "감로암(서울)",
              zipcode: "03099"
            },
            {
              addr1: "서울특별시 강남구 역삼동",
              addr2: "(역삼동)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0203",
              cat3: "A02030600",
              contentid: 264570,
              contenttypeid: 12,
              createdtime: 20050623134701,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/08/1984608_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/08/1984608_image3_1.jpg",
              mapx: 127.0281573537,
              mapy: 37.4970465429,
              mlevel: 6,
              modifiedtime: 20200226162046,
              readcount: 31966,
              sigungucode: 1,
              title: "강남",
              zipcode: "06232"
            },
            {
              addr1: "서울특별시 강남구 영동대로 513",
              addr2: "(삼성동)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0202",
              cat3: "A02020200",
              contentid: 2456536,
              contenttypeid: 12,
              createdtime: 20161214141140,
              mapx: 127.0591318945,
              mapy: 37.5118092746,
              mlevel: 6,
              modifiedtime: 20191114170748,
              readcount: 4076,
              sigungucode: 1,
              title: "강남 마이스 관광특구",
              zipcode: "06164"
            },
            {
              addr1: "서울특별시 강남구 압구정로 161",
              areacode: 1,
              cat1: "A02",
              cat2: "A0203",
              cat3: "A02030400",
              contentid: 1949905,
              contenttypeid: 12,
              createdtime: 20140922180533,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/75/1258175_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/75/1258175_image3_1.jpg",
              mapx: 127.0264344408,
              mapy: 37.5269874797,
              mlevel: 6,
              modifiedtime: 20190614100437,
              readcount: 17817,
              sigungucode: 1,
              title: "강남 시티투어 - 트롤리버스",
              zipcode: "06001"
            },
            {
              addr1: "서울특별시 강동구 천호동",
              areacode: 1,
              cat1: "A02",
              cat2: "A0205",
              cat3: "A02050200",
              contentid: 127377,
              contenttypeid: 12,
              createdtime: 20040227000000,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/60/720460_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/60/720460_image3_1.jpg",
              mapx: "127.1207004140",
              mapy: 37.5426873535,
              mlevel: 6,
              modifiedtime: 20200120155514,
              readcount: 25725,
              sigungucode: 2,
              title: "강동예찬시비",
              zipcode: "05246"
            },
            {
              addr1: "서울특별시 광진구 구의강변로 45",
              addr2: "(구의동)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0202",
              cat3: "A02020400",
              contentid: 128961,
              contenttypeid: 12,
              createdtime: 20060508000000,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/13/1984613_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/13/1984613_image3_1.jpg",
              mapx: 127.0916116181,
              mapy: 37.5348266305,
              mlevel: 6,
              modifiedtime: 20191217165814,
              readcount: 32731,
              sigungucode: 6,
              title: "강변스파랜드",
              zipcode: "05049"
            },
            {
              addr1: "서울특별시 강서구 양천로27길 279-23",
              areacode: 1,
              cat1: "A01",
              cat2: "A0101",
              cat3: "A01010500",
              contentid: 809490,
              contenttypeid: 12,
              createdtime: 20090924000047,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/23/1805623_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/23/1805623_image3_1.jpg",
              mapx: 126.8128382765,
              mapy: "37.5888986840",
              mlevel: 6,
              modifiedtime: 20190626161513,
              readcount: 42094,
              sigungucode: 4,
              title: "강서습지생태공원",
              zipcode: "07518"
            },
            {
              addr1: "서울특별시 구로구 개봉동",
              addr2: "(개봉동)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0202",
              cat3: "A02020700",
              contentid: 2591792,
              contenttypeid: 12,
              createdtime: 20190313131125,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/88/2591788_image2_1.bmp",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/88/2591788_image2_1.bmp",
              mapx: 126.8634058253,
              mapy: 37.4922691511,
              mlevel: 6,
              modifiedtime: 20190313131125,
              readcount: 14,
              sigungucode: 7,
              title: "개봉 유수지",
              zipcode: "08329"
            },
            {
              addr1: "서울특별시 성북구 개운사길 73",
              addr2: "(안암동5가)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0201",
              cat3: "A02010800",
              contentid: 126501,
              contenttypeid: 12,
              createdtime: 20031230000000,
              mapx: 127.0280213987,
              mapy: 37.5899857439,
              mlevel: 6,
              modifiedtime: 20200115092605,
              readcount: 23958,
              sigungucode: 17,
              title: "개운사(서울)",
              zipcode: "02842"
            },
            {
              addr1: "서울특별시 성북구 보국문로 113-10",
              addr2: "(정릉동)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0201",
              cat3: "A02010800",
              contentid: 294505,
              contenttypeid: 12,
              createdtime: 20071126171151,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/88/2550988_image2_1.bmp",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/88/2550988_image2_1.bmp",
              mapx: 127.0045728379,
              mapy: 37.6145602435,
              mlevel: 6,
              modifiedtime: 20190828165158,
              readcount: 26479,
              sigungucode: 17,
              title: "경국사(서울)",
              zipcode: "02705"
            },
            {
              addr1: "서울특별시 종로구 사직로 161",
              addr2: "(세종로)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0201",
              cat3: "A02010100",
              contentid: 126508,
              contenttypeid: 12,
              createdtime: 20031230000000,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/40/1568040_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/40/1568040_image3_1.jpg",
              mapx: 126.9769930325,
              mapy: 37.5788222356,
              mlevel: 6,
              modifiedtime: 20200324151029,
              readcount: 113910,
              sigungucode: 23,
              title: "경복궁",
              zipcode: "03045"
            },
            {
              addr1: "서울특별시 중구 세종대로 125",
              addr2: "(태평로1가)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0201",
              cat3: "A02010700",
              contentid: 2373204,
              contenttypeid: 12,
              createdtime: 20160316161015,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/16/2373216_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/16/2373216_image2_1.jpg",
              mapx: 126.9765267272,
              mapy: 37.5675596477,
              mlevel: 6,
              modifiedtime: 20190527133042,
              readcount: 5041,
              sigungucode: 24,
              title: "경성 부민관 폭탄 의거지",
              zipcode: "04519"
            },
            {
              addr1: "서울특별시 종로구 인사동10길 23-9",
              addr2: "(경운동)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0201",
              cat3: "A02010700",
              contentid: 264470,
              contenttypeid: 12,
              createdtime: 20040224175300,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/20/399120_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/20/399120_image3_1.jpg",
              mapx: 126.9858034574,
              mapy: 37.5747089831,
              mlevel: 6,
              modifiedtime: 20200326160225,
              readcount: 27045,
              sigungucode: 23,
              title: "경운동민병옥가옥",
              zipcode: "03146"
            },
            {
              addr1: "서울특별시 마포구 와우산로35길 50-4",
              addr2: "(동교동)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0203",
              cat3: "A02030600",
              contentid: 2500229,
              contenttypeid: 12,
              createdtime: 20170718140034,
              mapx: 126.9283758723,
              mapy: 37.5565239562,
              mlevel: 6,
              modifiedtime: 20191112161105,
              readcount: 3104,
              sigungucode: 13,
              title: "경의선책거리",
              zipcode: "04052"
            },
            {
              addr1: "서울특별시 영등포구 국회대로 608",
              addr2: "(당산동3가)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0205",
              cat3: "A02050200",
              contentid: 1826438,
              contenttypeid: 12,
              createdtime: 20130709165447,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/98/2360898_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/98/2360898_image3_1.jpg",
              mapx: 126.9006431406,
              mapy: 37.5263408571,
              mlevel: 6,
              modifiedtime: 20191203140554,
              readcount: 3834,
              sigungucode: 20,
              title: "경찰혼",
              zipcode: "07258"
            },
            {
              addr1: "서울특별시 종로구 새문안로 55",
              addr2: "(신문로)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0201",
              cat3: "A02010100",
              contentid: 126484,
              contenttypeid: 12,
              createdtime: 20031027000000,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/31/1568231_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/31/1568231_image3_1.jpg",
              mapx: 126.9685079323,
              mapy: "37.5704425020",
              mlevel: 6,
              modifiedtime: 20200324155227,
              readcount: 96506,
              sigungucode: 23,
              title: "경희궁",
              zipcode: "03177"
            },
            {
              addr1: "서울특별시 종로구 새문안로 45",
              addr2: "(신문로2가)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0201",
              cat3: "A02010100",
              contentid: 1606042,
              contenttypeid: 12,
              createdtime: 20120418140309,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/35/1985535_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/35/1985535_image3_1.jpg",
              mapx: 126.9679607225,
              mapy: 37.5717617834,
              mlevel: 6,
              modifiedtime: 20200323134611,
              readcount: 22430,
              sigungucode: 24,
              title: "경희궁 숭정전",
              zipcode: "03177"
            },
            {
              addr1: "서울특별시 종로구 새문안로 55",
              addr2: "(신문로2가)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0201",
              cat3: "A02010300",
              contentid: 1604784,
              contenttypeid: 12,
              createdtime: 20120417141735,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/27/1568227_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/27/1568227_image3_1.jpg",
              mapx: 126.9710493661,
              mapy: "37.5704814320",
              mlevel: 6,
              modifiedtime: 20200323134417,
              readcount: 20088,
              sigungucode: 23,
              title: "경희궁 흥화문",
              zipcode: "03177"
            },
            {
              addr1: "서울특별시 종로구 새문안로 45",
              addr2: "(신문로2가)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0202",
              cat3: "A02020700",
              contentid: 1604824,
              contenttypeid: 12,
              createdtime: 20120417144220,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/51/1568251_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/51/1568251_image3_1.jpg",
              mapx: "126.9691050910",
              mapy: 37.5707591425,
              mlevel: 6,
              modifiedtime: 20191211141823,
              readcount: 20557,
              sigungucode: 23,
              title: "경희궁공원",
              zipcode: "03177"
            },
            {
              addr1: "서울특별시 양천구 중앙로 153",
              addr2: "(신정동)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0202",
              cat3: "A02020700",
              contentid: 2611568,
              contenttypeid: 12,
              createdtime: 20190717153936,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/60/2611560_image2_1.bmp",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/60/2611560_image2_1.bmp",
              mapx: 126.8602773343,
              mapy: 37.5278232976,
              mlevel: 6,
              modifiedtime: 20190723093314,
              readcount: 0,
              sigungucode: 19,
              title: "계남공원(유아숲체험장, 우렁바위)",
              zipcode: "08106"
            },
            {
              addr1: "서울특별시 광진구 능동로 216",
              addr2: "(능동) 서울어린이대공원 내",
              areacode: 1,
              cat1: "A02",
              cat2: "A0205",
              cat3: "A02050400",
              contentid: 1826457,
              contenttypeid: 12,
              createdtime: 20130709170447,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/36/1984636_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/36/1984636_image3_1.jpg",
              mapx: "127.0771625000",
              mapy: 37.5500801547,
              mlevel: 6,
              modifiedtime: 20191203140402,
              readcount: 4629,
              sigungucode: 6,
              title: "고당조만식선생동상",
              zipcode: "04991"
            },
            {
              addr1: "서울특별시 강동구 고덕동 396번지 일대",
              areacode: 1,
              cat1: "A01",
              cat2: "A0101",
              cat3: "A01010500",
              contentid: 814237,
              contenttypeid: 12,
              createdtime: 20091006141727,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/05/1894505_image2_1.jpg",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/05/1894505_image3_1.jpg",
              mapx: 127.1493110052,
              mapy: 37.5670267098,
              mlevel: 6,
              modifiedtime: 20191209165138,
              readcount: 26191,
              sigungucode: 2,
              title: "고덕동 생태경관 보전지역",
              zipcode: "134-080"
            },
            {
              addr1: "서울특별시 구로구 고척로45길 39",
              addr2: "(고척동)",
              areacode: 1,
              cat1: "A02",
              cat2: "A0202",
              cat3: "A02020700",
              contentid: 2591797,
              contenttypeid: 12,
              createdtime: 20190313132317,
              firstimage:
                "http://tong.visitkorea.or.kr/cms/resource/93/2591793_image2_1.bmp",
              firstimage2:
                "http://tong.visitkorea.or.kr/cms/resource/93/2591793_image2_1.bmp",
              mapx: 126.8532730144,
              mapy: "37.5065589770",
              mlevel: 6,
              modifiedtime: 20190313132317,
              readcount: 21,
              sigungucode: 7,
              title: "고척근린공원",
              zipcode: "08239"
            }
          ]
        },
        numOfRows: 24,
        pageNo: 1,
        totalCount: 549
      }
    }
  };

  return result;
  */
}
