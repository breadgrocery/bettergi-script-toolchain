import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const metafileFrameUnitBrand: unique symbol;
export interface MetafileFrameUnit extends ClrHostValue {
  readonly [metafileFrameUnitBrand]: true;
}

declare global {
  namespace System.Drawing.Imaging {
    type MetafileFrameUnit = import("./MetafileFrameUnit").MetafileFrameUnit;
  }
}

export interface MetafileFrameUnitHostType extends HostType<MetafileFrameUnit, EnumTypeTrait> {
  readonly pixel: MetafileFrameUnit;
  readonly point: MetafileFrameUnit;
  readonly inch: MetafileFrameUnit;
  readonly document: MetafileFrameUnit;
  readonly millimeter: MetafileFrameUnit;
  readonly gdiCompatible: MetafileFrameUnit;
}

export {};
