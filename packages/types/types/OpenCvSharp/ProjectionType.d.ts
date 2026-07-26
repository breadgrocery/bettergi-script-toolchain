import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const projectionTypeBrand: unique symbol;
export interface ProjectionType extends ClrHostValue {
  readonly [projectionTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ProjectionType = import("./ProjectionType").ProjectionType;
  }
}

export interface ProjectionTypeHostType extends HostType<ProjectionType, EnumTypeTrait> {
  readonly sphericalOrtho: ProjectionType;
  readonly sphericalEqRect: ProjectionType;
}

export {};
