import type {
  ClrHostValue,
  HostType,
  StrongNumeric,
  UInt32Host,
  ValueTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/IEquatable";
import "../../../../../System/ValueType";

declare const iccProfileIdBrand: unique symbol;
export interface IccProfileId extends ClrHostValue {
  readonly [iccProfileIdBrand]: true;
  readonly part1: number;
  readonly part2: number;
  readonly part3: number;
  readonly part4: number;
  readonly isSet: boolean;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccProfileId): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccProfileId = import("./IccProfileId").IccProfileId;
  }
}

export interface IccProfileIdHostType extends HostType<IccProfileId, ValueTypeTrait> {
  new (
    p1: number | StrongNumeric<UInt32Host>,
    p2: number | StrongNumeric<UInt32Host>,
    p3: number | StrongNumeric<UInt32Host>,
    p4: number | StrongNumeric<UInt32Host>
  ): IccProfileId;
  readonly zero: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccProfileId;
}

export {};
