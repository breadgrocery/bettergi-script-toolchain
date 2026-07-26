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

declare const iccProfileTagBrand: unique symbol;
export interface IccProfileTag extends ClrHostValue {
  readonly [iccProfileTagBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccProfileTag = import("./IccProfileTag").IccProfileTag;
  }
}

export interface IccProfileTagHostType extends HostType<IccProfileTag, EnumTypeTrait> {
  readonly unknown: IccProfileTag;
  readonly aToB0: IccProfileTag;
  readonly aToB1: IccProfileTag;
  readonly aToB2: IccProfileTag;
  readonly blueMatrixColumn: IccProfileTag;
  readonly blueTrc: IccProfileTag;
  readonly bToA0: IccProfileTag;
  readonly bToA1: IccProfileTag;
  readonly bToA2: IccProfileTag;
  readonly bToD0: IccProfileTag;
  readonly bToD1: IccProfileTag;
  readonly bToD2: IccProfileTag;
  readonly bToD3: IccProfileTag;
  readonly calibrationDateTime: IccProfileTag;
  readonly charTarget: IccProfileTag;
  readonly chromaticAdaptation: IccProfileTag;
  readonly chromaticity: IccProfileTag;
  readonly colorantOrder: IccProfileTag;
  readonly colorantTable: IccProfileTag;
  readonly colorantTableOut: IccProfileTag;
  readonly colorimetricIntentImageStat: IccProfileTag;
  readonly copyright: IccProfileTag;
  readonly crdInfo: IccProfileTag;
  readonly data: IccProfileTag;
  readonly dateTime: IccProfileTag;
  readonly deviceManufacturerDescription: IccProfileTag;
  readonly deviceModelDescription: IccProfileTag;
  readonly deviceSettings: IccProfileTag;
  readonly dToB0: IccProfileTag;
  readonly dToB1: IccProfileTag;
  readonly dToB2: IccProfileTag;
  readonly dToB3: IccProfileTag;
  readonly gamut: IccProfileTag;
  readonly grayTrc: IccProfileTag;
  readonly greenMatrixColumn: IccProfileTag;
  readonly greenTrc: IccProfileTag;
  readonly luminance: IccProfileTag;
  readonly measurement: IccProfileTag;
  readonly mediaBlackPoint: IccProfileTag;
  readonly mediaWhitePoint: IccProfileTag;
  readonly namedColor: IccProfileTag;
  readonly namedColor2: IccProfileTag;
  readonly outputResponse: IccProfileTag;
  readonly perceptualRenderingIntentGamut: IccProfileTag;
  readonly preview0: IccProfileTag;
  readonly preview1: IccProfileTag;
  readonly preview2: IccProfileTag;
  readonly profileDescription: IccProfileTag;
  readonly profileSequenceDescription: IccProfileTag;
  readonly postScript2Crd0: IccProfileTag;
  readonly postScript2Crd1: IccProfileTag;
  readonly postScript2Crd2: IccProfileTag;
  readonly postScript2Crd3: IccProfileTag;
  readonly postScript2Csa: IccProfileTag;
  readonly postScript2RenderingIntent: IccProfileTag;
  readonly redMatrixColumn: IccProfileTag;
  readonly redTrc: IccProfileTag;
  readonly saturationRenderingIntentGamut: IccProfileTag;
  readonly screeningDescription: IccProfileTag;
  readonly screening: IccProfileTag;
  readonly technology: IccProfileTag;
  readonly ucrBgSpecification: IccProfileTag;
  readonly viewingCondDescription: IccProfileTag;
  readonly viewingConditions: IccProfileTag;
}

export {};
