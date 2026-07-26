import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const thinningTypesBrand: unique symbol;
export interface ThinningTypes extends ClrHostValue {
  readonly [thinningTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type ThinningTypes = import("./ThinningTypes").ThinningTypes;
  }
}

export interface ThinningTypesHostType extends HostType<ThinningTypes, EnumTypeTrait> {
  readonly zhangsuen: ThinningTypes;
  readonly guohall: ThinningTypes;
}

export {};
