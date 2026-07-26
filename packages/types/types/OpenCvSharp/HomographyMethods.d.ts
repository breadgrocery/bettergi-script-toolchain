import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const homographyMethodsBrand: unique symbol;
export interface HomographyMethods extends ClrHostValue {
  readonly [homographyMethodsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type HomographyMethods = import("./HomographyMethods").HomographyMethods;
  }
}

export interface HomographyMethodsHostType extends HostType<HomographyMethods, EnumTypeTrait> {
  readonly none: HomographyMethods;
  readonly lMedS: HomographyMethods;
  readonly ransac: HomographyMethods;
  readonly rho: HomographyMethods;
  readonly usaC_DEFAULT: HomographyMethods;
  readonly usaC_PARALLEL: HomographyMethods;
  readonly usaC_FM_8PTS: HomographyMethods;
  readonly usaC_FAST: HomographyMethods;
  readonly usaC_ACCURATE: HomographyMethods;
  readonly usaC_PROSAC: HomographyMethods;
  readonly usaC_MAGSAC: HomographyMethods;
}

export {};
