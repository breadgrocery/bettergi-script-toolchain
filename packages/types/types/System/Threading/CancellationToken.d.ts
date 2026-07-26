import type { ClrHostValue, HostType, ValueTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Action";
import "../IEquatable";
import "../ValueType";
import "./CancellationTokenRegistration";
import "./WaitHandle";

declare const cancellationTokenBrand: unique symbol;
export interface CancellationToken extends ClrHostValue {
  readonly [cancellationTokenBrand]: true;
  equals(other: System.Threading.CancellationToken): boolean;
  equals(other: unknown | null): boolean;
  getHashCode(): number;
  readonly canBeCanceled: boolean;
  readonly isCancellationRequested: boolean;
  readonly waitHandle: System.Threading.WaitHandle;
  register(callback: System.Action): System.Threading.CancellationTokenRegistration;
  register(
    callback: System.Action,
    useSynchronizationContext: boolean
  ): System.Threading.CancellationTokenRegistration;
  register(
    callback: System.Action<unknown, System.Threading.CancellationToken>,
    state: unknown | null
  ): System.Threading.CancellationTokenRegistration;
  register(
    callback: System.Action<unknown>,
    state: unknown | null
  ): System.Threading.CancellationTokenRegistration;
  register(
    callback: System.Action<unknown>,
    state: unknown | null,
    useSynchronizationContext: boolean
  ): System.Threading.CancellationTokenRegistration;
  throwIfCancellationRequested(): VoidResult;
  unsafeRegister(
    callback: System.Action<unknown, System.Threading.CancellationToken>,
    state: unknown | null
  ): System.Threading.CancellationTokenRegistration;
  unsafeRegister(
    callback: System.Action<unknown>,
    state: unknown | null
  ): System.Threading.CancellationTokenRegistration;
}

declare global {
  namespace System.Threading {
    type CancellationToken = import("./CancellationToken").CancellationToken;
  }
}

export interface CancellationTokenHostType extends HostType<CancellationToken, ValueTypeTrait> {
  new (canceled: boolean): CancellationToken;
  readonly none: System.Threading.CancellationToken;
}

export {};
