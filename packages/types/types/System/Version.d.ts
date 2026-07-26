import type {
  ClrHostValue,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import "./ICloneable";
import "./IComparable";
import "./IEquatable";
import "./IFormattable";
import "./ISpanFormattable";
import "./IUtf8SpanFormattable";

declare const versionBrand: unique symbol;
export interface Version
  extends
    ClrHostValue,
    System.ICloneableInput,
    System.IComparableInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.IUtf8SpanFormattableInput {
  readonly [versionBrand]: true;
  clone(): unknown;
  compareTo(value: System.Version | null): number;
  compareTo(version: unknown | null): number;
  equals(obj: System.Version | null): boolean;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  readonly build: number;
  readonly major: number;
  readonly majorRevision: number;
  readonly minor: number;
  readonly minorRevision: number;
  readonly revision: number;
  toString(): string;
  toString(fieldCount: number | StrongNumeric<Int32Host>): string;
}

declare global {
  namespace System {
    type Version = import("./Version").Version;
  }
}

export interface VersionHostType extends HostType<
  Version,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (
    major: number | StrongNumeric<Int32Host>,
    minor: number | StrongNumeric<Int32Host>,
    build: number | StrongNumeric<Int32Host>,
    revision: number | StrongNumeric<Int32Host>
  ): Version;
  new (
    major: number | StrongNumeric<Int32Host>,
    minor: number | StrongNumeric<Int32Host>,
    build: number | StrongNumeric<Int32Host>
  ): Version;
  new (major: number | StrongNumeric<Int32Host>, minor: number | StrongNumeric<Int32Host>): Version;
  new (version: string): Version;
  new (): Version;
  parse(input: string): System.Version;
  tryParse(input: string | null, result: HostVariableOut<System.Version>): boolean;
}

export {};
