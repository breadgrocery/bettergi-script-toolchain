import type {
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../DisposableCvObject";
import "../ICvPtrHolder";
import "../InputArray";
import "../Mat";
import "../OutputArray";

declare const dictionaryBrand: unique symbol;
export interface Dictionary
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "bytesList"
      | "generateImageMarker"
      | "getDistanceToId"
      | "identify"
      | "markerSize"
      | "maxCorrectionBits"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [dictionaryBrand]: true;
  readonly bytesList: OpenCvSharp.Mat;
  markerSize: number;
  maxCorrectionBits: number;
  identify(
    onlyBits: OpenCvSharp.Mat,
    idx: HostVariableOut<number>,
    rotation: HostVariableOut<number>,
    maxCorrectionRate: number | StrongNumeric<DoubleHost>
  ): boolean;
  getDistanceToId(bits: OpenCvSharp.InputArray, id: number | StrongNumeric<Int32Host>): number;
  getDistanceToId(
    bits: OpenCvSharp.InputArray,
    id: number | StrongNumeric<Int32Host>,
    allRotations: boolean
  ): number;
  generateImageMarker(
    id: number | StrongNumeric<Int32Host>,
    sidePixels: number | StrongNumeric<Int32Host>,
    img: OpenCvSharp.OutputArray
  ): VoidResult;
  generateImageMarker(
    id: number | StrongNumeric<Int32Host>,
    sidePixels: number | StrongNumeric<Int32Host>,
    img: OpenCvSharp.OutputArray,
    borderBits: number | StrongNumeric<Int32Host>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.Aruco {
    type Dictionary = import("./Dictionary").Dictionary;
  }
}

export interface DictionaryHostType extends HostType<Dictionary, ReferenceTypeTrait> {
  getByteListFromBits(bits: OpenCvSharp.Mat): OpenCvSharp.Mat;
  getBitsFromByteList(
    byteList: OpenCvSharp.Mat,
    markerSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
}

export {};
