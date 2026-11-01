/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FeaturedHistoricalLocation {
  id: number;              // 序號 (1 - 100)
  eventId: number;         // 對應歷史事件 ID (allHistoricalEvents.id)
  name: string;            // 關鍵地理名稱
  siteName: string;        // 遺址/建築/全稱
  lat: number;             // 緯度
  lng: number;             // 經度
  coords: string;          // 經緯度座標字串 (例如 "37.9715° N, 23.7267° E")
  googleMapsUrl: string;   // Google Maps 搜尋連結
}

/**
 * 完整歷史資料庫中精選的一百個【關鍵地理位置】：
 * - 歐洲 (30處)
 * - 亞非洲 (30處)
 * - 中國 (30處)
 * - 美澳洲 (10處)
 * 總計恰好 100 處文明史上具備最高代表性與地標意義之歷史地理座標。
 */
export const FEATURED_LOCATIONS_LIST: FeaturedHistoricalLocation[] = [
  {
    "id": 1,
    "eventId": 1,
    "name": "奧林匹亞",
    "siteName": "希臘奧林匹亞宙斯神殿與古代體育場",
    "lat": 37.6384,
    "lng": 21.63,
    "coords": "37.6384° N, 21.6300° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=37.6384,21.63"
  },
  {
    "id": 2,
    "eventId": 2,
    "name": "羅馬帕拉蒂尼山",
    "siteName": "義大利羅馬帕拉蒂尼山與古羅馬廣場",
    "lat": 41.8892,
    "lng": 12.4875,
    "coords": "41.8892° N, 12.4875° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=41.8892,12.4875"
  },
  {
    "id": 3,
    "eventId": 7,
    "name": "德爾斐",
    "siteName": "希臘德爾斐阿波羅神諭神廟遺址",
    "lat": 38.4824,
    "lng": 22.501,
    "coords": "38.4824° N, 22.5010° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=38.4824,22.501"
  },
  {
    "id": 4,
    "eventId": 11,
    "name": "雅典衛城",
    "siteName": "希臘雅典衛城與帕德嫩神廟",
    "lat": 37.9715,
    "lng": 23.7267,
    "coords": "37.9715° N, 23.7267° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=37.9715,23.7267"
  },
  {
    "id": 5,
    "eventId": 15,
    "name": "馬拉松平原",
    "siteName": "希臘馬拉松古戰場紀念塚",
    "lat": 38.1542,
    "lng": 23.9619,
    "coords": "38.1542° N, 23.9619° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=38.1542,23.9619"
  },
  {
    "id": 6,
    "eventId": 16,
    "name": "溫泉關",
    "siteName": "希臘溫泉關斯巴達國王列奧尼達紀念碑",
    "lat": 38.7967,
    "lng": 22.5364,
    "coords": "38.7967° N, 22.5364° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=38.7967,22.5364"
  },
  {
    "id": 7,
    "eventId": 24,
    "name": "柏拉圖學院",
    "siteName": "希臘雅典柏拉圖學園遺址",
    "lat": 37.9922,
    "lng": 23.7081,
    "coords": "37.9922° N, 23.7081° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=37.9922,23.7081"
  },
  {
    "id": 8,
    "eventId": 42,
    "name": "羅馬圓形競技場",
    "siteName": "義大利羅馬大競技場與君士坦丁凱旋門",
    "lat": 41.8902,
    "lng": 12.4922,
    "coords": "41.8902° N, 12.4922° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=41.8902,12.4922"
  },
  {
    "id": 9,
    "eventId": 44,
    "name": "龐貝古城",
    "siteName": "義大利龐貝古城國家考古公園",
    "lat": 40.7509,
    "lng": 14.4869,
    "coords": "40.7509° N, 14.4869° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=40.7509,14.4869"
  },
  {
    "id": 10,
    "eventId": 46,
    "name": "羅馬萬神殿",
    "siteName": "義大利羅馬萬神廟",
    "lat": 41.8986,
    "lng": 12.4769,
    "coords": "41.8986° N, 12.4769° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=41.8986,12.4769"
  },
  {
    "id": 11,
    "eventId": 55,
    "name": "聖索菲亞大教堂",
    "siteName": "土耳其伊斯坦堡聖索菲亞大清真寺",
    "lat": 41.0086,
    "lng": 28.9802,
    "coords": "41.0086° N, 28.9802° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=41.0086,28.9802"
  },
  {
    "id": 12,
    "eventId": 62,
    "name": "亞琛大教堂",
    "siteName": "德國亞琛查理曼大帝皇家大教堂",
    "lat": 50.7747,
    "lng": 6.0839,
    "coords": "50.7747° N, 6.0839° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=50.7747,6.0839"
  },
  {
    "id": 13,
    "eventId": 80,
    "name": "波隆那大學",
    "siteName": "義大利波隆那大學阿奇吉納西歐宮",
    "lat": 44.4966,
    "lng": 11.3533,
    "coords": "44.4966° N, 11.3533° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=44.4966,11.3533"
  },
  {
    "id": 14,
    "eventId": 88,
    "name": "巴黎聖母院",
    "siteName": "法國巴黎聖母院大教堂",
    "lat": 48.853,
    "lng": 2.3499,
    "coords": "48.8530° N, 2.3499° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=48.853,2.3499"
  },
  {
    "id": 15,
    "eventId": 95,
    "name": "倫敦西敏寺",
    "siteName": "英國倫敦西敏聖伯多祿高校教堂",
    "lat": 51.4994,
    "lng": -0.1273,
    "coords": "51.4994° N, 0.1273° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=51.4994,-0.1273"
  },
  {
    "id": 16,
    "eventId": 108,
    "name": "佛羅倫斯聖母百花大教堂",
    "siteName": "義大利佛羅倫斯布魯內萊斯基穹頂",
    "lat": 43.7731,
    "lng": 11.256,
    "coords": "43.7731° N, 11.2560° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=43.7731,11.256"
  },
  {
    "id": 17,
    "eventId": 120,
    "name": "梵蒂岡聖伯多祿大殿",
    "siteName": "梵蒂岡城國聖伯多祿宗座聖殿",
    "lat": 41.9022,
    "lng": 12.4539,
    "coords": "41.9022° N, 12.4539° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=41.9022,12.4539"
  },
  {
    "id": 18,
    "eventId": 125,
    "name": "維滕貝格諸聖堂",
    "siteName": "德國維滕貝格城堡教堂 (馬丁路德張貼論綱地)",
    "lat": 51.8665,
    "lng": 12.6378,
    "coords": "51.8665° N, 12.6378° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=51.8665,12.6378"
  },
  {
    "id": 19,
    "eventId": 142,
    "name": "格林威治皇家天文台",
    "siteName": "英國倫敦格林威治本初子午線天文台",
    "lat": 51.4769,
    "lng": 0.0005,
    "coords": "51.4769° N, 0.0005° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=51.4769,0.0005"
  },
  {
    "id": 20,
    "eventId": 150,
    "name": "凡爾賽宮",
    "siteName": "法國巴黎凡爾賽宮鏡廳與皇家花園",
    "lat": 48.8049,
    "lng": 2.1204,
    "coords": "48.8049° N, 2.1204° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=48.8049,2.1204"
  },
  {
    "id": 21,
    "eventId": 165,
    "name": "聖彼得堡冬宮",
    "siteName": "俄羅斯聖彼得堡埃爾米塔日博物館冬宮",
    "lat": 59.9398,
    "lng": 30.3146,
    "coords": "59.9398° N, 30.3146° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=59.9398,30.3146"
  },
  {
    "id": 22,
    "eventId": 175,
    "name": "巴士底廣場",
    "siteName": "法國巴黎巴士底獄遺址紀念柱",
    "lat": 48.8531,
    "lng": 2.3698,
    "coords": "48.8531° N, 2.3698° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=48.8531,2.3698"
  },
  {
    "id": 23,
    "eventId": 188,
    "name": "滑鐵盧古戰場",
    "siteName": "比利時滑鐵盧獅子之丘紀念碑",
    "lat": 50.6806,
    "lng": 4.4125,
    "coords": "50.6806° N, 4.4125° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=50.6806,4.4125"
  },
  {
    "id": 24,
    "eventId": 200,
    "name": "倫敦水晶宮遺址",
    "siteName": "英國倫敦水晶宮公園舊址",
    "lat": 51.4222,
    "lng": -0.0711,
    "coords": "51.4222° N, 0.0711° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=51.4222,-0.0711"
  },
  {
    "id": 25,
    "eventId": 230,
    "name": "凡爾登要塞紀念館",
    "siteName": "法國凡爾登戰役杜奧蒙骨灰堂紀念館",
    "lat": 49.2081,
    "lng": 5.4264,
    "coords": "49.2081° N, 5.4264° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=49.2081,5.4264"
  },
  {
    "id": 26,
    "eventId": 250,
    "name": "日內瓦萬國宮",
    "siteName": "瑞士日內瓦聯合國歐洲總部萬國宮",
    "lat": 46.2266,
    "lng": 6.1402,
    "coords": "46.2266° N, 6.1402° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=46.2266,6.1402"
  },
  {
    "id": 27,
    "eventId": 280,
    "name": "諾曼第奧馬哈海灘",
    "siteName": "法國諾曼第登陸奧馬哈海灘美軍紀念公墓",
    "lat": 49.3703,
    "lng": -0.8753,
    "coords": "49.3703° N, 0.8753° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=49.3703,-0.8753"
  },
  {
    "id": 28,
    "eventId": 300,
    "name": "柏林布蘭登堡門",
    "siteName": "德國柏林布蘭登堡門與巴黎廣場",
    "lat": 52.5163,
    "lng": 13.3777,
    "coords": "52.5163° N, 13.3777° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=52.5163,13.3777"
  },
  {
    "id": 29,
    "eventId": 340,
    "name": "海牙和平宮",
    "siteName": "荷蘭海牙國際法院和平宮",
    "lat": 52.0866,
    "lng": 4.2956,
    "coords": "52.0866° N, 4.2956° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=52.0866,4.2956"
  },
  {
    "id": 30,
    "eventId": 400,
    "name": "布魯塞爾歐盟總部",
    "siteName": "比利時布魯塞爾貝爾萊蒙大廈 (歐盟委員會總部)",
    "lat": 50.8437,
    "lng": 4.3826,
    "coords": "50.8437° N, 4.3826° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=50.8437,4.3826"
  },
  {
    "id": 31,
    "eventId": 501,
    "name": "吉薩大金字塔",
    "siteName": "埃及吉薩胡夫金字塔與獅身人面像",
    "lat": 29.9792,
    "lng": 31.1342,
    "coords": "29.9792° N, 31.1342° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=29.9792,31.1342"
  },
  {
    "id": 32,
    "eventId": 505,
    "name": "烏爾大塔廟",
    "siteName": "伊拉克納西里耶蘇美文明烏爾古城月神塔廟",
    "lat": 30.9628,
    "lng": 46.1031,
    "coords": "30.9628° N, 46.1031° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=30.9628,46.1031"
  },
  {
    "id": 33,
    "eventId": 512,
    "name": "卡納克神廟",
    "siteName": "埃及盧克索底比斯阿蒙神廟大柱廳",
    "lat": 25.7188,
    "lng": 32.6573,
    "coords": "25.7188° N, 32.6573° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=25.7188,32.6573"
  },
  {
    "id": 34,
    "eventId": 520,
    "name": "阿布辛貝神殿",
    "siteName": "埃及亞斯文拉美西斯二世阿布辛貝神廟",
    "lat": 22.3372,
    "lng": 31.6258,
    "coords": "22.3372° N, 31.6258° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=22.3372,31.6258"
  },
  {
    "id": 35,
    "eventId": 530,
    "name": "巴比倫古城",
    "siteName": "伊拉克希拉新巴比倫古城遺址與伊什塔爾門",
    "lat": 32.5422,
    "lng": 44.4211,
    "coords": "32.5422° N, 44.4211° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=32.5422,44.4211"
  },
  {
    "id": 36,
    "eventId": 538,
    "name": "波斯波利斯",
    "siteName": "伊朗設拉子阿契美尼德帝國波斯波利斯宮殿",
    "lat": 29.9352,
    "lng": 52.8914,
    "coords": "29.9352° N, 52.8914° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=29.9352,52.8914"
  },
  {
    "id": 37,
    "eventId": 545,
    "name": "菩提伽耶摩訶菩提寺",
    "siteName": "印度比哈爾邦釋迦牟尼成道處正覺大塔",
    "lat": 24.696,
    "lng": 84.9913,
    "coords": "24.6960° N, 84.9913° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=24.696,84.9913"
  },
  {
    "id": 38,
    "eventId": 555,
    "name": "亞歷山大燈塔遺址",
    "siteName": "埃及亞歷山大港蓋特威城堡 (古代法羅斯燈塔舊址)",
    "lat": 31.214,
    "lng": 29.8856,
    "coords": "31.2140° N, 29.8856° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=31.214,29.8856"
  },
  {
    "id": 39,
    "eventId": 562,
    "name": "鹿野苑答枚克佛塔",
    "siteName": "印度瓦拉納西鹿野苑佛陀初轉法輪聖地",
    "lat": 25.3811,
    "lng": 83.0247,
    "coords": "25.3811° N, 83.0247° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=25.3811,83.0247"
  },
  {
    "id": 40,
    "eventId": 575,
    "name": "耶路撒冷哭牆",
    "siteName": "以色列耶路撒冷舊城聖殿山西牆",
    "lat": 31.7767,
    "lng": 35.2345,
    "coords": "31.7767° N, 35.2345° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=31.7767,35.2345"
  },
  {
    "id": 41,
    "eventId": 590,
    "name": "迦太基考古遺址",
    "siteName": "突尼西亞突尼斯迦太基布爾薩山古城遺址",
    "lat": 36.8529,
    "lng": 10.3233,
    "coords": "36.8529° N, 10.3233° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=36.8529,10.3233"
  },
  {
    "id": 42,
    "eventId": 600,
    "name": "佩特拉古城",
    "siteName": "約旦馬安省納巴泰佩特拉卡茲尼神殿",
    "lat": 30.3285,
    "lng": 35.4444,
    "coords": "30.3285° N, 35.4444° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=30.3285,35.4444"
  },
  {
    "id": 43,
    "eventId": 620,
    "name": "阿旃陀石窟",
    "siteName": "印度馬哈拉施特拉邦阿旃陀佛教石窟寺院",
    "lat": 20.5519,
    "lng": 75.7033,
    "coords": "20.5519° N, 75.7033° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=20.5519,75.7033"
  },
  {
    "id": 44,
    "eventId": 632,
    "name": "麥地那先知清真寺",
    "siteName": "沙烏地阿拉伯麥地那穆罕默德聖寺",
    "lat": 24.4672,
    "lng": 39.6111,
    "coords": "24.4672° N, 39.6111° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=24.4672,39.6111"
  },
  {
    "id": 45,
    "eventId": 640,
    "name": "麥加禁寺克爾白",
    "siteName": "沙烏地阿拉伯麥加禁寺聖卡巴天房",
    "lat": 21.4225,
    "lng": 39.8262,
    "coords": "21.4225° N, 39.8262° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=21.4225,39.8262"
  },
  {
    "id": 46,
    "eventId": 650,
    "name": "大馬士革奧瑪雅清真寺",
    "siteName": "敘利亞大馬士革倭馬亞大清真寺",
    "lat": 33.5119,
    "lng": 36.3066,
    "coords": "33.5119° N, 36.3066° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=33.5119,36.3066"
  },
  {
    "id": 47,
    "eventId": 680,
    "name": "巴格達智慧之家遺址",
    "siteName": "伊拉克巴格達阿拔斯王朝底格里斯河畔文化中心",
    "lat": 33.3406,
    "lng": 44.4009,
    "coords": "33.3406° N, 44.4009° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=33.3406,44.4009"
  },
  {
    "id": 48,
    "eventId": 710,
    "name": "撒馬爾罕雷吉斯坦廣場",
    "siteName": "烏茲別克撒馬爾罕帖木兒帝國列吉斯坦經學院建築群",
    "lat": 39.6548,
    "lng": 66.9757,
    "coords": "39.6548° N, 66.9757° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=39.6548,66.9757"
  },
  {
    "id": 49,
    "eventId": 725,
    "name": "婆羅浮屠",
    "siteName": "印尼中爪哇日惹婆羅浮屠大乘佛塔",
    "lat": -7.6079,
    "lng": 110.2038,
    "coords": "7.6079° S, 110.2038° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=-7.6079,110.2038"
  },
  {
    "id": 50,
    "eventId": 750,
    "name": "吳哥窟",
    "siteName": "柬埔寨暹粒高棉帝國吳哥寺",
    "lat": 13.4125,
    "lng": 103.867,
    "coords": "13.4125° N, 103.8670° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=13.4125,103.867"
  },
  {
    "id": 51,
    "eventId": 780,
    "name": "廷巴克圖桑科雷大學",
    "siteName": "馬利廷巴克圖桑科雷清真寺與古代手稿中心",
    "lat": 16.7758,
    "lng": -3.0075,
    "coords": "16.7758° N, 3.0075° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=16.7758,-3.0075"
  },
  {
    "id": 52,
    "eventId": 800,
    "name": "伊斯法罕伊瑪目廣場",
    "siteName": "伊朗伊斯法罕伊瑪目清真寺與國王廣場",
    "lat": 32.6572,
    "lng": 51.6776,
    "coords": "32.6572° N, 51.6776° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=32.6572,51.6776"
  },
  {
    "id": 53,
    "eventId": 820,
    "name": "德里紅堡",
    "siteName": "印度舊德里蒙兀兒帝國拉爾基拉紅堡",
    "lat": 28.6562,
    "lng": 77.241,
    "coords": "28.6562° N, 77.2410° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=28.6562,77.241"
  },
  {
    "id": 54,
    "eventId": 830,
    "name": "泰姬瑪哈陵",
    "siteName": "印度北方邦阿格拉亞穆納河畔泰姬陵",
    "lat": 27.1751,
    "lng": 78.0421,
    "coords": "27.1751° N, 78.0421° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=27.1751,78.0421"
  },
  {
    "id": 55,
    "eventId": 860,
    "name": "拉利貝拉岩石教堂",
    "siteName": "衣索比亞阿姆哈拉州聖喬治鑿石教堂",
    "lat": 12.0319,
    "lng": 39.0411,
    "coords": "12.0319° N, 39.0411° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=12.0319,39.0411"
  },
  {
    "id": 56,
    "eventId": 880,
    "name": "蘇伊士運河入口",
    "siteName": "埃及塞得港蘇伊士運河北端地中海入口",
    "lat": 31.2653,
    "lng": 32.3019,
    "coords": "31.2653° N, 32.3019° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=31.2653,32.3019"
  },
  {
    "id": 57,
    "eventId": 900,
    "name": "京都鹿苑寺金閣",
    "siteName": "日本京都府京都市北區金閣寺",
    "lat": 35.0394,
    "lng": 135.7292,
    "coords": "35.0394° N, 135.7292° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=35.0394,135.7292"
  },
  {
    "id": 58,
    "eventId": 930,
    "name": "廣島和平紀念公園",
    "siteName": "日本廣島縣廣島市原爆圓頂館紀念公園",
    "lat": 34.3955,
    "lng": 132.4536,
    "coords": "34.3955° N, 132.4536° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=34.3955,132.4536"
  },
  {
    "id": 59,
    "eventId": 960,
    "name": "萬隆獨立大廈",
    "siteName": "印尼西爪哇省萬隆亞非會議獨立大樓",
    "lat": -6.9213,
    "lng": 107.6083,
    "coords": "6.9213° S, 107.6083° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=-6.9213,107.6083"
  },
  {
    "id": 60,
    "eventId": 980,
    "name": "哈里發塔",
    "siteName": "阿拉伯聯合大公國杜拜哈里發塔",
    "lat": 25.1972,
    "lng": 55.2744,
    "coords": "25.1972° N, 55.2744° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=25.1972,55.2744"
  },
  {
    "id": 61,
    "eventId": 1001,
    "name": "安陽殷墟",
    "siteName": "中國河南省安陽市殷墟商代宮殿宗廟遺址",
    "lat": 36.1264,
    "lng": 114.3167,
    "coords": "36.1264° N, 114.3167° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=36.1264,114.3167"
  },
  {
    "id": 62,
    "eventId": 1003,
    "name": "寶雞周原遺址",
    "siteName": "中國陝西省寶雞市岐山周原青銅器遺址",
    "lat": 34.5097,
    "lng": 107.9064,
    "coords": "34.5097° N, 107.9064° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=34.5097,107.9064"
  },
  {
    "id": 63,
    "eventId": 1005,
    "name": "曲阜孔廟",
    "siteName": "中國山東省曲阜市孔廟大成殿杏壇",
    "lat": 35.596,
    "lng": 116.9839,
    "coords": "35.5960° N, 116.9839° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=35.596,116.9839"
  },
  {
    "id": 64,
    "eventId": 1010,
    "name": "都江堰水利工程",
    "siteName": "中國四川省成都市都江堰魚嘴與寶瓶口",
    "lat": 31.0028,
    "lng": 103.6167,
    "coords": "31.0028° N, 103.6167° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=31.0028,103.6167"
  },
  {
    "id": 65,
    "eventId": 1015,
    "name": "秦始皇兵馬俑",
    "siteName": "中國陝西省西安市臨潼區秦始皇陵博物院",
    "lat": 34.3841,
    "lng": 109.2785,
    "coords": "34.3841° N, 109.2785° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=34.3841,109.2785"
  },
  {
    "id": 66,
    "eventId": 1020,
    "name": "漢長安城未央宮",
    "siteName": "中國陝西省西安市未央區漢長安城大朝正殿",
    "lat": 34.2967,
    "lng": 108.8711,
    "coords": "34.2967° N, 108.8711° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=34.2967,108.8711"
  },
  {
    "id": 67,
    "eventId": 1028,
    "name": "洛陽白馬寺",
    "siteName": "中國河南省洛陽市白馬寺古剎",
    "lat": 34.7214,
    "lng": 112.6025,
    "coords": "34.7214° N, 112.6025° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=34.7214,112.6025"
  },
  {
    "id": 68,
    "eventId": 1035,
    "name": "敦煌莫高窟",
    "siteName": "中國甘肅省敦煌市鳴沙山莫高窟石窟群",
    "lat": 40.0428,
    "lng": 94.8086,
    "coords": "40.0428° N, 94.8086° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=40.0428,94.8086"
  },
  {
    "id": 69,
    "eventId": 1045,
    "name": "洛陽龍門石窟",
    "siteName": "中國河南省洛陽市龍門伊闕奉先寺盧舍那大佛",
    "lat": 34.5556,
    "lng": 112.4697,
    "coords": "34.5556° N, 112.4697° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=34.5556,112.4697"
  },
  {
    "id": 70,
    "eventId": 1052,
    "name": "大同雲岡石窟",
    "siteName": "中國山西省大同市雲岡北魏石窟群",
    "lat": 40.1097,
    "lng": 113.1311,
    "coords": "40.1097° N, 113.1311° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=40.1097,113.1311"
  },
  {
    "id": 71,
    "eventId": 1060,
    "name": "趙州橋",
    "siteName": "中國河北省石家莊市趙縣安濟橋 (趙州橋)",
    "lat": 37.7478,
    "lng": 114.7644,
    "coords": "37.7478° N, 114.7644° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=37.7478,114.7644"
  },
  {
    "id": 72,
    "eventId": 1070,
    "name": "西安大雁塔",
    "siteName": "中國陝西省西安市雁塔區大慈恩寺大雁塔",
    "lat": 34.2189,
    "lng": 108.9642,
    "coords": "34.2189° N, 108.9642° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=34.2189,108.9642"
  },
  {
    "id": 73,
    "eventId": 1085,
    "name": "唐長安大明宮",
    "siteName": "中國陝西省西安市唐大明宮含元殿遺址公園",
    "lat": 34.29,
    "lng": 108.9567,
    "coords": "34.2900° N, 108.9567° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=34.29,108.9567"
  },
  {
    "id": 74,
    "eventId": 1110,
    "name": "開封宋都御街",
    "siteName": "中國河南省開封市清明上河園與龍亭公園",
    "lat": 34.8092,
    "lng": 114.3389,
    "coords": "34.8092° N, 114.3389° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=34.8092,114.3389"
  },
  {
    "id": 75,
    "eventId": 1135,
    "name": "杭州西湖孤山",
    "siteName": "中國浙江省杭州市西湖風景名勝區孤山文瀾閣",
    "lat": 30.2458,
    "lng": 120.1417,
    "coords": "30.2458° N, 120.1417° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=30.2458,120.1417"
  },
  {
    "id": 76,
    "eventId": 1160,
    "name": "元上都遺址",
    "siteName": "中國內蒙古自治區錫林郭勒盟正藍旗元上都遺址",
    "lat": 42.3606,
    "lng": 116.1808,
    "coords": "42.3606° N, 116.1808° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=42.3606,116.1808"
  },
  {
    "id": 77,
    "eventId": 1180,
    "name": "南京明孝陵",
    "siteName": "中國江蘇省南京市玄武區紫金山明孝陵",
    "lat": 32.0547,
    "lng": 118.8475,
    "coords": "32.0547° N, 118.8475° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=32.0547,118.8475"
  },
  {
    "id": 78,
    "eventId": 1200,
    "name": "北京故宮紫禁城",
    "siteName": "中國北京市東城區故宮博物院太和殿",
    "lat": 39.9163,
    "lng": 116.3972,
    "coords": "39.9163° N, 116.3972° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=39.9163,116.3972"
  },
  {
    "id": 79,
    "eventId": 1215,
    "name": "北京天壇祈年殿",
    "siteName": "中國北京市東城區天壇公園祈年殿",
    "lat": 39.8822,
    "lng": 116.4069,
    "coords": "39.8822° N, 116.4069° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=39.8822,116.4069"
  },
  {
    "id": 80,
    "eventId": 1235,
    "name": "蘇州拙政園",
    "siteName": "中國江蘇省蘇州市姑蘇區拙政園古典園林",
    "lat": 31.3267,
    "lng": 120.6278,
    "coords": "31.3267° N, 120.6278° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=31.3267,120.6278"
  },
  {
    "id": 81,
    "eventId": 1260,
    "name": "拉薩布達拉宮",
    "siteName": "中國西藏自治區拉薩市城關區紅山布達拉宮",
    "lat": 29.6555,
    "lng": 91.1189,
    "coords": "29.6555° N, 91.1189° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=29.6555,91.1189"
  },
  {
    "id": 82,
    "eventId": 1290,
    "name": "北京頤和園",
    "siteName": "中國北京市海淀區頤和園萬壽山佛香閣",
    "lat": 39.9998,
    "lng": 116.2755,
    "coords": "39.9998° N, 116.2755° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=39.9998,116.2755"
  },
  {
    "id": 83,
    "eventId": 1310,
    "name": "東莞虎門銷煙池",
    "siteName": "中國廣東省東莞市虎門鎮林則徐銷煙池舊址",
    "lat": 22.8258,
    "lng": 113.6664,
    "coords": "22.8258° N, 113.6664° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=22.8258,113.6664"
  },
  {
    "id": 84,
    "eventId": 1335,
    "name": "南京總統府",
    "siteName": "中國江蘇省南京市玄武區長江路總統府景區",
    "lat": 32.0444,
    "lng": 118.7947,
    "coords": "32.0444° N, 118.7947° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=32.0444,118.7947"
  },
  {
    "id": 85,
    "eventId": 1360,
    "name": "武昌辛亥首義紅樓",
    "siteName": "中國湖北省武漢市武昌區辛亥革命武昌起義紀念館",
    "lat": 30.5408,
    "lng": 114.3039,
    "coords": "30.5408° N, 114.3039° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=30.5408,114.3039"
  },
  {
    "id": 86,
    "eventId": 1385,
    "name": "北京盧溝橋與宛平城",
    "siteName": "中國北京市豐台區宛平城與盧溝橋抗日事變遺址",
    "lat": 39.8519,
    "lng": 116.2158,
    "coords": "39.8519° N, 116.2158° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=39.8519,116.2158"
  },
  {
    "id": 87,
    "eventId": 1410,
    "name": "延安寶塔山",
    "siteName": "中國陝西省延安市寶塔區寶塔山革命舊址",
    "lat": 36.5867,
    "lng": 109.4939,
    "coords": "36.5867° N, 109.4939° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=36.5867,109.4939"
  },
  {
    "id": 88,
    "eventId": 1435,
    "name": "北京天安門城樓",
    "siteName": "中國北京市東城區天安門廣場開國大典城樓",
    "lat": 39.9055,
    "lng": 116.3976,
    "coords": "39.9055° N, 116.3976° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=39.9055,116.3976"
  },
  {
    "id": 89,
    "eventId": 1460,
    "name": "台北圓山大飯店與遺址",
    "siteName": "台灣台北市中山區圓山大飯店與基隆河地標",
    "lat": 25.0789,
    "lng": 121.5264,
    "coords": "25.0789° N, 121.5264° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=25.0789,121.5264"
  },
  {
    "id": 90,
    "eventId": 1485,
    "name": "深圳國貿大廈",
    "siteName": "中國廣東省深圳市羅湖區深圳國際貿易中心大廈",
    "lat": 22.5386,
    "lng": 114.1169,
    "coords": "22.5386° N, 114.1169° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=22.5386,114.1169"
  },
  {
    "id": 91,
    "eventId": 1501,
    "name": "特奧蒂瓦坎太陽金字塔",
    "siteName": "墨西哥特奧蒂瓦坎古城亡者之路與太陽金字塔",
    "lat": 19.6925,
    "lng": -98.8438,
    "coords": "19.6925° N, 98.8438° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=19.6925,-98.8438"
  },
  {
    "id": 92,
    "eventId": 1508,
    "name": "庫斯科薩克塞華曼",
    "siteName": "秘魯庫斯科印加帝國薩克塞華曼石牆與太陽神殿",
    "lat": -13.5168,
    "lng": -71.9788,
    "coords": "13.5168° S, 71.9788° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=-13.5168,-71.9788"
  },
  {
    "id": 93,
    "eventId": 1515,
    "name": "費城獨立紀念館",
    "siteName": "美國賓夕法尼亞州費城獨立廳與自由鐘",
    "lat": 39.9489,
    "lng": -75.15,
    "coords": "39.9489° N, 75.1500° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=39.9489,-75.15"
  },
  {
    "id": 94,
    "eventId": 1525,
    "name": "華盛頓美國國會大廈",
    "siteName": "美國華盛頓特區國會山莊國會大廈",
    "lat": 38.8899,
    "lng": -77.009,
    "coords": "38.8899° N, 77.0090° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=38.8899,-77.009"
  },
  {
    "id": 95,
    "eventId": 1535,
    "name": "紐約自由女神像",
    "siteName": "美國紐約港自由島自由女神國家紀念碑",
    "lat": 40.6892,
    "lng": -74.0445,
    "coords": "40.6892° N, 74.0445° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=40.6892,-74.0445"
  },
  {
    "id": 96,
    "eventId": 1545,
    "name": "巴拿馬運河美拉弗洛雷斯水閘",
    "siteName": "巴拿馬巴拿馬運河太平洋端米拉弗洛雷斯船閘",
    "lat": 8.9967,
    "lng": -79.5919,
    "coords": "8.9967° N, 79.5919° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=8.9967,-79.5919"
  },
  {
    "id": 97,
    "eventId": 1560,
    "name": "舊金山金門大橋",
    "siteName": "美國加州舊金山灣金門海峽大橋",
    "lat": 37.8199,
    "lng": -122.4783,
    "coords": "37.8199° N, 122.4783° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=37.8199,-122.4783"
  },
  {
    "id": 98,
    "eventId": 1575,
    "name": "雪梨歌劇院",
    "siteName": "澳洲新南威爾斯州雪梨便利朗角雪梨歌劇院",
    "lat": -33.8568,
    "lng": 151.2153,
    "coords": "33.8568° S, 151.2153° E",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=-33.8568,151.2153"
  },
  {
    "id": 99,
    "eventId": 1585,
    "name": "紐約聯合國總部",
    "siteName": "美國紐約曼哈頓東河畔聯合國總部大廈",
    "lat": 40.7499,
    "lng": -73.9674,
    "coords": "40.7499° N, 73.9674° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=40.7499,-73.9674"
  },
  {
    "id": 100,
    "eventId": 1595,
    "name": "甘迺迪太空中心",
    "siteName": "美國佛羅里達州卡納維拉爾角甘迺迪航天發射中心",
    "lat": 28.5729,
    "lng": -80.649,
    "coords": "28.5729° N, 80.6490° W",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=28.5729,-80.649"
  }
];

export const FEATURED_LOCATIONS_MAP = new Map<number, FeaturedHistoricalLocation>(
  FEATURED_LOCATIONS_LIST.map(loc => [loc.eventId, loc])
);

export function getFeaturedLocation(eventId: number): FeaturedHistoricalLocation | undefined {
  return FEATURED_LOCATIONS_MAP.get(eventId);
}

export function hasFeaturedLocation(eventId: number): boolean {
  return FEATURED_LOCATIONS_MAP.has(eventId);
}
