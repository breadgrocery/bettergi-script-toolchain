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

declare const imageLockModeBrand: unique symbol;
export interface ImageLockMode extends ClrHostValue {
  readonly [imageLockModeBrand]: true;
}

declare global {
  namespace System.Drawing.Imaging {
    type ImageLockMode = import("./ImageLockMode").ImageLockMode;
  }
}

export interface ImageLockModeHostType extends HostType<ImageLockMode, EnumTypeTrait> {
  readonly readOnly: ImageLockMode;
  readonly writeOnly: ImageLockMode;
  readonly readWrite: ImageLockMode;
  readonly userInputBuffer: ImageLockMode;
}

export {};
