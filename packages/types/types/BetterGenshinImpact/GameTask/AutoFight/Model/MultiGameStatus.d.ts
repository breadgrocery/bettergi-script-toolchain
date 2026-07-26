import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";

/**
 * 联机状态信息
 * @since 0.50.0
 */
declare const multiGameStatusBrand: unique symbol;
export interface MultiGameStatus extends ClrHostValue {
  readonly [multiGameStatusBrand]: true;
  /**
   * 是否处于联机状态
   * @since 0.50.0
   */
  isInMultiGame: boolean;
  /**
   * 是否为房主；房主时 1/2/3/4 人分别最多控制 4/2/2/1 名角色，非房主时 2/3/4 人分别最多控制 2/1/1 名角色
   * @since 0.50.0
   */
  isHost: boolean;
  /**
   * 联机玩家数量，最少 1（仅自己）
   * @since 0.50.0
   */
  playerCount: number;
  /**
   * 当前玩家可控制的最大角色数量
   * @since 0.50.0
   */
  readonly maxControlAvatarCount: number;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Model {
    type MultiGameStatus = import("./MultiGameStatus").MultiGameStatus;
  }
}

export interface MultiGameStatusHostType extends HostType<
  MultiGameStatus,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.50.0
   */
  new (): MultiGameStatus;
}

export {};
