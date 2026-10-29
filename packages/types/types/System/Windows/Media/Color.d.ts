import type {
  ByteHost,
  ClrHostValue,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IFormatProvider";
import "../../IFormattable";
import "../../ValueType";

declare const colorBrand: unique symbol;
export interface Color extends ClrHostValue, System.IFormattableInput {
  readonly [colorBrand]: true;
  a: number;
  r: number;
  g: number;
  b: number;
  scA: number;
  scR: number;
  scG: number;
  scB: number;
  clamp(): VoidResult;
  equals(o: unknown): boolean;
  equals(color: System.Windows.Media.Color): boolean;
  getHashCode(): number;
  toString(): string;
  toString(provider: System.IFormatProvider): string;
}

declare global {
  namespace System.Windows.Media {
    type Color = import("./Color").Color;
  }
}

export interface ColorHostType extends HostType<Color, ValueTypeTrait> {
  fromArgb(
    a: number | StrongNumeric<ByteHost>,
    r: number | StrongNumeric<ByteHost>,
    g: number | StrongNumeric<ByteHost>,
    b: number | StrongNumeric<ByteHost>
  ): System.Windows.Media.Color;
  fromRgb(
    r: number | StrongNumeric<ByteHost>,
    g: number | StrongNumeric<ByteHost>,
    b: number | StrongNumeric<ByteHost>
  ): System.Windows.Media.Color;
  fromScRgb(
    a: number | StrongNumeric<SingleHost>,
    r: number | StrongNumeric<SingleHost>,
    g: number | StrongNumeric<SingleHost>,
    b: number | StrongNumeric<SingleHost>
  ): System.Windows.Media.Color;
}

export {};
