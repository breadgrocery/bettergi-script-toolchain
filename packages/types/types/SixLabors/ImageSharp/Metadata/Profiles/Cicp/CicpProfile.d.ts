import type {
  ByteHost,
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/Nullable";
import "../../../IDeepCloneable";
import "./CicpColorPrimaries";
import "./CicpMatrixCoefficients";
import "./CicpTransferCharacteristics";

declare const cicpProfileBrand: unique symbol;
export interface CicpProfile extends ClrHostValue {
  readonly [cicpProfileBrand]: true;
  colorPrimaries: SixLabors.ImageSharp.Metadata.Profiles.Cicp.CicpColorPrimaries;
  transferCharacteristics: SixLabors.ImageSharp.Metadata.Profiles.Cicp.CicpTransferCharacteristics;
  matrixCoefficients: SixLabors.ImageSharp.Metadata.Profiles.Cicp.CicpMatrixCoefficients;
  fullRange: boolean;
  deepClone(): SixLabors.ImageSharp.Metadata.Profiles.Cicp.CicpProfile;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Cicp {
    type CicpProfile = import("./CicpProfile").CicpProfile;
  }
}

export interface CicpProfileHostType extends HostType<
  CicpProfile,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): CicpProfile;
  new (
    colorPrimaries: number | StrongNumeric<ByteHost>,
    transferCharacteristics: number | StrongNumeric<ByteHost>,
    matrixCoefficients: number | StrongNumeric<ByteHost>,
    fullRange: boolean | null | null
  ): CicpProfile;
}

export {};
