import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const threadWaitReasonBrand: unique symbol;
export interface ThreadWaitReason extends ClrHostValue {
  readonly [threadWaitReasonBrand]: true;
}

declare global {
  namespace System.Diagnostics {
    type ThreadWaitReason = import("./ThreadWaitReason").ThreadWaitReason;
  }
}

export interface ThreadWaitReasonHostType extends HostType<ThreadWaitReason, EnumTypeTrait> {
  readonly executive: ThreadWaitReason;
  readonly freePage: ThreadWaitReason;
  readonly pageIn: ThreadWaitReason;
  readonly systemAllocation: ThreadWaitReason;
  readonly executionDelay: ThreadWaitReason;
  readonly suspended: ThreadWaitReason;
  readonly userRequest: ThreadWaitReason;
  readonly eventPairHigh: ThreadWaitReason;
  readonly eventPairLow: ThreadWaitReason;
  readonly lpcReceive: ThreadWaitReason;
  readonly lpcReply: ThreadWaitReason;
  readonly virtualMemory: ThreadWaitReason;
  readonly pageOut: ThreadWaitReason;
  readonly unknown: ThreadWaitReason;
}

export {};
