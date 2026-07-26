import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const fileModeBrand: unique symbol;
export interface FileMode extends ClrHostValue {
  readonly [fileModeBrand]: true;
}

declare global {
  namespace System.IO {
    type FileMode = import("./FileMode").FileMode;
  }
}

export interface FileModeHostType extends HostType<FileMode, EnumTypeTrait> {
  readonly createNew: FileMode;
  readonly create: FileMode;
  readonly open: FileMode;
  readonly openOrCreate: FileMode;
  readonly truncate: FileMode;
  readonly append: FileMode;
}

export {};
