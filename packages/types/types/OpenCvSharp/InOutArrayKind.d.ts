import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const inOutArrayKindBrand: unique symbol;
export interface InOutArrayKind extends ClrHostValue {
  readonly [inOutArrayKindBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type InOutArrayKind = import("./InOutArrayKind").InOutArrayKind;
  }
}

export interface InOutArrayKindHostType extends HostType<InOutArrayKind, EnumTypeTrait> {
  readonly none: InOutArrayKind;
  readonly mat: InOutArrayKind;
  readonly matx: InOutArrayKind;
  readonly stdVector: InOutArrayKind;
  readonly vectorVector: InOutArrayKind;
  readonly vectorMat: InOutArrayKind;
  readonly expr: InOutArrayKind;
  readonly openGLBuffer: InOutArrayKind;
  readonly cudaHostMem: InOutArrayKind;
  readonly cudaGpuMat: InOutArrayKind;
  readonly uMat: InOutArrayKind;
  readonly stdVectorUMat: InOutArrayKind;
  readonly stdBoolVector: InOutArrayKind;
  readonly stdVectorCudaGpuMat: InOutArrayKind;
  readonly fixedType: InOutArrayKind;
  readonly fixedSize: InOutArrayKind;
}

export {};
