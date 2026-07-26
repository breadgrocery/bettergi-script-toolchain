import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const graphicsUnitBrand: unique symbol;
export interface GraphicsUnit extends ClrHostValue {
  readonly [graphicsUnitBrand]: true;
}

declare global {
  namespace System.Drawing {
    type GraphicsUnit = import("./GraphicsUnit").GraphicsUnit;
  }
}

export interface GraphicsUnitHostType extends HostType<GraphicsUnit, EnumTypeTrait> {
  readonly world: GraphicsUnit;
  readonly display: GraphicsUnit;
  readonly pixel: GraphicsUnit;
  readonly point: GraphicsUnit;
  readonly inch: GraphicsUnit;
  readonly document: GraphicsUnit;
  readonly millimeter: GraphicsUnit;
}

export {};
