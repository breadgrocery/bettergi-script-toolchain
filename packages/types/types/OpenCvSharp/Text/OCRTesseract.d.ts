import type {
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../Mat";
import "../Rect";
import "./BaseOCR";
import "./ComponentLevels";

declare const oCRTesseractBrand: unique symbol;
export interface OCRTesseract
  extends
    Omit<OpenCvSharp.Text.BaseOCR, "run" | "setWhiteList">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [oCRTesseractBrand]: true;
  run(
    image: OpenCvSharp.Mat,
    mask: OpenCvSharp.Mat,
    outputText: HostVariableOut<string>,
    componentRects: HostVariableOut<HostArray<OpenCvSharp.Rect>>,
    componentTexts: HostVariableOut<HostArray<string>>,
    componentConfidences: HostVariableOut<HostArray<number>>
  ): VoidResult;
  run(
    image: OpenCvSharp.Mat,
    mask: OpenCvSharp.Mat,
    outputText: HostVariableOut<string>,
    componentRects: HostVariableOut<HostArray<OpenCvSharp.Rect>>,
    componentTexts: HostVariableOut<HostArray<string>>,
    componentConfidences: HostVariableOut<HostArray<number>>,
    componentLevel: EnumInput<OpenCvSharp.Text.ComponentLevels>
  ): VoidResult;
  run(
    image: OpenCvSharp.Mat,
    outputText: HostVariableOut<string>,
    componentRects: HostVariableOut<HostArray<OpenCvSharp.Rect>>,
    componentTexts: HostVariableOut<HostArray<string>>,
    componentConfidences: HostVariableOut<HostArray<number>>
  ): VoidResult;
  run(
    image: OpenCvSharp.Mat,
    outputText: HostVariableOut<string>,
    componentRects: HostVariableOut<HostArray<OpenCvSharp.Rect>>,
    componentTexts: HostVariableOut<HostArray<string>>,
    componentConfidences: HostVariableOut<HostArray<number>>,
    componentLevel: EnumInput<OpenCvSharp.Text.ComponentLevels>
  ): VoidResult;
  setWhiteList(charWhitelist: string): VoidResult;
}

declare global {
  namespace OpenCvSharp.Text {
    type OCRTesseract = import("./OCRTesseract").OCRTesseract;
  }
}

export interface OCRTesseractHostType extends HostType<OCRTesseract, ReferenceTypeTrait> {
  create(): OpenCvSharp.Text.OCRTesseract;
  create(datapath: string | null): OpenCvSharp.Text.OCRTesseract;
  create(datapath: string | null, language: string | null): OpenCvSharp.Text.OCRTesseract;
  create(
    datapath: string | null,
    language: string | null,
    charWhitelist: string | null
  ): OpenCvSharp.Text.OCRTesseract;
  create(
    datapath: string | null,
    language: string | null,
    charWhitelist: string | null,
    oem: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Text.OCRTesseract;
  create(
    datapath: string | null,
    language: string | null,
    charWhitelist: string | null,
    oem: number | StrongNumeric<Int32Host>,
    psmode: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Text.OCRTesseract;
}

export {};
