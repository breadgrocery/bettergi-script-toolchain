import type {
  ByteHost,
  ClrHostValue,
  DoubleHost,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "../System/Collections/Generic/IEnumerable";
import "../System/ValueType";
import "./InputArray";
import "./Point";
import "./Point2f";

declare const momentsBrand: unique symbol;
export interface Moments extends ClrHostValue {
  readonly [momentsBrand]: true;
  m00: number;
  m10: number;
  m01: number;
  m20: number;
  m11: number;
  m02: number;
  m30: number;
  m21: number;
  m12: number;
  m03: number;
  mu20: number;
  mu11: number;
  mu02: number;
  mu30: number;
  mu21: number;
  mu12: number;
  mu03: number;
  nu20: number;
  nu11: number;
  nu02: number;
  nu30: number;
  nu21: number;
  nu12: number;
  nu03: number;
  huMoments(): HostArray<number>;
}

declare const moments_NativeStructBrand: unique symbol;
export interface Moments_NativeStruct extends ClrHostValue {
  readonly [moments_NativeStructBrand]: true;
  m00: number;
  m10: number;
  m01: number;
  m20: number;
  m11: number;
  m02: number;
  m30: number;
  m21: number;
  m12: number;
  m03: number;
  mu20: number;
  mu11: number;
  mu02: number;
  mu30: number;
  mu21: number;
  mu12: number;
  mu03: number;
  inv_sqrt_m00: number;
}

export interface Moments_NativeStructHostType extends HostType<
  Moments_NativeStruct,
  ValueTypeTrait
> {}

declare global {
  namespace OpenCvSharp.Moments {
    type NativeStruct = import("./Moments").Moments_NativeStruct;
  }
}

declare global {
  namespace OpenCvSharp {
    type Moments = import("./Moments").Moments;
  }
}

export interface MomentsHostType extends HostType<
  Moments,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): Moments;
  new (
    m00: number | StrongNumeric<DoubleHost>,
    m10: number | StrongNumeric<DoubleHost>,
    m01: number | StrongNumeric<DoubleHost>,
    m20: number | StrongNumeric<DoubleHost>,
    m11: number | StrongNumeric<DoubleHost>,
    m02: number | StrongNumeric<DoubleHost>,
    m30: number | StrongNumeric<DoubleHost>,
    m21: number | StrongNumeric<DoubleHost>,
    m12: number | StrongNumeric<DoubleHost>,
    m03: number | StrongNumeric<DoubleHost>
  ): Moments;
  new (array: OpenCvSharp.InputArray): Moments;
  new (array: OpenCvSharp.InputArray, binaryImage: boolean): Moments;
  new (array: HostArray<number | StrongNumeric<ByteHost>>): Moments;
  new (array: HostArray<number | StrongNumeric<ByteHost>>, binaryImage: boolean): Moments;
  new (array: HostArray<number | StrongNumeric<SingleHost>>): Moments;
  new (array: HostArray<number | StrongNumeric<SingleHost>>, binaryImage: boolean): Moments;
  new (array: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>): Moments;
  new (
    array: System.Collections.Generic.IEnumerable<OpenCvSharp.Point>,
    binaryImage: boolean
  ): Moments;
  new (array: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>): Moments;
  new (
    array: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>,
    binaryImage: boolean
  ): Moments;
  readonly NativeStruct: Moments_NativeStructHostType;
}

export {};
