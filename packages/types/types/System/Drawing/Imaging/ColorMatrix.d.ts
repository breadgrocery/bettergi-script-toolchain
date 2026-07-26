import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";

declare const colorMatrixBrand: unique symbol;
export interface ColorMatrix extends ClrHostValue {
  readonly [colorMatrixBrand]: true;
  item: {
    (row: number | StrongNumeric<Int32Host>, column: number | StrongNumeric<Int32Host>): number;
    get(row: number | StrongNumeric<Int32Host>, column: number | StrongNumeric<Int32Host>): number;
    set(
      row: number | StrongNumeric<Int32Host>,
      column: number | StrongNumeric<Int32Host>,
      value: number | StrongNumeric<SingleHost>
    ): number;
  };
  matrix00: number;
  matrix01: number;
  matrix02: number;
  matrix03: number;
  matrix04: number;
  matrix10: number;
  matrix11: number;
  matrix12: number;
  matrix13: number;
  matrix14: number;
  matrix20: number;
  matrix21: number;
  matrix22: number;
  matrix23: number;
  matrix24: number;
  matrix30: number;
  matrix31: number;
  matrix32: number;
  matrix33: number;
  matrix34: number;
  matrix40: number;
  matrix41: number;
  matrix42: number;
  matrix43: number;
  matrix44: number;
}

declare global {
  namespace System.Drawing.Imaging {
    type ColorMatrix = import("./ColorMatrix").ColorMatrix;
  }
}

export interface ColorMatrixHostType extends HostType<
  ColorMatrix,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ColorMatrix;
  new (newColorMatrix: HostArray<HostArray<number | StrongNumeric<SingleHost>>>): ColorMatrix;
}

export {};
