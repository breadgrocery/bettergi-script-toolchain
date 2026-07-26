import type {
  EnumInput,
  FamilyArgumentOmitted,
  HostType,
  Int16Host,
  InterfaceTypeTrait,
  IsFamilyArgumentOmitted,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../Action";
import "./ValueTaskSourceOnCompletedFlags";
import "./ValueTaskSourceStatus";

declare const iValueTaskSourceArity0InputBrand: unique symbol;
export interface _IValueTaskSourceArity0Input {
  readonly [iValueTaskSourceArity0InputBrand]: true;
}

export interface _IValueTaskSourceArity0
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IValueTaskSourceArity0Input>,
    _IValueTaskSourceArity0Input {
  getResult(token: number | StrongNumeric<Int16Host>): VoidResult;
  getStatus(
    token: number | StrongNumeric<Int16Host>
  ): System.Threading.Tasks.Sources.ValueTaskSourceStatus;
  onCompleted(
    continuation: System.Action<unknown>,
    state: unknown | null,
    token: number | StrongNumeric<Int16Host>,
    flags: EnumInput<System.Threading.Tasks.Sources.ValueTaskSourceOnCompletedFlags>
  ): VoidResult;
}

export interface _IValueTaskSourceArity0HostType extends HostType<
  _IValueTaskSourceArity0,
  InterfaceTypeTrait
> {}

declare const iValueTaskSourceArity1InputBrand: unique symbol;
export interface _IValueTaskSourceArity1Input<TResult> {
  readonly [iValueTaskSourceArity1InputBrand]: true;
}

export interface _IValueTaskSourceArity1<TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IValueTaskSourceArity1Input<TResult>>,
    _IValueTaskSourceArity1Input<TResult> {
  getResult(token: number | StrongNumeric<Int16Host>): TResult;
  getStatus(
    token: number | StrongNumeric<Int16Host>
  ): System.Threading.Tasks.Sources.ValueTaskSourceStatus;
  onCompleted(
    continuation: System.Action<unknown>,
    state: unknown | null,
    token: number | StrongNumeric<Int16Host>,
    flags: EnumInput<System.Threading.Tasks.Sources.ValueTaskSourceOnCompletedFlags>
  ): VoidResult;
}

export interface _IValueTaskSourceArity1HostType<TResult> extends HostType<
  _IValueTaskSourceArity1<TResult>,
  InterfaceTypeTrait
> {}

export type IValueTaskSourceFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _IValueTaskSourceArity0 : _IValueTaskSourceArity1<T1>;

declare global {
  namespace System.Threading.Tasks.Sources {
    type IValueTaskSource<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IValueTaskSource").IValueTaskSourceFamily<T1>;
  }
}

export type IValueTaskSourceInputFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true
    ? _IValueTaskSourceArity0Input
    : _IValueTaskSourceArity1Input<T1>;

declare global {
  namespace System.Threading.Tasks.Sources {
    type IValueTaskSourceInput<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IValueTaskSource").IValueTaskSourceInputFamily<T1>;
  }
}

export type IValueTaskSourceHostType = _IValueTaskSourceArity0HostType;

export {};
