import type {
  ByteHost,
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/Xml/Linq/XDocument";
import "../../../IDeepCloneable";

declare const xmpProfileBrand: unique symbol;
export interface XmpProfile extends ClrHostValue {
  readonly [xmpProfileBrand]: true;
  getDocument(): System.Xml.Linq.XDocument;
  toByteArray(): HostArray<number>;
  deepClone(): SixLabors.ImageSharp.Metadata.Profiles.Xmp.XmpProfile;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Xmp {
    type XmpProfile = import("./XmpProfile").XmpProfile;
  }
}

export interface XmpProfileHostType extends HostType<
  XmpProfile,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmpProfile;
  new (data: HostArray<number | StrongNumeric<ByteHost>> | null): XmpProfile;
}

export {};
