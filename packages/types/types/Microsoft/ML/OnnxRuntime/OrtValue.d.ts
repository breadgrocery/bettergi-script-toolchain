import "../../../System/AsyncCallback";
import "../../../System/Collections/Generic/ICollection";
import "../../../System/Collections/Generic/IReadOnlyCollection";
import "../../../System/IAsyncResult";
import "../../../System/ICloneable";
import "../../../System/IDisposable";
import "../../../System/IntPtr";
import "../../../System/Memory";
import "../../../System/MulticastDelegate";
import "../../../System/Numerics/Tensors/Tensor";
import "../../../System/ReadOnlyMemory";
import "../../../System/Runtime/Serialization/ISerializable";
import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostDelegate,
  HostType,
  Int32Host,
  Int64Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../ClearScript/HostType";
import type { HostVariableRef } from "../../ClearScript/HostVariable";
import type { VoidResult } from "../../ClearScript/VoidResult";
import "./OnnxValueType";
import "./OrtAllocator";
import "./OrtMemoryInfo";
import "./OrtTensorTypeAndShapeInfo";
import "./OrtTypeInfo";
import "./Tensors/Tensor";
import "./Tensors/TensorElementType";

declare const ortValueBrand: unique symbol;
export interface OrtValue extends ClrHostValue, System.IDisposableInput {
  readonly [ortValueBrand]: true;
  dispose(): VoidResult;
  getStringElement(index: number | StrongNumeric<Int32Host>): string;
  getStringElementAsMemory(index: number | StrongNumeric<Int32Host>): System.ReadOnlyMemory<number>;
  getStringTensorAsArray(): HostArray<string>;
  getTensorMemoryInfo(): Microsoft.ML.OnnxRuntime.OrtMemoryInfo;
  getTensorTypeAndShape(): Microsoft.ML.OnnxRuntime.OrtTensorTypeAndShapeInfo;
  getTypeInfo(): Microsoft.ML.OnnxRuntime.OrtTypeInfo;
  getValue(
    index: number | StrongNumeric<Int32Host>,
    allocator: Microsoft.ML.OnnxRuntime.OrtAllocator
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  getValueCount(): number;
  processMap(
    visitor: OrtValue_MapVisitor,
    allocator: Microsoft.ML.OnnxRuntime.OrtAllocator
  ): VoidResult;
  processSequence(
    visitor: OrtValue_SequenceElementVisitor,
    allocator: Microsoft.ML.OnnxRuntime.OrtAllocator
  ): VoidResult;
  readonly isSparseTensor: boolean;
  readonly isTensor: boolean;
  readonly onnxType: Microsoft.ML.OnnxRuntime.OnnxValueType;
  readonly value: Microsoft.ML.OnnxRuntime.OrtValue;
  stringTensorSetElementAt(
    rom: System.ReadOnlyMemory<number>,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
}

declare const delegateOrtValue_SequenceElementVisitorBrand: unique symbol;
export interface OrtValue_SequenceElementVisitor extends HostDelegate {
  readonly [delegateOrtValue_SequenceElementVisitorBrand]: true;
  (
    ortValue: Microsoft.ML.OnnxRuntime.OrtValue,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
  invoke(
    ortValue: Microsoft.ML.OnnxRuntime.OrtValue,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
}

export interface OrtValue_SequenceElementVisitorHostType extends HostType<
  OrtValue_SequenceElementVisitor,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): OrtValue_SequenceElementVisitor;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime.OrtValue {
    type SequenceElementVisitor = import("./OrtValue").OrtValue_SequenceElementVisitor;
  }
}

declare const delegateOrtValue_MapVisitorBrand: unique symbol;
export interface OrtValue_MapVisitor extends HostDelegate {
  readonly [delegateOrtValue_MapVisitorBrand]: true;
  (keys: Microsoft.ML.OnnxRuntime.OrtValue, values: Microsoft.ML.OnnxRuntime.OrtValue): VoidResult;
  invoke(
    keys: Microsoft.ML.OnnxRuntime.OrtValue,
    values: Microsoft.ML.OnnxRuntime.OrtValue
  ): VoidResult;
}

export interface OrtValue_MapVisitorHostType extends HostType<
  OrtValue_MapVisitor,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): OrtValue_MapVisitor;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime.OrtValue {
    type MapVisitor = import("./OrtValue").OrtValue_MapVisitor;
  }
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtValue = import("./OrtValue").OrtValue;
  }
}

export interface OrtValueHostType extends HostType<OrtValue, ReferenceTypeTrait> {
  createTensorValueWithData(
    memInfo: Microsoft.ML.OnnxRuntime.OrtMemoryInfo,
    elementType: EnumInput<Microsoft.ML.OnnxRuntime.Tensors.TensorElementType>,
    shape: HostArray<number | StrongNumeric<Int64Host>>,
    dataBufferPtr: System.IntPtr,
    bufferLengthInBytes: number | StrongNumeric<Int64Host>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  createTensorValueFromMemory<T>(
    type1: HostType<T>,
    memoryInfo: Microsoft.ML.OnnxRuntime.OrtMemoryInfo,
    memory: System.Memory<T>,
    shape: HostArray<number | StrongNumeric<Int64Host>>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  createTensorValueFromMemory<T>(
    type1: HostType<T>,
    data: HostArray<T>,
    shape: HostArray<number | StrongNumeric<Int64Host>>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  createTensorValueFromSystemNumericsTensorObject<T>(
    type1: HostType<T>,
    tensor: System.Numerics.Tensors.Tensor<T>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  createAllocatedTensorValue(
    allocator: Microsoft.ML.OnnxRuntime.OrtAllocator,
    elementType: EnumInput<Microsoft.ML.OnnxRuntime.Tensors.TensorElementType>,
    shape: HostArray<number | StrongNumeric<Int64Host>>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  createTensorWithEmptyStrings(
    allocator: Microsoft.ML.OnnxRuntime.OrtAllocator,
    shape: HostArray<number | StrongNumeric<Int64Host>>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  createFromStringTensor(
    tensor: Microsoft.ML.OnnxRuntime.Tensors.Tensor<string>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  createSequence(
    ortValues: System.Collections.Generic.ICollection<Microsoft.ML.OnnxRuntime.OrtValue>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  createMap(
    keys: HostVariableRef<Microsoft.ML.OnnxRuntime.OrtValue>,
    values: HostVariableRef<Microsoft.ML.OnnxRuntime.OrtValue>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  createMap<K, V>(
    type1: HostType<K>,
    type2: HostType<V>,
    keys: HostArray<K>,
    values: HostArray<V>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  createMapWithStringKeys<V>(
    type1: HostType<V>,
    keys: System.Collections.Generic.IReadOnlyCollection<string>,
    values: HostArray<V>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  createMapWithStringValues<K>(
    type1: HostType<K>,
    keys: HostArray<K>,
    values: System.Collections.Generic.IReadOnlyCollection<string>
  ): Microsoft.ML.OnnxRuntime.OrtValue;
  readonly SequenceElementVisitor: OrtValue_SequenceElementVisitorHostType;
  readonly MapVisitor: OrtValue_MapVisitorHostType;
}

export {};
