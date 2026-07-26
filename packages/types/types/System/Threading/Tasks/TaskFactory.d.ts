import type {
  ClrHostValue,
  EnumInput,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  IsFamilyArgumentOmitted,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Action";
import "../../AsyncCallback";
import "../../Func";
import "../../IAsyncResult";
import "../CancellationToken";
import "./TaskContinuationOptions";
import "./TaskCreationOptions";
import "./TaskScheduler";

declare const taskFactoryArity0Brand: unique symbol;
export interface _TaskFactoryArity0 extends ClrHostValue {
  readonly [taskFactoryArity0Brand]: true;
  continueWhenAll(
    tasks: HostArray<Promise<void>>,
    continuationAction: System.Action<HostArray<Promise<void>>>
  ): Promise<void>;
  continueWhenAll(
    tasks: HostArray<Promise<void>>,
    continuationAction: System.Action<HostArray<Promise<void>>>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  continueWhenAll(
    tasks: HostArray<Promise<void>>,
    continuationAction: System.Action<HostArray<Promise<void>>>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWhenAll(
    tasks: HostArray<Promise<void>>,
    continuationAction: System.Action<HostArray<Promise<void>>>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<void>;
  continueWhenAll<TAntecedentResult, TResult>(
    type1: HostType<TAntecedentResult>,
    type2: HostType<TResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<HostArray<Promise<TAntecedentResult>>, TResult>
  ): Promise<TResult>;
  continueWhenAll<TAntecedentResult, TResult>(
    type1: HostType<TAntecedentResult>,
    type2: HostType<TResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<HostArray<Promise<TAntecedentResult>>, TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  continueWhenAll<TAntecedentResult, TResult>(
    type1: HostType<TAntecedentResult>,
    type2: HostType<TResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<HostArray<Promise<TAntecedentResult>>, TResult>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  continueWhenAll<TAntecedentResult, TResult>(
    type1: HostType<TAntecedentResult>,
    type2: HostType<TResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<HostArray<Promise<TAntecedentResult>>, TResult>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TResult>;
  continueWhenAll<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationAction: System.Action<HostArray<Promise<TAntecedentResult>>>
  ): Promise<void>;
  continueWhenAll<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationAction: System.Action<HostArray<Promise<TAntecedentResult>>>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  continueWhenAll<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationAction: System.Action<HostArray<Promise<TAntecedentResult>>>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWhenAll<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationAction: System.Action<HostArray<Promise<TAntecedentResult>>>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<void>;
  continueWhenAll<TResult>(
    type1: HostType<TResult>,
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<HostArray<Promise<void>>, TResult>
  ): Promise<TResult>;
  continueWhenAll<TResult>(
    type1: HostType<TResult>,
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<HostArray<Promise<void>>, TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  continueWhenAll<TResult>(
    type1: HostType<TResult>,
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<HostArray<Promise<void>>, TResult>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  continueWhenAll<TResult>(
    type1: HostType<TResult>,
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<HostArray<Promise<void>>, TResult>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TResult>;
  continueWhenAny(
    tasks: HostArray<Promise<void>>,
    continuationAction: System.Action<Promise<void>>
  ): Promise<void>;
  continueWhenAny(
    tasks: HostArray<Promise<void>>,
    continuationAction: System.Action<Promise<void>>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  continueWhenAny(
    tasks: HostArray<Promise<void>>,
    continuationAction: System.Action<Promise<void>>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWhenAny(
    tasks: HostArray<Promise<void>>,
    continuationAction: System.Action<Promise<void>>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<void>;
  continueWhenAny<TAntecedentResult, TResult>(
    type1: HostType<TAntecedentResult>,
    type2: HostType<TResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<Promise<TAntecedentResult>, TResult>
  ): Promise<TResult>;
  continueWhenAny<TAntecedentResult, TResult>(
    type1: HostType<TAntecedentResult>,
    type2: HostType<TResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<Promise<TAntecedentResult>, TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  continueWhenAny<TAntecedentResult, TResult>(
    type1: HostType<TAntecedentResult>,
    type2: HostType<TResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<Promise<TAntecedentResult>, TResult>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  continueWhenAny<TAntecedentResult, TResult>(
    type1: HostType<TAntecedentResult>,
    type2: HostType<TResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<Promise<TAntecedentResult>, TResult>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TResult>;
  continueWhenAny<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationAction: System.Action<Promise<TAntecedentResult>>
  ): Promise<void>;
  continueWhenAny<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationAction: System.Action<Promise<TAntecedentResult>>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  continueWhenAny<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationAction: System.Action<Promise<TAntecedentResult>>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  continueWhenAny<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationAction: System.Action<Promise<TAntecedentResult>>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<void>;
  continueWhenAny<TResult>(
    type1: HostType<TResult>,
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<Promise<void>, TResult>
  ): Promise<TResult>;
  continueWhenAny<TResult>(
    type1: HostType<TResult>,
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<Promise<void>, TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  continueWhenAny<TResult>(
    type1: HostType<TResult>,
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<Promise<void>, TResult>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  continueWhenAny<TResult>(
    type1: HostType<TResult>,
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<Promise<void>, TResult>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TResult>;
  fromAsync(
    asyncResult: System.IAsyncResult,
    endMethod: System.Action<System.IAsyncResult>
  ): Promise<void>;
  fromAsync(
    asyncResult: System.IAsyncResult,
    endMethod: System.Action<System.IAsyncResult>,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<void>;
  fromAsync(
    asyncResult: System.IAsyncResult,
    endMethod: System.Action<System.IAsyncResult>,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  fromAsync(
    beginMethod: System.Func<System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Action<System.IAsyncResult>,
    state: unknown | null
  ): Promise<void>;
  fromAsync(
    beginMethod: System.Func<System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Action<System.IAsyncResult>,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<void>;
  fromAsync<TArg1, TArg2, TArg3, TResult>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    type3: HostType<TArg3>,
    type4: HostType<TResult>,
    beginMethod: System.Func<
      TArg1,
      TArg2,
      TArg3,
      System.AsyncCallback,
      unknown,
      System.IAsyncResult
    >,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    arg3: TArg3 | null,
    state: unknown | null
  ): Promise<TResult>;
  fromAsync<TArg1, TArg2, TArg3, TResult>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    type3: HostType<TArg3>,
    type4: HostType<TResult>,
    beginMethod: System.Func<
      TArg1,
      TArg2,
      TArg3,
      System.AsyncCallback,
      unknown,
      System.IAsyncResult
    >,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    arg3: TArg3 | null,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  fromAsync<TArg1, TArg2, TArg3>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    type3: HostType<TArg3>,
    beginMethod: System.Func<
      TArg1,
      TArg2,
      TArg3,
      System.AsyncCallback,
      unknown,
      System.IAsyncResult
    >,
    endMethod: System.Action<System.IAsyncResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    arg3: TArg3 | null,
    state: unknown | null
  ): Promise<void>;
  fromAsync<TArg1, TArg2, TArg3>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    type3: HostType<TArg3>,
    beginMethod: System.Func<
      TArg1,
      TArg2,
      TArg3,
      System.AsyncCallback,
      unknown,
      System.IAsyncResult
    >,
    endMethod: System.Action<System.IAsyncResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    arg3: TArg3 | null,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<void>;
  fromAsync<TArg1, TArg2, TResult>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    type3: HostType<TResult>,
    beginMethod: System.Func<TArg1, TArg2, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    state: unknown | null
  ): Promise<TResult>;
  fromAsync<TArg1, TArg2, TResult>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    type3: HostType<TResult>,
    beginMethod: System.Func<TArg1, TArg2, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  fromAsync<TArg1, TArg2>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    beginMethod: System.Func<TArg1, TArg2, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Action<System.IAsyncResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    state: unknown | null
  ): Promise<void>;
  fromAsync<TArg1, TArg2>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    beginMethod: System.Func<TArg1, TArg2, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Action<System.IAsyncResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<void>;
  fromAsync<TArg1, TResult>(
    type1: HostType<TArg1>,
    type2: HostType<TResult>,
    beginMethod: System.Func<TArg1, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    state: unknown | null
  ): Promise<TResult>;
  fromAsync<TArg1, TResult>(
    type1: HostType<TArg1>,
    type2: HostType<TResult>,
    beginMethod: System.Func<TArg1, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  fromAsync<TArg1>(
    type1: HostType<TArg1>,
    beginMethod: System.Func<TArg1, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Action<System.IAsyncResult>,
    arg1: TArg1 | null,
    state: unknown | null
  ): Promise<void>;
  fromAsync<TArg1>(
    type1: HostType<TArg1>,
    beginMethod: System.Func<TArg1, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Action<System.IAsyncResult>,
    arg1: TArg1 | null,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<void>;
  fromAsync<TResult>(
    type1: HostType<TResult>,
    asyncResult: System.IAsyncResult,
    endMethod: System.Func<System.IAsyncResult, TResult>
  ): Promise<TResult>;
  fromAsync<TResult>(
    type1: HostType<TResult>,
    asyncResult: System.IAsyncResult,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  fromAsync<TResult>(
    type1: HostType<TResult>,
    asyncResult: System.IAsyncResult,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  fromAsync<TResult>(
    type1: HostType<TResult>,
    beginMethod: System.Func<System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    state: unknown | null
  ): Promise<TResult>;
  fromAsync<TResult>(
    type1: HostType<TResult>,
    beginMethod: System.Func<System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  readonly cancellationToken: System.Threading.CancellationToken;
  readonly continuationOptions: System.Threading.Tasks.TaskContinuationOptions;
  readonly creationOptions: System.Threading.Tasks.TaskCreationOptions;
  readonly scheduler: System.Threading.Tasks.TaskScheduler;
  startNew(action: System.Action): Promise<void>;
  startNew(
    action: System.Action,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  startNew(
    action: System.Action,
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  startNew(
    action: System.Action,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<void>;
  startNew(action: System.Action<unknown>, state: unknown | null): Promise<void>;
  startNew(
    action: System.Action<unknown>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  startNew(
    action: System.Action<unknown>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<void>;
  startNew(
    action: System.Action<unknown>,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<void>;
  startNew<TResult>(type1: HostType<TResult>, function_: System.Func<TResult>): Promise<TResult>;
  startNew<TResult>(
    type1: HostType<TResult>,
    function_: System.Func<TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  startNew<TResult>(
    type1: HostType<TResult>,
    function_: System.Func<TResult>,
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  startNew<TResult>(
    type1: HostType<TResult>,
    function_: System.Func<TResult>,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  startNew<TResult>(
    type1: HostType<TResult>,
    function_: System.Func<unknown, TResult>,
    state: unknown | null
  ): Promise<TResult>;
  startNew<TResult>(
    type1: HostType<TResult>,
    function_: System.Func<unknown, TResult>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  startNew<TResult>(
    type1: HostType<TResult>,
    function_: System.Func<unknown, TResult>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  startNew<TResult>(
    type1: HostType<TResult>,
    function_: System.Func<unknown, TResult>,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
}

export interface _TaskFactoryArity0HostType extends HostType<
  _TaskFactoryArity0,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): _TaskFactoryArity0;
  new (cancellationToken: System.Threading.CancellationToken): _TaskFactoryArity0;
  new (scheduler: System.Threading.Tasks.TaskScheduler | null): _TaskFactoryArity0;
  new (
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): _TaskFactoryArity0;
  new (
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler | null
  ): _TaskFactoryArity0;
}

declare const taskFactoryArity1Brand: unique symbol;
export interface _TaskFactoryArity1<TResult> extends ClrHostValue {
  readonly [taskFactoryArity1Brand]: true;
  continueWhenAll(
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<HostArray<Promise<void>>, TResult>
  ): Promise<TResult>;
  continueWhenAll(
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<HostArray<Promise<void>>, TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  continueWhenAll(
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<HostArray<Promise<void>>, TResult>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  continueWhenAll(
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<HostArray<Promise<void>>, TResult>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TResult>;
  continueWhenAll<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<HostArray<Promise<TAntecedentResult>>, TResult>
  ): Promise<TResult>;
  continueWhenAll<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<HostArray<Promise<TAntecedentResult>>, TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  continueWhenAll<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<HostArray<Promise<TAntecedentResult>>, TResult>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  continueWhenAll<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<HostArray<Promise<TAntecedentResult>>, TResult>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TResult>;
  continueWhenAny(
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<Promise<void>, TResult>
  ): Promise<TResult>;
  continueWhenAny(
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<Promise<void>, TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  continueWhenAny(
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<Promise<void>, TResult>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  continueWhenAny(
    tasks: HostArray<Promise<void>>,
    continuationFunction: System.Func<Promise<void>, TResult>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TResult>;
  continueWhenAny<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<Promise<TAntecedentResult>, TResult>
  ): Promise<TResult>;
  continueWhenAny<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<Promise<TAntecedentResult>, TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  continueWhenAny<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<Promise<TAntecedentResult>, TResult>,
    cancellationToken: System.Threading.CancellationToken,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  continueWhenAny<TAntecedentResult>(
    type1: HostType<TAntecedentResult>,
    tasks: HostArray<Promise<TAntecedentResult>>,
    continuationFunction: System.Func<Promise<TAntecedentResult>, TResult>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): Promise<TResult>;
  fromAsync(
    asyncResult: System.IAsyncResult,
    endMethod: System.Func<System.IAsyncResult, TResult>
  ): Promise<TResult>;
  fromAsync(
    asyncResult: System.IAsyncResult,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  fromAsync(
    asyncResult: System.IAsyncResult,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  fromAsync(
    beginMethod: System.Func<System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    state: unknown | null
  ): Promise<TResult>;
  fromAsync(
    beginMethod: System.Func<System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  fromAsync<TArg1, TArg2, TArg3>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    type3: HostType<TArg3>,
    beginMethod: System.Func<
      TArg1,
      TArg2,
      TArg3,
      System.AsyncCallback,
      unknown,
      System.IAsyncResult
    >,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    arg3: TArg3 | null,
    state: unknown | null
  ): Promise<TResult>;
  fromAsync<TArg1, TArg2, TArg3>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    type3: HostType<TArg3>,
    beginMethod: System.Func<
      TArg1,
      TArg2,
      TArg3,
      System.AsyncCallback,
      unknown,
      System.IAsyncResult
    >,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    arg3: TArg3 | null,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  fromAsync<TArg1, TArg2>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    beginMethod: System.Func<TArg1, TArg2, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    state: unknown | null
  ): Promise<TResult>;
  fromAsync<TArg1, TArg2>(
    type1: HostType<TArg1>,
    type2: HostType<TArg2>,
    beginMethod: System.Func<TArg1, TArg2, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    arg2: TArg2 | null,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  fromAsync<TArg1>(
    type1: HostType<TArg1>,
    beginMethod: System.Func<TArg1, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    state: unknown | null
  ): Promise<TResult>;
  fromAsync<TArg1>(
    type1: HostType<TArg1>,
    beginMethod: System.Func<TArg1, System.AsyncCallback, unknown, System.IAsyncResult>,
    endMethod: System.Func<System.IAsyncResult, TResult>,
    arg1: TArg1 | null,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  readonly cancellationToken: System.Threading.CancellationToken;
  readonly continuationOptions: System.Threading.Tasks.TaskContinuationOptions;
  readonly creationOptions: System.Threading.Tasks.TaskCreationOptions;
  readonly scheduler: System.Threading.Tasks.TaskScheduler;
  startNew(function_: System.Func<TResult>): Promise<TResult>;
  startNew(
    function_: System.Func<TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  startNew(
    function_: System.Func<TResult>,
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  startNew(
    function_: System.Func<TResult>,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
  startNew(function_: System.Func<unknown, TResult>, state: unknown | null): Promise<TResult>;
  startNew(
    function_: System.Func<unknown, TResult>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<TResult>;
  startNew(
    function_: System.Func<unknown, TResult>,
    state: unknown | null,
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler
  ): Promise<TResult>;
  startNew(
    function_: System.Func<unknown, TResult>,
    state: unknown | null,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>
  ): Promise<TResult>;
}

export interface _TaskFactoryArity1HostType<TResult> extends HostType<
  _TaskFactoryArity1<TResult>,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): _TaskFactoryArity1<TResult>;
  new (cancellationToken: System.Threading.CancellationToken): _TaskFactoryArity1<TResult>;
  new (scheduler: System.Threading.Tasks.TaskScheduler | null): _TaskFactoryArity1<TResult>;
  new (
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>
  ): _TaskFactoryArity1<TResult>;
  new (
    cancellationToken: System.Threading.CancellationToken,
    creationOptions: EnumInput<System.Threading.Tasks.TaskCreationOptions>,
    continuationOptions: EnumInput<System.Threading.Tasks.TaskContinuationOptions>,
    scheduler: System.Threading.Tasks.TaskScheduler | null
  ): _TaskFactoryArity1<TResult>;
}

export type TaskFactoryFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _TaskFactoryArity0 : _TaskFactoryArity1<T1>;

declare global {
  namespace System.Threading.Tasks {
    type TaskFactory<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./TaskFactory").TaskFactoryFamily<T1>;
  }
}

export type TaskFactoryHostType = _TaskFactoryArity0HostType;

export {};
