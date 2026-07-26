import "../../../System/Collections/Generic/IReadOnlyCollection";
import "../../../System/Collections/Generic/IReadOnlyDictionary";
import "../../../System/Collections/Generic/IReadOnlyList";
import "../../../System/IDisposable";
import type {
  ByteHost,
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../ClearScript/HostType";
import type { VoidResult } from "../../ClearScript/VoidResult";
import "./DisposableNamedOnnxValue";
import "./FixedBufferOnnxValue";
import "./IDisposableReadOnlyCollection";
import "./ModelMetadata";
import "./NamedOnnxValue";
import "./NodeMetadata";
import "./OrtIoBinding";
import "./OrtValue";
import "./PrePackedWeightsContainer";
import "./RunOptions";
import "./SessionOptions";

declare const inferenceSessionBrand: unique symbol;
export interface InferenceSession extends ClrHostValue, System.IDisposableInput {
  readonly [inferenceSessionBrand]: true;
  createIoBinding(): Microsoft.ML.OnnxRuntime.OrtIoBinding;
  dispose(): VoidResult;
  endProfiling(): string;
  readonly inputMetadata: System.Collections.Generic.IReadOnlyDictionary<
    string,
    Microsoft.ML.OnnxRuntime.NodeMetadata
  >;
  readonly inputNames: System.Collections.Generic.IReadOnlyList<string>;
  readonly modelMetadata: Microsoft.ML.OnnxRuntime.ModelMetadata;
  readonly outputMetadata: System.Collections.Generic.IReadOnlyDictionary<
    string,
    Microsoft.ML.OnnxRuntime.NodeMetadata
  >;
  readonly outputNames: System.Collections.Generic.IReadOnlyList<string>;
  readonly overridableInitializerMetadata: System.Collections.Generic.IReadOnlyDictionary<
    string,
    Microsoft.ML.OnnxRuntime.NodeMetadata
  >;
  readonly profilingStartTimeNs: number;
  run(
    inputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    inputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue>
  ): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.DisposableNamedOnnxValue>;
  run(
    inputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    inputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue>,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>
  ): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.DisposableNamedOnnxValue>;
  run(
    inputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    inputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue>,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    options: Microsoft.ML.OnnxRuntime.RunOptions
  ): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.DisposableNamedOnnxValue>;
  run(
    inputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    inputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue>,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    outputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue>
  ): VoidResult;
  run(
    inputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    inputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue>,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    outputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue>,
    options: Microsoft.ML.OnnxRuntime.RunOptions
  ): VoidResult;
  run(
    inputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    inputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue>,
    outputs: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.NamedOnnxValue>
  ): VoidResult;
  run(
    inputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    inputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue>,
    outputs: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.NamedOnnxValue>,
    options: Microsoft.ML.OnnxRuntime.RunOptions
  ): VoidResult;
  run(
    inputs: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.NamedOnnxValue>
  ): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.DisposableNamedOnnxValue>;
  run(
    inputs: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.NamedOnnxValue>,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>
  ): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.DisposableNamedOnnxValue>;
  run(
    inputs: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.NamedOnnxValue>,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    options: Microsoft.ML.OnnxRuntime.RunOptions
  ): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.DisposableNamedOnnxValue>;
  run(
    inputs: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.NamedOnnxValue>,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    outputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue>
  ): VoidResult;
  run(
    inputs: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.NamedOnnxValue>,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    outputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue>,
    options: Microsoft.ML.OnnxRuntime.RunOptions
  ): VoidResult;
  run(
    inputs: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.NamedOnnxValue>,
    outputs: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.NamedOnnxValue>
  ): VoidResult;
  run(
    inputs: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.NamedOnnxValue>,
    outputs: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.NamedOnnxValue>,
    options: Microsoft.ML.OnnxRuntime.RunOptions
  ): VoidResult;
  run(
    runOptions: Microsoft.ML.OnnxRuntime.RunOptions,
    inputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    inputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.OrtValue>,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>
  ): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.OrtValue>;
  run(
    runOptions: Microsoft.ML.OnnxRuntime.RunOptions,
    inputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    inputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.OrtValue>,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    outputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.OrtValue>
  ): VoidResult;
  run(
    runOptions: Microsoft.ML.OnnxRuntime.RunOptions,
    inputs: System.Collections.Generic.IReadOnlyDictionary<
      string,
      Microsoft.ML.OnnxRuntime.OrtValue
    >,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>
  ): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.OrtValue>;
  runAsync(
    options: Microsoft.ML.OnnxRuntime.RunOptions,
    inputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    inputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.OrtValue>,
    outputNames: System.Collections.Generic.IReadOnlyCollection<string>,
    outputValues: System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.OrtValue>
  ): Promise<System.Collections.Generic.IReadOnlyCollection<Microsoft.ML.OnnxRuntime.OrtValue>>;
  runWithBinding(
    runOptions: Microsoft.ML.OnnxRuntime.RunOptions,
    ioBinding: Microsoft.ML.OnnxRuntime.OrtIoBinding
  ): VoidResult;
  runWithBindingAndNames(
    runOptions: Microsoft.ML.OnnxRuntime.RunOptions,
    ioBinding: Microsoft.ML.OnnxRuntime.OrtIoBinding
  ): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.DisposableNamedOnnxValue>;
  runWithBindingAndNames(
    runOptions: Microsoft.ML.OnnxRuntime.RunOptions,
    ioBinding: Microsoft.ML.OnnxRuntime.OrtIoBinding,
    names: HostArray<string>
  ): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.DisposableNamedOnnxValue>;
  runWithBoundResults(
    runOptions: Microsoft.ML.OnnxRuntime.RunOptions,
    ioBinding: Microsoft.ML.OnnxRuntime.OrtIoBinding
  ): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.OrtValue>;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type InferenceSession = import("./InferenceSession").InferenceSession;
  }
}

export interface InferenceSessionHostType extends HostType<InferenceSession, ReferenceTypeTrait> {
  new (modelPath: string): InferenceSession;
  new (
    modelPath: string,
    prepackedWeightsContainer: Microsoft.ML.OnnxRuntime.PrePackedWeightsContainer
  ): InferenceSession;
  new (modelPath: string, options: Microsoft.ML.OnnxRuntime.SessionOptions): InferenceSession;
  new (
    modelPath: string,
    options: Microsoft.ML.OnnxRuntime.SessionOptions,
    prepackedWeightsContainer: Microsoft.ML.OnnxRuntime.PrePackedWeightsContainer
  ): InferenceSession;
  new (model: HostArray<number | StrongNumeric<ByteHost>>): InferenceSession;
  new (
    model: HostArray<number | StrongNumeric<ByteHost>>,
    prepackedWeightsContainer: Microsoft.ML.OnnxRuntime.PrePackedWeightsContainer
  ): InferenceSession;
  new (
    model: HostArray<number | StrongNumeric<ByteHost>>,
    options: Microsoft.ML.OnnxRuntime.SessionOptions
  ): InferenceSession;
  new (
    model: HostArray<number | StrongNumeric<ByteHost>>,
    options: Microsoft.ML.OnnxRuntime.SessionOptions,
    prepackedWeightsContainer: Microsoft.ML.OnnxRuntime.PrePackedWeightsContainer
  ): InferenceSession;
}

export {};
