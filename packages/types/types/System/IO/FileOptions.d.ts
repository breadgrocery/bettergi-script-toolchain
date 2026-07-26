import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const fileOptionsBrand: unique symbol;
export interface FileOptions extends ClrHostValue {
  readonly [fileOptionsBrand]: true;
}

declare global {
  namespace System.IO {
    type FileOptions = import("./FileOptions").FileOptions;
  }
}

export interface FileOptionsHostType extends HostType<FileOptions, EnumTypeTrait> {
  readonly none: FileOptions;
  readonly writeThrough: FileOptions;
  readonly asynchronous: FileOptions;
  readonly randomAccess: FileOptions;
  readonly deleteOnClose: FileOptions;
  readonly sequentialScan: FileOptions;
  readonly encrypted: FileOptions;
}

export {};
