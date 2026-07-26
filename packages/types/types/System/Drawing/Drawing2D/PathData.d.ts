import type {
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../PointF";

declare const pathDataBrand: unique symbol;
export interface PathData extends ClrHostValue {
  readonly [pathDataBrand]: true;
  points: HostArray<System.Drawing.PointF>;
  types: HostArray<number>;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type PathData = import("./PathData").PathData;
  }
}

export interface PathDataHostType extends HostType<
  PathData,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): PathData;
}

export {};
