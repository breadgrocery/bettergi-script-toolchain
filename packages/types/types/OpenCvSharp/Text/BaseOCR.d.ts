import type {
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../DisposableCvObject";
import "../ICvPtrHolder";
import "../Mat";
import "../Rect";
import "./ComponentLevels";

declare const baseOCRBrand: unique symbol;
export interface BaseOCR
  extends
    Omit<OpenCvSharp.DisposableCvObject, "run">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [baseOCRBrand]: true;
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
}

declare global {
  namespace OpenCvSharp.Text {
    type BaseOCR = import("./BaseOCR").BaseOCR;
  }
}

export interface BaseOCRHostType extends HostType<BaseOCR, ReferenceTypeTrait> {}

export {};
