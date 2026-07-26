import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait,
  IsFamilyArgumentOmitted
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../IDeepCloneable";
import "./ExifDataType";
import "./ExifTag";

declare const iExifValueArity0InputBrand: unique symbol;
export interface _IExifValueArity0Input {
  readonly [iExifValueArity0InputBrand]: true;
}

export interface _IExifValueArity0
  extends Microsoft.ClearScript.ClrInterfaceView<_IExifValueArity0Input>, _IExifValueArity0Input {
  readonly dataType: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifDataType;
  readonly isArray: boolean;
  readonly tag: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag;
  getValue(): unknown;
  trySetValue(value: unknown | null): boolean;
}

export interface _IExifValueArity0HostType extends HostType<
  _IExifValueArity0,
  InterfaceTypeTrait
> {}

declare const iExifValueArity1InputBrand: unique symbol;
export interface _IExifValueArity1Input<TValueType> {
  readonly [iExifValueArity1InputBrand]: true;
}

export interface _IExifValueArity1<TValueType>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IExifValueArity1Input<TValueType>>,
    _IExifValueArity1Input<TValueType> {
  value: TValueType;
}

export interface _IExifValueArity1HostType<TValueType> extends HostType<
  _IExifValueArity1<TValueType>,
  InterfaceTypeTrait
> {}

export type IExifValueFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _IExifValueArity0 : _IExifValueArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Exif {
    type IExifValue<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IExifValue").IExifValueFamily<T1>;
  }
}

export type IExifValueInputFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _IExifValueArity0Input : _IExifValueArity1Input<T1>;

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Exif {
    type IExifValueInput<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IExifValue").IExifValueInputFamily<T1>;
  }
}

export type IExifValueHostType = _IExifValueArity0HostType;

export {};
