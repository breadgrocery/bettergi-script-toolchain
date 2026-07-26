import type {
  HostDelegate,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../AsyncCallback";
import "../IAsyncResult";
import "../ICloneable";
import "../IntPtr";
import "../MulticastDelegate";
import "../Runtime/Serialization/ISerializable";
import "../V8SplitProxyHelpers";

declare const delegateTypeFilterBrand: unique symbol;
export interface TypeFilter extends HostDelegate {
  readonly [delegateTypeFilterBrand]: true;
  (m: System.Type, filterCriteria: unknown | null): boolean;
  invoke(m: System.Type, filterCriteria: unknown | null): boolean;
}

declare global {
  namespace System.Reflection {
    type TypeFilter = import("./TypeFilter").TypeFilter;
  }
}

export interface TypeFilterHostType extends HostType<TypeFilter, ReferenceTypeTrait> {
  new (object: unknown, method: System.IntPtr): TypeFilter;
}

export {};
