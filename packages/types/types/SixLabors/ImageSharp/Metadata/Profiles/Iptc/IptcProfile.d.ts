import type {
  ByteHost,
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../../Microsoft/ClearScript/VoidResult";
import "../../../../../System/Collections/Generic/IEnumerable";
import "../../../../../System/Collections/Generic/List";
import "../../../../../System/DateTimeOffset";
import "../../../../../System/Text/Encoding";
import "../../../IDeepCloneable";
import "./IptcTag";
import "./IptcValue";

declare const iptcProfileBrand: unique symbol;
export interface IptcProfile extends ClrHostValue {
  readonly [iptcProfileBrand]: true;
  readonly data: HostArray<number>;
  readonly values: System.Collections.Generic.IEnumerable<SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcValue>;
  deepClone(): SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcProfile;
  getValues(
    tag: EnumInput<SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcTag>
  ): System.Collections.Generic.List<SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcValue>;
  removeValue(tag: EnumInput<SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcTag>): boolean;
  removeValue(
    tag: EnumInput<SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcTag>,
    value: string
  ): boolean;
  setEncoding(encoding: System.Text.Encoding): VoidResult;
  setValue(
    tag: EnumInput<SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcTag>,
    encoding: System.Text.Encoding,
    value: string
  ): VoidResult;
  setValue(
    tag: EnumInput<SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcTag>,
    encoding: System.Text.Encoding,
    value: string,
    strict: boolean
  ): VoidResult;
  setValue(
    tag: EnumInput<SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcTag>,
    value: string
  ): VoidResult;
  setValue(
    tag: EnumInput<SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcTag>,
    value: string,
    strict: boolean
  ): VoidResult;
  setDateTimeValue(
    tag: EnumInput<SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcTag>,
    dateTimeOffset: System.DateTimeOffset
  ): VoidResult;
  updateData(): VoidResult;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Iptc {
    type IptcProfile = import("./IptcProfile").IptcProfile;
  }
}

export interface IptcProfileHostType extends HostType<
  IptcProfile,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): IptcProfile;
  new (data: HostArray<number | StrongNumeric<ByteHost>> | null): IptcProfile;
}

export {};
