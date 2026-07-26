import type {
  ByteHost,
  ClrHostValue,
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  SingleHost,
  StaticTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IEnumerable";
import "../../System/IO/Stream";
import "../Mat";
import "../Rect";
import "../Rect2d";
import "../RotatedRect";
import "../Scalar";
import "../Size";
import "./Net";

declare const cvDnnBrand: unique symbol;
export interface CvDnn extends ClrHostValue {
  readonly [cvDnnBrand]: true;
}

declare global {
  namespace OpenCvSharp.Dnn {
    type CvDnn = import("./CvDnn").CvDnn;
  }
}

export interface CvDnnHostType extends HostType<CvDnn, StaticTypeTrait> {
  readNetFromDarknet(cfgFile: string): OpenCvSharp.Dnn.Net;
  readNetFromDarknet(cfgFile: string, darknetModel: string | null): OpenCvSharp.Dnn.Net;
  readNetFromDarknet(bufferCfg: HostArray<number | StrongNumeric<ByteHost>>): OpenCvSharp.Dnn.Net;
  readNetFromDarknet(
    bufferCfg: HostArray<number | StrongNumeric<ByteHost>>,
    bufferModel: HostArray<number | StrongNumeric<ByteHost>> | null
  ): OpenCvSharp.Dnn.Net;
  readNetFromDarknet(bufferCfg: System.IO.Stream): OpenCvSharp.Dnn.Net;
  readNetFromDarknet(
    bufferCfg: System.IO.Stream,
    bufferModel: System.IO.Stream | null
  ): OpenCvSharp.Dnn.Net;
  readNetFromCaffe(prototxt: string): OpenCvSharp.Dnn.Net;
  readNetFromCaffe(prototxt: string, caffeModel: string | null): OpenCvSharp.Dnn.Net;
  readNetFromCaffe(bufferProto: HostArray<number | StrongNumeric<ByteHost>>): OpenCvSharp.Dnn.Net;
  readNetFromCaffe(
    bufferProto: HostArray<number | StrongNumeric<ByteHost>>,
    bufferModel: HostArray<number | StrongNumeric<ByteHost>> | null
  ): OpenCvSharp.Dnn.Net;
  readNetFromCaffe(bufferProto: System.IO.Stream): OpenCvSharp.Dnn.Net;
  readNetFromCaffe(
    bufferProto: System.IO.Stream,
    bufferModel: System.IO.Stream | null
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
  readNetFromTensorflow(bufferModel: System.IO.Stream): OpenCvSharp.Dnn.Net;
  readNetFromTensorflow(
    bufferModel: System.IO.Stream,
    bufferConfig: System.IO.Stream | null
  ): OpenCvSharp.Dnn.Net;
  readNetFromTorch(model: string): OpenCvSharp.Dnn.Net;
  readNetFromTorch(model: string, isBinary: boolean): OpenCvSharp.Dnn.Net;
  readNet(model: string): OpenCvSharp.Dnn.Net;
  readNet(model: string, config: string): OpenCvSharp.Dnn.Net;
  readNet(model: string, config: string, framework: string): OpenCvSharp.Dnn.Net;
  readTorchBlob(fileName: string): OpenCvSharp.Mat;
  readTorchBlob(fileName: string, isBinary: boolean): OpenCvSharp.Mat;
  readNetFromOnnx(onnxFile: string): OpenCvSharp.Dnn.Net;
  readNetFromOnnx(onnxFileData: HostArray<number | StrongNumeric<ByteHost>>): OpenCvSharp.Dnn.Net;
  readNetFromOnnx(onnxFileStream: System.IO.Stream): OpenCvSharp.Dnn.Net;
  readTensorFromONNX(path: string): OpenCvSharp.Mat;
  blobFromImage(image: OpenCvSharp.Mat): OpenCvSharp.Mat;
  blobFromImage(
    image: OpenCvSharp.Mat,
    scaleFactor: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  blobFromImage(
    image: OpenCvSharp.Mat,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    size: OpenCvSharp.Size
  ): OpenCvSharp.Mat;
  blobFromImage(
    image: OpenCvSharp.Mat,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    size: OpenCvSharp.Size,
    mean: OpenCvSharp.Scalar
  ): OpenCvSharp.Mat;
  blobFromImage(
    image: OpenCvSharp.Mat,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    size: OpenCvSharp.Size,
    mean: OpenCvSharp.Scalar,
    swapRB: boolean
  ): OpenCvSharp.Mat;
  blobFromImage(
    image: OpenCvSharp.Mat,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    size: OpenCvSharp.Size,
    mean: OpenCvSharp.Scalar,
    swapRB: boolean,
    crop: boolean
  ): OpenCvSharp.Mat;
  blobFromImages(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    scaleFactor: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  blobFromImages(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    size: OpenCvSharp.Size
  ): OpenCvSharp.Mat;
  blobFromImages(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    size: OpenCvSharp.Size,
    mean: OpenCvSharp.Scalar
  ): OpenCvSharp.Mat;
  blobFromImages(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    size: OpenCvSharp.Size,
    mean: OpenCvSharp.Scalar,
    swapRB: boolean
  ): OpenCvSharp.Mat;
  blobFromImages(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    scaleFactor: number | StrongNumeric<DoubleHost>,
    size: OpenCvSharp.Size,
    mean: OpenCvSharp.Scalar,
    swapRB: boolean,
    crop: boolean
  ): OpenCvSharp.Mat;
  shrinkCaffeModel(src: string, dst: string): VoidResult;
  shrinkCaffeModel(
    src: string,
    dst: string,
    layersTypes: System.Collections.Generic.IEnumerable<string> | null
  ): VoidResult;
  writeTextGraph(model: string, output: string): VoidResult;
  nmsBoxes(
    bboxes: System.Collections.Generic.IEnumerable<OpenCvSharp.Rect>,
    scores: System.Collections.Generic.IEnumerable<number>,
    scoreThreshold: number | StrongNumeric<SingleHost>,
    nmsThreshold: number | StrongNumeric<SingleHost>,
    indices: HostVariableOut<HostArray<number>>
  ): VoidResult;
  nmsBoxes(
    bboxes: System.Collections.Generic.IEnumerable<OpenCvSharp.Rect>,
    scores: System.Collections.Generic.IEnumerable<number>,
    scoreThreshold: number | StrongNumeric<SingleHost>,
    nmsThreshold: number | StrongNumeric<SingleHost>,
    indices: HostVariableOut<HostArray<number>>,
    eta: number | StrongNumeric<SingleHost>
  ): VoidResult;
  nmsBoxes(
    bboxes: System.Collections.Generic.IEnumerable<OpenCvSharp.Rect>,
    scores: System.Collections.Generic.IEnumerable<number>,
    scoreThreshold: number | StrongNumeric<SingleHost>,
    nmsThreshold: number | StrongNumeric<SingleHost>,
    indices: HostVariableOut<HostArray<number>>,
    eta: number | StrongNumeric<SingleHost>,
    topK: number | StrongNumeric<Int32Host>
  ): VoidResult;
  nmsBoxes(
    bboxes: System.Collections.Generic.IEnumerable<OpenCvSharp.Rect2d>,
    scores: System.Collections.Generic.IEnumerable<number>,
    scoreThreshold: number | StrongNumeric<SingleHost>,
    nmsThreshold: number | StrongNumeric<SingleHost>,
    indices: HostVariableOut<HostArray<number>>
  ): VoidResult;
  nmsBoxes(
    bboxes: System.Collections.Generic.IEnumerable<OpenCvSharp.Rect2d>,
    scores: System.Collections.Generic.IEnumerable<number>,
    scoreThreshold: number | StrongNumeric<SingleHost>,
    nmsThreshold: number | StrongNumeric<SingleHost>,
    indices: HostVariableOut<HostArray<number>>,
    eta: number | StrongNumeric<SingleHost>
  ): VoidResult;
  nmsBoxes(
    bboxes: System.Collections.Generic.IEnumerable<OpenCvSharp.Rect2d>,
    scores: System.Collections.Generic.IEnumerable<number>,
    scoreThreshold: number | StrongNumeric<SingleHost>,
    nmsThreshold: number | StrongNumeric<SingleHost>,
    indices: HostVariableOut<HostArray<number>>,
    eta: number | StrongNumeric<SingleHost>,
    topK: number | StrongNumeric<Int32Host>
  ): VoidResult;
  nmsBoxes(
    bboxes: System.Collections.Generic.IEnumerable<OpenCvSharp.RotatedRect>,
    scores: System.Collections.Generic.IEnumerable<number>,
    scoreThreshold: number | StrongNumeric<SingleHost>,
    nmsThreshold: number | StrongNumeric<SingleHost>,
    indices: HostVariableOut<HostArray<number>>
  ): VoidResult;
  nmsBoxes(
    bboxes: System.Collections.Generic.IEnumerable<OpenCvSharp.RotatedRect>,
    scores: System.Collections.Generic.IEnumerable<number>,
    scoreThreshold: number | StrongNumeric<SingleHost>,
    nmsThreshold: number | StrongNumeric<SingleHost>,
    indices: HostVariableOut<HostArray<number>>,
    eta: number | StrongNumeric<SingleHost>
  ): VoidResult;
  nmsBoxes(
    bboxes: System.Collections.Generic.IEnumerable<OpenCvSharp.RotatedRect>,
    scores: System.Collections.Generic.IEnumerable<number>,
    scoreThreshold: number | StrongNumeric<SingleHost>,
    nmsThreshold: number | StrongNumeric<SingleHost>,
    indices: HostVariableOut<HostArray<number>>,
    eta: number | StrongNumeric<SingleHost>,
    topK: number | StrongNumeric<Int32Host>
  ): VoidResult;
  resetMyriadDevice(): VoidResult;
}

export {};
