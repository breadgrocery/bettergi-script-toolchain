import type {
  ByteHost,
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../IDeepCloneable";
import "./IccProfileHeader";
import "./IccProfileId";
import "./IccTagDataEntry";

declare const iccProfileBrand: unique symbol;
export interface IccProfile extends ClrHostValue {
  readonly [iccProfileBrand]: true;
  header: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccProfileHeader;
  readonly entries: HostArray<SixLabors.ImageSharp.Metadata.Profiles.Icc.IccTagDataEntry>;
  deepClone(): SixLabors.ImageSharp.Metadata.Profiles.Icc.IccProfile;
  checkIsValid(): boolean;
  toByteArray(): HostArray<number>;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccProfile = import("./IccProfile").IccProfile;
  }
}

export interface IccProfileHostType extends HostType<
  IccProfile,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): IccProfile;
  new (data: HostArray<number | StrongNumeric<ByteHost>>): IccProfile;
  calculateHash(
    data: HostArray<number | StrongNumeric<ByteHost>>
  ): SixLabors.ImageSharp.Metadata.Profiles.Icc.IccProfileId;
}

export {};
