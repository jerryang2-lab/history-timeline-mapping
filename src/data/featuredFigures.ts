/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FeaturedHistoricalFigure {
  id: number;              // 序號 (1 - 100)
  eventId: number;         // 對應歷史事件 ID (allHistoricalEvents.id)
  figureName: string;      // 關鍵人物姓名
  wikiTitle: string;       // 維基百科條目名
  wikiUrl: string;         // 中文維基百科連結
  title: string;           // 歷史定位稱謂
  region: string;          // 所屬大區
}

/**
 * 完整歷史資料庫中精選的一百位【關鍵人物】：
 * - 歐洲 (30位)
 * - 亞非洲 (30位)
 * - 中國 (30位)
 * - 美澳洲 (10位)
 * 總計恰好 100 位文明史上具備最高代表性與思想影響力之歷史人物。
 */
export const FEATURED_FIGURES_LIST: FeaturedHistoricalFigure[] = [
  {
    "id": 1,
    "eventId": 3,
    "figureName": "荷馬",
    "wikiTitle": "荷马",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%8D%B7%E9%A9%AC",
    "title": "古希臘詩聖與史詩作者",
    "region": "歐洲"
  },
  {
    "id": 2,
    "eventId": 8,
    "figureName": "泰勒斯",
    "wikiTitle": "泰勒斯",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B3%B0%E5%8B%92%E6%96%AF",
    "title": "西方科學與自然哲學之父",
    "region": "歐洲"
  },
  {
    "id": 3,
    "eventId": 10,
    "figureName": "梭倫",
    "wikiTitle": "梭伦",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%A2%AD%E4%BC%A6",
    "title": "古希臘七賢與雅典憲政奠基者",
    "region": "歐洲"
  },
  {
    "id": 4,
    "eventId": 11,
    "figureName": "畢達哥拉斯",
    "wikiTitle": "毕达哥拉斯",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%AF%95%E8%BE%BE%E5%93%A5%E6%8B%89%E6%96%AF",
    "title": "數理哲學與畢氏定理創立者",
    "region": "歐洲"
  },
  {
    "id": 5,
    "eventId": 17,
    "figureName": "伯里克利",
    "wikiTitle": "伯里克利",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BC%AF%E9%87%8C%E5%85%8B%E5%88%A9",
    "title": "雅典古典黃金時代政治家",
    "region": "歐洲"
  },
  {
    "id": 6,
    "eventId": 18,
    "figureName": "希羅多德",
    "wikiTitle": "希罗多德",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B8%8C%E7%BD%97%E5%A4%9A%E5%BE%B7",
    "title": "西方歷史學之父",
    "region": "歐洲"
  },
  {
    "id": 7,
    "eventId": 21,
    "figureName": "希波克拉底",
    "wikiTitle": "希波克拉底",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B8%8C%E6%B3%A2%E5%85%8B%E6%8B%89%E5%BA%95",
    "title": "西方醫學之父與誓詞開創者",
    "region": "歐洲"
  },
  {
    "id": 8,
    "eventId": 22,
    "figureName": "蘇格拉底",
    "wikiTitle": "苏格拉底",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%8B%8F%E6%A0%BC%E6%8B%89%E5%BA%95",
    "title": "西方哲學奠基者與理性殉道者",
    "region": "歐洲"
  },
  {
    "id": 9,
    "eventId": 23,
    "figureName": "柏拉圖",
    "wikiTitle": "柏拉图",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%9F%8F%E6%8B%89%E5%9B%BE",
    "title": "理想國與雅典學院創始人",
    "region": "歐洲"
  },
  {
    "id": 10,
    "eventId": 26,
    "figureName": "亞里斯多德",
    "wikiTitle": "亚里士多德",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BA%9A%E9%87%8C%E5%A3%AB%E5%A4%9A%E5%BE%B7",
    "title": "逍遙學派與百科全書式先驅",
    "region": "歐洲"
  },
  {
    "id": 11,
    "eventId": 27,
    "figureName": "亞歷山大大帝",
    "wikiTitle": "亚历山大大帝",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BA%9A%E5%8E%86%E5%B1%B1%E5%A4%A7%E5%A4%A7%E5%B8%9D",
    "title": "馬其頓帝國君王與希臘化開啟者",
    "region": "歐洲"
  },
  {
    "id": 12,
    "eventId": 45,
    "figureName": "尤利烏斯·凱撒",
    "wikiTitle": "尤利乌斯·恺撒",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B0%A4%E5%88%A9%E4%B9%8C%E6%96%AF%C2%B7%E6%81%BA%E6%92%92",
    "title": "羅馬共和國終身獨裁官與曆法改革者",
    "region": "歐洲"
  },
  {
    "id": 13,
    "eventId": 46,
    "figureName": "屋大維",
    "wikiTitle": "奥古斯都",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%A5%A5%E5%8F%A4%E6%96%AF%E9%83%BD",
    "title": "羅馬帝國元首制開創者與首任皇帝",
    "region": "歐洲"
  },
  {
    "id": 14,
    "eventId": 48,
    "figureName": "耶穌基督",
    "wikiTitle": "耶稣",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%80%B6%E7%A8%A3",
    "title": "基督教核心信仰創立者",
    "region": "歐洲"
  },
  {
    "id": 15,
    "eventId": 108,
    "figureName": "查理曼",
    "wikiTitle": "查理曼",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%9F%A5%E7%90%86%E6%9B%BC",
    "title": "法蘭克國王與西歐之父",
    "region": "歐洲"
  },
  {
    "id": 16,
    "eventId": 152,
    "figureName": "托馬斯·阿奎那",
    "wikiTitle": "托马斯·阿奎那",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%89%98%E9%A9%AC%E6%96%AF%C2%B7%E9%98%BF%E5%A5%8E%E9%82%A3",
    "title": "中世紀經院哲學集大成者",
    "region": "歐洲"
  },
  {
    "id": 17,
    "eventId": 165,
    "figureName": "但丁",
    "wikiTitle": "但丁·阿利吉耶里",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BD%86%E4%B8%81%C2%B7%E9%98%BF%E5%88%A9%E5%90%89%E8%80%B6%E9%87%8C",
    "title": "文藝復興先驅與《神曲》作者",
    "region": "歐洲"
  },
  {
    "id": 18,
    "eventId": 193,
    "figureName": "古騰堡",
    "wikiTitle": "约翰内斯·谷登堡",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%BA%A6%E7%BF%B0%E5%86%85%E6%96%AF%C2%B7%E8%B0%B7%E7%99%BB%E5%A0%A1",
    "title": "活字印刷術發明人與知識革命推手",
    "region": "歐洲"
  },
  {
    "id": 19,
    "eventId": 207,
    "figureName": "李奧納多·達文西",
    "wikiTitle": "列奥纳多·达·芬奇",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%88%97%E5%A5%A5%E7%BA%B3%E5%A4%9A%C2%B7%E8%BE%BE%C2%B7%E8%8A%AC%E5%A5%87",
    "title": "文藝復興三傑之一與博學全才",
    "region": "歐洲"
  },
  {
    "id": 20,
    "eventId": 210,
    "figureName": "米開朗基羅",
    "wikiTitle": "米开朗基罗",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%B1%B3%E5%BC%80%E6%9C%97%E5%9F%BA%E7%BD%97",
    "title": "文藝復興雕塑繪畫巨擘",
    "region": "歐洲"
  },
  {
    "id": 21,
    "eventId": 217,
    "figureName": "馬丁·路德",
    "wikiTitle": "马丁·路德",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%A9%AC%E4%B8%81%C2%B7%E8%B7%AF%E5%BE%B7",
    "title": "宗教改革先鋒與新教倡導者",
    "region": "歐洲"
  },
  {
    "id": 22,
    "eventId": 228,
    "figureName": "哥白尼",
    "wikiTitle": "尼古拉·哥白尼",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B0%BC%E5%8F%A4%E6%8B%89%C2%B7%E5%93%A5%E7%99%BD%E5%B0%BC",
    "title": "日心說天文革命奠基人",
    "region": "歐洲"
  },
  {
    "id": 23,
    "eventId": 234,
    "figureName": "莎士比亞",
    "wikiTitle": "威廉·莎士比亚",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%A8%81%E5%BB%89%C2%B7%E8%8E%8E%E5%A3%AB%E6%AF%94%E4%BA%9A",
    "title": "英國文藝復興戲劇文學宗師",
    "region": "歐洲"
  },
  {
    "id": 24,
    "eventId": 248,
    "figureName": "伽利略",
    "wikiTitle": "伽利略·伽利莱",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BC%BD%E5%88%A9%E7%95%A5%C2%B7%E4%BC%BD%E5%88%A9%E8%8E%B1",
    "title": "現代觀測天文學與物理學之父",
    "region": "歐洲"
  },
  {
    "id": 25,
    "eventId": 256,
    "figureName": "笛卡兒",
    "wikiTitle": "勒内·笛卡尔",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%8B%92%E5%86%85%C2%B7%E7%AC%9B%E5%8D%A1%E5%B0%94",
    "title": "近代哲學奠基者「我思故我在」",
    "region": "歐洲"
  },
  {
    "id": 26,
    "eventId": 268,
    "figureName": "牛頓",
    "wikiTitle": "艾萨克·牛顿",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%89%BE%E8%90%A8%E5%85%8B%C2%B7%E7%89%9B%E9%A1%BF",
    "title": "古典力學之父與萬有引力發現者",
    "region": "歐洲"
  },
  {
    "id": 27,
    "eventId": 290,
    "figureName": "伏爾泰",
    "wikiTitle": "伏尔泰",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BC%8F%E5%B0%94%E6%B3%B0",
    "title": "法國啟蒙運動自由精神領袖",
    "region": "歐洲"
  },
  {
    "id": 28,
    "eventId": 293,
    "figureName": "盧梭",
    "wikiTitle": "让-雅克·卢梭",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%AE%A9-%E9%9B%85%E5%85%8B%C2%B7%E5%8D%A2%E6%A2%AD",
    "title": "社會契約論與人民主權倡導者",
    "region": "歐洲"
  },
  {
    "id": 29,
    "eventId": 324,
    "figureName": "拿破崙",
    "wikiTitle": "拿破仑一世",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%8B%BF%E7%A0%B4%E4%BB%91%E4%B8%80%E4%B8%96",
    "title": "法蘭西第一帝國皇帝與民法典頒布者",
    "region": "歐洲"
  },
  {
    "id": 30,
    "eventId": 360,
    "figureName": "達爾文",
    "wikiTitle": "查尔斯·达尔文",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%9F%A5%E5%B0%94%E6%96%AF%C2%B7%E8%BE%BE%E5%B0%94%E6%96%87",
    "title": "演化論與《物種起源》生物學家",
    "region": "歐洲"
  },
  {
    "id": 31,
    "eventId": 509,
    "figureName": "漢摩拉比",
    "wikiTitle": "汉谟拉比",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B1%89%E8%B0%9F%E6%8B%89%E6%AF%94",
    "title": "巴比倫王國開國君王與法典制定者",
    "region": "亞非洲"
  },
  {
    "id": 32,
    "eventId": 514,
    "figureName": "圖坦卡門",
    "wikiTitle": "图坦卡蒙",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%9B%BE%E5%9D%A6%E5%8D%A1%E8%92%99",
    "title": "古埃及新王國第十八王朝法老",
    "region": "亞非洲"
  },
  {
    "id": 33,
    "eventId": 515,
    "figureName": "拉美西斯二世",
    "wikiTitle": "拉美西斯二世",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%8B%89%E7%BE%8E%E8%A5%BF%E6%96%AF%E4%BA%8C%E4%B8%96",
    "title": "古埃及第十九王朝偉大建造法老",
    "region": "亞非洲"
  },
  {
    "id": 34,
    "eventId": 531,
    "figureName": "居魯士二世",
    "wikiTitle": "居鲁士二世",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B1%85%E9%B2%81%E5%A3%AB%E4%BA%8C%E4%B8%96",
    "title": "波斯阿契美尼德帝國開創者",
    "region": "亞非洲"
  },
  {
    "id": 35,
    "eventId": 535,
    "figureName": "大流士一世",
    "wikiTitle": "大流士一世",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%A4%A7%E6%B5%81%E5%A3%AB%E4%B8%80%E4%B8%96",
    "title": "波斯帝國盛世大帝與波斯波利斯建造者",
    "region": "亞非洲"
  },
  {
    "id": 36,
    "eventId": 533,
    "figureName": "釋迦牟尼",
    "wikiTitle": "释迦牟尼",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%87%8A%E8%BF%A6%E7%89%9F%E5%B0%BC",
    "title": "佛教創立者與般若哲學導師",
    "region": "亞非洲"
  },
  {
    "id": 37,
    "eventId": 544,
    "figureName": "阿育王",
    "wikiTitle": "阿育王",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%98%BF%E8%82%B2%E7%8E%8B",
    "title": "孔雀王朝護法明王與石柱詔令締造者",
    "region": "亞非洲"
  },
  {
    "id": 38,
    "eventId": 91,
    "figureName": "查士丁尼一世",
    "wikiTitle": "查士丁尼一世",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%9F%A5%E5%A3%AB%E4%B8%81%E5%B0%BC%E4%B8%80%E4%B8%96",
    "title": "拜占庭帝國皇帝與民法大全主持者",
    "region": "亞非洲"
  },
  {
    "id": 39,
    "eventId": 585,
    "figureName": "穆罕默德",
    "wikiTitle": "穆罕默德",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A9%86%E7%BD%95%E9%BB%98%E5%BE%B7",
    "title": "伊斯蘭教先知與阿拉伯半島統一者",
    "region": "亞非洲"
  },
  {
    "id": 40,
    "eventId": 604,
    "figureName": "哈倫·拉希德",
    "wikiTitle": "哈伦·拉希德",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%93%88%E4%BC%A6%C2%B7%E6%8B%89%E5%B8%8C%E5%BE%B7",
    "title": "阿拔斯王朝哈里發與智慧宮盛世統治者",
    "region": "亞非洲"
  },
  {
    "id": 41,
    "eventId": 606,
    "figureName": "花拉子米",
    "wikiTitle": "花拉子米",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%8A%B1%E6%8B%89%E5%AD%90%E7%B1%B3",
    "title": "代數學之父與演算法命名源頭",
    "region": "亞非洲"
  },
  {
    "id": 42,
    "eventId": 622,
    "figureName": "阿維森納",
    "wikiTitle": "阿维森纳",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%98%BF%E7%BB%B4%E6%A3%AE%E7%BA%B3",
    "title": "伊斯蘭黃金時代醫典作者與博學者",
    "region": "亞非洲"
  },
  {
    "id": 43,
    "eventId": 632,
    "figureName": "薩拉丁",
    "wikiTitle": "萨拉丁",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%90%A8%E6%8B%89%E4%B8%81",
    "title": "阿尤布王朝開國蘇丹與耶路撒冷光復者",
    "region": "亞非洲"
  },
  {
    "id": 44,
    "eventId": 630,
    "figureName": "闍耶跋摩七世",
    "wikiTitle": "阇耶跋摩七世",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%98%87%E8%80%B6%E8%B7%8B%E6%91%A9%E4%B8%83%E4%B8%96",
    "title": "高棉吳哥王朝大帝與巴戎寺建造者",
    "region": "亞非洲"
  },
  {
    "id": 45,
    "eventId": 1243,
    "figureName": "成吉思汗",
    "wikiTitle": "成吉思汗",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%88%90%E5%90%89%E6%80%9D%E6%B1%97",
    "title": "大蒙古國開國大汗與歐亞帝國開拓者",
    "region": "亞非洲"
  },
  {
    "id": 46,
    "eventId": 645,
    "figureName": "曼薩·穆薩",
    "wikiTitle": "曼萨·穆萨",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%9B%BC%E8%90%A8%C2%B7%E7%A9%86%E8%90%A8",
    "title": "西非馬利帝國君王與世界首富傳奇",
    "region": "亞非洲"
  },
  {
    "id": 47,
    "eventId": 664,
    "figureName": "蘇里曼一世",
    "wikiTitle": "苏莱曼一世",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%8B%8F%E8%8E%B1%E6%9B%BC%E4%B8%80%E4%B8%96",
    "title": "鄂圖曼帝國極盛蘇丹與立法者",
    "region": "亞非洲"
  },
  {
    "id": 48,
    "eventId": 649,
    "figureName": "帖木兒",
    "wikiTitle": "帖木儿",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B8%96%E6%9C%A8%E5%84%BF",
    "title": "中亞帖木兒帝國征服者",
    "region": "亞非洲"
  },
  {
    "id": 49,
    "eventId": 665,
    "figureName": "巴布爾",
    "wikiTitle": "巴布尔",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B7%B4%E5%B8%83%E5%B0%94",
    "title": "南亞蒙兀兒帝國開國君王",
    "region": "亞非洲"
  },
  {
    "id": 50,
    "eventId": 671,
    "figureName": "阿克巴大帝",
    "wikiTitle": "阿克巴",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%98%BF%E5%85%8B%E5%B7%B4",
    "title": "蒙兀兒帝國極盛君主與宗教寬容倡議者",
    "region": "亞非洲"
  },
  {
    "id": 51,
    "eventId": 689,
    "figureName": "沙賈漢",
    "wikiTitle": "沙贾汉",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B2%99%E8%B4%BE%E6%B1%89",
    "title": "蒙兀兒帝國第五代皇帝與泰姬瑪哈陵建造者",
    "region": "亞非洲"
  },
  {
    "id": 52,
    "eventId": 682,
    "figureName": "德川家康",
    "wikiTitle": "德川家康",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%BE%B7%E5%B7%9D%E5%AE%B6%E5%BA%B7",
    "title": "日本江戶幕府初代征夷大將軍",
    "region": "亞非洲"
  },
  {
    "id": 53,
    "eventId": 724,
    "figureName": "穆罕默德·阿里",
    "wikiTitle": "穆罕默德·阿里帕夏",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A9%86%E7%BD%95%E9%BB%98%E5%BE%B7%C2%B7%E9%98%BF%E9%87%8C%E5%B8%95%E5%A4%8F",
    "title": "現代埃及奠基者與改革領袖",
    "region": "亞非洲"
  },
  {
    "id": 54,
    "eventId": 856,
    "figureName": "泰戈爾",
    "wikiTitle": "罗宾德拉纳特·泰戈尔",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%BD%97%E5%AE%BE%E5%BE%B7%E6%8B%89%E7%BA%B3%E7%89%B9%C2%B7%E6%B3%B0%E6%88%88%E5%B0%94",
    "title": "亞洲首位諾貝爾文學獎得主與詩聖",
    "region": "亞非洲"
  },
  {
    "id": 55,
    "eventId": 894,
    "figureName": "聖雄甘地",
    "wikiTitle": "圣雄甘地",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%9C%A3%E9%9B%84%E7%94%98%E5%9C%B0",
    "title": "非暴力不合作運動與印度獨立之父",
    "region": "亞非洲"
  },
  {
    "id": 56,
    "eventId": 865,
    "figureName": "凱末爾",
    "wikiTitle": "穆斯塔法·凯末尔·阿塔图尔克",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A9%86%E6%96%AF%E5%A1%94%E6%B3%95%C2%B7%E5%87%AF%E6%9C%AB%E5%B0%94%C2%B7%E9%98%BF%E5%A1%94%E5%9B%BE%E5%B0%94%E5%85%8B",
    "title": "土耳其共和國國父與現代化導師",
    "region": "亞非洲"
  },
  {
    "id": 57,
    "eventId": 892,
    "figureName": "尼赫魯",
    "wikiTitle": "贾瓦哈拉尔·尼赫鲁",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%B4%BE%E7%93%A6%E5%93%88%E6%8B%89%E5%B0%94%C2%B7%E5%B0%BC%E8%B5%AB%E9%B2%81",
    "title": "印度共和國首任總理與不結盟運動倡導者",
    "region": "亞非洲"
  },
  {
    "id": 58,
    "eventId": 906,
    "figureName": "納瑟",
    "wikiTitle": "贾迈勒·阿卜杜勒·纳赛尔",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%B4%BE%E8%BF%88%E5%8B%92%C2%B7%E9%98%BF%E5%8D%9C%E6%9D%9C%E5%8B%92%C2%B7%E7%BA%B3%E8%B5%9B%E5%B0%94",
    "title": "埃及總統與泛阿拉伯民族主義領袖",
    "region": "亞非洲"
  },
  {
    "id": 59,
    "eventId": 942,
    "figureName": "曼德拉",
    "wikiTitle": "纳尔逊·曼德拉",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%BA%B3%E5%B0%94%E9%80%8A%C2%B7%E6%9B%BC%E5%BE%B7%E6%8B%89",
    "title": "南非反種族隔離領袖與首任黑人總統",
    "region": "亞非洲"
  },
  {
    "id": 60,
    "eventId": 920,
    "figureName": "穆罕默德·尤努斯",
    "wikiTitle": "穆罕默德·尤纳斯",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A9%86%E7%BD%95%E9%BB%98%E5%BE%B7%C2%B7%E5%B0%A4%E7%BA%B3%E6%96%AF",
    "title": "孟加拉鄉村銀行創始人與諾貝爾和平獎得主",
    "region": "亞非洲"
  },
  {
    "id": 61,
    "eventId": 1001,
    "figureName": "大禹",
    "wikiTitle": "禹",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A6%B9",
    "title": "夏朝開國始祖與華夏治水領袖",
    "region": "中國"
  },
  {
    "id": 62,
    "eventId": 1003,
    "figureName": "商湯",
    "wikiTitle": "汤_(商朝)",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B1%A4_(%E5%95%86%E6%9C%9D)",
    "title": "商朝開國君主「成湯革命」",
    "region": "中國"
  },
  {
    "id": 63,
    "eventId": 1016,
    "figureName": "齊桓公",
    "wikiTitle": "齐桓公",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%BD%90%E6%A1%93%E5%85%AC",
    "title": "春秋五霸之首與九合諸侯霸主",
    "region": "中國"
  },
  {
    "id": 64,
    "eventId": 1022,
    "figureName": "孔子",
    "wikiTitle": "孔子",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%AD%94%E5%AD%90",
    "title": "儒家學派創始人與至聖先師",
    "region": "中國"
  },
  {
    "id": 65,
    "eventId": 1025,
    "figureName": "老子",
    "wikiTitle": "老子",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%80%81%E5%AD%90",
    "title": "道家哲學開山宗師《道德經》作者",
    "region": "中國"
  },
  {
    "id": 66,
    "eventId": 1027,
    "figureName": "孫武",
    "wikiTitle": "孙武",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%AD%99%E6%AD%A6",
    "title": "兵聖與《孫子兵法》作者",
    "region": "中國"
  },
  {
    "id": 67,
    "eventId": 1033,
    "figureName": "墨子",
    "wikiTitle": "墨子",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%A2%A8%E5%AD%90",
    "title": "墨家學派創始人兼愛非攻與科學探索者",
    "region": "中國"
  },
  {
    "id": 68,
    "eventId": 1037,
    "figureName": "商鞅",
    "wikiTitle": "商鞅",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%95%86%E9%9E%85",
    "title": "秦國變法開創法治與軍功體系改革家",
    "region": "中國"
  },
  {
    "id": 69,
    "eventId": 1039,
    "figureName": "屈原",
    "wikiTitle": "屈原",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B1%88%E5%8E%9F",
    "title": "楚辭宗師愛國詩人《離騷》作者",
    "region": "中國"
  },
  {
    "id": 70,
    "eventId": 1040,
    "figureName": "孟子",
    "wikiTitle": "孟子",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%AD%9F%E5%AD%90",
    "title": "儒家亞聖倡民貴君輕與仁政學說",
    "region": "中國"
  },
  {
    "id": 71,
    "eventId": 1041,
    "figureName": "莊子",
    "wikiTitle": "庄子",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%BA%84%E5%AD%90",
    "title": "道家南華真人逍遙遊齊物論大家",
    "region": "中國"
  },
  {
    "id": 72,
    "eventId": 1045,
    "figureName": "扁鵲",
    "wikiTitle": "扁鹊",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%89%81%E9%B9%8A",
    "title": "中醫望聞問切脈學與臨床醫學奠基者",
    "region": "中國"
  },
  {
    "id": 73,
    "eventId": 1051,
    "figureName": "荀子",
    "wikiTitle": "荀子",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%8D%80%E5%AD%90",
    "title": "先秦儒學集大成者倡性惡論與隆禮重法",
    "region": "中國"
  },
  {
    "id": 74,
    "eventId": 1054,
    "figureName": "韓非",
    "wikiTitle": "韩非",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%9F%A9%E9%9D%9E",
    "title": "先秦法家學說集大成者",
    "region": "中國"
  },
  {
    "id": 75,
    "eventId": 1057,
    "figureName": "秦始皇",
    "wikiTitle": "秦始皇",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A7%A6%E5%A7%8B%E7%9A%87",
    "title": "中國首位統一皇帝確立大一統郡縣制度",
    "region": "中國"
  },
  {
    "id": 76,
    "eventId": 1058,
    "figureName": "李斯",
    "wikiTitle": "李斯",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%9D%8E%E6%96%AF",
    "title": "秦朝丞相小篆書法統治體系推動者",
    "region": "中國"
  },
  {
    "id": 77,
    "eventId": 1065,
    "figureName": "劉邦",
    "wikiTitle": "汉高帝",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B1%89%E9%AB%98%E5%B8%9D",
    "title": "漢朝開國皇帝漢高祖",
    "region": "中國"
  },
  {
    "id": 78,
    "eventId": 1072,
    "figureName": "漢文帝",
    "wikiTitle": "汉文帝",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B1%89%E6%96%87%E5%B8%9D",
    "title": "西漢治世文景之治開創君主",
    "region": "中國"
  },
  {
    "id": 79,
    "eventId": 1075,
    "figureName": "漢武帝",
    "wikiTitle": "汉武帝",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B1%89%E6%AD%A6%E5%B8%9D",
    "title": "西漢盛世雄主獨尊儒術開闢西域",
    "region": "中國"
  },
  {
    "id": 80,
    "eventId": 1076,
    "figureName": "張騫",
    "wikiTitle": "张骞",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%BC%A0%E9%AA%9E",
    "title": "絲綢之路開闢者「鑿空」中亞外交家",
    "region": "中國"
  },
  {
    "id": 81,
    "eventId": 1080,
    "figureName": "霍去病",
    "wikiTitle": "霍去病",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%9C%8D%E5%8E%BB%E7%97%85",
    "title": "西漢名將封狼居胥開闢河西四郡",
    "region": "中國"
  },
  {
    "id": 82,
    "eventId": 1085,
    "figureName": "司馬遷",
    "wikiTitle": "司马迁",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%8F%B8%E9%A9%AC%E8%BF%81",
    "title": "西漢太史令《史記》作者史聖",
    "region": "中國"
  },
  {
    "id": 83,
    "eventId": 1101,
    "figureName": "許慎",
    "wikiTitle": "许慎",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%AE%B8%E6%85%8E",
    "title": "東漢文字學家字聖《說文解字》作者",
    "region": "中國"
  },
  {
    "id": 84,
    "eventId": 1102,
    "figureName": "張衡",
    "wikiTitle": "张衡",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%BC%A0%E8%A1%A1",
    "title": "東漢天文學家發明地動儀與渾天儀",
    "region": "中國"
  },
  {
    "id": 85,
    "eventId": 1112,
    "figureName": "諸葛亮",
    "wikiTitle": "诸葛亮",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%AF%B8%E8%91%9B%E4%BA%AE",
    "title": "三國蜀漢丞相忠貞與智慧化身",
    "region": "中國"
  },
  {
    "id": 86,
    "eventId": 1109,
    "figureName": "曹操",
    "wikiTitle": "曹操",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%9B%B9%E6%93%8D",
    "title": "三國曹魏奠基者政治軍事家與建安詩人",
    "region": "中國"
  },
  {
    "id": 87,
    "eventId": 1131,
    "figureName": "王羲之",
    "wikiTitle": "王羲之",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BE%B2%E4%B9%8B",
    "title": "東晉書法家書聖《蘭亭集序》作者",
    "region": "中國"
  },
  {
    "id": 88,
    "eventId": 1136,
    "figureName": "陶淵明",
    "wikiTitle": "陶渊明",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%99%B6%E6%B8%8A%E6%98%8E",
    "title": "東晉田園詩人開創者《桃花源記》作者",
    "region": "中國"
  },
  {
    "id": 89,
    "eventId": 1161,
    "figureName": "唐太宗",
    "wikiTitle": "唐太宗",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%94%90%E5%A4%AA%E5%AE%97",
    "title": "唐朝盛世君主開創貞觀之治與天可汗",
    "region": "中國"
  },
  {
    "id": 90,
    "eventId": 1162,
    "figureName": "玄奘",
    "wikiTitle": "玄奘",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%8E%84%E5%A5%98",
    "title": "唐代高僧西行印度取經與佛經翻譯大家",
    "region": "中國"
  },
  {
    "id": 91,
    "eventId": 1520,
    "figureName": "帕查庫蒂",
    "wikiTitle": "帕查库蒂",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B8%95%E6%9F%A5%E5%BA%93%E8%92%82",
    "title": "印加帝國重構擴張第九代君主",
    "region": "美澳洲"
  },
  {
    "id": 92,
    "eventId": 1521,
    "figureName": "哥倫布",
    "wikiTitle": "克里斯托弗·哥伦布",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%85%8B%E9%87%8C%E6%96%AF%E6%89%98%E5%BC%97%C2%B7%E5%93%A5%E4%BC%A6%E5%B8%83",
    "title": "首航發現美洲之大航海家",
    "region": "美澳洲"
  },
  {
    "id": 93,
    "eventId": 1526,
    "figureName": "阿塔瓦爾帕",
    "wikiTitle": "阿塔瓦尔帕",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%98%BF%E5%A1%94%E7%93%A6%E5%B0%94%E5%B8%95",
    "title": "印加帝國末代統治者",
    "region": "美澳洲"
  },
  {
    "id": 94,
    "eventId": 1538,
    "figureName": "詹姆斯·庫克",
    "wikiTitle": "詹姆斯·库克",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%A9%B9%E5%A7%86%E6%96%AF%C2%B7%E5%BA%93%E5%85%8B",
    "title": "英國皇家海軍航海家與大洋洲探險家",
    "region": "美澳洲"
  },
  {
    "id": 95,
    "eventId": 1543,
    "figureName": "喬治·華盛頓",
    "wikiTitle": "乔治·华盛顿",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%B9%94%E6%B2%BB%C2%B7%E5%8D%8E%E7%9B%9B%E9%A1%BF",
    "title": "美國獨立戰爭總司令與首任美國總統",
    "region": "美澳洲"
  },
  {
    "id": 96,
    "eventId": 1542,
    "figureName": "湯瑪斯·傑佛遜",
    "wikiTitle": "托马斯·杰斐逊",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%89%98%E9%A9%AC%E6%96%AF%C2%B7%E6%9D%B0%E6%96%90%E9%80%8A",
    "title": "美國獨立宣言主要起草人與第三任總統",
    "region": "美澳洲"
  },
  {
    "id": 97,
    "eventId": 1549,
    "figureName": "西蒙·玻利瓦",
    "wikiTitle": "西蒙·玻利瓦尔",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%A5%BF%E8%92%99%C2%B7%E7%8E%BB%E5%88%A9%E7%93%A6%E5%B0%94",
    "title": "南美洲獨立運動「解放者」",
    "region": "美澳洲"
  },
  {
    "id": 98,
    "eventId": 1563,
    "figureName": "亞伯拉罕·林肯",
    "wikiTitle": "亚伯拉罕·林肯",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BA%9A%E4%BC%AF%E6%8B%89%E7%BD%95%C2%B7%E6%9E%97%E8%82%AF",
    "title": "美國第十六任總統發表《解放黑奴宣言》",
    "region": "美澳洲"
  },
  {
    "id": 99,
    "eventId": 1581,
    "figureName": "富蘭克林·羅斯福",
    "wikiTitle": "富兰克林·德拉诺·罗斯福",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%AF%8C%E5%85%B0%E5%85%8B%E6%9E%97%C2%B7%E5%BE%B7%E6%8B%89%E8%AF%BA%C2%B7%E7%BD%97%E6%96%AF%E7%A6%8F",
    "title": "美國第三十二任總統新政與二戰領袖",
    "region": "美澳洲"
  },
  {
    "id": 100,
    "eventId": 1587,
    "figureName": "馬丁·路德·金恩",
    "wikiTitle": "马丁·路德·金",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%A9%AC%E4%B8%81%C2%B7%E8%B7%AF%E5%BE%B7%C2%B7%E9%87%91",
    "title": "美國非裔民權運動領袖《我有一個夢想》",
    "region": "美澳洲"
  }
];

/**
 * 以 eventId 為索引的高效查找 Map
 */
export const FEATURED_FIGURES_MAP = new Map<number, FeaturedHistoricalFigure>(
  FEATURED_FIGURES_LIST.map(fig => [fig.eventId, fig])
);

/**
 * 依事件 ID 取得關鍵人物資料
 */
export function getFeaturedFigure(eventId: number): FeaturedHistoricalFigure | undefined {
  return FEATURED_FIGURES_MAP.get(eventId);
}

/**
 * 檢查該事件是否具備精選關鍵人物
 */
export function hasFeaturedFigure(eventId: number): boolean {
  return FEATURED_FIGURES_MAP.has(eventId);
}

/**
 * 取得人物的維基百科連結：
 * 1. 若該事件為精選關鍵人物事件，且人物姓名吻合，直接回傳精選的標準維基百科連結。
 * 2. 否則將人物名稱清理（去除括號別名等備註），產生標準中文維基百科條目連結。
 */
export function getFigureWikiUrl(rawName: string, eventId?: number): string {
  if (eventId) {
    const featured = FEATURED_FIGURES_MAP.get(eventId);
    if (featured) {
      const match = rawName.includes(featured.figureName) || 
                    featured.figureName.includes(rawName) ||
                    rawName.includes(featured.wikiTitle) ||
                    featured.wikiTitle.includes(rawName);
      if (match) {
        return featured.wikiUrl;
      }
    }
  }

  // 清除括號內的字元，例如 "商湯 (成湯)" -> "商湯", "漢武帝 (劉徹)" -> "漢武帝"
  const cleanName = rawName
    .replace(/\s*[\(（][^\)）]+[\)）]\s*/g, '')
    .trim();

  return `https://zh.wikipedia.org/wiki/${encodeURIComponent(cleanName || rawName)}`;
}
