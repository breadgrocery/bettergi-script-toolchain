import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const threadStateBrand: unique symbol;
export interface ThreadState extends ClrHostValue {
  readonly [threadStateBrand]: true;
}

declare global {
  namespace System.Diagnostics {
    type ThreadState = import("./ThreadState").ThreadState;
  }
}

export interface ThreadStateHostType extends HostType<ThreadState, EnumTypeTrait> {
  readonly initialized: ThreadState;
  readonly ready: ThreadState;
  readonly running: ThreadState;
  readonly standby: ThreadState;
  readonly terminated: ThreadState;
  readonly wait: ThreadState;
  readonly transition: ThreadState;
  readonly unknown: ThreadState;
}

export {};
