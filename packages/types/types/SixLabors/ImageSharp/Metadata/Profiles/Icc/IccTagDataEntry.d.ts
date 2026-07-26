import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/IEquatable";
import "./IccProfileTag";
import "./IccTypeSignature";

declare const iccTagDataEntryBrand: unique symbol;
export interface IccTagDataEntry extends ClrHostValue {
  readonly [iccTagDataEntryBrand]: true;
  readonly signature: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccTypeSignature;
  tagSignature: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccProfileTag;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccTagDataEntry | null): boolean;
  getHashCode(): number;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccTagDataEntry = import("./IccTagDataEntry").IccTagDataEntry;
  }
}

export interface IccTagDataEntryHostType extends HostType<IccTagDataEntry, ReferenceTypeTrait> {}

export {};
