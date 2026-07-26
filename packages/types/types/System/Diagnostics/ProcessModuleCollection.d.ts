import type {
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/ICollection";
import "../Collections/IEnumerable";
import "../Collections/ReadOnlyCollectionBase";
import "./ProcessModule";

declare const processModuleCollectionBrand: unique symbol;
export interface ProcessModuleCollection
  extends
    Omit<System.Collections.ReadOnlyCollectionBase, "contains" | "copyTo" | "indexOf" | "item">,
    System.Collections.ICollectionInput,
    System.Collections.IEnumerableInput {
  readonly [processModuleCollectionBrand]: true;
  contains(module: System.Diagnostics.ProcessModule): boolean;
  copyTo(
    array: HostArray<System.Diagnostics.ProcessModule>,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
  indexOf(module: System.Diagnostics.ProcessModule): number;
  item: {
    (index: number | StrongNumeric<Int32Host>): System.Diagnostics.ProcessModule;
    get(index: number | StrongNumeric<Int32Host>): System.Diagnostics.ProcessModule;
  };
}

declare global {
  namespace System.Diagnostics {
    type ProcessModuleCollection = import("./ProcessModuleCollection").ProcessModuleCollection;
  }
}

export interface ProcessModuleCollectionHostType extends HostType<
  ProcessModuleCollection,
  ReferenceTypeTrait
> {
  new (processModules: HostArray<System.Diagnostics.ProcessModule>): ProcessModuleCollection;
}

export {};
