import "../../../System/Collections/Generic/IEnumerable";
import type {
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  InterfaceTypeTrait,
  IsFamilyArgumentOmitted
} from "../../ClearScript/HostType";
import "./LocalizedString";

declare const iStringLocalizerArity0InputBrand: unique symbol;
export interface _IStringLocalizerArity0Input {
  readonly [iStringLocalizerArity0InputBrand]: true;
}

export interface _IStringLocalizerArity0
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IStringLocalizerArity0Input>,
    _IStringLocalizerArity0Input {
  getAllStrings(
    includeParentCultures: boolean
  ): System.Collections.Generic.IEnumerable<Microsoft.Extensions.Localization.LocalizedString>;
  item: {
    (name: string): Microsoft.Extensions.Localization.LocalizedString;
    get(name: string): Microsoft.Extensions.Localization.LocalizedString;
    (
      name: string,
      arguments: HostArray<unknown>
    ): Microsoft.Extensions.Localization.LocalizedString;
    get(
      name: string,
      arguments: HostArray<unknown>
    ): Microsoft.Extensions.Localization.LocalizedString;
  };
}

export interface _IStringLocalizerArity0HostType extends HostType<
  _IStringLocalizerArity0,
  InterfaceTypeTrait
> {}

declare const iStringLocalizerArity1InputBrand: unique symbol;
export interface _IStringLocalizerArity1Input<T> {
  readonly [iStringLocalizerArity1InputBrand]: true;
}

export interface _IStringLocalizerArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IStringLocalizerArity1Input<T>>,
    _IStringLocalizerArity1Input<T> {}

export interface _IStringLocalizerArity1HostType<T> extends HostType<
  _IStringLocalizerArity1<T>,
  InterfaceTypeTrait
> {}

export type IStringLocalizerFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _IStringLocalizerArity0 : _IStringLocalizerArity1<T1>;

declare global {
  namespace Microsoft.Extensions.Localization {
    type IStringLocalizer<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IStringLocalizer").IStringLocalizerFamily<T1>;
  }
}

export type IStringLocalizerInputFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true
    ? _IStringLocalizerArity0Input
    : _IStringLocalizerArity1Input<T1>;

declare global {
  namespace Microsoft.Extensions.Localization {
    type IStringLocalizerInput<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IStringLocalizer").IStringLocalizerInputFamily<T1>;
  }
}

export type IStringLocalizerHostType = _IStringLocalizerArity0HostType;

export {};
