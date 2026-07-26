/**
 * 大地图英文名
 * @since 0.45.1
 */
export type MapName =
  | "Teyvat" // 提瓦特大陆
  | "TheChasm" // 层岩巨渊
  | "Enkanomiya" // 渊下宫
  | "SeaOfBygoneEras" // 旧日之海
  | "AncientSacredMountain" // 远古圣山
  | "TempleOfSpace" // 空之神殿
  | "MoonCanon" // 霜月
  | (string & {});

/**
 * 国家名称
 * @since 0.43.1
 */
export type CountryName =
  | "蒙德"
  | "璃月"
  | "稻妻"
  | "须弥"
  | "枫丹"
  | "纳塔"
  | "挪德卡莱"
  | "至冬"
  | (string & {});

/**
 * 大地图切换区域中文名
 * @since 0.45.1
 */
export type Area =
  | "提瓦特大陆"
  | "层岩巨渊"
  | "层岩巨渊·地下矿区"
  | "渊下宫"
  | "旧日之海"
  | "远古圣山"
  | "空之神殿"
  | "霜月"
  | CountryName;

/**
 * 小地图匹配方式
 * @since 0.48.0
 */
export type MapMatchMethod =
  | "TemplateMatch" // 模板匹配
  | "SIFT" // SIFT 特征匹配
  | (string & {});

export {};
