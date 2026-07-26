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

declare const iptcTagBrand: unique symbol;
export interface IptcTag extends ClrHostValue {
  readonly [iptcTagBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Iptc {
    type IptcTag = import("./IptcTag").IptcTag;
  }
}

export interface IptcTagHostType extends HostType<IptcTag, EnumTypeTrait> {
  readonly unknown: IptcTag;
  readonly recordVersion: IptcTag;
  readonly objectType: IptcTag;
  readonly objectAttribute: IptcTag;
  readonly name: IptcTag;
  readonly editStatus: IptcTag;
  readonly editorialUpdate: IptcTag;
  readonly urgency: IptcTag;
  readonly subjectReference: IptcTag;
  readonly category: IptcTag;
  readonly supplementalCategories: IptcTag;
  readonly fixtureIdentifier: IptcTag;
  readonly keywords: IptcTag;
  readonly locationCode: IptcTag;
  readonly locationName: IptcTag;
  readonly releaseDate: IptcTag;
  readonly releaseTime: IptcTag;
  readonly expirationDate: IptcTag;
  readonly expirationTime: IptcTag;
  readonly specialInstructions: IptcTag;
  readonly actionAdvised: IptcTag;
  readonly referenceService: IptcTag;
  readonly referenceDate: IptcTag;
  readonly referenceNumber: IptcTag;
  readonly createdDate: IptcTag;
  readonly createdTime: IptcTag;
  readonly digitalCreationDate: IptcTag;
  readonly digitalCreationTime: IptcTag;
  readonly originatingProgram: IptcTag;
  readonly programVersion: IptcTag;
  readonly objectCycle: IptcTag;
  readonly byline: IptcTag;
  readonly bylineTitle: IptcTag;
  readonly city: IptcTag;
  readonly subLocation: IptcTag;
  readonly provinceState: IptcTag;
  readonly countryCode: IptcTag;
  readonly country: IptcTag;
  readonly originalTransmissionReference: IptcTag;
  readonly headline: IptcTag;
  readonly credit: IptcTag;
  readonly source: IptcTag;
  readonly copyrightNotice: IptcTag;
  readonly contact: IptcTag;
  readonly caption: IptcTag;
  readonly localCaption: IptcTag;
  readonly captionWriter: IptcTag;
  readonly imageType: IptcTag;
  readonly imageOrientation: IptcTag;
  readonly customField1: IptcTag;
  readonly customField2: IptcTag;
  readonly customField3: IptcTag;
  readonly customField4: IptcTag;
  readonly customField5: IptcTag;
  readonly customField6: IptcTag;
  readonly customField7: IptcTag;
  readonly customField8: IptcTag;
  readonly customField9: IptcTag;
  readonly customField10: IptcTag;
  readonly customField11: IptcTag;
  readonly customField12: IptcTag;
  readonly customField13: IptcTag;
  readonly customField14: IptcTag;
  readonly customField15: IptcTag;
  readonly customField16: IptcTag;
  readonly customField17: IptcTag;
  readonly customField18: IptcTag;
  readonly customField19: IptcTag;
  readonly customField20: IptcTag;
}

export {};
