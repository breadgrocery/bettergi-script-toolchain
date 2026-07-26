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

declare const metafileTypeBrand: unique symbol;
export interface MetafileType extends ClrHostValue {
  readonly [metafileTypeBrand]: true;
}

declare global {
  namespace System.Drawing.Imaging {
    type MetafileType = import("./MetafileType").MetafileType;
  }
}

export interface MetafileTypeHostType extends HostType<MetafileType, EnumTypeTrait> {
  readonly invalid: MetafileType;
  readonly wmf: MetafileType;
  readonly wmfPlaceable: MetafileType;
  readonly emf: MetafileType;
  readonly emfPlusOnly: MetafileType;
  readonly emfPlusDual: MetafileType;
}

export {};
