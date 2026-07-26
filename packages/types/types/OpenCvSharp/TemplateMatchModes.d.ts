import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const templateMatchModesBrand: unique symbol;
export interface TemplateMatchModes extends ClrHostValue {
  readonly [templateMatchModesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type TemplateMatchModes = import("./TemplateMatchModes").TemplateMatchModes;
  }
}

export interface TemplateMatchModesHostType extends HostType<TemplateMatchModes, EnumTypeTrait> {
  readonly sqDiff: TemplateMatchModes;
  readonly sqDiffNormed: TemplateMatchModes;
  readonly cCorr: TemplateMatchModes;
  readonly cCorrNormed: TemplateMatchModes;
  readonly cCoeff: TemplateMatchModes;
  readonly cCoeffNormed: TemplateMatchModes;
}

export {};
