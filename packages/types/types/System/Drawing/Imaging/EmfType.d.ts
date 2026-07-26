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

declare const emfTypeBrand: unique symbol;
export interface EmfType extends ClrHostValue {
  readonly [emfTypeBrand]: true;
}

declare global {
  namespace System.Drawing.Imaging {
    type EmfType = import("./EmfType").EmfType;
  }
}

export interface EmfTypeHostType extends HostType<EmfType, EnumTypeTrait> {
  readonly emfOnly: EmfType;
  readonly emfPlusOnly: EmfType;
  readonly emfPlusDual: EmfType;
}

export {};
