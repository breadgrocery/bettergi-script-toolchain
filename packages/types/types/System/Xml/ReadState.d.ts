import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const readStateBrand: unique symbol;
export interface ReadState extends ClrHostValue {
  readonly [readStateBrand]: true;
}

declare global {
  namespace System.Xml {
    type ReadState = import("./ReadState").ReadState;
  }
}

export interface ReadStateHostType extends HostType<ReadState, EnumTypeTrait> {
  readonly initial: ReadState;
  readonly interactive: ReadState;
  readonly error: ReadState;
  readonly endOfFile: ReadState;
  readonly closed: ReadState;
}

export {};
