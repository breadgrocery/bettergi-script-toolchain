import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../ComponentModel/Component";
import "../ComponentModel/IComponent";
import "../DateTime";
import "../IDisposable";
import "../IntPtr";
import "../TimeSpan";
import "./ThreadPriorityLevel";
import "./ThreadState";
import "./ThreadWaitReason";

declare const processThreadBrand: unique symbol;
export interface ProcessThread
  extends
    Omit<
      System.ComponentModel.Component,
      | "basePriority"
      | "currentPriority"
      | "id"
      | "idealProcessor"
      | "priorityBoostEnabled"
      | "priorityLevel"
      | "privilegedProcessorTime"
      | "processorAffinity"
      | "resetIdealProcessor"
      | "startAddress"
      | "startTime"
      | "threadState"
      | "totalProcessorTime"
      | "userProcessorTime"
      | "waitReason"
    >,
    System.ComponentModel.IComponentInput,
    System.IDisposableInput {
  readonly [processThreadBrand]: true;
  get idealProcessor(): never;
  set idealProcessor(value: number | StrongNumeric<Int32Host>);
  get processorAffinity(): never;
  set processorAffinity(value: System.IntPtr);
  priorityBoostEnabled: boolean;
  priorityLevel: System.Diagnostics.ThreadPriorityLevel;
  readonly basePriority: number;
  readonly currentPriority: number;
  readonly id: number;
  readonly privilegedProcessorTime: System.TimeSpan;
  readonly startAddress: System.IntPtr;
  readonly startTime: System.DateTime;
  readonly threadState: System.Diagnostics.ThreadState;
  readonly totalProcessorTime: System.TimeSpan;
  readonly userProcessorTime: System.TimeSpan;
  readonly waitReason: System.Diagnostics.ThreadWaitReason;
  resetIdealProcessor(): VoidResult;
}

declare global {
  namespace System.Diagnostics {
    type ProcessThread = import("./ProcessThread").ProcessThread;
  }
}

export interface ProcessThreadHostType extends HostType<ProcessThread, ReferenceTypeTrait> {}

export {};
