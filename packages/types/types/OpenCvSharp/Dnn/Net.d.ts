import type {
  ByteHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IEnumerable";
import "../../System/IDisposable";
import "../DisposableCvObject";
import "../ICvPtrHolder";
import "../Mat";
import "./Backend";
import "./Target";

declare const netBrand: unique symbol;
export interface Net
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "connect"
      | "dump"
      | "dumpToFile"
      | "empty"
      | "enableFusion"
      | "forward"
      | "getLayerId"
      | "getLayerNames"
      | "getPerfProfile"
      | "getUnconnectedOutLayers"
      | "getUnconnectedOutLayersNames"
      | "setHalideScheduler"
      | "setInput"
      | "setInputsNames"
      | "setPreferableBackend"
      | "setPreferableTarget"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [netBrand]: true;
  empty(): boolean;
  dump(): string;
  dumpToFile(path: string): VoidResult;
  getLayerId(layer: string): number;
  getLayerNames(): HostArray<string>;
  connect(
    outLayerId: number | StrongNumeric<Int32Host>,
    outNum: number | StrongNumeric<Int32Host>,
    inpLayerId: number | StrongNumeric<Int32Host>,
    inpNum: number | StrongNumeric<Int32Host>
  ): VoidResult;
  connect(outPin: string, inpPin: string): VoidResult;
  setInputsNames(inputBlobNames: System.Collections.Generic.IEnumerable<string>): VoidResult;
  forward(): OpenCvSharp.Mat;
  forward(outputBlobs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>): VoidResult;
  forward(
    outputBlobs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    outBlobNames: System.Collections.Generic.IEnumerable<string>
  ): VoidResult;
  forward(
    outputBlobs: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    outputName: string | null
  ): VoidResult;
  forward(outputName: string | null): OpenCvSharp.Mat;
  setHalideScheduler(scheduler: string): VoidResult;
  setPreferableBackend(backendId: EnumInput<OpenCvSharp.Dnn.Backend>): VoidResult;
  setPreferableTarget(targetId: EnumInput<OpenCvSharp.Dnn.Target>): VoidResult;
  setInput(blob: OpenCvSharp.Mat): VoidResult;
  setInput(blob: OpenCvSharp.Mat, name: string): VoidResult;
  getUnconnectedOutLayers(): HostArray<number>;
  getUnconnectedOutLayersNames(): HostArray<string>;
  enableFusion(fusion: boolean): VoidResult;
  getPerfProfile(timings: HostVariableOut<HostArray<number>>): number;
}

declare global {
  namespace OpenCvSharp.Dnn {
    type Net = import("./Net").Net;
  }
}

export interface NetHostType extends HostType<
  Net,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): Net;
  readFromModelOptimizer(xml: string, bin: string): OpenCvSharp.Dnn.Net;
  readNetFromDarknet(cfgFile: string): OpenCvSharp.Dnn.Net;
  readNetFromDarknet(cfgFile: string, darknetModel: string | null): OpenCvSharp.Dnn.Net;
  readNetFromDarknet(bufferCfg: HostArray<number | StrongNumeric<ByteHost>>): OpenCvSharp.Dnn.Net;
  readNetFromDarknet(
    bufferCfg: HostArray<number | StrongNumeric<ByteHost>>,
    bufferModel: HostArray<number | StrongNumeric<ByteHost>> | null
  ): OpenCvSharp.Dnn.Net;
  readNetFromCaffe(prototxt: string): OpenCvSharp.Dnn.Net;
  readNetFromCaffe(prototxt: string, caffeModel: string | null): OpenCvSharp.Dnn.Net;
  readNetFromCaffe(bufferProto: HostArray<number | StrongNumeric<ByteHost>>): OpenCvSharp.Dnn.Net;
  readNetFromCaffe(
    bufferProto: HostArray<number | StrongNumeric<ByteHost>>,
    bufferModel: HostArray<number | StrongNumeric<ByteHost>> | null
  ): OpenCvSharp.Dnn.Net;
  readNetFromTensorflow(model: string): OpenCvSharp.Dnn.Net;
  readNetFromTensorflow(model: string, config: string | null): OpenCvSharp.Dnn.Net;
  readNetFromTensorflow(
    bufferModel: HostArray<number | StrongNumeric<ByteHost>>
  ): OpenCvSharp.Dnn.Net;
  readNetFromTensorflow(
    bufferModel: HostArray<number | StrongNumeric<ByteHost>>,
    bufferConfig: HostArray<number | StrongNumeric<ByteHost>> | null
  ): OpenCvSharp.Dnn.Net;
  readNetFromTorch(model: string): OpenCvSharp.Dnn.Net;
  readNetFromTorch(model: string, isBinary: boolean): OpenCvSharp.Dnn.Net;
  readNet(model: string): OpenCvSharp.Dnn.Net;
  readNet(model: string, config: string): OpenCvSharp.Dnn.Net;
  readNet(model: string, config: string, framework: string): OpenCvSharp.Dnn.Net;
  readNetFromModelOptimizer(xml: string, bin: string): OpenCvSharp.Dnn.Net;
  readNetFromONNX(onnxFile: string): OpenCvSharp.Dnn.Net;
  readNetFromONNX(onnxFileData: HostArray<number | StrongNumeric<ByteHost>>): OpenCvSharp.Dnn.Net;
}

export {};
