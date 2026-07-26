import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const errorCodeBrand: unique symbol;
export interface ErrorCode extends ClrHostValue {
  readonly [errorCodeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ErrorCode = import("./ErrorCode").ErrorCode;
  }
}

export interface ErrorCodeHostType extends HostType<ErrorCode, EnumTypeTrait> {
  readonly stsOk: ErrorCode;
  readonly stsBackTrace: ErrorCode;
  readonly stsError: ErrorCode;
  readonly stsInternal: ErrorCode;
  readonly stsNoMem: ErrorCode;
  readonly stsBadArg: ErrorCode;
  readonly stsBadFunc: ErrorCode;
  readonly stsNoConv: ErrorCode;
  readonly stsAutoTrace: ErrorCode;
  readonly headerIsNull: ErrorCode;
  readonly badImageSize: ErrorCode;
  readonly badOffset: ErrorCode;
  readonly badDataPtr: ErrorCode;
  readonly badStep: ErrorCode;
  readonly badModelOrChSeq: ErrorCode;
  readonly badNumChannels: ErrorCode;
  readonly badNumChannel1U: ErrorCode;
  readonly badDepth: ErrorCode;
  readonly badAlphaChannel: ErrorCode;
  readonly badOrder: ErrorCode;
  readonly badOrigin: ErrorCode;
  readonly badAlign: ErrorCode;
  readonly badCallBack: ErrorCode;
  readonly badTileSize: ErrorCode;
  readonly badCOI: ErrorCode;
  readonly badROISize: ErrorCode;
  readonly maskIsTiled: ErrorCode;
  readonly stsNullPtr: ErrorCode;
  readonly stsVecLengthErr: ErrorCode;
  readonly stsFilterStructContentErr: ErrorCode;
  readonly stsKernelStructContentErr: ErrorCode;
  readonly stsFilterOffsetErr: ErrorCode;
  readonly stsBadSize: ErrorCode;
  readonly stsDivByZero: ErrorCode;
  readonly stsInplaceNotSupported: ErrorCode;
  readonly stsObjectNotFound: ErrorCode;
  readonly stsUnmatchedFormats: ErrorCode;
  readonly stsBadFlag: ErrorCode;
  readonly stsBadPoint: ErrorCode;
  readonly stsBadMask: ErrorCode;
  readonly stsUnmatchedSizes: ErrorCode;
  readonly stsUnsupportedFormat: ErrorCode;
  readonly stsOutOfRange: ErrorCode;
  readonly stsParseError: ErrorCode;
  readonly stsNotImplemented: ErrorCode;
  readonly stsBadMemBlock: ErrorCode;
  readonly stsAssert: ErrorCode;
  readonly gpuNotSupported: ErrorCode;
  readonly gpuApiCallError: ErrorCode;
  readonly openGlNotSupported: ErrorCode;
  readonly openGlApiCallError: ErrorCode;
  readonly openCLApiCallError: ErrorCode;
  readonly openCLDoubleNotSupported: ErrorCode;
  readonly openCLInitError: ErrorCode;
  readonly openCLNoAMDBlasFft: ErrorCode;
}

export {};
