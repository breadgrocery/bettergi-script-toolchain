import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const unixFileModeBrand: unique symbol;
export interface UnixFileMode extends ClrHostValue {
  readonly [unixFileModeBrand]: true;
}

declare global {
  namespace System.IO {
    type UnixFileMode = import("./UnixFileMode").UnixFileMode;
  }
}

export interface UnixFileModeHostType extends HostType<UnixFileMode, EnumTypeTrait> {
  readonly none: UnixFileMode;
  readonly otherExecute: UnixFileMode;
  readonly otherWrite: UnixFileMode;
  readonly otherRead: UnixFileMode;
  readonly groupExecute: UnixFileMode;
  readonly groupWrite: UnixFileMode;
  readonly groupRead: UnixFileMode;
  readonly userExecute: UnixFileMode;
  readonly userWrite: UnixFileMode;
  readonly userRead: UnixFileMode;
  readonly stickyBit: UnixFileMode;
  readonly setGroup: UnixFileMode;
  readonly setUser: UnixFileMode;
}

export {};
