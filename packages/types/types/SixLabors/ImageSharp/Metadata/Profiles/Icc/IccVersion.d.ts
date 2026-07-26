import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/IEquatable";
import "../../../../../System/ValueType";

declare const iccVersionBrand: unique symbol;
export interface IccVersion extends ClrHostValue {
  readonly [iccVersionBrand]: true;
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccVersion): boolean;
  toString(): string;
  getHashCode(): number;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccVersion = import("./IccVersion").IccVersion;
  }
}

export interface IccVersionHostType extends HostType<IccVersion, ValueTypeTrait> {
  new (
    major: number | StrongNumeric<Int32Host>,
    minor: number | StrongNumeric<Int32Host>,
    patch: number | StrongNumeric<Int32Host>
  ): IccVersion;
}

export {};
