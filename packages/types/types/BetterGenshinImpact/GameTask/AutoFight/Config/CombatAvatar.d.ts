import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Collections/Generic/List";
import type { AvatarName } from "../Model/Avatar";

/**
 * 战斗角色武器类型编码（`combat_avatar.json` 的 `weapon` 字段）
 * @since 0.50.0
 */
export type CombatAvatarWeaponCode =
  | "0" // 未知 / 占位
  | "1" // 单手剑
  | "10" // 法器
  | "11" // 双手剑
  | "12" // 弓
  | "13" // 长柄武器
  | (string & {});

/**
 * 战斗角色英文名（`combat_avatar.json` 的 `nameEn`）
 * 与 `AvatarName` 一一对应、顺序对齐；配置标准英文名，不是 YOLO 侧面头像 class（分类结果可能含 `Costume` 后缀）
 * @since 0.50.0
 */
export type CombatAvatarNameEn =
  | "Unknown"
  | "Ayaka"
  | "Qin"
  | "Traveler"
  | "PlayerGirl"
  | "PlayerBoy"
  | "Lisa"
  | "Barbara"
  | "Kaeya"
  | "Diluc"
  | "Razor"
  | "Ambor"
  | "Venti"
  | "Xiangling"
  | "Beidou"
  | "Xingqiu"
  | "Xiao"
  | "Ningguang"
  | "Klee"
  | "Zhongli"
  | "Fischl"
  | "Bennett"
  | "Tartaglia"
  | "Noel"
  | "Qiqi"
  | "Chongyun"
  | "Ganyu"
  | "Albedo"
  | "Diona"
  | "Mona"
  | "Keqing"
  | "Sucrose"
  | "Xinyan"
  | "Rosaria"
  | "Hutao"
  | "Kazuha"
  | "Feiyan"
  | "Yoimiya"
  | "Tohma"
  | "Eula"
  | "Shougun"
  | "Sayu"
  | "Kokomi"
  | "Gorou"
  | "Sara"
  | "Itto"
  | "Yae"
  | "Heizo"
  | "Yelan"
  | "Momoka"
  | "Aloy"
  | "Shenhe"
  | "Yunjin"
  | "Shinobu"
  | "Ayato"
  | "Collei"
  | "Dori"
  | "Tighnari"
  | "Nilou"
  | "Cyno"
  | "Candace"
  | "Nahida"
  | "Layla"
  | "Wanderer"
  | "Faruzan"
  | "Yaoyao"
  | "Alhatham"
  | "Dehya"
  | "Mika"
  | "Kaveh"
  | "Baizhuer"
  | "Linette"
  | "Liney"
  | "Freminet"
  | "Wriothesley"
  | "Neuvillette"
  | "Charlotte"
  | "Furina"
  | "Chevreuse"
  | "Navia"
  | "Gaming"
  | "Liuyun"
  | "Chiori"
  | "Sigewinne"
  | "Arlecchino"
  | "Sethos"
  | "Clorinde"
  | "Emilie"
  | "Kachina"
  | "Kinich"
  | "Mualani"
  | "Xilonen"
  | "Chasca"
  | "Olorun"
  | "Mavuika"
  | "Citlali"
  | "Lanyan"
  | "Mizuki"
  | "Iansan"
  | "Varesa"
  | "Escoffier"
  | "Ifa"
  | "SkirkNew"
  | "Dahlia"
  | "Ineffa"
  | "MannequinBoy"
  | "MannequinGirl"
  | "Lauma"
  | "Flins"
  | "Aino"
  | "Nefer"
  | "Durin"
  | "Jahoda"
  | "Columbina"
  | "Zibai"
  | "Illuga"
  | "Varka"
  | "Linnea"
  | "Lohen"
  | "Nicole"
  | "Prune"
  | "Marionette"
  | "Alyosha"
  | "Odette"
  | (string & {});

/**
 * 战斗角色静态配置
 * @since 0.50.0
 */
declare const combatAvatarBrand: unique symbol;
export interface CombatAvatar extends ClrHostValue {
  readonly [combatAvatarBrand]: true;
  /**
   * 唯一标识
   * @since 0.50.0
   */
  id: string;
  /**
   * 角色名称（中文）
   * @since 0.50.0
   */
  name: AvatarName;
  /**
   * 角色英文名（配置标准名，非 YOLO class）
   * @since 0.50.0
   */
  nameEn: CombatAvatarNameEn;
  /**
   * 武器类型编码（非中文武器名）
   * @since 0.50.0
   */
  weapon: CombatAvatarWeaponCode;
  /**
   * 元素战技冷却时长，单位秒
   * @since 0.50.0
   */
  skillCd: number;
  /**
   * 长按元素战技冷却时长，单位秒
   * @since 0.50.0
   */
  skillHoldCd: number;
  /**
   * 元素爆发冷却时长，单位秒
   * @since 0.50.0
   */
  burstCd: number;
  /**
   * 角色别名列表
   * @since 0.50.0
   */
  alias: System.Collections.Generic.List<string>;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Config {
    type CombatAvatar = import("./CombatAvatar").CombatAvatar;
    type CombatAvatarNameEn = import("./CombatAvatar").CombatAvatarNameEn;
    type CombatAvatarWeaponCode = import("./CombatAvatar").CombatAvatarWeaponCode;
  }
}

export interface CombatAvatarHostType extends HostType<
  CombatAvatar,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.50.0
   */
  new (): CombatAvatar;
}

export {};
