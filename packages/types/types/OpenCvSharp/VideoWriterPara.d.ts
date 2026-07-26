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

declare const videoWriterParaBrand: unique symbol;
export interface VideoWriterPara extends ClrHostValue {
  readonly [videoWriterParaBrand]: true;
  readonly accelerationType: OpenCvSharp.VideoAccelerationType;
  readonly hwDeviceIndex: number;
  getParameters(): HostArray<number>;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.VideoWriterPara | null): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type VideoWriterPara = import("./VideoWriterPara").VideoWriterPara;
  }
}

export interface VideoWriterParaHostType extends HostType<
  VideoWriterPara,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VideoWriterPara;
  new (
    videoAcceleration: EnumInput<OpenCvSharp.VideoAccelerationType>,
    deviceIndex: number | StrongNumeric<Int32Host>
  ): VideoWriterPara;
}

export {};
