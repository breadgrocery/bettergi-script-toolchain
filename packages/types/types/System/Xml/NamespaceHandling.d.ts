import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const namespaceHandlingBrand: unique symbol;
export interface NamespaceHandling extends ClrHostValue {
  readonly [namespaceHandlingBrand]: true;
}

declare global {
  namespace System.Xml {
    type NamespaceHandling = import("./NamespaceHandling").NamespaceHandling;
  }
}

export interface NamespaceHandlingHostType extends HostType<NamespaceHandling, EnumTypeTrait> {
  readonly default: NamespaceHandling;
  readonly omitDuplicates: NamespaceHandling;
}

export {};
