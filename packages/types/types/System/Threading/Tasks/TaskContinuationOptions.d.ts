import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const taskContinuationOptionsBrand: unique symbol;
export interface TaskContinuationOptions extends ClrHostValue {
  readonly [taskContinuationOptionsBrand]: true;
}

declare global {
  namespace System.Threading.Tasks {
    type TaskContinuationOptions = import("./TaskContinuationOptions").TaskContinuationOptions;
  }
}

export interface TaskContinuationOptionsHostType extends HostType<
  TaskContinuationOptions,
  EnumTypeTrait
> {
  readonly none: TaskContinuationOptions;
  readonly preferFairness: TaskContinuationOptions;
  readonly longRunning: TaskContinuationOptions;
  readonly attachedToParent: TaskContinuationOptions;
  readonly denyChildAttach: TaskContinuationOptions;
  readonly hideScheduler: TaskContinuationOptions;
  readonly lazyCancellation: TaskContinuationOptions;
  readonly runContinuationsAsynchronously: TaskContinuationOptions;
  readonly notOnRanToCompletion: TaskContinuationOptions;
  readonly notOnFaulted: TaskContinuationOptions;
  readonly notOnCanceled: TaskContinuationOptions;
  readonly onlyOnRanToCompletion: TaskContinuationOptions;
  readonly onlyOnFaulted: TaskContinuationOptions;
  readonly onlyOnCanceled: TaskContinuationOptions;
  readonly executeSynchronously: TaskContinuationOptions;
}

export {};
