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
import "./IComponent";

declare const componentCollectionBrand: unique symbol;
export interface ComponentCollection
  extends
    Omit<System.Collections.ReadOnlyCollectionBase, "copyTo" | "item">,
    System.Collections.ICollectionInput,
    System.Collections.IEnumerableInput {
  readonly [componentCollectionBrand]: true;
  copyTo(
    array: HostArray<System.ComponentModel.IComponent>,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
  item: {
    (name: string): System.ComponentModel.IComponent;
    get(name: string): System.ComponentModel.IComponent;
    (index: number | StrongNumeric<Int32Host>): System.ComponentModel.IComponent;
    get(index: number | StrongNumeric<Int32Host>): System.ComponentModel.IComponent;
  };
}

declare global {
  namespace System.ComponentModel {
    type ComponentCollection = import("./ComponentCollection").ComponentCollection;
  }
}

export interface ComponentCollectionHostType extends HostType<
  ComponentCollection,
  ReferenceTypeTrait
> {
  new (components: HostArray<System.ComponentModel.IComponent>): ComponentCollection;
}

export {};
