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

declare const taskStatusBrand: unique symbol;
export interface TaskStatus extends ClrHostValue {
  readonly [taskStatusBrand]: true;
}

declare global {
  namespace System.Threading.Tasks {
    type TaskStatus = import("./TaskStatus").TaskStatus;
  }
}

export interface TaskStatusHostType extends HostType<TaskStatus, EnumTypeTrait> {
  readonly created: TaskStatus;
  readonly waitingForActivation: TaskStatus;
  readonly waitingToRun: TaskStatus;
  readonly running: TaskStatus;
  readonly waitingForChildrenToComplete: TaskStatus;
  readonly ranToCompletion: TaskStatus;
  readonly canceled: TaskStatus;
  readonly faulted: TaskStatus;
}

export {};
