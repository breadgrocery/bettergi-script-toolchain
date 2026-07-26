import type { EventSource } from "../../Microsoft/ClearScript/HostEvent";
import type {
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../Microsoft/Win32/SafeHandles/SafeProcessHandle";
import "../Collections/Generic/IEnumerable";
import "../ComponentModel/Component";
import "../ComponentModel/IComponent";
import "../ComponentModel/ISynchronizeInvoke";
import "../DateTime";
import "../EventHandler";
import "../IDisposable";
import "../IO/StreamReader";
import "../IO/StreamWriter";
import "../IntPtr";
import "../Security/SecureString";
import "../Threading/CancellationToken";
import "../TimeSpan";
import "./DataReceivedEventHandler";
import "./ProcessModule";
import "./ProcessModuleCollection";
import "./ProcessPriorityClass";
import "./ProcessStartInfo";
import "./ProcessThreadCollection";

declare const processBrand: unique symbol;
export interface Process
  extends
    Omit<
      System.ComponentModel.Component,
      | "basePriority"
      | "beginErrorReadLine"
      | "beginOutputReadLine"
      | "cancelErrorRead"
      | "cancelOutputRead"
      | "close"
      | "closeMainWindow"
      | "enableRaisingEvents"
      | "exitCode"
      | "exitTime"
      | "handle"
      | "handleCount"
      | "hasExited"
      | "id"
      | "kill"
      | "machineName"
      | "mainModule"
      | "mainWindowHandle"
      | "mainWindowTitle"
      | "maxWorkingSet"
      | "minWorkingSet"
      | "modules"
      | "nonpagedSystemMemorySize"
      | "nonpagedSystemMemorySize64"
      | "pagedMemorySize"
      | "pagedMemorySize64"
      | "pagedSystemMemorySize"
      | "pagedSystemMemorySize64"
      | "peakPagedMemorySize"
      | "peakPagedMemorySize64"
      | "peakVirtualMemorySize"
      | "peakVirtualMemorySize64"
      | "peakWorkingSet"
      | "peakWorkingSet64"
      | "priorityBoostEnabled"
      | "priorityClass"
      | "privateMemorySize"
      | "privateMemorySize64"
      | "privilegedProcessorTime"
      | "processName"
      | "processorAffinity"
      | "refresh"
      | "responding"
      | "safeHandle"
      | "sessionId"
      | "standardError"
      | "standardInput"
      | "standardOutput"
      | "start"
      | "startInfo"
      | "startTime"
      | "synchronizingObject"
      | "threads"
      | "toString"
      | "totalProcessorTime"
      | "userProcessorTime"
      | "virtualMemorySize"
      | "virtualMemorySize64"
      | "waitForExit"
      | "waitForExitAsync"
      | "waitForInputIdle"
      | "workingSet"
      | "workingSet64"
    >,
    System.ComponentModel.IComponentInput,
    System.IDisposableInput {
  readonly [processBrand]: true;
  beginErrorReadLine(): VoidResult;
  beginOutputReadLine(): VoidResult;
  cancelErrorRead(): VoidResult;
  cancelOutputRead(): VoidResult;
  close(): VoidResult;
  closeMainWindow(): boolean;
  enableRaisingEvents: boolean;
  kill(): VoidResult;
  kill(entireProcessTree: boolean): VoidResult;
  maxWorkingSet: System.IntPtr;
  minWorkingSet: System.IntPtr;
  priorityBoostEnabled: boolean;
  priorityClass: System.Diagnostics.ProcessPriorityClass;
  processorAffinity: System.IntPtr;
  readonly basePriority: number;
  readonly errorDataReceived: EventSource<
    (sender: unknown, e: System.Diagnostics.DataReceivedEventArgs) => void
  >;
  readonly exitCode: number;
  readonly exitTime: System.DateTime;
  readonly exited: EventSource<(sender: unknown, e: System.EventArgs) => void>;
  readonly handle: System.IntPtr;
  readonly handleCount: number;
  readonly hasExited: boolean;
  readonly id: number;
  readonly machineName: string;
  readonly mainModule: System.Diagnostics.ProcessModule;
  readonly mainWindowHandle: System.IntPtr;
  readonly mainWindowTitle: string;
  readonly modules: System.Diagnostics.ProcessModuleCollection;
  readonly nonpagedSystemMemorySize64: number;
  readonly nonpagedSystemMemorySize: number;
  readonly outputDataReceived: EventSource<
    (sender: unknown, e: System.Diagnostics.DataReceivedEventArgs) => void
  >;
  readonly pagedMemorySize64: number;
  readonly pagedMemorySize: number;
  readonly pagedSystemMemorySize64: number;
  readonly pagedSystemMemorySize: number;
  readonly peakPagedMemorySize64: number;
  readonly peakPagedMemorySize: number;
  readonly peakVirtualMemorySize64: number;
  readonly peakVirtualMemorySize: number;
  readonly peakWorkingSet64: number;
  readonly peakWorkingSet: number;
  readonly privateMemorySize64: number;
  readonly privateMemorySize: number;
  readonly privilegedProcessorTime: System.TimeSpan;
  readonly processName: string;
  readonly responding: boolean;
  readonly safeHandle: Microsoft.Win32.SafeHandles.SafeProcessHandle;
  readonly sessionId: number;
  readonly standardError: System.IO.StreamReader;
  readonly standardInput: System.IO.StreamWriter;
  readonly standardOutput: System.IO.StreamReader;
  readonly startTime: System.DateTime;
  readonly threads: System.Diagnostics.ProcessThreadCollection;
  readonly totalProcessorTime: System.TimeSpan;
  readonly userProcessorTime: System.TimeSpan;
  readonly virtualMemorySize64: number;
  readonly virtualMemorySize: number;
  readonly workingSet64: number;
  readonly workingSet: number;
  refresh(): VoidResult;
  start(): boolean;
  startInfo: System.Diagnostics.ProcessStartInfo;
  synchronizingObject: System.ComponentModel.ISynchronizeInvoke;
  toString(): string;
  waitForExit(): VoidResult;
  waitForExit(milliseconds: number | StrongNumeric<Int32Host>): boolean;
  waitForExit(timeout: System.TimeSpan): boolean;
  waitForExitAsync(): Promise<void>;
  waitForExitAsync(cancellationToken: System.Threading.CancellationToken): Promise<void>;
  waitForInputIdle(): boolean;
  waitForInputIdle(milliseconds: number | StrongNumeric<Int32Host>): boolean;
  waitForInputIdle(timeout: System.TimeSpan): boolean;
}

declare global {
  namespace System.Diagnostics {
    type Process = import("./Process").Process;
  }
}

export interface ProcessHostType extends HostType<
  Process,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): Process;
  getProcessById(
    processId: number | StrongNumeric<Int32Host>,
    machineName: string
  ): System.Diagnostics.Process;
  getProcessById(processId: number | StrongNumeric<Int32Host>): System.Diagnostics.Process;
  getProcessesByName(processName: string | null): HostArray<System.Diagnostics.Process>;
  getProcesses(): HostArray<System.Diagnostics.Process>;
  getProcesses(machineName: string): HostArray<System.Diagnostics.Process>;
  getCurrentProcess(): System.Diagnostics.Process;
  start(fileName: string): System.Diagnostics.Process;
  start(fileName: string, arguments: string): System.Diagnostics.Process;
  start(
    fileName: string,
    arguments: System.Collections.Generic.IEnumerable<string>
  ): System.Diagnostics.Process;
  start(startInfo: System.Diagnostics.ProcessStartInfo): System.Diagnostics.Process;
  getProcessesByName(
    processName: string | null,
    machineName: string
  ): HostArray<System.Diagnostics.Process>;
  start(
    fileName: string,
    userName: string,
    password: System.Security.SecureString,
    domain: string
  ): System.Diagnostics.Process;
  start(
    fileName: string,
    arguments: string,
    userName: string,
    password: System.Security.SecureString,
    domain: string
  ): System.Diagnostics.Process;
  enterDebugMode(): VoidResult;
  leaveDebugMode(): VoidResult;
}

export {};
