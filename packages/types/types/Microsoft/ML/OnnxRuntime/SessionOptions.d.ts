import "../../../System/Collections/Generic/Dictionary";
import "../../../System/IDisposable";
import "../../../System/IntPtr";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type {
  EnumInput,
  HostType,
  Int32Host,
  Int64Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../ClearScript/HostType";
import type { HostVariableOut } from "../../ClearScript/HostVariable";
import type { VoidResult } from "../../ClearScript/VoidResult";
import "./CoreMLFlags";
import "./ExecutionMode";
import "./GraphOptimizationLevel";
import "./NnapiFlags";
import "./OrtCUDAProviderOptions";
import "./OrtLoggingLevel";
import "./OrtROCMProviderOptions";
import "./OrtTensorRTProviderOptions";
import "./OrtValue";

declare const sessionOptionsBrand: unique symbol;
export interface SessionOptions
  extends
    Omit<
      System.Runtime.InteropServices.SafeHandle,
      | "addFreeDimensionOverride"
      | "addFreeDimensionOverrideByName"
      | "addInitializer"
      | "addSessionConfigEntry"
      | "appendExecutionProvider"
      | "appendExecutionProvider_CPU"
      | "appendExecutionProvider_CUDA"
      | "appendExecutionProvider_CoreML"
      | "appendExecutionProvider_DML"
      | "appendExecutionProvider_Dnnl"
      | "appendExecutionProvider_MIGraphX"
      | "appendExecutionProvider_Nnapi"
      | "appendExecutionProvider_OpenVINO"
      | "appendExecutionProvider_ROCm"
      | "appendExecutionProvider_Tensorrt"
      | "disablePerSessionThreads"
      | "enableCpuMemArena"
      | "enableMemoryPattern"
      | "enableProfiling"
      | "executionMode"
      | "graphOptimizationLevel"
      | "interOpNumThreads"
      | "intraOpNumThreads"
      | "isInvalid"
      | "logId"
      | "logSeverityLevel"
      | "logVerbosityLevel"
      | "optimizedModelFilePath"
      | "profileOutputPathPrefix"
      | "registerCustomOpLibrary"
      | "registerCustomOpLibraryV2"
      | "registerOrtExtensions"
    >,
    System.IDisposableInput {
  readonly [sessionOptionsBrand]: true;
  addFreeDimensionOverride(
    dimDenotation: string,
    dimValue: number | StrongNumeric<Int64Host>
  ): VoidResult;
  addFreeDimensionOverrideByName(
    dimName: string,
    dimValue: number | StrongNumeric<Int64Host>
  ): VoidResult;
  addInitializer(name: string, ortValue: Microsoft.ML.OnnxRuntime.OrtValue): VoidResult;
  addSessionConfigEntry(configKey: string, configValue: string): VoidResult;
  appendExecutionProvider(providerName: string): VoidResult;
  appendExecutionProvider(
    providerName: string,
    providerOptions: System.Collections.Generic.Dictionary<string, string>
  ): VoidResult;
  appendExecutionProvider_CPU(): VoidResult;
  appendExecutionProvider_CPU(useArena: number | StrongNumeric<Int32Host>): VoidResult;
  appendExecutionProvider_CUDA(): VoidResult;
  appendExecutionProvider_CUDA(
    cudaProviderOptions: Microsoft.ML.OnnxRuntime.OrtCUDAProviderOptions
  ): VoidResult;
  appendExecutionProvider_CUDA(deviceId: number | StrongNumeric<Int32Host>): VoidResult;
  appendExecutionProvider_CoreML(): VoidResult;
  appendExecutionProvider_CoreML(
    coremlFlags: EnumInput<Microsoft.ML.OnnxRuntime.CoreMLFlags>
  ): VoidResult;
  appendExecutionProvider_DML(): VoidResult;
  appendExecutionProvider_DML(deviceId: number | StrongNumeric<Int32Host>): VoidResult;
  appendExecutionProvider_Dnnl(): VoidResult;
  appendExecutionProvider_Dnnl(useArena: number | StrongNumeric<Int32Host>): VoidResult;
  appendExecutionProvider_MIGraphX(): VoidResult;
  appendExecutionProvider_MIGraphX(deviceId: number | StrongNumeric<Int32Host>): VoidResult;
  appendExecutionProvider_Nnapi(): VoidResult;
  appendExecutionProvider_Nnapi(
    nnapiFlags: EnumInput<Microsoft.ML.OnnxRuntime.NnapiFlags>
  ): VoidResult;
  appendExecutionProvider_OpenVINO(): VoidResult;
  appendExecutionProvider_OpenVINO(deviceId: string): VoidResult;
  appendExecutionProvider_ROCm(): VoidResult;
  appendExecutionProvider_ROCm(deviceId: number | StrongNumeric<Int32Host>): VoidResult;
  appendExecutionProvider_ROCm(
    rocmProviderOptions: Microsoft.ML.OnnxRuntime.OrtROCMProviderOptions
  ): VoidResult;
  appendExecutionProvider_Tensorrt(): VoidResult;
  appendExecutionProvider_Tensorrt(deviceId: number | StrongNumeric<Int32Host>): VoidResult;
  appendExecutionProvider_Tensorrt(
    trtProviderOptions: Microsoft.ML.OnnxRuntime.OrtTensorRTProviderOptions
  ): VoidResult;
  disablePerSessionThreads(): VoidResult;
  enableCpuMemArena: boolean;
  enableMemoryPattern: boolean;
  enableProfiling: boolean;
  executionMode: Microsoft.ML.OnnxRuntime.ExecutionMode;
  graphOptimizationLevel: Microsoft.ML.OnnxRuntime.GraphOptimizationLevel;
  interOpNumThreads: number;
  intraOpNumThreads: number;
  logId: string;
  logSeverityLevel: Microsoft.ML.OnnxRuntime.OrtLoggingLevel;
  logVerbosityLevel: number;
  optimizedModelFilePath: string;
  profileOutputPathPrefix: string;
  readonly isInvalid: boolean;
  registerCustomOpLibrary(libraryPath: string): VoidResult;
  registerCustomOpLibraryV2(
    libraryPath: string,
    libraryHandle: HostVariableOut<System.IntPtr>
  ): VoidResult;
  registerOrtExtensions(): VoidResult;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type SessionOptions = import("./SessionOptions").SessionOptions;
  }
}

export interface SessionOptionsHostType extends HostType<
  SessionOptions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): SessionOptions;
  makeSessionOptionWithCudaProvider(): Microsoft.ML.OnnxRuntime.SessionOptions;
  makeSessionOptionWithCudaProvider(
    deviceId: number | StrongNumeric<Int32Host>
  ): Microsoft.ML.OnnxRuntime.SessionOptions;
  makeSessionOptionWithCudaProvider(
    cudaProviderOptions: Microsoft.ML.OnnxRuntime.OrtCUDAProviderOptions
  ): Microsoft.ML.OnnxRuntime.SessionOptions;
  makeSessionOptionWithTensorrtProvider(): Microsoft.ML.OnnxRuntime.SessionOptions;
  makeSessionOptionWithTensorrtProvider(
    deviceId: number | StrongNumeric<Int32Host>
  ): Microsoft.ML.OnnxRuntime.SessionOptions;
  makeSessionOptionWithTensorrtProvider(
    trtProviderOptions: Microsoft.ML.OnnxRuntime.OrtTensorRTProviderOptions
  ): Microsoft.ML.OnnxRuntime.SessionOptions;
  makeSessionOptionWithRocmProvider(): Microsoft.ML.OnnxRuntime.SessionOptions;
  makeSessionOptionWithRocmProvider(
    deviceId: number | StrongNumeric<Int32Host>
  ): Microsoft.ML.OnnxRuntime.SessionOptions;
  makeSessionOptionWithRocmProvider(
    rocmProviderOptions: Microsoft.ML.OnnxRuntime.OrtROCMProviderOptions
  ): Microsoft.ML.OnnxRuntime.SessionOptions;
}

export {};
