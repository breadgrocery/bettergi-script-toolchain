import type {
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
import "../Dnn/Backend";
import "../Dnn/Target";
import "../ICvPtrHolder";
import "../InputArray";
import "../Mat";
import "../OutputArray";

declare const dnnSuperResImplBrand: unique symbol;
export interface DnnSuperResImpl
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "getAlgorithm"
      | "getScale"
      | "readModel"
      | "setModel"
      | "setPreferableBackend"
      | "setPreferableTarget"
      | "upsample"
      | "upsampleMultioutput"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [dnnSuperResImplBrand]: true;
  readModel(path: string): VoidResult;
  readModel(weights: string, definition: string): VoidResult;
  setModel(algo: string, scale: number | StrongNumeric<Int32Host>): VoidResult;
  setPreferableBackend(backendId: EnumInput<OpenCvSharp.Dnn.Backend>): VoidResult;
  setPreferableTarget(targetId: EnumInput<OpenCvSharp.Dnn.Target>): VoidResult;
  upsample(img: OpenCvSharp.InputArray, result: OpenCvSharp.OutputArray): VoidResult;
  upsampleMultioutput(
    img: OpenCvSharp.InputArray,
    imgsNew: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    scaleFactors: System.Collections.Generic.IEnumerable<number>,
    nodeNames: System.Collections.Generic.IEnumerable<string>
  ): VoidResult;
  getScale(): number;
  getAlgorithm(): string;
}

declare global {
  namespace OpenCvSharp.DnnSuperres {
    type DnnSuperResImpl = import("./DnnSuperResImpl").DnnSuperResImpl;
  }
}

export interface DnnSuperResImplHostType extends HostType<
  DnnSuperResImpl,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): DnnSuperResImpl;
  new (algo: string, scale: number | StrongNumeric<Int32Host>): DnnSuperResImpl;
}

export {};
