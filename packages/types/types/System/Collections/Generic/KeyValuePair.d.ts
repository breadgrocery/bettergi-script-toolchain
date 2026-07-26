import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../ValueType";

declare const keyValuePairArity2Brand: unique symbol;
export interface _KeyValuePairArity2<TKey, TValue> extends ClrHostValue {
  readonly [keyValuePairArity2Brand]: true;
  deconstruct(key: HostVariableOut<TKey>, value: HostVariableOut<TValue>): VoidResult;
  readonly key: TKey;
  readonly value: TValue;
  toString(): string;
}

export interface _KeyValuePairArity2HostType<TKey, TValue> extends HostType<
  _KeyValuePairArity2<TKey, TValue>,
  ValueTypeTrait
> {
  new (key: TKey, value: TValue): _KeyValuePairArity2<TKey, TValue>;
}

export type KeyValuePairFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _KeyValuePairArity2<T1, T2>;

declare global {
  namespace System.Collections.Generic {
    type KeyValuePair<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./KeyValuePair").KeyValuePairFamily<T1, T2>;
  }
}

export type KeyValuePairHostType<T1, T2> = _KeyValuePairArity2HostType<T1, T2>;

export {};
