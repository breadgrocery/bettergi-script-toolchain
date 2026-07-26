import type {
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";

declare const iTupleInputBrand: unique symbol;
export interface ITupleInput {
  readonly [iTupleInputBrand]: true;
}

export interface ITuple extends Microsoft.ClearScript.ClrInterfaceView<ITupleInput>, ITupleInput {
  item: {
    (index: number | StrongNumeric<Int32Host>): unknown;
    get(index: number | StrongNumeric<Int32Host>): unknown;
  };
  readonly length: number;
}

declare global {
  namespace System.Runtime.CompilerServices {
    type ITupleInput = import("./ITuple").ITupleInput;
  }
}

declare global {
  namespace System.Runtime.CompilerServices {
    type ITuple = import("./ITuple").ITuple;
  }
}

export interface ITupleHostType extends HostType<ITuple, InterfaceTypeTrait> {}

export {};
