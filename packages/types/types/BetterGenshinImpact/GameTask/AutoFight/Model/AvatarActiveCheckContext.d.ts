import type {
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";

/**
 * 多次识别出战角色结果的上下文
 * @since 0.50.0
 */
declare const avatarActiveCheckContextBrand: unique symbol;
export interface AvatarActiveCheckContext extends ClrHostValue {
  readonly [avatarActiveCheckContextBrand]: true;
  /**
   * 各队伍序号出战标识被识别到的次数统计
   * @since 0.50.0
   */
  activeIndexByArrowCount: HostArray<number>;
  /**
   * 累计识别失败次数
   * @since 0.50.0
   */
  totalCheckFailedCount: number;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Model {
    type AvatarActiveCheckContext = import("./AvatarActiveCheckContext").AvatarActiveCheckContext;
  }
}

export interface AvatarActiveCheckContextHostType extends HostType<
  AvatarActiveCheckContext,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.50.0
   */
  new (): AvatarActiveCheckContext;
}

export {};
