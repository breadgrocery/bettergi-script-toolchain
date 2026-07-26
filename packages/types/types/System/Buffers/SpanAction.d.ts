import type {
  FamilyArgumentOmitted,
  HostDelegate,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../AsyncCallback";
import "../IAsyncResult";
import "../ICloneable";
import "../IntPtr";
import "../MulticastDelegate";
import "../Runtime/Serialization/ISerializable";

declare const delegateSpanActionArity2Brand: unique symbol;
export interface _SpanActionArity2<T, TArg> extends HostDelegate {
  readonly [delegateSpanActionArity2Brand]: true;
  (span: never, arg: TArg | null): VoidResult;
  invoke(span: never, arg: TArg | null): VoidResult;
}

export interface _SpanActionArity2HostType<T, TArg> extends HostType<
  _SpanActionArity2<T, TArg>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _SpanActionArity2<T, TArg>;
}

export type SpanActionFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _SpanActionArity2<T1, T2>;

declare global {
  namespace System.Buffers {
    type SpanAction<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./SpanAction").SpanActionFamily<T1, T2>;
  }
}

export type SpanActionHostType<T1, T2> = _SpanActionArity2HostType<T1, T2>;

export {};
