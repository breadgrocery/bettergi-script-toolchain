import type {
  ClrHostValue,
  HostArray,
  HostType,
  StaticTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../InputArray";
import "../OutputArray";
import "../Rect";

declare const cvTextBrand: unique symbol;
export interface CvText extends ClrHostValue {
  readonly [cvTextBrand]: true;
}

declare global {
  namespace OpenCvSharp.Text {
    type CvText = import("./CvText").CvText;
  }
}

export interface CvTextHostType extends HostType<CvText, StaticTypeTrait> {
  detectTextSWT(input: OpenCvSharp.InputArray, darkOnLight: boolean): HostArray<OpenCvSharp.Rect>;
  detectTextSWT(
    input: OpenCvSharp.InputArray,
    darkOnLight: boolean,
    draw: OpenCvSharp.OutputArray | null
  ): HostArray<OpenCvSharp.Rect>;
  detectTextSWT(
    input: OpenCvSharp.InputArray,
    darkOnLight: boolean,
    draw: OpenCvSharp.OutputArray | null,
    chainBBs: OpenCvSharp.OutputArray | null
  ): HostArray<OpenCvSharp.Rect>;
}

export {};
