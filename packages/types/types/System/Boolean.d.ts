import type { ClrHostValue, HostType, ValueTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import "./IComparable";
import "./IConvertible";
import "./IEquatable";
import "./IFormatProvider";
import "./IParsable";
import "./ISpanParsable";
import "./TypeCode";
import "./ValueType";

declare const booleanBrand: unique symbol;
export interface Boolean
  extends
    ClrHostValue,
    System.IComparableInput,
    System.IConvertibleInput,
    System.IComparableInput<boolean>,
    System.IEquatableInput<boolean>,
    System.ISpanParsableInput<boolean>,
    System.IParsableInput<boolean> {
  readonly [booleanBrand]: true;
  compareTo(obj: unknown | null): number;
  compareTo(value: boolean): number;
  equals(obj: boolean): boolean;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  getTypeCode(): System.TypeCode;
  toString(): string;
  toString(provider: System.IFormatProvider | null): string;
}

declare global {
  namespace System {
    type Boolean = import("./Boolean").Boolean;
  }
}

export interface BooleanHostType extends HostType<Boolean, ValueTypeTrait> {
  readonly trueString: string;
  readonly falseString: string;
  parse(value: string): boolean;
  tryParse(value: string | null, result: HostVariableOut<boolean>): boolean;
}

export {};
