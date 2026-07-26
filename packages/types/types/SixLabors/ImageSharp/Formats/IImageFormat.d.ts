import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait,
  IsFamilyArgumentOmitted
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/IEnumerable";

declare const iImageFormatArity0InputBrand: unique symbol;
export interface _IImageFormatArity0Input {
  readonly [iImageFormatArity0InputBrand]: true;
}

export interface _IImageFormatArity0
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IImageFormatArity0Input>,
    _IImageFormatArity0Input {
  readonly name: string;
  readonly defaultMimeType: string;
  readonly mimeTypes: System.Collections.Generic.IEnumerable<string>;
  readonly fileExtensions: System.Collections.Generic.IEnumerable<string>;
}

export interface _IImageFormatArity0HostType extends HostType<
  _IImageFormatArity0,
  InterfaceTypeTrait
> {}

declare const iImageFormatArity1InputBrand: unique symbol;
export interface _IImageFormatArity1Input<TFormatMetadata> {
  readonly [iImageFormatArity1InputBrand]: true;
}

export interface _IImageFormatArity1<TFormatMetadata>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IImageFormatArity1Input<TFormatMetadata>>,
    _IImageFormatArity1Input<TFormatMetadata> {
  createDefaultFormatMetadata(): TFormatMetadata;
}

export interface _IImageFormatArity1HostType<TFormatMetadata> extends HostType<
  _IImageFormatArity1<TFormatMetadata>,
  InterfaceTypeTrait
> {}

declare const iImageFormatArity2InputBrand: unique symbol;
export interface _IImageFormatArity2Input<TFormatMetadata, TFormatFrameMetadata> {
  readonly [iImageFormatArity2InputBrand]: true;
}

export interface _IImageFormatArity2<TFormatMetadata, TFormatFrameMetadata>
  extends
    Microsoft.ClearScript.ClrInterfaceView<
      _IImageFormatArity2Input<TFormatMetadata, TFormatFrameMetadata>
    >,
    _IImageFormatArity2Input<TFormatMetadata, TFormatFrameMetadata> {
  createDefaultFormatFrameMetadata(): TFormatFrameMetadata;
}

export interface _IImageFormatArity2HostType<
  TFormatMetadata,
  TFormatFrameMetadata
> extends HostType<
  _IImageFormatArity2<TFormatMetadata, TFormatFrameMetadata>,
  InterfaceTypeTrait
> {}

export type IImageFormatFamily<T1 = FamilyArgumentOmitted, T2 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true
    ? _IImageFormatArity0
    : IsFamilyArgumentOmitted<T2> extends true
      ? _IImageFormatArity1<T1>
      : _IImageFormatArity2<T1, T2>;

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type IImageFormat<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IImageFormat").IImageFormatFamily<T1, T2>;
  }
}

export type IImageFormatInputFamily<T1 = FamilyArgumentOmitted, T2 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true
    ? _IImageFormatArity0Input
    : IsFamilyArgumentOmitted<T2> extends true
      ? _IImageFormatArity1Input<T1>
      : _IImageFormatArity2Input<T1, T2>;

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type IImageFormatInput<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IImageFormat").IImageFormatInputFamily<T1, T2>;
  }
}

export type IImageFormatHostType = _IImageFormatArity0HostType;

export {};
