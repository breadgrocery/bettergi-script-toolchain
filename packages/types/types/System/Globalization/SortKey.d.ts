import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const sortKeyBrand: unique symbol;
export interface SortKey extends ClrHostValue {
  readonly [sortKeyBrand]: true;
  equals(value: unknown | null): boolean;
  getHashCode(): number;
  readonly keyData: HostArray<number>;
  readonly originalString: string;
  toString(): string;
}

declare global {
  namespace System.Globalization {
    type SortKey = import("./SortKey").SortKey;
  }
}

export interface SortKeyHostType extends HostType<SortKey, ReferenceTypeTrait> {
  compare(sortkey1: System.Globalization.SortKey, sortkey2: System.Globalization.SortKey): number;
}

export {};
