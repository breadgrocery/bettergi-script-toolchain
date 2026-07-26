import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/DateTime";
import "../../../../../System/Numerics/Vector3";
import "./IccColorSpaceType";
import "./IccDeviceAttribute";
import "./IccPrimaryPlatformType";
import "./IccProfileClass";
import "./IccProfileFlag";
import "./IccProfileId";
import "./IccRenderingIntent";
import "./IccVersion";

declare const iccProfileHeaderBrand: unique symbol;
export interface IccProfileHeader extends ClrHostValue {
  readonly [iccProfileHeaderBrand]: true;
  size: number;
  cmmType: string;
  version: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccVersion;
  class: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccProfileClass;
  dataColorSpace: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccColorSpaceType;
  profileConnectionSpace: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccColorSpaceType;
  creationDate: System.DateTime;
  fileSignature: string;
  primaryPlatformSignature: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccPrimaryPlatformType;
  flags: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccProfileFlag;
  deviceManufacturer: number;
  deviceModel: number;
  deviceAttributes: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccDeviceAttribute;
  renderingIntent: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccRenderingIntent;
  pcsIlluminant: System.Numerics.Vector3;
  creatorSignature: string;
  id: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccProfileId;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccProfileHeader = import("./IccProfileHeader").IccProfileHeader;
  }
}

export interface IccProfileHeaderHostType extends HostType<
  IccProfileHeader,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): IccProfileHeader;
}

export {};
