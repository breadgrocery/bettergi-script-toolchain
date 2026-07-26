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

declare const valueTaskSourceStatusBrand: unique symbol;
export interface ValueTaskSourceStatus extends ClrHostValue {
  readonly [valueTaskSourceStatusBrand]: true;
}

declare global {
  namespace System.Threading.Tasks.Sources {
    type ValueTaskSourceStatus = import("./ValueTaskSourceStatus").ValueTaskSourceStatus;
  }
}

export interface ValueTaskSourceStatusHostType extends HostType<
  ValueTaskSourceStatus,
  EnumTypeTrait
> {
  readonly pending: ValueTaskSourceStatus;
  readonly succeeded: ValueTaskSourceStatus;
  readonly faulted: ValueTaskSourceStatus;
  readonly canceled: ValueTaskSourceStatus;
}

export {};
