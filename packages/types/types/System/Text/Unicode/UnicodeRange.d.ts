import type {
  CharHost,
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";

declare const unicodeRangeBrand: unique symbol;
export interface UnicodeRange extends ClrHostValue {
  readonly [unicodeRangeBrand]: true;
  readonly firstCodePoint: number;
  readonly length: number;
}

declare global {
  namespace System.Text.Unicode {
    type UnicodeRange = import("./UnicodeRange").UnicodeRange;
  }
}

export interface UnicodeRangeHostType extends HostType<UnicodeRange, ReferenceTypeTrait> {
  new (
    firstCodePoint: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): UnicodeRange;
  create(
    firstCharacter: number | StrongNumeric<CharHost>,
    lastCharacter: number | StrongNumeric<CharHost>
  ): System.Text.Unicode.UnicodeRange;
}

export {};
