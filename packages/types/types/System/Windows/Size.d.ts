import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../IFormatProvider";
import "../IFormattable";
import "../ValueType";

declare const sizeBrand: unique symbol;
export interface Size extends ClrHostValue, System.IFormattableInput {
  readonly [sizeBrand]: true;
  width: number;
  height: number;
  readonly isEmpty: boolean;
  getHashCode(): number;
  toString(): string;
  toString(provider: System.IFormatProvider): string;
  equals(o: unknown): boolean;
  equals(value: System.Windows.Size): boolean;
}

declare global {
  namespace System.Windows {
    type Size = import("./Size").Size;
  }
}

export interface SizeHostType extends HostType<Size, ValueTypeTrait> {
  new (width: number | StrongNumeric<DoubleHost>, height: number | StrongNumeric<DoubleHost>): Size;
  readonly empty: System.Windows.Size;
  equals(size1: System.Windows.Size, size2: System.Windows.Size): boolean;
  parse(source: string): System.Windows.Size;
}

export {};
