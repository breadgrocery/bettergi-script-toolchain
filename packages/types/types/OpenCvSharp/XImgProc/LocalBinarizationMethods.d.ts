import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const localBinarizationMethodsBrand: unique symbol;
export interface LocalBinarizationMethods extends ClrHostValue {
  readonly [localBinarizationMethodsBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type LocalBinarizationMethods = import("./LocalBinarizationMethods").LocalBinarizationMethods;
  }
}

export interface LocalBinarizationMethodsHostType extends HostType<
  LocalBinarizationMethods,
  EnumTypeTrait
> {
  readonly niblack: LocalBinarizationMethods;
  readonly sauvola: LocalBinarizationMethods;
  readonly wolf: LocalBinarizationMethods;
  readonly nick: LocalBinarizationMethods;
}

export {};
