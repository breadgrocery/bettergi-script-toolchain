import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const robustEstimationAlgorithmsBrand: unique symbol;
export interface RobustEstimationAlgorithms extends ClrHostValue {
  readonly [robustEstimationAlgorithmsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type RobustEstimationAlgorithms =
      import("./RobustEstimationAlgorithms").RobustEstimationAlgorithms;
  }
}

export interface RobustEstimationAlgorithmsHostType extends HostType<
  RobustEstimationAlgorithms,
  EnumTypeTrait
> {
  readonly lmeds: RobustEstimationAlgorithms;
  readonly ransac: RobustEstimationAlgorithms;
  readonly rho: RobustEstimationAlgorithms;
  readonly usaC_DEFAULT: RobustEstimationAlgorithms;
  readonly usaC_PARALLEL: RobustEstimationAlgorithms;
  readonly usaC_FM_8PTS: RobustEstimationAlgorithms;
  readonly usaC_FAST: RobustEstimationAlgorithms;
  readonly usaC_ACCURATE: RobustEstimationAlgorithms;
  readonly usaC_PROSAC: RobustEstimationAlgorithms;
  readonly usaC_MAGSAC: RobustEstimationAlgorithms;
}

export {};
