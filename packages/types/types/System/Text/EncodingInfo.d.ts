import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "./Encoding";
import "./EncodingProvider";

declare const encodingInfoBrand: unique symbol;
export interface EncodingInfo extends ClrHostValue {
  readonly [encodingInfoBrand]: true;
  equals(value: unknown | null): boolean;
  getEncoding(): System.Text.Encoding;
  getHashCode(): number;
  readonly codePage: number;
  readonly displayName: string;
  readonly name: string;
}

declare global {
  namespace System.Text {
    type EncodingInfo = import("./EncodingInfo").EncodingInfo;
  }
}

export interface EncodingInfoHostType extends HostType<EncodingInfo, ReferenceTypeTrait> {
  new (
    provider: System.Text.EncodingProvider,
    codePage: number | StrongNumeric<Int32Host>,
    name: string,
    displayName: string
  ): EncodingInfo;
}

export {};
