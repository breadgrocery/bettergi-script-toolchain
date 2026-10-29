import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Enum";
import "../../../../System/IComparable";
import "../../../../System/IConvertible";
import "../../../../System/IFormattable";
import "../../../../System/ISpanFormattable";

/**
 * 元素战技冷却状态
 * @since 0.66.0
 */
declare const skillCdStateBrand: unique symbol;
export interface SkillCdState extends ClrHostValue {
  readonly [skillCdStateBrand]: true;
}

export interface SkillCdStateHostType extends HostType<SkillCdState, EnumTypeTrait> {
  /** 就绪：从未使用过，或冷却记录已到期 / 保守估计窗口已过 */
  readonly ready: SkillCdState;
  /** 冷却中：最近一次使用后 OCR 到有效 CD 且未到期，或手动配置 CD 未走完 */
  readonly cooldown: SkillCdState;
  /** 未知：OCR 视角下表示冷却记录已过期；综合视角下表示处于按完整 CD 保守估计的窗口内 */
  readonly unknown: SkillCdState;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Model {
    type SkillCdState = import("./SkillCdState").SkillCdState;
  }
}

export {};
