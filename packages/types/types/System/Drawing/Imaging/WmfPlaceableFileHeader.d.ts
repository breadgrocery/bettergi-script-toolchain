import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";

declare const wmfPlaceableFileHeaderBrand: unique symbol;
export interface WmfPlaceableFileHeader extends ClrHostValue {
  readonly [wmfPlaceableFileHeaderBrand]: true;
  bboxBottom: number;
  bboxLeft: number;
  bboxRight: number;
  bboxTop: number;
  checksum: number;
  hmf: number;
  inch: number;
  key: number;
  reserved: number;
}

declare global {
  namespace System.Drawing.Imaging {
    type WmfPlaceableFileHeader = import("./WmfPlaceableFileHeader").WmfPlaceableFileHeader;
  }
}

export interface WmfPlaceableFileHeaderHostType extends HostType<
  WmfPlaceableFileHeader,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): WmfPlaceableFileHeader;
}

export {};
