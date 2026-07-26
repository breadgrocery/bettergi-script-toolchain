import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const fileVersionInfoBrand: unique symbol;
export interface FileVersionInfo extends ClrHostValue {
  readonly [fileVersionInfoBrand]: true;
  readonly comments: string;
  readonly companyName: string;
  readonly fileBuildPart: number;
  readonly fileDescription: string;
  readonly fileMajorPart: number;
  readonly fileMinorPart: number;
  readonly fileName: string;
  readonly filePrivatePart: number;
  readonly fileVersion: string;
  readonly internalName: string;
  readonly isDebug: boolean;
  readonly isPatched: boolean;
  readonly isPreRelease: boolean;
  readonly isPrivateBuild: boolean;
  readonly isSpecialBuild: boolean;
  readonly language: string;
  readonly legalCopyright: string;
  readonly legalTrademarks: string;
  readonly originalFilename: string;
  readonly privateBuild: string;
  readonly productBuildPart: number;
  readonly productMajorPart: number;
  readonly productMinorPart: number;
  readonly productName: string;
  readonly productPrivatePart: number;
  readonly productVersion: string;
  readonly specialBuild: string;
  toString(): string;
}

declare global {
  namespace System.Diagnostics {
    type FileVersionInfo = import("./FileVersionInfo").FileVersionInfo;
  }
}

export interface FileVersionInfoHostType extends HostType<FileVersionInfo, ReferenceTypeTrait> {
  getVersionInfo(fileName: string): System.Diagnostics.FileVersionInfo;
}

export {};
