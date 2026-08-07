import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/IEnumerable";
import "../../../System/Collections/Generic/List";
import type { AvatarName } from "../AutoFight/Model/Avatar";

/**
 * 角色元素类型
 * 来源：上游 `Assets/Model/AvatarGridIcon/avatar.csv` 的 `element_type`
 * @since 0.63.0
 */
export type CharacterElementType = "火" | "水" | "雷" | "冰" | "风" | "岩" | "草" | (string & {});

/**
 * 单个角色的养成信息识别结果；未请求或未识别的字段为 null
 * @since 0.63.0
 */
declare const characterDevelopmentResultBrand: unique symbol;
export interface CharacterDevelopmentResult extends ClrHostValue {
  readonly [characterDevelopmentResultBrand]: true;
  /**
   * 调用方传入并规范化后的角色名称
   * @since 0.63.0
   */
  characterName: AvatarName;
  /**
   * 角色元素类型；旅行者和奇偶由模型识别，其余角色来自头像原型表
   * @since 0.63.0
   */
  elementType: CharacterElementType | null;
  /**
   * 角色当前等级
   * @since 0.63.0
   */
  level: number | null;
  /**
   * 角色当前等级上限
   * @since 0.63.0
   */
  levelLimit: number | null;
  /**
   * 经物品原型表编辑距离纠错后的标准武器名称
   * @since 0.63.0
   */
  weaponName: string | null;
  /**
   * 武器当前等级
   * @since 0.63.0
   */
  weaponLevel: number | null;
  /**
   * 武器当前等级上限
   * @since 0.63.0
   */
  weaponLevelLimit: number | null;
  /**
   * 普通攻击的界面显示等级
   * @since 0.63.0
   */
  attackLevel: number | null;
  /**
   * 普通攻击是否显示命座带来的固定等级加成
   * @since 0.63.0
   */
  attackHasBonus: boolean | null;
  /**
   * 元素战技的界面显示等级
   * @since 0.63.0
   */
  skillLevel: number | null;
  /**
   * 元素战技是否显示命座带来的固定等级加成
   * @since 0.63.0
   */
  skillHasBonus: boolean | null;
  /**
   * 元素爆发的界面显示等级
   * @since 0.63.0
   */
  burstLevel: number | null;
  /**
   * 元素爆发是否显示命座带来的固定等级加成
   * @since 0.63.0
   */
  burstHasBonus: boolean | null;
}

/**
 * 角色养成信息识别任务入口
 * @since 0.63.0
 */
declare const characterDevelopmentTaskBrand: unique symbol;
export interface CharacterDevelopmentTask extends ClrHostValue {
  readonly [characterDevelopmentTaskBrand]: true;
  /**
   * 识别单个角色的养成信息
   * @param characterName 目标角色名称或已有别名
   * @param categories 以分号分隔的 `属性`、`武器`、`天赋` 分类，null 表示全部
   * @returns 在任务完成后兑现识别结果的 Promise
   * @since 0.63.0
   */
  getCharacter(characterName: AvatarName): Promise<CharacterDevelopmentResult>;
  getCharacter(
    characterName: AvatarName,
    categories: string | null
  ): Promise<CharacterDevelopmentResult>;
  /**
   * 识别多个角色的养成信息
   * @param characterNames 字符串集合或 ClearScript JS Array；不得为空或传入单个字符串
   * @param categories 以分号分隔的 `属性`、`武器`、`天赋` 分类，null 表示全部
   * @returns 在任务完成后兑现识别结果列表的 Promise
   * @since 0.63.0
   */
  getMultiCharacters(
    characterNames: readonly AvatarName[] | System.Collections.Generic.IEnumerableInput<AvatarName>
  ): Promise<System.Collections.Generic.List<CharacterDevelopmentResult>>;
  getMultiCharacters(
    characterNames: readonly AvatarName[] | System.Collections.Generic.IEnumerableInput<AvatarName>,
    categories: string | null
  ): Promise<System.Collections.Generic.List<CharacterDevelopmentResult>>;
}

declare global {
  namespace BetterGenshinImpact.GameTask.CharacterDevelopment {
    type CharacterElementType = import("./CharacterDevelopmentTask").CharacterElementType;
    type CharacterDevelopmentResult =
      import("./CharacterDevelopmentTask").CharacterDevelopmentResult;
    type CharacterDevelopmentTask = import("./CharacterDevelopmentTask").CharacterDevelopmentTask;
  }
}

export interface CharacterDevelopmentResultHostType extends HostType<
  CharacterDevelopmentResult,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造空识别结果
   * @since 0.63.0
   */
  new (): CharacterDevelopmentResult;
}

export interface CharacterDevelopmentTaskHostType extends HostType<
  CharacterDevelopmentTask,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造角色养成信息识别任务
   * @since 0.63.0
   */
  new (): CharacterDevelopmentTask;
}

export {};
