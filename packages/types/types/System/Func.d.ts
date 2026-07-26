import type {
  FamilyArgumentOmitted,
  HostDelegate,
  HostType,
  IsFamilyArgumentOmitted,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./AsyncCallback";
import "./IAsyncResult";
import "./ICloneable";
import "./IntPtr";
import "./MulticastDelegate";
import "./Runtime/Serialization/ISerializable";

declare const delegateFuncArity1Brand: unique symbol;
export interface _FuncArity1<TResult> extends HostDelegate {
  readonly [delegateFuncArity1Brand]: true;
  (): TResult;
  invoke(): TResult;
}

export interface _FuncArity1HostType<TResult> extends HostType<
  _FuncArity1<TResult>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _FuncArity1<TResult>;
}

declare const delegateFuncArity2Brand: unique symbol;
export interface _FuncArity2<T, TResult> extends HostDelegate {
  readonly [delegateFuncArity2Brand]: true;
  (arg: T | null): TResult;
  invoke(arg: T | null): TResult;
}

export interface _FuncArity2HostType<T, TResult> extends HostType<
  _FuncArity2<T, TResult>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _FuncArity2<T, TResult>;
}

declare const delegateFuncArity3Brand: unique symbol;
export interface _FuncArity3<T1, T2, TResult> extends HostDelegate {
  readonly [delegateFuncArity3Brand]: true;
  (arg1: T1 | null, arg2: T2 | null): TResult;
  invoke(arg1: T1 | null, arg2: T2 | null): TResult;
}

export interface _FuncArity3HostType<T1, T2, TResult> extends HostType<
  _FuncArity3<T1, T2, TResult>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _FuncArity3<T1, T2, TResult>;
}

declare const delegateFuncArity4Brand: unique symbol;
export interface _FuncArity4<T1, T2, T3, TResult> extends HostDelegate {
  readonly [delegateFuncArity4Brand]: true;
  (arg1: T1 | null, arg2: T2 | null, arg3: T3 | null): TResult;
  invoke(arg1: T1 | null, arg2: T2 | null, arg3: T3 | null): TResult;
}

export interface _FuncArity4HostType<T1, T2, T3, TResult> extends HostType<
  _FuncArity4<T1, T2, T3, TResult>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _FuncArity4<T1, T2, T3, TResult>;
}

declare const delegateFuncArity5Brand: unique symbol;
export interface _FuncArity5<T1, T2, T3, T4, TResult> extends HostDelegate {
  readonly [delegateFuncArity5Brand]: true;
  (arg1: T1 | null, arg2: T2 | null, arg3: T3 | null, arg4: T4 | null): TResult;
  invoke(arg1: T1 | null, arg2: T2 | null, arg3: T3 | null, arg4: T4 | null): TResult;
}

export interface _FuncArity5HostType<T1, T2, T3, T4, TResult> extends HostType<
  _FuncArity5<T1, T2, T3, T4, TResult>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _FuncArity5<T1, T2, T3, T4, TResult>;
}

declare const delegateFuncArity6Brand: unique symbol;
export interface _FuncArity6<T1, T2, T3, T4, T5, TResult> extends HostDelegate {
  readonly [delegateFuncArity6Brand]: true;
  (arg1: T1 | null, arg2: T2 | null, arg3: T3 | null, arg4: T4 | null, arg5: T5 | null): TResult;
  invoke(
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null
  ): TResult;
}

export interface _FuncArity6HostType<T1, T2, T3, T4, T5, TResult> extends HostType<
  _FuncArity6<T1, T2, T3, T4, T5, TResult>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _FuncArity6<T1, T2, T3, T4, T5, TResult>;
}

declare const delegateFuncArity7Brand: unique symbol;
export interface _FuncArity7<T1, T2, T3, T4, T5, T6, TResult> extends HostDelegate {
  readonly [delegateFuncArity7Brand]: true;
  (
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null
  ): TResult;
  invoke(
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null
  ): TResult;
}

export interface _FuncArity7HostType<T1, T2, T3, T4, T5, T6, TResult> extends HostType<
  _FuncArity7<T1, T2, T3, T4, T5, T6, TResult>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _FuncArity7<T1, T2, T3, T4, T5, T6, TResult>;
}

declare const delegateFuncArity8Brand: unique symbol;
export interface _FuncArity8<T1, T2, T3, T4, T5, T6, T7, TResult> extends HostDelegate {
  readonly [delegateFuncArity8Brand]: true;
  (
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null,
    arg7: T7 | null
  ): TResult;
  invoke(
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null,
    arg7: T7 | null
  ): TResult;
}

export interface _FuncArity8HostType<T1, T2, T3, T4, T5, T6, T7, TResult> extends HostType<
  _FuncArity8<T1, T2, T3, T4, T5, T6, T7, TResult>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _FuncArity8<T1, T2, T3, T4, T5, T6, T7, TResult>;
}

declare const delegateFuncArity9Brand: unique symbol;
export interface _FuncArity9<T1, T2, T3, T4, T5, T6, T7, T8, TResult> extends HostDelegate {
  readonly [delegateFuncArity9Brand]: true;
  (
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null,
    arg7: T7 | null,
    arg8: T8 | null
  ): TResult;
  invoke(
    arg1: T1 | null,
    arg2: T2 | null,
    arg3: T3 | null,
    arg4: T4 | null,
    arg5: T5 | null,
    arg6: T6 | null,
    arg7: T7 | null,
    arg8: T8 | null
  ): TResult;
}

export interface _FuncArity9HostType<T1, T2, T3, T4, T5, T6, T7, T8, TResult> extends HostType<
  _FuncArity9<T1, T2, T3, T4, T5, T6, T7, T8, TResult>,
  ReferenceTypeTrait
> {
  new (
    object: unknown,
    method: System.IntPtr
  ): _FuncArity9<T1, T2, T3, T4, T5, T6, T7, T8, TResult>;
}

export type FuncFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted,
  T4 = FamilyArgumentOmitted,
  T5 = FamilyArgumentOmitted,
  T6 = FamilyArgumentOmitted,
  T7 = FamilyArgumentOmitted,
  T8 = FamilyArgumentOmitted,
  T9 = FamilyArgumentOmitted
> =
  IsFamilyArgumentOmitted<T1> extends true
    ? never
    : IsFamilyArgumentOmitted<T2> extends true
      ? _FuncArity1<T1>
      : IsFamilyArgumentOmitted<T3> extends true
        ? _FuncArity2<T1, T2>
        : IsFamilyArgumentOmitted<T4> extends true
          ? _FuncArity3<T1, T2, T3>
          : IsFamilyArgumentOmitted<T5> extends true
            ? _FuncArity4<T1, T2, T3, T4>
            : IsFamilyArgumentOmitted<T6> extends true
              ? _FuncArity5<T1, T2, T3, T4, T5>
              : IsFamilyArgumentOmitted<T7> extends true
                ? _FuncArity6<T1, T2, T3, T4, T5, T6>
                : IsFamilyArgumentOmitted<T8> extends true
                  ? _FuncArity7<T1, T2, T3, T4, T5, T6, T7>
                  : IsFamilyArgumentOmitted<T9> extends true
                    ? _FuncArity8<T1, T2, T3, T4, T5, T6, T7, T8>
                    : _FuncArity9<T1, T2, T3, T4, T5, T6, T7, T8, T9>;

declare global {
  namespace System {
    type Func<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T4 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T5 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T6 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T7 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T8 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T9 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./Func").FuncFamily<T1, T2, T3, T4, T5, T6, T7, T8, T9>;
  }
}

export type FuncHostType<T1> = _FuncArity1HostType<T1>;

export {};
