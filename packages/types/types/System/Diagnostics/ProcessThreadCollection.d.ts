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
import "./ProcessThread";

declare const processThreadCollectionBrand: unique symbol;
export interface ProcessThreadCollection
  extends
    Omit<
      System.Collections.ReadOnlyCollectionBase,
      "add" | "contains" | "copyTo" | "indexOf" | "insert" | "item" | "remove"
    >,
    System.Collections.ICollectionInput,
    System.Collections.IEnumerableInput {
  readonly [processThreadCollectionBrand]: true;
  add(thread: System.Diagnostics.ProcessThread): number;
  contains(thread: System.Diagnostics.ProcessThread): boolean;
  copyTo(
    array: HostArray<System.Diagnostics.ProcessThread>,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
  indexOf(thread: System.Diagnostics.ProcessThread): number;
  insert(
    index: number | StrongNumeric<Int32Host>,
    thread: System.Diagnostics.ProcessThread
  ): VoidResult;
  item: {
    (index: number | StrongNumeric<Int32Host>): System.Diagnostics.ProcessThread;
    get(index: number | StrongNumeric<Int32Host>): System.Diagnostics.ProcessThread;
  };
  remove(thread: System.Diagnostics.ProcessThread): VoidResult;
}

declare global {
  namespace System.Diagnostics {
    type ProcessThreadCollection = import("./ProcessThreadCollection").ProcessThreadCollection;
  }
}

export interface ProcessThreadCollectionHostType extends HostType<
  ProcessThreadCollection,
  ReferenceTypeTrait
> {
  new (processThreads: HostArray<System.Diagnostics.ProcessThread>): ProcessThreadCollection;
}

export {};
