import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IEquatable";
import "./VideoAccelerationType";

declare const videoCaptureParaBrand: unique symbol;
export interface VideoCapturePara extends ClrHostValue {
  readonly [videoCaptureParaBrand]: true;
  readonly accelerationType: OpenCvSharp.VideoAccelerationType;
  readonly hwDeviceIndex: number;
  getParameters(): HostArray<number>;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.VideoCapturePara | null): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type VideoCapturePara = import("./VideoCapturePara").VideoCapturePara;
  }
}

export interface VideoCaptureParaHostType extends HostType<
  VideoCapturePara,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VideoCapturePara;
  new (
    videoAcceleration: EnumInput<OpenCvSharp.VideoAccelerationType>,
    deviceIndex: number | StrongNumeric<Int32Host>
  ): VideoCapturePara;
}

export {};
