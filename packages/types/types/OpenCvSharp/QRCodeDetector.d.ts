import type {
  DoubleHost,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./InputArray";
import "./Mat";
import "./OutputArray";
import "./Point2f";

declare const qRCodeDetectorBrand: unique symbol;
export interface QRCodeDetector
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "decode"
      | "decodeMulti"
      | "detect"
      | "detectAndDecode"
      | "detectMulti"
      | "setEpsX"
      | "setEpsY"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [qRCodeDetectorBrand]: true;
  setEpsX(epsX: number | StrongNumeric<DoubleHost>): VoidResult;
  setEpsY(epsY: number | StrongNumeric<DoubleHost>): VoidResult;
  detect(
    img: OpenCvSharp.InputArray,
    points: HostVariableOut<HostArray<OpenCvSharp.Point2f>>
  ): boolean;
  decode(
    img: OpenCvSharp.InputArray,
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>
  ): string;
  decode(
    img: OpenCvSharp.InputArray,
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    straightQrCode: OpenCvSharp.OutputArray | null
  ): string;
  detectAndDecode(
    img: OpenCvSharp.InputArray,
    points: HostVariableOut<HostArray<OpenCvSharp.Point2f>>
  ): string;
  detectAndDecode(
    img: OpenCvSharp.InputArray,
    points: HostVariableOut<HostArray<OpenCvSharp.Point2f>>,
    straightQrCode: OpenCvSharp.OutputArray | null
  ): string;
  detectMulti(
    img: OpenCvSharp.InputArray,
    points: HostVariableOut<HostArray<OpenCvSharp.Point2f>>
  ): boolean;
  decodeMulti(
    img: OpenCvSharp.InputArray,
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    decodedInfo: HostVariableOut<HostArray<string>>
  ): boolean;
  decodeMulti(
    img: OpenCvSharp.InputArray,
    points: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    decodedInfo: HostVariableOut<HostArray<string>>,
    straightQrCode: HostVariableOut<HostArray<OpenCvSharp.Mat>>
  ): boolean;
}

declare global {
  namespace OpenCvSharp {
    type QRCodeDetector = import("./QRCodeDetector").QRCodeDetector;
  }
}

export interface QRCodeDetectorHostType extends HostType<
  QRCodeDetector,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): QRCodeDetector;
}

export {};
