import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/Enum";
import "../../../../../System/IComparable";
import "../../../../../System/IConvertible";
import "../../../../../System/IFormattable";
import "../../../../../System/ISpanFormattable";

declare const iccProfileClassBrand: unique symbol;
export interface IccProfileClass extends ClrHostValue {
  readonly [iccProfileClassBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccProfileClass = import("./IccProfileClass").IccProfileClass;
  }
}

export interface IccProfileClassHostType extends HostType<IccProfileClass, EnumTypeTrait> {
  readonly inputDevice: IccProfileClass;
  readonly displayDevice: IccProfileClass;
  readonly outputDevice: IccProfileClass;
  readonly deviceLink: IccProfileClass;
  readonly colorSpace: IccProfileClass;
  readonly abstract: IccProfileClass;
  readonly namedColor: IccProfileClass;
}

export {};
