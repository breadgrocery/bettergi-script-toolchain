import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const readOriginBrand: unique symbol;
export interface ReadOrigin extends ClrHostValue {
  readonly [readOriginBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp {
    type ReadOrigin = import("./ReadOrigin").ReadOrigin;
  }
}

export interface ReadOriginHostType extends HostType<ReadOrigin, EnumTypeTrait> {
  readonly begin: ReadOrigin;
  readonly current: ReadOrigin;
}

export {};
