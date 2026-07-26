import type {
  EnumInput,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../EventArgs";
import "./XObjectChange";

declare const xObjectChangeEventArgsBrand: unique symbol;
export interface XObjectChangeEventArgs extends Omit<System.EventArgs, "objectChange"> {
  readonly [xObjectChangeEventArgsBrand]: true;
  readonly objectChange: System.Xml.Linq.XObjectChange;
}

declare global {
  namespace System.Xml.Linq {
    type XObjectChangeEventArgs = import("./XObjectChangeEventArgs").XObjectChangeEventArgs;
  }
}

export interface XObjectChangeEventArgsHostType extends HostType<
  XObjectChangeEventArgs,
  ReferenceTypeTrait
> {
  new (objectChange: EnumInput<System.Xml.Linq.XObjectChange>): XObjectChangeEventArgs;
  readonly add: System.Xml.Linq.XObjectChangeEventArgs;
  readonly remove: System.Xml.Linq.XObjectChangeEventArgs;
  readonly name: System.Xml.Linq.XObjectChangeEventArgs;
  readonly value: System.Xml.Linq.XObjectChangeEventArgs;
}

export {};
