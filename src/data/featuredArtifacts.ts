/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FeaturedArtifact {
  id: number;              // 序號 (1 - 100)
  eventId: number;         // 對應歷史事件 ID (allHistoricalEvents.id)
  artifactName: string;    // 關鍵物件/法典/文物簡稱
  fullArtifactText: string;// 原文物件名稱備註
  wikiTitle: string;       // 維基百科條目名
  wikiUrl: string;         // 中文維基百科連結
  title: string;           // 文物定位稱謂
  region: string;          // 所屬大區
}

/**
 * 完整歷史資料庫中精選的一百個【關鍵物件、法典與遺產】：
 * - 歐洲 (30件)
 * - 亞非洲 (30件)
 * - 中國 (30件)
 * - 美澳洲 (10件)
 * 總計恰好 100 件見證世界文明進程的經典法典、珍貴手稿、青銅國寶與歷史遺產。
 */
export const FEATURED_ARTIFACTS_LIST: FeaturedArtifact[] = [
  {
    "id": 1,
    "eventId": 1,
    "artifactName": "奧林匹克休戰協議",
    "fullArtifactText": "宙斯神廟遺址、古代體育競技規範、奧林匹克休戰協議",
    "wikiTitle": "奥林匹克休战",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%A5%A5%E6%9E%97%E5%8C%B9%E5%85%8B%E4%BC%91%E6%88%98",
    "title": "古希臘城邦和平競技協定",
    "region": "歐洲"
  },
  {
    "id": 2,
    "eventId": 3,
    "artifactName": "荷馬史詩",
    "fullArtifactText": "《伊利亞特》、《奧德賽》手抄本抄卷",
    "wikiTitle": "荷马史诗",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%8D%B7%E9%A9%AC%E5%8F%B2%E8%AF%97",
    "title": "西方文學最高源泉史詩",
    "region": "歐洲"
  },
  {
    "id": 3,
    "eventId": 7,
    "artifactName": "德拉古成文法",
    "fullArtifactText": "德拉古刻石法典、血腥法（Draconian Laws）",
    "wikiTitle": "德拉古",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%BE%B7%E6%8B%89%E5%8F%A4",
    "title": "雅典首部成文法刻石",
    "region": "歐洲"
  },
  {
    "id": 4,
    "eventId": 10,
    "artifactName": "梭倫解負令法典",
    "fullArtifactText": "解負令（Seisachtheia）木板法典碑、四百人會議",
    "wikiTitle": "梭伦",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%A2%AD%E4%BC%A6",
    "title": "雅典民主改革法規木碑",
    "region": "歐洲"
  },
  {
    "id": 5,
    "eventId": 16,
    "artifactName": "十二銅表法",
    "fullArtifactText": "十二塊鐫刻法典銅表（Lex Duodecim Tabularum）",
    "wikiTitle": "十二铜表法",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%8D%81%E4%BA%8C%E9%93%9C%E8%A1%A8%E6%B3%95",
    "title": "古羅馬首部成文法典銅表",
    "region": "歐洲"
  },
  {
    "id": 6,
    "eventId": 17,
    "artifactName": "巴特農神殿雕刻",
    "fullArtifactText": "巴特農神殿（Parthenon）、雅典娜巨型金象牙雕像",
    "wikiTitle": "帕德嫩神廟",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B8%95%E5%BE%B7%E5%AB%A9%E7%A5%9E%E5%BB%9F",
    "title": "古希臘古典柱式建築頂峰",
    "region": "歐洲"
  },
  {
    "id": 7,
    "eventId": 18,
    "artifactName": "《歷史》手稿",
    "fullArtifactText": "《歷史》（Historiai）手稿卷帙",
    "wikiTitle": "历史_(希罗多德)",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%8E%86%E5%8F%B2_(%E5%B8%8C%E7%BD%97%E5%A4%9A%E5%BE%B7)",
    "title": "希羅多德西方歷史學開山名著",
    "region": "歐洲"
  },
  {
    "id": 8,
    "eventId": 23,
    "artifactName": "《理想國》",
    "fullArtifactText": "《理想國》、《蒂邁歐篇》、學院哲學聚會所",
    "wikiTitle": "理想国",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%90%86%E6%83%B3%E5%9B%BD",
    "title": "柏拉圖政治哲學經典對話錄",
    "region": "歐洲"
  },
  {
    "id": 9,
    "eventId": 26,
    "artifactName": "《尼各馬可倫理學》",
    "fullArtifactText": "《形上學》、《尼各馬可倫理學》、《工具論》、《政治學》",
    "wikiTitle": "尼各马可伦理学",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B0%BC%E5%90%84%E9%A9%AC%E5%8F%AF%E4%BC%A6%E7%90%86%E5%AD%A6",
    "title": "亞里斯多德古典德行倫理著作",
    "region": "歐洲"
  },
  {
    "id": 10,
    "eventId": 29,
    "artifactName": "《幾何原本》",
    "fullArtifactText": "柱廊演講記錄、理性世界法論（Logos）",
    "wikiTitle": "几何原本",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%87%A0%E4%BD%95%E5%8E%9F%E6%9C%AC",
    "title": "演繹公理系統之科學數學典範",
    "region": "歐洲"
  },
  {
    "id": 11,
    "eventId": 45,
    "artifactName": "儒略曆",
    "fullArtifactText": "儒略曆（Julian Calendar）、龐培元老院血濺大理石像",
    "wikiTitle": "儒略曆",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%84%92%E7%95%A5%E6%9B%86",
    "title": "通行歐洲一千六百年之標準曆法",
    "region": "歐洲"
  },
  {
    "id": 12,
    "eventId": 116,
    "artifactName": "查理曼福音書",
    "fullArtifactText": "神聖長矛（Holy Lance）、德意志騎士聯軍大十字架旗幟",
    "wikiTitle": "查理曼",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%9F%A5%E7%90%86%E6%9B%BC",
    "title": "加洛林文藝復興泥金裝飾手抄本",
    "region": "歐洲"
  },
  {
    "id": 13,
    "eventId": 128,
    "artifactName": "貝葉掛毯",
    "fullArtifactText": "學生自治組織（Universitas Scholarium）、羅馬法復興注釋講義",
    "wikiTitle": "贝叶挂毯",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%B4%9D%E5%8F%B6%E6%8C%82%E6%AF%AF",
    "title": "諾曼征服英格蘭的刺繡巨作",
    "region": "歐洲"
  },
  {
    "id": 14,
    "eventId": 144,
    "artifactName": "大憲章",
    "fullArtifactText": "聖馬可大教堂四銅馬雕像（威尼斯戰利品）、拉丁帝國封臣分封圖",
    "wikiTitle": "大宪章",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%A4%A7%E5%AE%AA%E7%AB%A0",
    "title": "英國王權受限與現代憲政基石",
    "region": "歐洲"
  },
  {
    "id": 15,
    "eventId": 150,
    "artifactName": "《神學大全》",
    "fullArtifactText": "速不台戰術圖卷、歐洲諸國向羅馬教皇求援急件",
    "wikiTitle": "神学大全",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A5%9E%E5%AD%A6%E5%A4%A7%E5%85%A8",
    "title": "天主教經院哲學體系最高著作",
    "region": "歐洲"
  },
  {
    "id": 16,
    "eventId": 166,
    "artifactName": "《神曲》手稿",
    "fullArtifactText": "愛德華三世宣戰書、英格蘭長弓長弦",
    "wikiTitle": "神曲",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A5%9E%E6%9B%B2",
    "title": "文藝復興先聲義大利語詩歌頂峰",
    "region": "歐洲"
  },
  {
    "id": 17,
    "eventId": 184,
    "artifactName": "古騰堡聖經",
    "fullArtifactText": "《聖事通諭》（Haec Sancta，大公會議高於教宗論壇）、教宗單一選舉文告",
    "wikiTitle": "谷登堡圣经",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%B0%B7%E7%99%BB%E5%A0%A1%E5%9C%A3%E7%BB%8F",
    "title": "歐洲活字印刷首部劃時代印本",
    "region": "歐洲"
  },
  {
    "id": 18,
    "eventId": 197,
    "artifactName": "《蒙娜麗莎》",
    "fullArtifactText": "沙皇雙頭鷹印信、莫斯科克里姆林宮紅磚城牆動工",
    "wikiTitle": "蒙娜丽莎",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%92%99%E5%A8%9C%E4%B8%BD%E8%8E%8E",
    "title": "羅浮宮館藏文藝復興肖像畫冠冕",
    "region": "歐洲"
  },
  {
    "id": 19,
    "eventId": 203,
    "artifactName": "西斯汀禮拜堂創世紀",
    "fullArtifactText": "《驅逐猶太人敕令》（Edict of Expulsion）皇家羊皮手詔",
    "wikiTitle": "创世纪_(米开朗基罗)",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%88%9B%E4%B8%96%E7%BA%AA_(%E7%B1%B3%E5%BC%80%E6%9C%97%E5%9F%BA%E7%BD%97)",
    "title": "梵蒂岡西斯汀禮拜堂壁畫瑰寶",
    "region": "歐洲"
  },
  {
    "id": 20,
    "eventId": 207,
    "artifactName": "九十五條論綱",
    "fullArtifactText": "《最後的晚餐》（The Last Supper）透視畫、幾何三角構圖與人物心理張力表現",
    "wikiTitle": "九十五条论纲",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%B9%9D%E5%8D%81%E4%BA%94%E6%9D%A1%E8%AE%BA%E7%BA%B2",
    "title": "引爆歐洲宗教改革的歷史大字報",
    "region": "歐洲"
  },
  {
    "id": 21,
    "eventId": 219,
    "artifactName": "《天體運行論》",
    "fullArtifactText": "《沃姆斯敕令》（Edict of Worms）、瓦特堡避難德語新約譯本手稿",
    "wikiTitle": "天体运行论",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%A4%A9%E4%BD%93%E8%BF%90%E8%A1%8C%E8%AE%BA",
    "title": "推翻地心說的天文學革命原典",
    "region": "歐洲"
  },
  {
    "id": 22,
    "eventId": 242,
    "artifactName": "莎士比亞第一對開本",
    "fullArtifactText": "《論無限、宇宙與諸世界》（De l'infinito, universo e mondi）著作手稿、鮮花廣場青銅紀念塑像",
    "wikiTitle": "第一对开本",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E5%AF%B9%E5%BC%80%E6%9C%AC",
    "title": "英國文學史上最珍罕之戲劇典藏",
    "region": "歐洲"
  },
  {
    "id": 23,
    "eventId": 252,
    "artifactName": "《兩大世界體系的對話》",
    "fullArtifactText": "《心血運動論》（Exercitatio Anatomica de Motu Cordis et Sanguinis in Animalibus）初印本",
    "wikiTitle": "关于托勒密和哥白尼两大世界体系的对话",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%85%B3%E4%BA%8E%E6%89%98%E5%8B%92%E5%AF%86%E5%92%8C%E5%93%A5%E7%99%BD%E5%B0%BC%E4%B8%A4%E5%A4%A7%E4%B8%96%E7%95%8C%E4%BD%93%E7%B3%BB%E7%9A%84%E5%AF%B9%E8%AF%9D",
    "title": "科學革命觀測與力學論證之作",
    "region": "歐洲"
  },
  {
    "id": 24,
    "eventId": 258,
    "artifactName": "《方法論》",
    "fullArtifactText": "《明斯特和約》與《奧斯納布呂克和約》簽署羊皮書原件、國際法「威斯特伐利亞主權」概念",
    "wikiTitle": "方法论",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%96%B9%E6%B3%95%E8%AE%BA",
    "title": "近代哲學理性懷疑與解析幾何巨著",
    "region": "歐洲"
  },
  {
    "id": 25,
    "eventId": 283,
    "artifactName": "《自然哲學的數學原理》",
    "fullArtifactText": "紐科門活塞氣缸抽水機木質梁臂構造圖、煤礦連續運轉紀錄",
    "wikiTitle": "自然哲学的数学原理",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E5%93%B2%E5%AD%A6%E7%9A%84%E6%95%B0%E5%AD%A6%E5%8E%9F%E7%90%86",
    "title": "奠定經典力學三大定律與萬有引力",
    "region": "歐洲"
  },
  {
    "id": 26,
    "eventId": 299,
    "artifactName": "《百科全書》",
    "fullArtifactText": "三次瓜分波蘭地圖文件、華沙瑟姆議會雷坦悲情撕衣抗議圖畫",
    "wikiTitle": "百科全书，或科学、艺术和工艺详解词典",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%99%BE%E7%A7%91%E5%85%A8%E4%B9%A6%EF%BC%8C%E6%88%96%E7%A7%91%E5%AD%A6%E3%80%81%E8%89%BA%E6%9C%AF%E5%92%8C%E5%B7%A5%E8%89%BA%E8%AF%A6%E8%A7%A3%E8%AF%8D%E5%85%B8",
    "title": "啟蒙運動理性知識大匯編",
    "region": "歐洲"
  },
  {
    "id": 27,
    "eventId": 304,
    "artifactName": "《社會契約論》",
    "fullArtifactText": "自製7英尺焦距反射式望遠鏡、皇家學會發現報告記錄",
    "wikiTitle": "社会契约论",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A4%BE%E4%BC%9A%E5%A5%91%E7%BA%A6%E8%AE%BA",
    "title": "近代主權在民與民主法治政治理論",
    "region": "歐洲"
  },
  {
    "id": 28,
    "eventId": 319,
    "artifactName": "人權和公民權宣言",
    "fullArtifactText": "阿爾科萊大橋拿破崙持旗衝鋒名畫、《坎波福爾米奧條約》（消滅千年威尼斯共和國）",
    "wikiTitle": "人权和公民权宣言",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BA%BA%E6%9D%83%E5%92%8C%E5%85%AC%E6%B0%91%E6%9D%83%E5%AE%A3%E8%A8%80",
    "title": "法國大革命普世自由人權宣言",
    "region": "歐洲"
  },
  {
    "id": 29,
    "eventId": 327,
    "artifactName": "拿破崙法典",
    "fullArtifactText": "奧斯特里茲太陽金徽、巴黎旺多姆青銅紀念柱（以繳獲千門俄奧大炮熔鑄）",
    "wikiTitle": "法国民法典",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B3%95%E5%9B%BD%E6%B0%91%E6%B3%95%E5%85%B8",
    "title": "大陸法系現代民法母本法典",
    "region": "歐洲"
  },
  {
    "id": 30,
    "eventId": 367,
    "artifactName": "《物種起源》",
    "fullArtifactText": "馬克思起草《國際工人協會成立宣言》與臨時章程、「工人階級的解放應該由工人階級自己去爭取」",
    "wikiTitle": "物种起源",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%89%A9%E7%A7%8D%E8%B5%B7%E6%BA%90",
    "title": "近代演化生物學開山著作",
    "region": "歐洲"
  },
  {
    "id": 31,
    "eventId": 504,
    "artifactName": "漢摩拉比法典石碑",
    "fullArtifactText": "摩亨佐-達羅大浴池、網格狀城市地下排水道、滑石印章與未解讀印度河文字",
    "wikiTitle": "汉谟拉比法典",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B1%89%E8%B0%9F%E6%8B%89%E6%AF%94%E6%B3%95%E5%85%B8",
    "title": "古代近東最完整楔形文字法典石碑",
    "region": "亞非洲"
  },
  {
    "id": 32,
    "eventId": 507,
    "artifactName": "埃伯斯紙草文稿",
    "fullArtifactText": "烏爾大塔廟（Ziggurat of Ur）、《烏爾納姆法典》（人類已知現存最古老成文法典殘片）",
    "wikiTitle": "埃伯斯纸草文稿",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%9F%83%E4%BC%AF%E6%96%AF%E7%BA%B8%E8%8D%89%E6%96%87%E7%A8%BF",
    "title": "古埃及最詳盡之醫學藥典莎草紙",
    "region": "亞非洲"
  },
  {
    "id": 33,
    "eventId": 509,
    "artifactName": "圖坦卡門黃金面具",
    "fullArtifactText": "2.25米高黑色玄武岩石柱法典（現存羅浮宮，含282條完整法律條文）",
    "wikiTitle": "图坦卡蒙的黄金面具",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%9B%BE%E5%9D%A6%E5%8D%A1%E8%92%99%E7%9A%84%E9%BB%84%E9%87%91%E9%9D%A2%E5%85%B7",
    "title": "古埃及第十八王朝純金國寶面具",
    "region": "亞非洲"
  },
  {
    "id": 34,
    "eventId": 510,
    "artifactName": "卡迭石和平條約",
    "fullArtifactText": "西臺冶鐵爐渣遺存、輕型三輻雙輪戰車設計、泥板哈圖沙王家檔案庫",
    "wikiTitle": "埃及赫梯和约",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%9F%83%E5%8F%8A%E8%B5%AB%E6%A2%AF%E5%92%8C%E7%BA%A6",
    "title": "聯合國總部陳列之最早國際和平條約",
    "region": "亞非洲"
  },
  {
    "id": 35,
    "eventId": 514,
    "artifactName": "居魯士圓柱",
    "fullArtifactText": "純金黃金面具（重10.23公斤）、純金外棺、千件完整隨葬珍寶",
    "wikiTitle": "居鲁士圆柱",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B1%85%E9%B2%81%E5%A3%AB%E5%9C%86%E6%9F%B1",
    "title": "古代波斯帝國宗教寬容宣言泥柱",
    "region": "亞非洲"
  },
  {
    "id": 36,
    "eventId": 517,
    "artifactName": "貝希斯敦銘文",
    "fullArtifactText": "麥迪奈特·哈布神廟海上民族海戰浮雕壁畫、烏加里特古城火焚灰燼層",
    "wikiTitle": "贝希斯敦铭文",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%B4%9D%E5%B8%8C%E6%96%AF%E6%95%A6%E9%93%AD%E6%96%87",
    "title": "破解古代楔形文字之鑰石刻銘文",
    "region": "亞非洲"
  },
  {
    "id": 37,
    "eventId": 530,
    "artifactName": "阿育王石柱四獅柱頭",
    "fullArtifactText": "焚毀聖殿瓦礫層、希伯來聖經《哀歌》、流亡文士於巴比倫系統編纂整理希伯來聖經手稿",
    "wikiTitle": "阿育王柱",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%98%BF%E8%82%B2%E7%8E%8B%E6%9F%B1",
    "title": "孔雀王朝佛教護法國寶石柱",
    "region": "亞非洲"
  },
  {
    "id": 38,
    "eventId": 578,
    "artifactName": "查士丁尼民法大全",
    "fullArtifactText": "百濟贈送之金銅釋迦牟尼佛像、幡蓋經卷書簡、日本首座佛寺向原寺遺構",
    "wikiTitle": "民法大全",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B0%91%E6%B3%95%E5%A4%A7%E5%85%A8",
    "title": "羅馬法集大成之世界法學巨帙",
    "region": "亞非洲"
  },
  {
    "id": 39,
    "eventId": 580,
    "artifactName": "聖索菲亞大教堂穹頂",
    "fullArtifactText": "世俗五戒（事君以忠、事親以孝、交友以信、臨戰無退、殺生有擇）、真興王巡狩碑石刻",
    "wikiTitle": "圣索菲亚大教堂",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%9C%A3%E7%B4%A2%E8%8F%B2%E4%BA%9A%E5%A4%A7%E6%95%99%E5%A0%82",
    "title": "拜占庭帝國建築與鑲嵌藝術最高峰",
    "region": "亞非洲"
  },
  {
    "id": 40,
    "eventId": 585,
    "artifactName": "《古蘭經》早期手抄本",
    "fullArtifactText": "先知《辭朝演說》（Farewell Sermon，宣告人人生而平等、不分種族與膚色）、賽基法會議推舉記錄",
    "wikiTitle": "古兰经",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%8F%A4%E5%85%B0%E7%BB%8F",
    "title": "伊斯蘭教至高聖典",
    "region": "亞非洲"
  },
  {
    "id": 41,
    "eventId": 604,
    "artifactName": "智慧宮希臘哲學譯卷",
    "fullArtifactText": "《一千零一夜》（天方夜譚 Arabian Nights）經典文學原型背景、贈送查理曼大帝之機械報時水鐘與白象",
    "wikiTitle": "智慧之家",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%99%BA%E6%85%A7%E4%B9%8B%E5%AE%B6",
    "title": "伊斯蘭百年翻譯運動跨文明知識典籍",
    "region": "亞非洲"
  },
  {
    "id": 42,
    "eventId": 606,
    "artifactName": "《代數學》",
    "fullArtifactText": "《還原與對消計算概要》（Al-Kitab al-mukhtasar fi hisab al-jabr wal-muqabala，Algebra詞源）、印度數字算術書（Algorithm詞源）",
    "wikiTitle": "代数学_(花拉子米)",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BB%A3%E6%95%B0%E5%AD%A6_(%E8%8A%B1%E6%8B%89%E5%AD%90%E7%B1%B3)",
    "title": "開創代數方程與演算法體系專著",
    "region": "亞非洲"
  },
  {
    "id": 43,
    "eventId": 617,
    "artifactName": "《醫典》手抄本",
    "fullArtifactText": "馬赫迪耶海港堡壘要塞、法蒂瑪綠色軍旗與金第納爾硬幣",
    "wikiTitle": "医典",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%8C%BB%E5%85%B8",
    "title": "中世紀歐亞大陸通用之醫學百科全書",
    "region": "亞非洲"
  },
  {
    "id": 44,
    "eventId": 604,
    "artifactName": "《一千零一夜》",
    "fullArtifactText": "《一千零一夜》（天方夜譚 Arabian Nights）經典文學原型背景、贈送查理曼大帝之機械報時水鐘與白象",
    "wikiTitle": "一千零一夜",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%B8%80%E5%8D%83%E9%9B%B6%E4%B8%80%E5%A4%9C",
    "title": "阿拉伯與波斯民間故事集",
    "region": "亞非洲"
  },
  {
    "id": 45,
    "eventId": 637,
    "artifactName": "吳哥窟浮雕迴廊",
    "fullArtifactText": "海印寺藏八萬一千二百五十八塊樺木雙面雕刻大藏經板（保存七百餘年無蛀無損，世界記憶名錄）",
    "wikiTitle": "吴哥窟",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%90%B4%E5%93%A5%E7%AA%9F",
    "title": "世界最大規模之石造宗教建築瑰寶",
    "region": "亞非洲"
  },
  {
    "id": 46,
    "eventId": 640,
    "artifactName": "成吉思汗金銀牌符與《大扎撒》",
    "fullArtifactText": "忽禿思擲下頭盔高呼「哎呀，伊斯蘭！」鼓舞全軍衝鋒、怯不高戰死降馬圖",
    "wikiTitle": "大扎撒",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%A4%A7%E6%89%8E%E6%92%92",
    "title": "蒙古大帝國法典與大汗令符",
    "region": "亞非洲"
  },
  {
    "id": 47,
    "eventId": 647,
    "artifactName": "卡塔蘭地圖集黃金國王像",
    "fullArtifactText": "《歷史緒論》（Muqaddimah）六大部卷帙、部落團結力「阿薩比亞」（Asabiyyah，社會凝聚力）與拉弗曲線稅率理論先驅",
    "wikiTitle": "卡塔兰地图集",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%8D%A1%E5%A1%94%E5%85%B0%E5%9C%B0%E5%9B%BE%E9%9B%86",
    "title": "中世紀歐洲描繪西非黃金富庶名圖",
    "region": "亞非洲"
  },
  {
    "id": 48,
    "eventId": 669,
    "artifactName": "蘇萊曼尼耶清真寺建築群",
    "fullArtifactText": "中央直徑26.5米無柱大穹頂、伊茲尼克青花彩釉瓷磚壁龕、通風集煙排墨油燈防震工程奇蹟",
    "wikiTitle": "苏莱曼尼耶清真寺",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%8B%8F%E8%8E%B1%E6%9B%BC%E5%B0%BC%E8%80%B6%E6%B8%85%E7%9C%9F%E5%AF%BA",
    "title": "鄂圖曼帝國建築藝術巔峰代表作",
    "region": "亞非洲"
  },
  {
    "id": 49,
    "eventId": 649,
    "artifactName": "古爾-埃米爾青金石陵寢",
    "fullArtifactText": "帖木兒三十頭戰象裝甲突擊、雷霆巴耶濟德被俘鐵籠傳奇、帖木兒薩馬爾罕比比哈努姆清真寺",
    "wikiTitle": "古尔-埃米尔陵",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%8F%A4%E5%B0%94-%E5%9F%83%E7%B1%B3%E5%B0%94%E9%99%B5",
    "title": "帖木兒帝國中亞伊斯蘭建築瑰寶",
    "region": "亞非洲"
  },
  {
    "id": 50,
    "eventId": 689,
    "artifactName": "泰姬瑪哈陵純白大理石陵寢",
    "fullArtifactText": "純白大理石八角陵寢、皮特拉·杜拉（Pietra Dura，寶石鑲嵌大理石工藝）、對稱水池倒影花園",
    "wikiTitle": "泰姬陵",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B3%B0%E5%A7%AC%E9%99%B5",
    "title": "世界新七大奇蹟與蒙兀兒建築絕代珍寶",
    "region": "亞非洲"
  },
  {
    "id": 51,
    "eventId": 679,
    "artifactName": "德川幕府禁教令牌",
    "fullArtifactText": "納黎萱騎戰象單挑陣斬緬甸王儲青銅浮雕、阿瑜陀耶帕西桑碧寺",
    "wikiTitle": "德川家康",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%BE%B7%E5%B7%9D%E5%AE%B6%E5%BA%B7",
    "title": "日本江戶幕府鎖國與社會體制令碑",
    "region": "亞非洲"
  },
  {
    "id": 52,
    "eventId": 320,
    "artifactName": "羅塞塔石碑",
    "fullArtifactText": "羅塞塔石碑（Rosetta Stone，鐫刻古埃及象形文、通俗體與古希臘文三種文字的黑色玄武岩碑）",
    "wikiTitle": "罗塞塔石碑",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%BD%97%E5%A1%9E%E5%A1%94%E7%9F%B3%E7%A2%91",
    "title": "大英博物館鎮館之寶解密古埃及文字關鍵",
    "region": "亞非洲"
  },
  {
    "id": 53,
    "eventId": 742,
    "artifactName": "《神奈川衝浪裏》",
    "fullArtifactText": "《神奈川沖浪裏》（巨浪與富士山木版多色浮世繪）、《凱風快晴》（紅富士）、普魯士藍（Berliner Blau）化學進口礦物顏料大膽應用",
    "wikiTitle": "神奈川冲浪里",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A5%9E%E5%A5%88%E5%B7%9D%E5%86%B2%E6%B5%AA%E9%87%8C",
    "title": "享譽世界之日本江戶時代浮世繪經典",
    "region": "亞非洲"
  },
  {
    "id": 54,
    "eventId": 561,
    "artifactName": "死海古卷",
    "fullArtifactText": "死海洞穴出土巴爾·科赫巴起義軍信件公函、起義獨立猶太銀幣（銘刻「耶路撒冷自由」）",
    "wikiTitle": "死海古卷",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%AD%BB%E6%B5%B7%E5%8F%A4%E5%8D%B7",
    "title": "現存最古老希伯來聖經手抄本卷軸",
    "region": "亞非洲"
  },
  {
    "id": 55,
    "eventId": 856,
    "artifactName": "《吉檀迦利》詩集",
    "fullArtifactText": "《吉檀迦利》（Gitanjali / 獻給神的歌讚，純真靈性抒情詩集）、桑蒂尼蓋登國際大學（Visva-Bharati University，世界知識匯聚聖地）",
    "wikiTitle": "吉檀迦利",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%90%89%E6%AA%80%E8%BF%A6%E5%88%A9",
    "title": "亞洲首部獲諾貝爾文學獎之獻詩集",
    "region": "亞非洲"
  },
  {
    "id": 56,
    "eventId": 894,
    "artifactName": "聖雄甘地木製手搖紡車",
    "fullArtifactText": "甘地臨終喃喃呼喚「羅摩！羅摩！」（He Ram!）、遺留之圓眼鏡、手搖紡車與一雙草鞋、尼赫魯廣播演說「光明已從我們的生命中離去」",
    "wikiTitle": "圣雄甘地",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%9C%A3%E9%9B%84%E7%94%98%E5%9C%B0",
    "title": "印度非暴力抵抗與經濟獨立象徵",
    "region": "亞非洲"
  },
  {
    "id": 57,
    "eventId": 375,
    "artifactName": "蘇伊士運河竣工工程圖",
    "fullArtifactText": "開通慶典豪華遊艇隊列、威爾第歌劇《阿依達》（為慶祝劇院開演創作）、英國收購運河控股股票",
    "wikiTitle": "苏伊士运河",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%8B%8F%E4%BC%8A%E5%A3%AB%E8%BF%90%E6%B2%B3",
    "title": "連接地中海與紅海之世界航運動脈",
    "region": "亞非洲"
  },
  {
    "id": 58,
    "eventId": 553,
    "artifactName": "佩特拉卡茲尼神殿",
    "fullArtifactText": "卡茲尼神殿（Al-Khazneh，從粉紅砂岩峭壁直接開鑿出四十米高立柱神殿門面）、複雜暗渠蓄水池系統",
    "wikiTitle": "卡兹尼神殿",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%8D%A1%E5%85%B9%E5%B0%BC%E7%A5%9E%E6%AE%BF",
    "title": "約旦沙漠岩鑿古典建築奇蹟",
    "region": "亞非洲"
  },
  {
    "id": 59,
    "eventId": 636,
    "artifactName": "大辛巴威石造衛城",
    "fullArtifactText": "《詳定古今禮文》金屬活字印刷紀錄、現存法國國家圖書館之1377年高麗金屬活字印刷《白雲和尚抄錄佛祖直指心體要節》（Jikji，聯合國世界記憶名錄認證）",
    "wikiTitle": "大津巴布韦",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%A4%A7%E6%B4%A5%E5%B7%B4%E5%B8%83%E9%9F%A6",
    "title": "南部非洲古代石構衛城文明遺跡",
    "region": "亞非洲"
  },
  {
    "id": 60,
    "eventId": 635,
    "artifactName": "拉利貝拉岩石教堂",
    "fullArtifactText": "德里顧統高塔（Qutb Minar，高72.5米紅砂岩伊斯蘭勝利宣禮塔，世界遺產）、烏瓦特·伊斯蘭清真寺",
    "wikiTitle": "拉利贝拉岩石教堂",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%8B%89%E5%88%A9%E8%B4%9D%E6%8B%89%E5%B2%A9%E7%9F%B3%E6%95%99%E5%A0%82",
    "title": "衣索比亞獨石鑿刻基督教教堂群",
    "region": "亞非洲"
  },
  {
    "id": 61,
    "eventId": 1001,
    "artifactName": "二里頭綠松石龍形器",
    "fullArtifactText": "二里頭綠松石龍形器、乳釘紋銅爵、宮殿夯土基址",
    "wikiTitle": "二里头遗址",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BA%8C%E9%87%8C%E5%A4%B4%E9%81%97%E5%9D%80",
    "title": "華夏早期青銅禮器與「華夏第一龍」",
    "region": "中國"
  },
  {
    "id": 62,
    "eventId": 1005,
    "artifactName": "后母戊鼎 (司母戊鼎)",
    "fullArtifactText": "后母戊鼎（原稱司母戊鼎，重達832.84公斤，世界青銅器之冠）、婦好鴞尊、婦好三聯甗",
    "wikiTitle": "后母戊鼎",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%90%8E%E6%AF%8D%E6%88%8A%E9%BC%8E",
    "title": "世界商周青銅鑄造技術最高殿堂之寶",
    "region": "中國"
  },
  {
    "id": 63,
    "eventId": 1004,
    "artifactName": "殷墟商代甲骨文片",
    "fullArtifactText": "殷墟甲骨刻辭（王懿榮發現、董作賓董理）、十二萬片卜辭",
    "wikiTitle": "甲骨文",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%94%B2%E9%AA%A8%E6%96%87",
    "title": "漢字最早成熟體系信史文字",
    "region": "中國"
  },
  {
    "id": 64,
    "eventId": 1008,
    "artifactName": "何尊「宅茲中國」青銅銘文",
    "fullArtifactText": "何尊（銘文首現「宅茲中國」四大字）、《周禮》、《儀禮》、《周易》卦辭",
    "wikiTitle": "何尊",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BD%95%E5%B0%8A",
    "title": "「中國」一詞最早實物見證青銅酒器",
    "region": "中國"
  },
  {
    "id": 65,
    "eventId": 1012,
    "artifactName": "毛公鼎金文銘文",
    "fullArtifactText": "毛公鼎（現藏台北國立故宮博物院，鑄有499字長篇金文，天下第一銘文）、虢季子白盤",
    "wikiTitle": "毛公鼎",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%AF%9B%E5%85%AC%E9%BC%8E",
    "title": "篇幅最長之天下第一西周金文寶鼎",
    "region": "中國"
  },
  {
    "id": 66,
    "eventId": 1022,
    "artifactName": "曲阜孔廟祭孔禮器",
    "fullArtifactText": "曲阜孔廟、孔府、孔林（世界文化遺產「三孔」）",
    "wikiTitle": "孔庙",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%AD%94%E5%BA%99",
    "title": "儒家祭祀天地聖人之千年宗廟遺存",
    "region": "中國"
  },
  {
    "id": 67,
    "eventId": 1024,
    "artifactName": "子產鑄刑書青銅鼎",
    "fullArtifactText": "青銅刑書鼎、《左傳·昭公六年》",
    "wikiTitle": "子产",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%AD%90%E4%BA%A7",
    "title": "中國歷史上首部向公眾公布之成文法",
    "region": "中國"
  },
  {
    "id": 68,
    "eventId": 1025,
    "artifactName": "馬王堆帛書《老子》",
    "fullArtifactText": "郭店楚墓竹簡本《老子》、馬王堆漢墓帛書《老子》甲乙本、《道德經》五千言",
    "wikiTitle": "道德经",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%81%93%E5%BE%B7%E7%BB%8F",
    "title": "道家哲學開山鼻祖五千言古本",
    "region": "中國"
  },
  {
    "id": 69,
    "eventId": 1027,
    "artifactName": "銀雀山漢簡《孫子兵法》",
    "fullArtifactText": "銀雀山漢墓竹簡《孫子兵法十三篇》（「知己知彼，百戰不殆」）",
    "wikiTitle": "孙子兵法",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%AD%99%E5%AD%90%E5%85%B5%E6%B3%95",
    "title": "世界兵學聖典最早竹簡出土實物",
    "region": "中國"
  },
  {
    "id": 70,
    "eventId": 1030,
    "artifactName": "越王勾踐自作用劍",
    "fullArtifactText": "越王勾踐自作用劍（湖北省博物館藏「天下第一劍」）、吳王夫差矛",
    "wikiTitle": "越王勾践剑",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%B6%8A%E7%8E%8B%E5%8B%BE%E8%B7%B5%E5%89%91",
    "title": "先秦青銅合金冶煉與菱形暗紋技術頂峰",
    "region": "中國"
  },
  {
    "id": 71,
    "eventId": 1035,
    "artifactName": "曾侯乙編鐘",
    "fullArtifactText": "曾侯乙編鐘（全套六十五件，總重約五噸，一鐘雙音、銘文三千七百餘字樂律理論）",
    "wikiTitle": "曾侯乙编钟",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%9B%BE%E4%BE%AF%E4%B9%99%E7%BC%96%E9%92%9F",
    "title": "改寫世界音樂史之古代青銅鑄樂國寶",
    "region": "中國"
  },
  {
    "id": 72,
    "eventId": 1037,
    "artifactName": "商鞅方升",
    "fullArtifactText": "商鞅方升（秦度量衡統一法定標準容器）、《商君書》",
    "wikiTitle": "商鞅方升",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%95%86%E9%9E%85%E6%96%B9%E5%8D%87",
    "title": "秦國變法度量衡標準化器物見證",
    "region": "中國"
  },
  {
    "id": 73,
    "eventId": 1045,
    "artifactName": "天回醫簡與《難經》",
    "fullArtifactText": "《難經》、《扁鵲內經》（外經）、成都老官山漢墓出土天回醫簡",
    "wikiTitle": "扁鹊",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%89%81%E9%B9%8A",
    "title": "失傳扁鵲醫書竹簡與針灸經穴實物",
    "region": "中國"
  },
  {
    "id": 74,
    "eventId": 1049,
    "artifactName": "都江堰水利工程",
    "fullArtifactText": "魚嘴分水堤、飛沙堰溢洪道、寶瓶口引水口、二王廟",
    "wikiTitle": "都江堰",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%83%BD%E6%B1%9F%E5%A0%B0",
    "title": "無壩自流灌溉二千二百年世界水利遺產",
    "region": "中國"
  },
  {
    "id": 75,
    "eventId": 1057,
    "artifactName": "秦始皇陵兵馬俑",
    "fullArtifactText": "秦始皇陵兵馬俑（世界第八大奇蹟）、傳國玉璽「受命於天，既壽永昌」",
    "wikiTitle": "秦始皇兵马俑",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%85%B5%E9%A9%AC%E4%BF%91",
    "title": "大一統中央集權軍威陶俑地下軍團",
    "region": "中國"
  },
  {
    "id": 76,
    "eventId": 1058,
    "artifactName": "泰山刻石 (李斯小篆)",
    "fullArtifactText": "泰山刻石、嶧山刻石（李斯小篆書法標準）、秦權量詔版、秦半兩錢",
    "wikiTitle": "泰山刻石",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B3%B0%E5%B1%B1%E5%88%BB%E7%9F%B3",
    "title": "秦朝「書同文」小篆標準字體碑石",
    "region": "中國"
  },
  {
    "id": 77,
    "eventId": 1073,
    "artifactName": "馬王堆素紗襌衣",
    "fullArtifactText": "素紗襌衣（重僅49克）、T型帛畫、帛書《老子》《五星占》《導引圖》《天文氣象雜占》",
    "wikiTitle": "马王堆汉墓",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%A9%AC%E7%8E%8B%E5%A0%86%E6%B1%89%E5%A2%93",
    "title": "西漢頂級繅絲織造工藝絕倫瑰寶",
    "region": "中國"
  },
  {
    "id": 78,
    "eventId": 1080,
    "artifactName": "「馬踏飛燕」銅奔馬",
    "fullArtifactText": "武威雷台漢墓「馬踏飛燕」（中國旅遊標誌）、懸泉置漢簡、河西四郡行政體系",
    "wikiTitle": "铜奔马",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%93%9C%E5%A5%94%E9%A9%AC",
    "title": "漢代青銅雕塑藝術駿馬凌空神作",
    "region": "中國"
  },
  {
    "id": 79,
    "eventId": 1085,
    "artifactName": "《史記》",
    "fullArtifactText": "《史記》一百三十篇五十二萬六千五百字（十二本紀、十表、八書、三十世家、七十列傳）",
    "wikiTitle": "史记",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%8F%B2%E8%AE%B0",
    "title": "司馬遷「史家之絕唱，無韻之離騷」通史",
    "region": "中國"
  },
  {
    "id": 80,
    "eventId": 1101,
    "artifactName": "《說文解字》",
    "fullArtifactText": "《說文解字》十四篇九千三百五十三字、五百四十部首編排體系",
    "wikiTitle": "说文解字",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%AF%B4%E6%96%87%E8%A7%A3%E5%AD%97",
    "title": "漢字六書構造規律之字典鼻祖",
    "region": "中國"
  },
  {
    "id": 81,
    "eventId": 1102,
    "artifactName": "候風地動儀",
    "fullArtifactText": "候風地動儀（倒立擺八龍含珠吐蟾設計）、水運渾天儀、月食成因月道日道研究",
    "wikiTitle": "候风地动仪",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%80%99%E9%A3%8E%E5%9C%B0%E5%8A%A8%E4%BB%AA",
    "title": "世界首部驗震力學儀器奇蹟",
    "region": "中國"
  },
  {
    "id": 82,
    "eventId": 1105,
    "artifactName": "熹平石經",
    "fullArtifactText": "熹平石經殘石（四十六塊巨大石碑、二十萬字標準隸書字體）",
    "wikiTitle": "熹平石经",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%86%B9%E5%B9%B3%E7%9F%B3%E7%BB%8F",
    "title": "中國首部官方石刻標準儒家經書",
    "region": "中國"
  },
  {
    "id": 83,
    "eventId": 1131,
    "artifactName": "《蘭亭集序》神龍本",
    "fullArtifactText": "《蘭亭集序》唐太宗命馮承素雙鉤填墨神龍本（天下第一行書）、定武蘭亭石刻",
    "wikiTitle": "兰亭集序",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%85%B0%E4%BA%AD%E9%9B%86%E5%BA%8F",
    "title": "中華書法藝術之巔天下第一行書",
    "region": "中國"
  },
  {
    "id": 84,
    "eventId": 1136,
    "artifactName": "《桃花源記》",
    "fullArtifactText": "《陶淵明集》（《飲酒》「採菊東籬下，悠然見南山」、《歸園田居》《桃花源記》）",
    "wikiTitle": "桃花源记",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%A1%83%E8%8A%B1%E6%BA%90%E8%AE%B0",
    "title": "東方烏托邦理想文人精神伊甸園",
    "region": "中國"
  },
  {
    "id": 85,
    "eventId": 1141,
    "artifactName": "《大明曆》",
    "fullArtifactText": "《大明曆》、圓周率「祖率」界於3.1415926與3.1415927之間、密率355/113、祖暅原理",
    "wikiTitle": "祖冲之",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%A5%96%E5%86%B2%E4%B9%8B",
    "title": "南北朝精確圓周率與古代先進曆法",
    "region": "中國"
  },
  {
    "id": 86,
    "eventId": 1154,
    "artifactName": "趙州橋 (安濟橋)",
    "fullArtifactText": "趙州橋（大單孔圓弧敞肩石拱橋，跨度37.02米，兩肩各闢兩小拱減輕自重與洪流衝擊）",
    "wikiTitle": "赵州桥",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%B5%B5%E5%B7%9E%E6%A1%A5",
    "title": "千四百年屹立不倒古代橋樑工程奇蹟",
    "region": "中國"
  },
  {
    "id": 87,
    "eventId": 1162,
    "artifactName": "西安大雁塔與譯經手卷",
    "fullArtifactText": "西安大慈恩寺大雁塔（玄奘藏經處）、《大唐西域記》十二卷、漢譯《大般若經》《成唯識論》",
    "wikiTitle": "大雁塔",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%A4%A7%E9%9B%81%E5%A1%94",
    "title": "盛唐絲路佛經翻譯保存地標建築",
    "region": "中國"
  },
  {
    "id": 88,
    "eventId": 1189,
    "artifactName": "敦煌唐咸通本《金剛經》",
    "fullArtifactText": "雕版印刷《金剛經》長卷（卷軸長533厘米，包含首扉佛陀祇樹給孤獨園說法精緻木刻版畫）",
    "wikiTitle": "金刚经",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%87%91%E5%88%9A%E7%BB%8F",
    "title": "世界現存最早有明確刊印年份雕版印刷品",
    "region": "中國"
  },
  {
    "id": 89,
    "eventId": 1223,
    "artifactName": "《清明上河圖》",
    "fullArtifactText": "《清明上河圖》（現藏北京故宮博物院，絹本設色長528.7厘米，精細繪製八百一十四個人物、舟船、牲畜、虹橋市肆）",
    "wikiTitle": "清明上河图",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B8%85%E6%98%8E%E4%B8%8A%E6%B2%B3%E5%9B%BE",
    "title": "北宋汴京風俗社會畫卷第一神品",
    "region": "中國"
  },
  {
    "id": 90,
    "eventId": 1290,
    "artifactName": "《永樂大典》",
    "fullArtifactText": "《永樂大典》（二萬二千八百七十七卷、一萬一千零九十五冊、三億七千萬字，《大英百科全書》譽為世界有史以來最大百科全書）",
    "wikiTitle": "永乐大典",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%B0%B8%E4%B9%90%E5%A4%A7%E5%85%B8",
    "title": "古代世界最大類書皇皇巨帙",
    "region": "中國"
  },
  {
    "id": 91,
    "eventId": 1503,
    "artifactName": "奧爾梅克巨石頭像",
    "fullArtifactText": "巨型玄武岩人頭雕像、翡翠美洲虎神像、早期象形符號與球賽儀式場地",
    "wikiTitle": "奥尔梅克文明",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%A5%A5%E5%B0%94%E6%A2%85%E5%85%8B%E6%96%87%E6%98%8E",
    "title": "美洲母文明玄武岩巨像",
    "region": "美澳洲"
  },
  {
    "id": 92,
    "eventId": 1508,
    "artifactName": "特奧蒂瓦坎太陽金字塔",
    "fullArtifactText": "太陽金字塔、亡者大道、羽蛇神廟、三合一灰泥彩繪壁畫",
    "wikiTitle": "特奥蒂瓦坎",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%89%B9%E5%A5%A5%E8%92%82%E7%93%A6%E5%9D%8E",
    "title": "中美洲古代巨大階梯式宗教金字塔",
    "region": "美澳洲"
  },
  {
    "id": 93,
    "eventId": 1520,
    "artifactName": "馬丘比丘因蒂瓦塔納日晷",
    "fullArtifactText": "馬丘比丘空中城堡、薩克塞華曼巨石城牆、印加路網（Qhapaq Ñan，逾三萬公里）、基普（Quipu）結繩記帳制度",
    "wikiTitle": "马丘比丘",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%A9%AC%E4%B8%98%E6%AF%94%E4%B8%98",
    "title": "安地斯高山文明精密石造天文祭石",
    "region": "美澳洲"
  },
  {
    "id": 94,
    "eventId": 1519,
    "artifactName": "阿茲特克太陽曆石",
    "fullArtifactText": "太陽曆石（Piedra del Sol）、大神廟（Templo Mayor）、奇南帕水上人工浮島農田（Chinampa）",
    "wikiTitle": "阿兹特克太阳历石",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E9%98%BF%E5%85%B9%E7%89%B9%E5%85%8B%E5%A4%AA%E9%98%B3%E5%8E%86%E7%9F%B3",
    "title": "墨西哥國立人類學博物館鎮館太陽神曆石",
    "region": "美澳洲"
  },
  {
    "id": 95,
    "eventId": 1532,
    "artifactName": "五月花號公約",
    "fullArtifactText": "《五月花號公約》（Mayflower Compact）盟誓文本、普利茅斯開拓石碑",
    "wikiTitle": "五月花号公约",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E4%BA%94%E6%9C%88%E8%8A%B1%E5%8F%B7%E5%85%AC%E7%BA%A6",
    "title": "美洲自治與早期憲政社會契約文獻",
    "region": "美澳洲"
  },
  {
    "id": 96,
    "eventId": 1542,
    "artifactName": "美國《獨立宣言》手寫原件",
    "fullArtifactText": "《獨立宣言》（Declaration of Independence）簽字羊皮紙原件、自由鐘（Liberty Bell）",
    "wikiTitle": "美國獨立宣言",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%BE%8E%E5%9C%8B%E7%8D%A8%E7%AB%8B%E5%AE%A3%E8%A8%80",
    "title": "「人皆生而平等」開創合眾國立國文書",
    "region": "美澳洲"
  },
  {
    "id": 97,
    "eventId": 1543,
    "artifactName": "《美利堅合眾國憲法》",
    "fullArtifactText": "《美利堅合眾國憲法》手抄原件、《聯邦黨人文集》（The Federalist Papers）",
    "wikiTitle": "美国宪法",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E7%BE%8E%E5%9B%BD%E5%AE%AA%E6%B3%95",
    "title": "世界現存最古老成文聯邦憲法",
    "region": "美澳洲"
  },
  {
    "id": 98,
    "eventId": 1563,
    "artifactName": "《解放黑奴宣言》手稿",
    "fullArtifactText": "《解放奴隸宣言》（Emancipation Proclamation）總統手令簽署本、《蓋茨堡演說》手稿",
    "wikiTitle": "解放黑奴宣言",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E8%A7%A3%E6%94%BE%E9%BB%91%E5%A5%B4%E5%AE%A3%E8%A8%80",
    "title": "終結美國奴隸制歷史性總統公告",
    "region": "美澳洲"
  },
  {
    "id": 99,
    "eventId": 1576,
    "artifactName": "巴拿馬運河通航工程",
    "fullArtifactText": "安孔號（SS Ancon）首航航海鐘、加通大壩（當時全球最大人工土石壩）",
    "wikiTitle": "巴拿马运河",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E5%B7%B4%E6%8B%BF%E9%A9%AC%E8%BF%90%E6%B2%B3",
    "title": "貫通大西洋與太平洋之工程奇蹟",
    "region": "美澳洲"
  },
  {
    "id": 100,
    "eventId": 1587,
    "artifactName": "《我有一個夢想》手稿",
    "fullArtifactText": "《1964年民權法案》（Civil Rights Act of 1964）簽署用鋼筆、《我有一個夢想》錄音講稿",
    "wikiTitle": "我有一个梦想",
    "wikiUrl": "https://zh.wikipedia.org/wiki/%E6%88%91%E6%9C%89%E4%B8%80%E4%B8%AA%E6%A2%A6%E6%83%B3",
    "title": "民權運動最高峰歷史演講稿",
    "region": "美澳洲"
  }
];

/**
 * 以 eventId 為索引的高效查找 Map
 */
export const FEATURED_ARTIFACTS_MAP = new Map<number, FeaturedArtifact>(
  FEATURED_ARTIFACTS_LIST.map(item => [item.eventId, item])
);

/**
 * 依事件 ID 取得精選關鍵物件
 */
export function getFeaturedArtifact(eventId: number): FeaturedArtifact | undefined {
  return FEATURED_ARTIFACTS_MAP.get(eventId);
}

/**
 * 檢查該事件是否具備精選關鍵物件
 */
export function hasFeaturedArtifact(eventId: number): boolean {
  return FEATURED_ARTIFACTS_MAP.has(eventId);
}

/**
 * 取得物件的維基百科連結：
 * 1. 若該事件為精選關鍵物件，優先回傳精選的標準維基百科連結。
 * 2. 否則將物件文字進行簡化清理，產生標準中文維基百科搜尋/條目連結。
 */
export function getArtifactWikiUrl(rawArtifacts: string, eventId?: number): string {
  if (eventId) {
    const featured = FEATURED_ARTIFACTS_MAP.get(eventId);
    if (featured) {
      return featured.wikiUrl;
    }
  }

  // 取第一個頓號、逗號或括號前的核心物件名
  const cleanName = rawArtifacts
    .split(/[、,，;；（(]/)[0]
    .replace(/[《》「」『』]/g, '')
    .trim();

  return `https://zh.wikipedia.org/wiki/${encodeURIComponent(cleanName || rawArtifacts)}`;
}
