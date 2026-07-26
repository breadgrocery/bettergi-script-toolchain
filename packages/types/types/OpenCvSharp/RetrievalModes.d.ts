import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const retrievalModesBrand: unique symbol;
export interface RetrievalModes extends ClrHostValue {
  readonly [retrievalModesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type RetrievalModes = import("./RetrievalModes").RetrievalModes;
  }
}

export interface RetrievalModesHostType extends HostType<RetrievalModes, EnumTypeTrait> {
  readonly external: RetrievalModes;
  readonly list: RetrievalModes;
  readonly cComp: RetrievalModes;
  readonly tree: RetrievalModes;
  readonly floodFill: RetrievalModes;
}

export {};
