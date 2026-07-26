import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const methodImplAttributesBrand: unique symbol;
export interface MethodImplAttributes extends ClrHostValue {
  readonly [methodImplAttributesBrand]: true;
}

declare global {
  namespace System.Reflection {
    type MethodImplAttributes = import("./MethodImplAttributes").MethodImplAttributes;
  }
}

export interface MethodImplAttributesHostType extends HostType<
  MethodImplAttributes,
  EnumTypeTrait
> {
  readonly codeTypeMask: MethodImplAttributes;
  readonly il: MethodImplAttributes;
  readonly native: MethodImplAttributes;
  readonly optil: MethodImplAttributes;
  readonly runtime: MethodImplAttributes;
  readonly managedMask: MethodImplAttributes;
  readonly unmanaged: MethodImplAttributes;
  readonly managed: MethodImplAttributes;
  readonly forwardRef: MethodImplAttributes;
  readonly preserveSig: MethodImplAttributes;
  readonly internalCall: MethodImplAttributes;
  readonly synchronized: MethodImplAttributes;
  readonly noInlining: MethodImplAttributes;
  readonly aggressiveInlining: MethodImplAttributes;
  readonly noOptimization: MethodImplAttributes;
  readonly aggressiveOptimization: MethodImplAttributes;
  readonly maxMethodImplVal: MethodImplAttributes;
}

export {};
