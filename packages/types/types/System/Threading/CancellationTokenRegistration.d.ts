import type { ClrHostValue, HostType, ValueTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IAsyncDisposable";
import "../IDisposable";
import "../IEquatable";
import "../ValueType";
import "./CancellationToken";
import "./Tasks/ValueTask";

declare const cancellationTokenRegistrationBrand: unique symbol;
export interface CancellationTokenRegistration
  extends ClrHostValue, System.IDisposableInput, System.IAsyncDisposableInput {
  readonly [cancellationTokenRegistrationBrand]: true;
  dispose(): VoidResult;
  disposeAsync(): System.Threading.Tasks.ValueTask;
  equals(obj: unknown | null): boolean;
  equals(other: System.Threading.CancellationTokenRegistration): boolean;
  getHashCode(): number;
  readonly token: System.Threading.CancellationToken;
  unregister(): boolean;
}

declare global {
  namespace System.Threading {
    type CancellationTokenRegistration =
      import("./CancellationTokenRegistration").CancellationTokenRegistration;
  }
}

export interface CancellationTokenRegistrationHostType extends HostType<
  CancellationTokenRegistration,
  ValueTypeTrait
> {}

export {};
