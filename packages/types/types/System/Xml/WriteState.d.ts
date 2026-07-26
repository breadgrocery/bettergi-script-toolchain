import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const writeStateBrand: unique symbol;
export interface WriteState extends ClrHostValue {
  readonly [writeStateBrand]: true;
}

declare global {
  namespace System.Xml {
    type WriteState = import("./WriteState").WriteState;
  }
}

export interface WriteStateHostType extends HostType<WriteState, EnumTypeTrait> {
  readonly start: WriteState;
  readonly prolog: WriteState;
  readonly element: WriteState;
  readonly attribute: WriteState;
  readonly content: WriteState;
  readonly closed: WriteState;
  readonly error: WriteState;
}

export {};
