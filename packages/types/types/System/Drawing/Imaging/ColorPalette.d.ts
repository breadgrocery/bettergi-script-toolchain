import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../Color";

declare const colorPaletteBrand: unique symbol;
export interface ColorPalette extends ClrHostValue {
  readonly [colorPaletteBrand]: true;
  readonly entries: HostArray<System.Drawing.Color>;
  readonly flags: number;
}

declare global {
  namespace System.Drawing.Imaging {
    type ColorPalette = import("./ColorPalette").ColorPalette;
  }
}

export interface ColorPaletteHostType extends HostType<ColorPalette, ReferenceTypeTrait> {}

export {};
