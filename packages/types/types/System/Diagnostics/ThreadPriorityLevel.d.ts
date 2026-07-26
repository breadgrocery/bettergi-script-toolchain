import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const threadPriorityLevelBrand: unique symbol;
export interface ThreadPriorityLevel extends ClrHostValue {
  readonly [threadPriorityLevelBrand]: true;
}

declare global {
  namespace System.Diagnostics {
    type ThreadPriorityLevel = import("./ThreadPriorityLevel").ThreadPriorityLevel;
  }
}

export interface ThreadPriorityLevelHostType extends HostType<ThreadPriorityLevel, EnumTypeTrait> {
  readonly idle: ThreadPriorityLevel;
  readonly lowest: ThreadPriorityLevel;
  readonly belowNormal: ThreadPriorityLevel;
  readonly normal: ThreadPriorityLevel;
  readonly aboveNormal: ThreadPriorityLevel;
  readonly highest: ThreadPriorityLevel;
  readonly timeCritical: ThreadPriorityLevel;
}

export {};
