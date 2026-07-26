import type {
  EnumInput,
  HostType,
  Int16Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../Attribute";
import "./CharSet";
import "./LayoutKind";

declare const structLayoutAttributeBrand: unique symbol;
export interface StructLayoutAttribute extends Omit<
  System.Attribute,
  "charSet" | "pack" | "size" | "value"
> {
  readonly [structLayoutAttributeBrand]: true;
  charSet: System.Runtime.InteropServices.CharSet;
  pack: number;
  readonly value: System.Runtime.InteropServices.LayoutKind;
  size: number;
}

declare global {
  namespace System.Runtime.InteropServices {
    type StructLayoutAttribute = import("./StructLayoutAttribute").StructLayoutAttribute;
  }
}

export interface StructLayoutAttributeHostType extends HostType<
  StructLayoutAttribute,
  ReferenceTypeTrait
> {
  new (layoutKind: EnumInput<System.Runtime.InteropServices.LayoutKind>): StructLayoutAttribute;
  new (layoutKind: number | StrongNumeric<Int16Host>): StructLayoutAttribute;
}

export {};
