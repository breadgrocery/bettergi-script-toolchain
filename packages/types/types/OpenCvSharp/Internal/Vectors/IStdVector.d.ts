import type {
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/IDisposable";

declare const iStdVectorArity1InputBrand: unique symbol;
export interface _IStdVectorArity1Input<T> {
  readonly [iStdVectorArity1InputBrand]: true;
}

export interface _IStdVectorArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IStdVectorArity1Input<T>>,
    _IStdVectorArity1Input<T> {
  readonly size: number;
  toArray(): HostArray<T>;
}

export interface _IStdVectorArity1HostType<T> extends HostType<
  _IStdVectorArity1<T>,
  InterfaceTypeTrait
> {}

export type IStdVectorFamily<T1 = FamilyArgumentOmitted> = _IStdVectorArity1<T1>;

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type IStdVector<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IStdVector").IStdVectorFamily<T1>;
  }
}

export type IStdVectorInputFamily<T1 = FamilyArgumentOmitted> = _IStdVectorArity1Input<T1>;
export type IStdVectorInput<T1> = _IStdVectorArity1Input<T1>;

declare global {
  namespace OpenCvSharp.Internal.Vectors {
    type IStdVectorInput<T1> = import("./IStdVector").IStdVectorInput<T1>;
  }
}

export type IStdVectorHostType<T1> = _IStdVectorArity1HostType<T1>;

export {};
