import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../Color";

declare const colorMapBrand: unique symbol;
export interface ColorMap extends ClrHostValue {
  readonly [colorMapBrand]: true;
  newColor: System.Drawing.Color;
  oldColor: System.Drawing.Color;
}

declare global {
  namespace System.Drawing.Imaging {
    type ColorMap = import("./ColorMap").ColorMap;
  }
}

export interface ColorMapHostType extends HostType<
  ColorMap,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ColorMap;
}

export {};
