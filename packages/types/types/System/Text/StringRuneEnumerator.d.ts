import type { ClrHostValue, HostType, ValueTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IEnumerable";
import "../Collections/Generic/IEnumerator";
import "../Collections/IEnumerable";
import "../Collections/IEnumerator";
import "../IDisposable";
import "../ValueType";
import "./Rune";

declare const stringRuneEnumeratorBrand: unique symbol;
export interface StringRuneEnumerator
  extends
    ClrHostValue,
    System.Collections.Generic.IEnumerableInput<System.Text.Rune>,
    System.Collections.IEnumerableInput,
    System.Collections.Generic.IEnumeratorInput<System.Text.Rune>,
    System.IDisposableInput,
    System.Collections.IEnumeratorInput {
  readonly [stringRuneEnumeratorBrand]: true;
  getEnumerator(): System.Text.StringRuneEnumerator;
  moveNext(): boolean;
  readonly current: System.Text.Rune;
}

declare global {
  namespace System.Text {
    type StringRuneEnumerator = import("./StringRuneEnumerator").StringRuneEnumerator;
  }
}

export interface StringRuneEnumeratorHostType extends HostType<
  StringRuneEnumerator,
  ValueTypeTrait
> {}

export {};
