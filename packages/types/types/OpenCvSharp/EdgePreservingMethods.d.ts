import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const edgePreservingMethodsBrand: unique symbol;
export interface EdgePreservingMethods extends ClrHostValue {
  readonly [edgePreservingMethodsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type EdgePreservingMethods = import("./EdgePreservingMethods").EdgePreservingMethods;
  }
}

export interface EdgePreservingMethodsHostType extends HostType<
  EdgePreservingMethods,
  EnumTypeTrait
> {
  readonly recursFilter: EdgePreservingMethods;
  readonly normconvFilter: EdgePreservingMethods;
}

export {};
