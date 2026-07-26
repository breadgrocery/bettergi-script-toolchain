import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const cornerRefineMethodBrand: unique symbol;
export interface CornerRefineMethod extends ClrHostValue {
  readonly [cornerRefineMethodBrand]: true;
}

declare global {
  namespace OpenCvSharp.Aruco {
    type CornerRefineMethod = import("./CornerRefineMethod").CornerRefineMethod;
  }
}

export interface CornerRefineMethodHostType extends HostType<CornerRefineMethod, EnumTypeTrait> {
  readonly none: CornerRefineMethod;
  readonly subpix: CornerRefineMethod;
  readonly contour: CornerRefineMethod;
  readonly aprilTag: CornerRefineMethod;
}

export {};
