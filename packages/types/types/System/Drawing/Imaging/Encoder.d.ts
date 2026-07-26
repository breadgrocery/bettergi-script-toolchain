import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Guid";

declare const encoderBrand: unique symbol;
export interface Encoder extends ClrHostValue {
  readonly [encoderBrand]: true;
  readonly guid: System.Guid;
}

declare global {
  namespace System.Drawing.Imaging {
    type Encoder = import("./Encoder").Encoder;
  }
}

export interface EncoderHostType extends HostType<Encoder, ReferenceTypeTrait> {
  new (guid: System.Guid): Encoder;
  readonly compression: System.Drawing.Imaging.Encoder;
  readonly colorDepth: System.Drawing.Imaging.Encoder;
  readonly scanMethod: System.Drawing.Imaging.Encoder;
  readonly version: System.Drawing.Imaging.Encoder;
  readonly renderMethod: System.Drawing.Imaging.Encoder;
  readonly quality: System.Drawing.Imaging.Encoder;
  readonly transformation: System.Drawing.Imaging.Encoder;
  readonly luminanceTable: System.Drawing.Imaging.Encoder;
  readonly chrominanceTable: System.Drawing.Imaging.Encoder;
  readonly saveFlag: System.Drawing.Imaging.Encoder;
  readonly colorSpace: System.Drawing.Imaging.Encoder;
  readonly imageItems: System.Drawing.Imaging.Encoder;
  readonly saveAsCmyk: System.Drawing.Imaging.Encoder;
}

export {};
