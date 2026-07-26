import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const callingConventionsBrand: unique symbol;
export interface CallingConventions extends ClrHostValue {
  readonly [callingConventionsBrand]: true;
}

declare global {
  namespace System.Reflection {
    type CallingConventions = import("./CallingConventions").CallingConventions;
  }
}

export interface CallingConventionsHostType extends HostType<CallingConventions, EnumTypeTrait> {
  readonly standard: CallingConventions;
  readonly varArgs: CallingConventions;
  readonly any: CallingConventions;
  readonly hasThis: CallingConventions;
  readonly explicitThis: CallingConventions;
}

export {};
