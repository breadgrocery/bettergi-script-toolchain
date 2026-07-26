import type {
  FamilyArgumentOmitted,
  HostDelegate,
  HostType,
  IsFamilyArgumentOmitted,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./AsyncCallback";
import "./IAsyncResult";
import "./ICloneable";
import "./IntPtr";
import "./MulticastDelegate";
import "./Runtime/Serialization/ISerializable";

declare const delegateActionArity0Brand: unique symbol;
export interface _ActionArity0 extends HostDelegate {
  readonly [delegateActionArity0Brand]: true;
  (): VoidResult;
  invoke(): VoidResult;
}

export interface _ActionArity0HostType extends HostType<_ActionArity0, ReferenceTypeTrait> {
  new (object: unknown, method: System.IntPtr): _ActionArity0;
}

declare const delegateActionArity1Brand: unique symbol;
export interface _ActionArity1<T> extends HostDelegate {
  readonly [delegateActionArity1Brand]: true;
  (obj: T | null): VoidResult;
  invoke(obj: T | null): VoidResult;
}

export interface _ActionArity1HostType<T> extends HostType<_ActionArity1<T>, ReferenceTypeTrait> {
  new (object: unknown, method: System.IntPtr): _ActionArity1<T>;
}

declare const delegateActionArity2Brand: unique symbol;
export interface _ActionArity2<T1, T2> extends HostDelegate {
  readonly [delegateActionArity2Brand]: true;
  (arg1: T1 | null, arg2: T2 | null): VoidResult;
  invoke(arg1: T1 | null, arg2: T2 | null): VoidResult;
}

export interface _ActionArity2HostType<T1, T2> extends HostType<
  _ActionArity2<T1, T2>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _ActionArity2<T1, T2>;
}

declare const delegateActionArity3Brand: unique symbol;
export interface _ActionArity3<T1, T2, T3> extends HostDelegate {
  readonly [delegateActionArity3Brand]: true;
  (arg1: T1 | null, arg2: T2 | null, arg3: T3 | null): VoidResult;
  invoke(arg1: T1 | null, arg2: T2 | null, arg3: T3 | null): VoidResult;
}

export interface _ActionArity3HostType<T1, T2, T3> extends HostType<
  _ActionArity3<T1, T2, T3>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _ActionArity3<T1, T2, T3>;
}

declare const delegateActionArity4Brand: unique symbol;
export interface _ActionArity4<T1, T2, T3, T4> extends HostDelegate {
  readonly [delegateActionArity4Brand]: true;
  (arg1: T1 | null, arg2: T2 | null, arg3: T3 | null, arg4: T4 | null): VoidResult;
  invoke(arg1: T1 | null, arg2: T2 | null, arg3: T3 | null, arg4: T4 | null): VoidResult;
}

export interface _ActionArity4HostType<T1, T2, T3, T4> extends HostType<
  _ActionArity4<T1, T2, T3, T4>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _ActionArity4<T1, T2, T3, T4>;
}

declare const delegateActionArity5Brand: unique symbol;
export interface _ActionArity5<T1, T2, T3, T4, T5> extends HostDelegate {
  readonly [delegateActionArity5Brand]: true;
  (arg1: T1 | null, arg2: T2 | null, arg3: T3 | null, arg4: T4 | null, arg5: T5 | null): VoidResult;
  invoke(
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null
  ): VoidResult;
}

export interface _ActionArity5HostType<T1, T2, T3, T4, T5> extends HostType<
  _ActionArity5<T1, T2, T3, T4, T5>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _ActionArity5<T1, T2, T3, T4, T5>;
}

declare const delegateActionArity6Brand: unique symbol;
export interface _ActionArity6<T1, T2, T3, T4, T5, T6> extends HostDelegate {
  readonly [delegateActionArity6Brand]: true;
  (
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null
  ): VoidResult;
  invoke(
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null
  ): VoidResult;
}

export interface _ActionArity6HostType<T1, T2, T3, T4, T5, T6> extends HostType<
  _ActionArity6<T1, T2, T3, T4, T5, T6>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _ActionArity6<T1, T2, T3, T4, T5, T6>;
}

declare const delegateActionArity7Brand: unique symbol;
export interface _ActionArity7<T1, T2, T3, T4, T5, T6, T7> extends HostDelegate {
  readonly [delegateActionArity7Brand]: true;
  (
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null,
    arg7: T7 | null
  ): VoidResult;
  invoke(
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null,
    arg7: T7 | null
  ): VoidResult;
}

export interface _ActionArity7HostType<T1, T2, T3, T4, T5, T6, T7> extends HostType<
  _ActionArity7<T1, T2, T3, T4, T5, T6, T7>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _ActionArity7<T1, T2, T3, T4, T5, T6, T7>;
}

declare const delegateActionArity8Brand: unique symbol;
export interface _ActionArity8<T1, T2, T3, T4, T5, T6, T7, T8> extends HostDelegate {
  readonly [delegateActionArity8Brand]: true;
  (
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null,
    arg7: T7 | null,
    arg8: T8 | null
  ): VoidResult;
  invoke(
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null,
    arg7: T7 | null,
    arg8: T8 | null
  ): VoidResult;
}

export interface _ActionArity8HostType<T1, T2, T3, T4, T5, T6, T7, T8> extends HostType<
  _ActionArity8<T1, T2, T3, T4, T5, T6, T7, T8>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _ActionArity8<T1, T2, T3, T4, T5, T6, T7, T8>;
}

export type ActionFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted,
  T4 = FamilyArgumentOmitted,
  T5 = FamilyArgumentOmitted,
  T6 = FamilyArgumentOmitted,
  T7 = FamilyArgumentOmitted,
  T8 = FamilyArgumentOmitted
> =
  IsFamilyArgumentOmitted<T1> extends true
    ? _ActionArity0
    : IsFamilyArgumentOmitted<T2> extends true
      ? _ActionArity1<T1>
      : IsFamilyArgumentOmitted<T3> extends true
        ? _ActionArity2<T1, T2>
        : IsFamilyArgumentOmitted<T4> extends true
          ? _ActionArity3<T1, T2, T3>
          : IsFamilyArgumentOmitted<T5> extends true
            ? _ActionArity4<T1, T2, T3, T4>
            : IsFamilyArgumentOmitted<T6> extends true
              ? _ActionArity5<T1, T2, T3, T4, T5>
              : IsFamilyArgumentOmitted<T7> extends true
                ? _ActionArity6<T1, T2, T3, T4, T5, T6>
                : IsFamilyArgumentOmitted<T8> extends true
                  ? _ActionArity7<T1, T2, T3, T4, T5, T6, T7>
                  : _ActionArity8<T1, T2, T3, T4, T5, T6, T7, T8>;

declare global {
  namespace System {
    type Action<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T4 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T5 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T6 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T7 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T8 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./Action").ActionFamily<T1, T2, T3, T4, T5, T6, T7, T8>;
  }
}

export type ActionHostType = _ActionArity0HostType;

export {};
