import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../Enum";
import "../../../IComparable";
import "../../../IConvertible";
import "../../../IFormattable";
import "../../../ISpanFormattable";

declare const valueTaskSourceOnCompletedFlagsBrand: unique symbol;
export interface ValueTaskSourceOnCompletedFlags extends ClrHostValue {
  readonly [valueTaskSourceOnCompletedFlagsBrand]: true;
}

declare global {
  namespace System.Threading.Tasks.Sources {
    type ValueTaskSourceOnCompletedFlags =
      import("./ValueTaskSourceOnCompletedFlags").ValueTaskSourceOnCompletedFlags;
  }
}

export interface ValueTaskSourceOnCompletedFlagsHostType extends HostType<
  ValueTaskSourceOnCompletedFlags,
  EnumTypeTrait
> {
  readonly none: ValueTaskSourceOnCompletedFlags;
  readonly useSchedulingContext: ValueTaskSourceOnCompletedFlags;
  readonly flowExecutionContext: ValueTaskSourceOnCompletedFlags;
}

export {};
