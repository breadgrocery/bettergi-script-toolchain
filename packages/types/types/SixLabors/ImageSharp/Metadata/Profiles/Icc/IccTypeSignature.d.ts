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

declare const iccTypeSignatureBrand: unique symbol;
export interface IccTypeSignature extends ClrHostValue {
  readonly [iccTypeSignatureBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccTypeSignature = import("./IccTypeSignature").IccTypeSignature;
  }
}

export interface IccTypeSignatureHostType extends HostType<IccTypeSignature, EnumTypeTrait> {
  readonly unknown: IccTypeSignature;
  readonly chromaticity: IccTypeSignature;
  readonly colorantOrder: IccTypeSignature;
  readonly colorantTable: IccTypeSignature;
  readonly curve: IccTypeSignature;
  readonly data: IccTypeSignature;
  readonly dateTime: IccTypeSignature;
  readonly lut16: IccTypeSignature;
  readonly lut8: IccTypeSignature;
  readonly lutAToB: IccTypeSignature;
  readonly lutBToA: IccTypeSignature;
  readonly measurement: IccTypeSignature;
  readonly multiLocalizedUnicode: IccTypeSignature;
  readonly multiProcessElements: IccTypeSignature;
  readonly namedColor2: IccTypeSignature;
  readonly parametricCurve: IccTypeSignature;
  readonly profileSequenceDesc: IccTypeSignature;
  readonly profileSequenceIdentifier: IccTypeSignature;
  readonly responseCurveSet16: IccTypeSignature;
  readonly s15Fixed16Array: IccTypeSignature;
  readonly signature: IccTypeSignature;
  readonly text: IccTypeSignature;
  readonly u16Fixed16Array: IccTypeSignature;
  readonly uInt16Array: IccTypeSignature;
  readonly uInt32Array: IccTypeSignature;
  readonly uInt64Array: IccTypeSignature;
  readonly uInt8Array: IccTypeSignature;
  readonly viewingConditions: IccTypeSignature;
  readonly xyz: IccTypeSignature;
  readonly textDescription: IccTypeSignature;
  readonly crdInfo: IccTypeSignature;
  readonly screening: IccTypeSignature;
  readonly ucrBg: IccTypeSignature;
  readonly deviceSettings: IccTypeSignature;
  readonly namedColor: IccTypeSignature;
}

export {};
