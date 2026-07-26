import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../Rectangle";
import "./MetaHeader";
import "./MetafileType";

declare const metafileHeaderBrand: unique symbol;
export interface MetafileHeader extends ClrHostValue {
  readonly [metafileHeaderBrand]: true;
  isDisplay(): boolean;
  isEmf(): boolean;
  isEmfOrEmfPlus(): boolean;
  isEmfPlus(): boolean;
  isEmfPlusDual(): boolean;
  isEmfPlusOnly(): boolean;
  isWmf(): boolean;
  isWmfPlaceable(): boolean;
  readonly bounds: System.Drawing.Rectangle;
  readonly dpiX: number;
  readonly dpiY: number;
  readonly emfPlusHeaderSize: number;
  readonly logicalDpiX: number;
  readonly logicalDpiY: number;
  readonly metafileSize: number;
  readonly type: System.Drawing.Imaging.MetafileType;
  readonly version: number;
  readonly wmfHeader: System.Drawing.Imaging.MetaHeader;
}

declare global {
  namespace System.Drawing.Imaging {
    type MetafileHeader = import("./MetafileHeader").MetafileHeader;
  }
}

export interface MetafileHeaderHostType extends HostType<MetafileHeader, ReferenceTypeTrait> {}

export {};
