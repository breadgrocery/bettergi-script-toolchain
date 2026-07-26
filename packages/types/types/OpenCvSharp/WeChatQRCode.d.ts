import type { HostArray, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./InputArray";
import "./Mat";

declare const weChatQRCodeBrand: unique symbol;
export interface WeChatQRCode
  extends
    Omit<OpenCvSharp.DisposableCvObject, "detectAndDecode">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [weChatQRCodeBrand]: true;
  detectAndDecode(
    inputImage: OpenCvSharp.InputArray,
    bbox: HostVariableOut<HostArray<OpenCvSharp.Mat>>,
    results: HostVariableOut<HostArray<string>>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type WeChatQRCode = import("./WeChatQRCode").WeChatQRCode;
  }
}

export interface WeChatQRCodeHostType extends HostType<WeChatQRCode, ReferenceTypeTrait> {
  create(
    detectorPrototxtPath: string,
    detectorCaffeModelPath: string,
    superResolutionPrototxtPath: string,
    superResolutionCaffeModelPath: string
  ): OpenCvSharp.WeChatQRCode;
}

export {};
