import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "./IPixel";

declare const iPackedVectorArity1InputBrand: unique symbol;
export interface _IPackedVectorArity1Input<TPacked> {
  readonly [iPackedVectorArity1InputBrand]: true;
}

export interface _IPackedVectorArity1<TPacked>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IPackedVectorArity1Input<TPacked>>,
    _IPackedVectorArity1Input<TPacked> {
  packedValue: TPacked;
}

export interface _IPackedVectorArity1HostType<TPacked> extends HostType<
  _IPackedVectorArity1<TPacked>,
  InterfaceTypeTrait
> {}

export type IPackedVectorFamily<T1 = FamilyArgumentOmitted> = _IPackedVectorArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type IPackedVector<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IPackedVector{TPacked}").IPackedVectorFamily<T1>;
  }
}

export type IPackedVectorInputFamily<T1 = FamilyArgumentOmitted> = _IPackedVectorArity1Input<T1>;
export type IPackedVectorInput<T1> = _IPackedVectorArity1Input<T1>;

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type IPackedVectorInput<T1> = import("./IPackedVector{TPacked}").IPackedVectorInput<T1>;
  }
}

export type IPackedVectorHostType<T1> = _IPackedVectorArity1HostType<T1>;

export {};
