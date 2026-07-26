import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Collections/Generic/List";

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
  name: string;
  /**
   * 角色英文名
   * @since 0.50.0
   */
  nameEn: string;
  /**
   * 武器类型
   * @since 0.50.0
   */
  weapon: string;
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
