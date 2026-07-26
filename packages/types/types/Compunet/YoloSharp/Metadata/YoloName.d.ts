import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";

declare const yoloNameBrand: unique symbol;
export interface YoloName extends ClrHostValue {
  readonly [yoloNameBrand]: true;
  readonly id: number;
  readonly name: string;
  toString(): string;
}

declare global {
  namespace Compunet.YoloSharp.Metadata {
    type YoloName = import("./YoloName").YoloName;
  }
}

export interface YoloNameHostType extends HostType<YoloName, ReferenceTypeTrait> {
  new (id: number | StrongNumeric<Int32Host>, name: string): YoloName;
}

export {};
