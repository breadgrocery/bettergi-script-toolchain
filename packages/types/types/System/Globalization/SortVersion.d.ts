import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../Guid";
import "../IEquatable";

declare const sortVersionBrand: unique symbol;
export interface SortVersion extends ClrHostValue {
  readonly [sortVersionBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.Globalization.SortVersion | null): boolean;
  getHashCode(): number;
  readonly fullVersion: number;
  readonly sortId: System.Guid;
}

declare global {
  namespace System.Globalization {
    type SortVersion = import("./SortVersion").SortVersion;
  }
}

export interface SortVersionHostType extends HostType<SortVersion, ReferenceTypeTrait> {
  new (fullVersion: number | StrongNumeric<Int32Host>, sortId: System.Guid): SortVersion;
}

export {};
