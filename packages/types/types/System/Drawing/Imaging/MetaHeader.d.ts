import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";

declare const metaHeaderBrand: unique symbol;
export interface MetaHeader extends ClrHostValue {
  readonly [metaHeaderBrand]: true;
  headerSize: number;
  maxRecord: number;
  noObjects: number;
  noParameters: number;
  size: number;
  type: number;
  version: number;
}

declare global {
  namespace System.Drawing.Imaging {
    type MetaHeader = import("./MetaHeader").MetaHeader;
  }
}

export interface MetaHeaderHostType extends HostType<
  MetaHeader,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): MetaHeader;
}

export {};
