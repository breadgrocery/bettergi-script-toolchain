import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const bm3dStepsBrand: unique symbol;
export interface Bm3dSteps extends ClrHostValue {
  readonly [bm3dStepsBrand]: true;
}

declare global {
  namespace OpenCvSharp.XPhoto {
    type Bm3dSteps = import("./Bm3dSteps").Bm3dSteps;
  }
}

export interface Bm3dStepsHostType extends HostType<Bm3dSteps, EnumTypeTrait> {
  readonly stepall: Bm3dSteps;
  readonly steP1: Bm3dSteps;
  readonly steP2: Bm3dSteps;
}

export {};
