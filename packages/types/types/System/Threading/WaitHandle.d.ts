import type {
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../Microsoft/Win32/SafeHandles/SafeWaitHandle";
import "../IDisposable";
import "../IntPtr";
import "../MarshalByRefObject";
import "../TimeSpan";

declare const waitHandleBrand: unique symbol;
export interface WaitHandle
  extends
    Omit<System.MarshalByRefObject, "close" | "dispose" | "handle" | "safeWaitHandle" | "waitOne">,
    System.IDisposableInput {
  readonly [waitHandleBrand]: true;
  close(): VoidResult;
  dispose(): VoidResult;
  handle: System.IntPtr;
  safeWaitHandle: Microsoft.Win32.SafeHandles.SafeWaitHandle;
  waitOne(): boolean;
  waitOne(millisecondsTimeout: number | StrongNumeric<Int32Host>): boolean;
  waitOne(millisecondsTimeout: number | StrongNumeric<Int32Host>, exitContext: boolean): boolean;
  waitOne(timeout: System.TimeSpan): boolean;
  waitOne(timeout: System.TimeSpan, exitContext: boolean): boolean;
}

declare global {
  namespace System.Threading {
    type WaitHandle = import("./WaitHandle").WaitHandle;
  }
}

export interface WaitHandleHostType extends HostType<WaitHandle, ReferenceTypeTrait> {
  readonly waitTimeout: number;
  waitAll(
    waitHandles: HostArray<System.Threading.WaitHandle>,
    millisecondsTimeout: number | StrongNumeric<Int32Host>
  ): boolean;
  waitAll(waitHandles: HostArray<System.Threading.WaitHandle>, timeout: System.TimeSpan): boolean;
  waitAll(waitHandles: HostArray<System.Threading.WaitHandle>): boolean;
  waitAll(
    waitHandles: HostArray<System.Threading.WaitHandle>,
    millisecondsTimeout: number | StrongNumeric<Int32Host>,
    exitContext: boolean
  ): boolean;
  waitAll(
    waitHandles: HostArray<System.Threading.WaitHandle>,
    timeout: System.TimeSpan,
    exitContext: boolean
  ): boolean;
  waitAny(
    waitHandles: HostArray<System.Threading.WaitHandle>,
    millisecondsTimeout: number | StrongNumeric<Int32Host>
  ): number;
  waitAny(waitHandles: HostArray<System.Threading.WaitHandle>, timeout: System.TimeSpan): number;
  waitAny(waitHandles: HostArray<System.Threading.WaitHandle>): number;
  waitAny(
    waitHandles: HostArray<System.Threading.WaitHandle>,
    millisecondsTimeout: number | StrongNumeric<Int32Host>,
    exitContext: boolean
  ): number;
  waitAny(
    waitHandles: HostArray<System.Threading.WaitHandle>,
    timeout: System.TimeSpan,
    exitContext: boolean
  ): number;
  signalAndWait(
    toSignal: System.Threading.WaitHandle,
    toWaitOn: System.Threading.WaitHandle
  ): boolean;
  signalAndWait(
    toSignal: System.Threading.WaitHandle,
    toWaitOn: System.Threading.WaitHandle,
    timeout: System.TimeSpan,
    exitContext: boolean
  ): boolean;
  signalAndWait(
    toSignal: System.Threading.WaitHandle,
    toWaitOn: System.Threading.WaitHandle,
    millisecondsTimeout: number | StrongNumeric<Int32Host>,
    exitContext: boolean
  ): boolean;
}

export {};
