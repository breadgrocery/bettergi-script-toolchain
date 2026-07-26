import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IDisposable";
import "../TimeProvider";
import "../TimeSpan";
import "./CancellationToken";

declare const cancellationTokenSourceBrand: unique symbol;
export interface CancellationTokenSource extends ClrHostValue, System.IDisposableInput {
  readonly [cancellationTokenSourceBrand]: true;
  cancel(): VoidResult;
  cancel(throwOnFirstException: boolean): VoidResult;
  cancelAfter(delay: System.TimeSpan): VoidResult;
  cancelAfter(millisecondsDelay: number | StrongNumeric<Int32Host>): VoidResult;
  cancelAsync(): Promise<void>;
  dispose(): VoidResult;
  readonly isCancellationRequested: boolean;
  readonly token: System.Threading.CancellationToken;
  tryReset(): boolean;
}

declare global {
  namespace System.Threading {
    type CancellationTokenSource = import("./CancellationTokenSource").CancellationTokenSource;
  }
}

export interface CancellationTokenSourceHostType extends HostType<
  CancellationTokenSource,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): CancellationTokenSource;
  new (delay: System.TimeSpan): CancellationTokenSource;
  new (delay: System.TimeSpan, timeProvider: System.TimeProvider): CancellationTokenSource;
  new (millisecondsDelay: number | StrongNumeric<Int32Host>): CancellationTokenSource;
  createLinkedTokenSource(
    token1: System.Threading.CancellationToken,
    token2: System.Threading.CancellationToken
  ): System.Threading.CancellationTokenSource;
  createLinkedTokenSource(
    token: System.Threading.CancellationToken
  ): System.Threading.CancellationTokenSource;
  createLinkedTokenSource(
    tokens: HostArray<System.Threading.CancellationToken>
  ): System.Threading.CancellationTokenSource;
  createLinkedTokenSource(
    ...tokens: System.Threading.CancellationToken[]
  ): System.Threading.CancellationTokenSource;
}

export {};
