import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const fileShareBrand: unique symbol;
export interface FileShare extends ClrHostValue {
  readonly [fileShareBrand]: true;
}

declare global {
  namespace System.IO {
    type FileShare = import("./FileShare").FileShare;
  }
}

export interface FileShareHostType extends HostType<FileShare, EnumTypeTrait> {
  readonly none: FileShare;
  readonly read: FileShare;
  readonly write: FileShare;
  readonly readWrite: FileShare;
  readonly delete: FileShare;
  readonly inheritable: FileShare;
}

export {};
