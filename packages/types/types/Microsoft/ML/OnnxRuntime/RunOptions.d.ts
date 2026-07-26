import "../../../System/IDisposable";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../ClearScript/HostType";
import type { VoidResult } from "../../ClearScript/VoidResult";
import "./OrtLoggingLevel";
import "./OrtLoraAdapter";

declare const runOptionsBrand: unique symbol;
export interface RunOptions
  extends
    Omit<
      System.Runtime.InteropServices.SafeHandle,
      | "addActiveLoraAdapter"
      | "addRunConfigEntry"
      | "isInvalid"
      | "logId"
      | "logSeverityLevel"
      | "logVerbosityLevel"
      | "terminate"
    >,
    System.IDisposableInput {
  readonly [runOptionsBrand]: true;
  addActiveLoraAdapter(loraAdapter: Microsoft.ML.OnnxRuntime.OrtLoraAdapter): VoidResult;
  addRunConfigEntry(configKey: string, configValue: string): VoidResult;
  logId: string;
  logSeverityLevel: Microsoft.ML.OnnxRuntime.OrtLoggingLevel;
  logVerbosityLevel: number;
  readonly isInvalid: boolean;
  terminate: boolean;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type RunOptions = import("./RunOptions").RunOptions;
  }
}

export interface RunOptionsHostType extends HostType<
  RunOptions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): RunOptions;
}

export {};
