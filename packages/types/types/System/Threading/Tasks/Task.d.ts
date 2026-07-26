import type {
  ClrHostValue,
  EnumInput,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  IsFamilyArgumentOmitted,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Action";
import "../../AggregateException";
import "../../Collections/Generic/IEnumerable";
import "../../Func";
import "../../IAsyncResult";
import "../../IDisposable";
import "../../Nullable";
import "../../Runtime/CompilerServices/ConfiguredTaskAwaitable";
import "../../Runtime/CompilerServices/TaskAwaiter";
import "../../Runtime/CompilerServices/YieldAwaitable";
import "../../TimeProvider";
import "../../TimeSpan";
import "../../WebSocket";
import "../CancellationToken";
import "./ConfigureAwaitOptions";
import "./TaskContinuationOptions";
import "./TaskCreationOptions";
import "./TaskFactory";
import "./TaskScheduler";
import "./TaskStatus";

declare const taskArity0Brand: unique symbol;
export interface _TaskArity0
  extends ClrHostValue, System.IAsyncResultInput, System.IDisposableInput {
  readonly [taskArity0Brand]: true;
  configureAwait(
    continueOnCapturedContext: boolean
  ): System.Runtime.CompilerServices.ConfiguredTaskAwaitable;
  configureAwait(
    options: EnumInput<System.Threading.Tasks.ConfigureAwaitOptions>
  ): System.Runtime.CompilerServices.ConfiguredTaskAwaitable;
  continueWith(
    continuationAction: System.Action<Promise<void>, unknown>,
    state: unknown | null
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<void>, unknown>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<void>, unknown>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<void>, unknown>,
    state: unknown | null,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<void>, unknown>,
    state: unknown | null,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWith(continuationAction: System.Action<Promise<void>>): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<void>>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<void>>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<void>>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<void>>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWith<TResult>(
    type1: HostType<TResult>,
    continuationFunction: System.Func<Promise<void>, TResult>
  ): Promise<TResult>;
  continueWith<TResult>(
    type1: HostType<TResult>,
    continuationFunction: System.Func<Promise<void>, TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  continueWith<TResult>(
    type1: HostType<TResult>,
    continuationFunction: System.Func<Promise<void>, TResult>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  continueWith<TResult>(
    type1: HostType<TResult>,
    continuationFunction: System.Func<Promise<void>, TResult>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TResult>;
  continueWith<TResult>(
    type1: HostType<TResult>,
    continuationFunction: System.Func<Promise<void>, TResult>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  continueWith<TResult>(
    type1: HostType<TResult>,
    continuationFunction: System.Func<Promise<void>, unknown, TResult>,
    state: unknown | null
  ): Promise<TResult>;
  continueWith<TResult>(
    type1: HostType<TResult>,
    continuationFunction: System.Func<Promise<void>, unknown, TResult>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  continueWith<TResult>(
    type1: HostType<TResult>,
    continuationFunction: System.Func<Promise<void>, unknown, TResult>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  continueWith<TResult>(
    type1: HostType<TResult>,
    continuationFunction: System.Func<Promise<void>, unknown, TResult>,
    state: unknown | null,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TResult>;
  continueWith<TResult>(
    type1: HostType<TResult>,
    continuationFunction: System.Func<Promise<void>, unknown, TResult>,
    state: unknown | null,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  dispose(): VoidResult;
  getAwaiter(): System.Runtime.CompilerServices.TaskAwaiter;
  readonly asyncState: unknown;
  readonly creationOptions: System.Threading.Tasks.TaskCreationOptions;
  readonly exception: System.AggregateException;
  readonly id: number;
  readonly isCanceled: boolean;
  readonly isCompleted: boolean;
  readonly isCompletedSuccessfully: boolean;
  readonly isFaulted: boolean;
  readonly status: System.Threading.Tasks.TaskStatus;
  runSynchronously(): VoidResult;
  runSynchronously(scheduler: System.Threading.Tasks.TaskScheduler): VoidResult;
  start(): VoidResult;
  start(scheduler: System.Threading.Tasks.TaskScheduler): VoidResult;
  wait(): VoidResult;
  wait(cancellationToken: System.Threading.CancellationToken): VoidResult;
  wait(millisecondsTimeout: number | StrongNumeric<Int32Host>): boolean;
  wait(
    millisecondsTimeout: number | StrongNumeric<Int32Host>,
    cancellationToken: System.Threading.CancellationToken
  ): boolean;
  wait(timeout: System.TimeSpan): boolean;
  wait(timeout: System.TimeSpan, cancellationToken: System.Threading.CancellationToken): boolean;
  waitAsync(cancellationToken: System.Threading.CancellationToken): Promise<void>;
  waitAsync(timeout: System.TimeSpan): Promise<void>;
  waitAsync(
    timeout: System.TimeSpan,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  waitAsync(timeout: System.TimeSpan, timeProvider: System.TimeProvider): Promise<void>;
  waitAsync(
    timeout: System.TimeSpan,
    timeProvider: System.TimeProvider,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
}

export interface _TaskArity0HostType extends HostType<_TaskArity0, ReferenceTypeTrait> {
  new (action: System.Action): _TaskArity0;
  new (action: System.Action, cancellationToken: System.Threading.CancellationToken): _TaskArity0;
  new (
    action: System.Action,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): _TaskArity0;
  new (
    action: System.Action,
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): _TaskArity0;
  new (action: System.Action<unknown>, state: unknown | null): _TaskArity0;
  new (
    action: System.Action<unknown>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken
  ): _TaskArity0;
  new (
    action: System.Action<unknown>,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): _TaskArity0;
  new (
    action: System.Action<unknown>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): _TaskArity0;
  readonly currentId: number | null;
  readonly factory: System.Threading.Tasks.TaskFactory;
  readonly completedTask: Promise<void>;
  yield(): System.Runtime.CompilerServices.YieldAwaitable;
  waitAll(tasks: HostArray<Promise<void>>): VoidResult;
  waitAll(...tasks: Promise<void>[]): VoidResult;
  waitAll(tasks: HostArray<Promise<void>>, timeout: System.TimeSpan): boolean;
  waitAll(
    tasks: HostArray<Promise<void>>,
    millisecondsTimeout: number | StrongNumeric<Int32Host>
  ): boolean;
  waitAll(
    tasks: HostArray<Promise<void>>,
    cancellationToken: System.Threading.CancellationToken
  ): VoidResult;
  waitAll(
    tasks: HostArray<Promise<void>>,
    millisecondsTimeout: number | StrongNumeric<Int32Host>,
    cancellationToken: System.Threading.CancellationToken
  ): boolean;
  waitAny(tasks: HostArray<Promise<void>>): number;
  waitAny(...tasks: Promise<void>[]): number;
  waitAny(tasks: HostArray<Promise<void>>, timeout: System.TimeSpan): number;
  waitAny(
    tasks: HostArray<Promise<void>>,
    cancellationToken: System.Threading.CancellationToken
  ): number;
  waitAny(
    tasks: HostArray<Promise<void>>,
    millisecondsTimeout: number | StrongNumeric<Int32Host>
  ): number;
  waitAny(
    tasks: HostArray<Promise<void>>,
    millisecondsTimeout: number | StrongNumeric<Int32Host>,
    cancellationToken: System.Threading.CancellationToken
  ): number;
  fromResult<TResult>(type1: HostType<TResult>, result: TResult | null): Promise<TResult>;
  fromException(exception: System.Exception): Promise<void>;
  fromException<TResult>(type1: HostType<TResult>, exception: System.Exception): Promise<TResult>;
  fromCanceled(cancellationToken: System.Threading.CancellationToken): Promise<void>;
  fromCanceled<TResult>(
    type1: HostType<TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  run(action: System.Action): Promise<void>;
  run(action: System.Action, cancellationToken: System.Threading.CancellationToken): Promise<void>;
  run<TResult>(type1: HostType<TResult>, function_: System.Func<TResult>): Promise<TResult>;
  run<TResult>(
    type1: HostType<TResult>,
    function_: System.Func<TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  run(function_: System.Func<Promise<void>>): Promise<void>;
  run(
    function_: System.Func<Promise<void>>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  run<TResult>(
    type1: HostType<TResult>,
    function_: System.Func<Promise<TResult>>
  ): Promise<TResult>;
  run<TResult>(
    type1: HostType<TResult>,
    function_: System.Func<Promise<TResult>>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  delay(delay: System.TimeSpan): Promise<void>;
  delay(delay: System.TimeSpan, timeProvider: System.TimeProvider): Promise<void>;
  delay(
    delay: System.TimeSpan,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  delay(
    delay: System.TimeSpan,
    timeProvider: System.TimeProvider,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  delay(millisecondsDelay: number | StrongNumeric<Int32Host>): Promise<void>;
  delay(
    millisecondsDelay: number | StrongNumeric<Int32Host>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  whenAll(tasks: System.Collections.Generic.IEnumerable<Promise<void>>): Promise<void>;
  whenAll(tasks: HostArray<Promise<void>>): Promise<void>;
  whenAll(...tasks: Promise<void>[]): Promise<void>;
  whenAll<TResult>(
    type1: HostType<TResult>,
    tasks: System.Collections.Generic.IEnumerable<Promise<TResult>>
  ): Promise<HostArray<TResult>>;
  whenAll<TResult>(
    type1: HostType<TResult>,
    tasks: HostArray<Promise<TResult>>
  ): Promise<HostArray<TResult>>;
  whenAll<TResult>(
    type1: HostType<TResult>,
    ...tasks: Promise<TResult>[]
  ): Promise<HostArray<TResult>>;
  whenAny(tasks: HostArray<Promise<void>>): Promise<Promise<void>>;
  whenAny(...tasks: Promise<void>[]): Promise<Promise<void>>;
  whenAny(task1: Promise<void>, task2: Promise<void>): Promise<Promise<void>>;
  whenAny(tasks: System.Collections.Generic.IEnumerable<Promise<void>>): Promise<Promise<void>>;
  whenAny<TResult>(
    type1: HostType<TResult>,
    tasks: HostArray<Promise<TResult>>
  ): Promise<Promise<TResult>>;
  whenAny<TResult>(
    type1: HostType<TResult>,
    ...tasks: Promise<TResult>[]
  ): Promise<Promise<TResult>>;
  whenAny<TResult>(
    type1: HostType<TResult>,
    task1: Promise<TResult>,
    task2: Promise<TResult>
  ): Promise<Promise<TResult>>;
  whenAny<TResult>(
    type1: HostType<TResult>,
    tasks: System.Collections.Generic.IEnumerable<Promise<TResult>>
  ): Promise<Promise<TResult>>;
}

declare const taskArity1Brand: unique symbol;
export interface _TaskArity1<TResult>
  extends
    Omit<_TaskArity0, "configureAwait" | "continueWith" | "getAwaiter" | "result" | "waitAsync">,
    System.IAsyncResultInput,
    System.IDisposableInput {
  readonly [taskArity1Brand]: true;
  configureAwait(
    continueOnCapturedContext: boolean
  ): System.Runtime.CompilerServices.ConfiguredTaskAwaitable<TResult>;
  configureAwait(
    options: EnumInput<System.Threading.Tasks.ConfigureAwaitOptions>
  ): System.Runtime.CompilerServices.ConfiguredTaskAwaitable<TResult>;
  continueWith(
    continuationAction: System.Action<Promise<TResult>, unknown>,
    state: unknown | null
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<TResult>, unknown>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<TResult>, unknown>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<TResult>, unknown>,
    state: unknown | null,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<TResult>, unknown>,
    state: unknown | null,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWith(continuationAction: System.Action<Promise<TResult>>): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<TResult>>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<TResult>>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<TResult>>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<void>;
  continueWith(
    continuationAction: System.Action<Promise<TResult>>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWith<TNewResult>(
    type1: HostType<TNewResult>,
    continuationFunction: System.Func<Promise<TResult>, TNewResult>
  ): Promise<TNewResult>;
  continueWith<TNewResult>(
    type1: HostType<TNewResult>,
    continuationFunction: System.Func<Promise<TResult>, TNewResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TNewResult>;
  continueWith<TNewResult>(
    type1: HostType<TNewResult>,
    continuationFunction: System.Func<Promise<TResult>, TNewResult>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TNewResult>;
  continueWith<TNewResult>(
    type1: HostType<TNewResult>,
    continuationFunction: System.Func<Promise<TResult>, TNewResult>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TNewResult>;
  continueWith<TNewResult>(
    type1: HostType<TNewResult>,
    continuationFunction: System.Func<Promise<TResult>, TNewResult>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TNewResult>;
  continueWith<TNewResult>(
    type1: HostType<TNewResult>,
    continuationFunction: System.Func<Promise<TResult>, unknown, TNewResult>,
    state: unknown | null
  ): Promise<TNewResult>;
  continueWith<TNewResult>(
    type1: HostType<TNewResult>,
    continuationFunction: System.Func<Promise<TResult>, unknown, TNewResult>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TNewResult>;
  continueWith<TNewResult>(
    type1: HostType<TNewResult>,
    continuationFunction: System.Func<Promise<TResult>, unknown, TNewResult>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TNewResult>;
  continueWith<TNewResult>(
    type1: HostType<TNewResult>,
    continuationFunction: System.Func<Promise<TResult>, unknown, TNewResult>,
    state: unknown | null,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TNewResult>;
  continueWith<TNewResult>(
    type1: HostType<TNewResult>,
    continuationFunction: System.Func<Promise<TResult>, unknown, TNewResult>,
    state: unknown | null,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TNewResult>;
  getAwaiter(): System.Runtime.CompilerServices.TaskAwaiter<TResult>;
  readonly result: TResult;
  waitAsync(cancellationToken: System.Threading.CancellationToken): Promise<TResult>;
  waitAsync(timeout: System.TimeSpan): Promise<TResult>;
  waitAsync(
    timeout: System.TimeSpan,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  waitAsync(timeout: System.TimeSpan, timeProvider: System.TimeProvider): Promise<TResult>;
  waitAsync(
    timeout: System.TimeSpan,
    timeProvider: System.TimeProvider,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
}

export interface _TaskArity1HostType<TResult> extends HostType<
  _TaskArity1<TResult>,
  ReferenceTypeTrait
> {
  new (function_: System.Func<TResult>): _TaskArity1<TResult>;
  new (
    function_: System.Func<TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): _TaskArity1<TResult>;
  new (
    function_: System.Func<TResult>,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): _TaskArity1<TResult>;
  new (
    function_: System.Func<TResult>,
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): _TaskArity1<TResult>;
  new (function_: System.Func<unknown, TResult>, state: unknown | null): _TaskArity1<TResult>;
  new (
    function_: System.Func<unknown, TResult>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken
  ): _TaskArity1<TResult>;
  new (
    function_: System.Func<unknown, TResult>,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): _TaskArity1<TResult>;
  new (
    function_: System.Func<unknown, TResult>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): _TaskArity1<TResult>;
  readonly factory: System.Threading.Tasks.TaskFactory<TResult>;
}

export type TaskFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _TaskArity0 : _TaskArity1<T1>;

declare global {
  namespace System.Threading.Tasks {
    type Task<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> = import("./Task").TaskFamily<T1>;
  }
}

export type TaskHostType = _TaskArity0HostType;

export {};
