import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Guid";
import "./ImageCodecFlags";

declare const imageCodecInfoBrand: unique symbol;
export interface ImageCodecInfo extends ClrHostValue {
  readonly [imageCodecInfoBrand]: true;
  clsid: System.Guid;
  codecName: string;
  dllName: string;
  filenameExtension: string;
  flags: System.Drawing.Imaging.ImageCodecFlags;
  formatDescription: string;
  formatID: System.Guid;
  mimeType: string;
  signatureMasks: HostArray<HostArray<number>>;
  signaturePatterns: HostArray<HostArray<number>>;
  version: number;
}

declare global {
  namespace System.Drawing.Imaging {
    type ImageCodecInfo = import("./ImageCodecInfo").ImageCodecInfo;
  }
}

export interface ImageCodecInfoHostType extends HostType<ImageCodecInfo, ReferenceTypeTrait> {
  getImageDecoders(): HostArray<System.Drawing.Imaging.ImageCodecInfo>;
  getImageEncoders(): HostArray<System.Drawing.Imaging.ImageCodecInfo>;
}

export {};
