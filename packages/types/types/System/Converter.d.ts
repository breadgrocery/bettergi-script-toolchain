import type {
  FamilyArgumentOmitted,
  HostDelegate,
  HostType,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./AsyncCallback";
import "./IAsyncResult";
import "./ICloneable";
import "./IntPtr";
import "./MulticastDelegate";
import "./Runtime/Serialization/ISerializable";

declare const delegateConverterArity2Brand: unique symbol;
export interface _ConverterArity2<TInput, TOutput> extends HostDelegate {
  readonly [delegateConverterArity2Brand]: true;
  (input: TInput | null): TOutput;
  invoke(input: TInput | null): TOutput;
}

export interface _ConverterArity2HostType<TInput, TOutput> extends HostType<
  _ConverterArity2<TInput, TOutput>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _ConverterArity2<TInput, TOutput>;
}

export type ConverterFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _ConverterArity2<T1, T2>;

declare global {
  namespace System {
    type Converter<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./Converter").ConverterFamily<T1, T2>;
  }
}

export type ConverterHostType<T1, T2> = _ConverterArity2HostType<T1, T2>;

export {};
