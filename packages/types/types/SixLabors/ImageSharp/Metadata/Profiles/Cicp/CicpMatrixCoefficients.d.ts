import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/Enum";
import "../../../../../System/IComparable";
import "../../../../../System/IConvertible";
import "../../../../../System/IFormattable";
import "../../../../../System/ISpanFormattable";

declare const cicpMatrixCoefficientsBrand: unique symbol;
export interface CicpMatrixCoefficients extends ClrHostValue {
  readonly [cicpMatrixCoefficientsBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Cicp {
    type CicpMatrixCoefficients = import("./CicpMatrixCoefficients").CicpMatrixCoefficients;
  }
}

export interface CicpMatrixCoefficientsHostType extends HostType<
  CicpMatrixCoefficients,
  EnumTypeTrait
> {
  readonly identity: CicpMatrixCoefficients;
  readonly ituRBt709_6: CicpMatrixCoefficients;
  readonly unspecified: CicpMatrixCoefficients;
  readonly fcc47: CicpMatrixCoefficients;
  readonly ituRBt601_7_625: CicpMatrixCoefficients;
  readonly ituRBt601_7_525: CicpMatrixCoefficients;
  readonly smpteSt240: CicpMatrixCoefficients;
  readonly yCgCo: CicpMatrixCoefficients;
  readonly ituRBt2020_2_Ncl: CicpMatrixCoefficients;
  readonly ituRBt2020_2_Cl: CicpMatrixCoefficients;
  readonly smpteSt2085: CicpMatrixCoefficients;
  readonly chromaDerivedNcl: CicpMatrixCoefficients;
  readonly chromaDerivedCl: CicpMatrixCoefficients;
  readonly iCtCp: CicpMatrixCoefficients;
}

export {};
