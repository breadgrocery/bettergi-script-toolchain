import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/Text/Encoding";
import "../../../IDeepCloneable";
import "./IptcTag";

declare const iptcValueBrand: unique symbol;
export interface IptcValue extends ClrHostValue {
  readonly [iptcValueBrand]: true;
  encoding: System.Text.Encoding;
  readonly tag: SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcTag;
  strict: boolean;
  value: string;
  readonly length: number;
  deepClone(): SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcValue;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcValue | null): boolean;
  getHashCode(): number;
  toByteArray(): HostArray<number>;
  toString(): string;
  toString(encoding: System.Text.Encoding): string;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Iptc {
    type IptcValue = import("./IptcValue").IptcValue;
  }
}

export interface IptcValueHostType extends HostType<IptcValue, ReferenceTypeTrait> {}

export {};
