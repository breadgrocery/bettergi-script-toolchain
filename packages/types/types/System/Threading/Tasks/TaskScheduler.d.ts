import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../EventHandler";
import "./UnobservedTaskExceptionEventArgs";

declare const taskSchedulerBrand: unique symbol;
export interface TaskScheduler extends ClrHostValue {
  readonly [taskSchedulerBrand]: true;
  readonly id: number;
  readonly maximumConcurrencyLevel: number;
}

declare global {
  namespace System.Threading.Tasks {
    type TaskScheduler = import("./TaskScheduler").TaskScheduler;
  }
}

export interface TaskSchedulerHostType extends HostType<TaskScheduler, ReferenceTypeTrait> {
  readonly default: System.Threading.Tasks.TaskScheduler;
  readonly current: System.Threading.Tasks.TaskScheduler;
  fromCurrentSynchronizationContext(): System.Threading.Tasks.TaskScheduler;
}

export {};
