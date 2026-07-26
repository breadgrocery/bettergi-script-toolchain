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

declare const gCHandleTypeBrand: unique symbol;
export interface GCHandleType extends ClrHostValue {
  readonly [gCHandleTypeBrand]: true;
}

declare global {
  namespace System.Runtime.InteropServices {
    type GCHandleType = import("./GCHandleType").GCHandleType;
  }
}

export interface GCHandleTypeHostType extends HostType<GCHandleType, EnumTypeTrait> {
  readonly weak: GCHandleType;
  readonly weakTrackResurrection: GCHandleType;
  readonly normal: GCHandleType;
  readonly pinned: GCHandleType;
}

export {};
