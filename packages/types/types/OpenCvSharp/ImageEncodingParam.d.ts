import type {
  ClrHostValue,
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IEquatable";
import "./ImwriteFlags";

declare const imageEncodingParamBrand: unique symbol;
export interface ImageEncodingParam extends ClrHostValue {
  readonly [imageEncodingParamBrand]: true;
  readonly encodingId: OpenCvSharp.ImwriteFlags;
  readonly value: number;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.ImageEncodingParam | null): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type ImageEncodingParam = import("./ImageEncodingParam").ImageEncodingParam;
  }
}

export interface ImageEncodingParamHostType extends HostType<
  ImageEncodingParam,
  ReferenceTypeTrait
> {
  new (
    id: EnumInput<OpenCvSharp.ImwriteFlags>,
    value: number | StrongNumeric<Int32Host>
  ): ImageEncodingParam;
}

export {};
