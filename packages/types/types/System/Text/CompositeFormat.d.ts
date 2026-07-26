import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const compositeFormatBrand: unique symbol;
export interface CompositeFormat extends ClrHostValue {
  readonly [compositeFormatBrand]: true;
  readonly format: string;
  readonly minimumArgumentCount: number;
}

declare global {
  namespace System.Text {
    type CompositeFormat = import("./CompositeFormat").CompositeFormat;
  }
}

export interface CompositeFormatHostType extends HostType<CompositeFormat, ReferenceTypeTrait> {
  parse(format: string): System.Text.CompositeFormat;
}

export {};
