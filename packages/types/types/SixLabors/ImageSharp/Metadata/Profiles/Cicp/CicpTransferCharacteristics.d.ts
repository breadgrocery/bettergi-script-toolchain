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

declare const cicpTransferCharacteristicsBrand: unique symbol;
export interface CicpTransferCharacteristics extends ClrHostValue {
  readonly [cicpTransferCharacteristicsBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Cicp {
    type CicpTransferCharacteristics =
      import("./CicpTransferCharacteristics").CicpTransferCharacteristics;
  }
}

export interface CicpTransferCharacteristicsHostType extends HostType<
  CicpTransferCharacteristics,
  EnumTypeTrait
> {
  readonly ituRBt709_6: CicpTransferCharacteristics;
  readonly unspecified: CicpTransferCharacteristics;
  readonly gamma2_2: CicpTransferCharacteristics;
  readonly gamma2_8: CicpTransferCharacteristics;
  readonly ituRBt601_7: CicpTransferCharacteristics;
  readonly smpteSt240: CicpTransferCharacteristics;
  readonly linear: CicpTransferCharacteristics;
  readonly log100: CicpTransferCharacteristics;
  readonly log100Sqrt: CicpTransferCharacteristics;
  readonly iec61966_2_4: CicpTransferCharacteristics;
  readonly ituRBt1361_0: CicpTransferCharacteristics;
  readonly iec61966_2_1: CicpTransferCharacteristics;
  readonly ituRBt2020_2_10bit: CicpTransferCharacteristics;
  readonly ituRBt2020_2_12bit: CicpTransferCharacteristics;
  readonly smpteSt2084: CicpTransferCharacteristics;
  readonly smpteSt428_1: CicpTransferCharacteristics;
  readonly aribStdB67: CicpTransferCharacteristics;
}

export {};
