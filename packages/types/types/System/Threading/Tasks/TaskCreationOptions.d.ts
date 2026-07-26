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

declare const taskCreationOptionsBrand: unique symbol;
export interface TaskCreationOptions extends ClrHostValue {
  readonly [taskCreationOptionsBrand]: true;
}

declare global {
  namespace System.Threading.Tasks {
    type TaskCreationOptions = import("./TaskCreationOptions").TaskCreationOptions;
  }
}

export interface TaskCreationOptionsHostType extends HostType<TaskCreationOptions, EnumTypeTrait> {
  readonly none: TaskCreationOptions;
  readonly preferFairness: TaskCreationOptions;
  readonly longRunning: TaskCreationOptions;
  readonly attachedToParent: TaskCreationOptions;
  readonly denyChildAttach: TaskCreationOptions;
  readonly hideScheduler: TaskCreationOptions;
  readonly runContinuationsAsynchronously: TaskCreationOptions;
}

export {};
