import type { EnumInput, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../EventArgs";
import "./XmlNode";
import "./XmlNodeChangedAction";

declare const xmlNodeChangedEventArgsBrand: unique symbol;
export interface XmlNodeChangedEventArgs extends Omit<
  System.EventArgs,
  "action" | "newParent" | "newValue" | "node" | "oldParent" | "oldValue"
> {
  readonly [xmlNodeChangedEventArgsBrand]: true;
  readonly action: System.Xml.XmlNodeChangedAction;
  readonly newParent: System.Xml.XmlNode;
  readonly newValue: string;
  readonly node: System.Xml.XmlNode;
  readonly oldParent: System.Xml.XmlNode;
  readonly oldValue: string;
}

declare global {
  namespace System.Xml {
    type XmlNodeChangedEventArgs = import("./XmlNodeChangedEventArgs").XmlNodeChangedEventArgs;
  }
}

export interface XmlNodeChangedEventArgsHostType extends HostType<
  XmlNodeChangedEventArgs,
  ReferenceTypeTrait
> {
  new (
    node: System.Xml.XmlNode | null,
    oldParent: System.Xml.XmlNode | null,
    newParent: System.Xml.XmlNode | null,
    oldValue: string | null,
    newValue: string | null,
    action: EnumInput<System.Xml.XmlNodeChangedAction>
  ): XmlNodeChangedEventArgs;
}

export {};
