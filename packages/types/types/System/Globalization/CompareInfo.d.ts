import type {
  CharHost,
  ClrHostValue,
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../Reflection/Assembly";
import "../Runtime/Serialization/IDeserializationCallback";
import "../Text/Rune";
import "./CompareOptions";
import "./SortKey";
import "./SortVersion";

declare const compareInfoBrand: unique symbol;
export interface CompareInfo
  extends ClrHostValue, System.Runtime.Serialization.IDeserializationCallbackInput {
  readonly [compareInfoBrand]: true;
  compare(
    string1: string | null,
    offset1: number | StrongNumeric<Int32Host>,
    length1: number | StrongNumeric<Int32Host>,
    string2: string | null,
    offset2: number | StrongNumeric<Int32Host>,
    length2: number | StrongNumeric<Int32Host>
  ): number;
  compare(
    string1: string | null,
    offset1: number | StrongNumeric<Int32Host>,
    length1: number | StrongNumeric<Int32Host>,
    string2: string | null,
    offset2: number | StrongNumeric<Int32Host>,
    length2: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  compare(
    string1: string | null,
    offset1: number | StrongNumeric<Int32Host>,
    string2: string | null,
    offset2: number | StrongNumeric<Int32Host>
  ): number;
  compare(
    string1: string | null,
    offset1: number | StrongNumeric<Int32Host>,
    string2: string | null,
    offset2: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  compare(string1: string | null, string2: string | null): number;
  compare(
    string1: string | null,
    string2: string | null,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  equals(value: unknown | null): boolean;
  getHashCode(): number;
  getHashCode(source: string, options: EnumInput<System.Globalization.CompareOptions>): number;
  getSortKey(source: string): System.Globalization.SortKey;
  getSortKey(
    source: string,
    options: EnumInput<System.Globalization.CompareOptions>
  ): System.Globalization.SortKey;
  indexOf(source: string, value: number | StrongNumeric<CharHost>): number;
  indexOf(
    source: string,
    value: number | StrongNumeric<CharHost>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  indexOf(
    source: string,
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  indexOf(
    source: string,
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  indexOf(
    source: string,
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  indexOf(
    source: string,
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  indexOf(source: string, value: string): number;
  indexOf(
    source: string,
    value: string,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  indexOf(source: string, value: string, startIndex: number | StrongNumeric<Int32Host>): number;
  indexOf(
    source: string,
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  indexOf(
    source: string,
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  indexOf(
    source: string,
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  isPrefix(source: string, prefix: string): boolean;
  isPrefix(
    source: string,
    prefix: string,
    options: EnumInput<System.Globalization.CompareOptions>
  ): boolean;
  isSuffix(source: string, suffix: string): boolean;
  isSuffix(
    source: string,
    suffix: string,
    options: EnumInput<System.Globalization.CompareOptions>
  ): boolean;
  lastIndexOf(source: string, value: number | StrongNumeric<CharHost>): number;
  lastIndexOf(
    source: string,
    value: number | StrongNumeric<CharHost>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  lastIndexOf(
    source: string,
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  lastIndexOf(
    source: string,
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  lastIndexOf(
    source: string,
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  lastIndexOf(
    source: string,
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  lastIndexOf(source: string, value: string): number;
  lastIndexOf(
    source: string,
    value: string,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  lastIndexOf(source: string, value: string, startIndex: number | StrongNumeric<Int32Host>): number;
  lastIndexOf(
    source: string,
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  lastIndexOf(
    source: string,
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  lastIndexOf(
    source: string,
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  readonly lcid: number;
  readonly name: string;
  readonly version: System.Globalization.SortVersion;
  toString(): string;
}

declare global {
  namespace System.Globalization {
    type CompareInfo = import("./CompareInfo").CompareInfo;
  }
}

export interface CompareInfoHostType extends HostType<CompareInfo, ReferenceTypeTrait> {
  getCompareInfo(
    culture: number | StrongNumeric<Int32Host>,
    assembly: System.Reflection.Assembly
  ): System.Globalization.CompareInfo;
  getCompareInfo(
    name: string,
    assembly: System.Reflection.Assembly
  ): System.Globalization.CompareInfo;
  getCompareInfo(culture: number | StrongNumeric<Int32Host>): System.Globalization.CompareInfo;
  getCompareInfo(name: string): System.Globalization.CompareInfo;
  isSortable(ch: number | StrongNumeric<CharHost>): boolean;
  isSortable(text: string): boolean;
  isSortable(value: System.Text.Rune): boolean;
}

export {};
