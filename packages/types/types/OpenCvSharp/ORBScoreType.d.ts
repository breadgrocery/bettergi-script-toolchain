import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const oRBScoreTypeBrand: unique symbol;
export interface ORBScoreType extends ClrHostValue {
  readonly [oRBScoreTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ORBScoreType = import("./ORBScoreType").ORBScoreType;
  }
}

export interface ORBScoreTypeHostType extends HostType<ORBScoreType, EnumTypeTrait> {
  readonly fast: ORBScoreType;
  readonly harris: ORBScoreType;
}

export {};
