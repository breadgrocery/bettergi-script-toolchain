import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Guid";

declare const frameDimensionBrand: unique symbol;
export interface FrameDimension extends ClrHostValue {
  readonly [frameDimensionBrand]: true;
  equals(o: unknown | null): boolean;
  getHashCode(): number;
  readonly guid: System.Guid;
  toString(): string;
}

declare global {
  namespace System.Drawing.Imaging {
    type FrameDimension = import("./FrameDimension").FrameDimension;
  }
}

export interface FrameDimensionHostType extends HostType<FrameDimension, ReferenceTypeTrait> {
  new (guid: System.Guid): FrameDimension;
  readonly time: System.Drawing.Imaging.FrameDimension;
  readonly resolution: System.Drawing.Imaging.FrameDimension;
  readonly page: System.Drawing.Imaging.FrameDimension;
}

export {};
