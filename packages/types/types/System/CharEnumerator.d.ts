import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./Collections/Generic/IEnumerator";
import "./Collections/IEnumerator";
import "./ICloneable";
import "./IDisposable";

declare const charEnumeratorBrand: unique symbol;
export interface CharEnumerator
  extends
    ClrHostValue,
    System.Collections.IEnumeratorInput,
    System.Collections.Generic.IEnumeratorInput<number>,
    System.IDisposableInput,
    System.ICloneableInput {
  readonly [charEnumeratorBrand]: true;
  clone(): unknown;
  dispose(): VoidResult;
  moveNext(): boolean;
  readonly current: number;
  reset(): VoidResult;
}

declare global {
  namespace System {
    type CharEnumerator = import("./CharEnumerator").CharEnumerator;
  }
}

export interface CharEnumeratorHostType extends HostType<CharEnumerator, ReferenceTypeTrait> {}

export {};
