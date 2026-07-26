import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "./XPathNavigator";

declare const iXPathNavigableInputBrand: unique symbol;
export interface IXPathNavigableInput {
  readonly [iXPathNavigableInputBrand]: true;
}

export interface IXPathNavigable
  extends Microsoft.ClearScript.ClrInterfaceView<IXPathNavigableInput>, IXPathNavigableInput {
  createNavigator(): System.Xml.XPath.XPathNavigator;
}

declare global {
  namespace System.Xml.XPath {
    type IXPathNavigableInput = import("./IXPathNavigable").IXPathNavigableInput;
  }
}

declare global {
  namespace System.Xml.XPath {
    type IXPathNavigable = import("./IXPathNavigable").IXPathNavigable;
  }
}

export interface IXPathNavigableHostType extends HostType<IXPathNavigable, InterfaceTypeTrait> {}

export {};
