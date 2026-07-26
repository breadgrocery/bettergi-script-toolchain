import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const fileAccessBrand: unique symbol;
export interface FileAccess extends ClrHostValue {
  readonly [fileAccessBrand]: true;
}

declare global {
  namespace System.IO {
    type FileAccess = import("./FileAccess").FileAccess;
  }
}

export interface FileAccessHostType extends HostType<FileAccess, EnumTypeTrait> {
  readonly read: FileAccess;
  readonly write: FileAccess;
  readonly readWrite: FileAccess;
}

export {};
