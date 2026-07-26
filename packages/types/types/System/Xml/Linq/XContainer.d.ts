import type {
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/Generic/IEnumerable";
import "../IXmlLineInfo";
import "../XmlWriter";
import "./XElement";
import "./XName";
import "./XNode";

declare const xContainerBrand: unique symbol;
export interface XContainer
  extends
    Omit<
      System.Xml.Linq.XNode,
      | "add"
      | "addFirst"
      | "createWriter"
      | "descendantNodes"
      | "descendants"
      | "element"
      | "elements"
      | "firstNode"
      | "lastNode"
      | "nodes"
      | "removeNodes"
      | "replaceNodes"
    >,
    System.Xml.IXmlLineInfoInput {
  readonly [xContainerBrand]: true;
  add(...content: unknown[]): VoidResult;
  add(content: HostArray<unknown>): VoidResult;
  add(content: unknown | null): VoidResult;
  addFirst(...content: unknown[]): VoidResult;
  addFirst(content: HostArray<unknown>): VoidResult;
  addFirst(content: unknown | null): VoidResult;
  createWriter(): System.Xml.XmlWriter;
  descendantNodes(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XNode>;
  descendants(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  descendants(
    name: System.Xml.Linq.XName | null
  ): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  element(name: System.Xml.Linq.XName): System.Xml.Linq.XElement;
  elements(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  elements(
    name: System.Xml.Linq.XName | null
  ): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  nodes(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XNode>;
  readonly firstNode: System.Xml.Linq.XNode;
  readonly lastNode: System.Xml.Linq.XNode;
  removeNodes(): VoidResult;
  replaceNodes(...content: unknown[]): VoidResult;
  replaceNodes(content: HostArray<unknown>): VoidResult;
  replaceNodes(content: unknown | null): VoidResult;
}

declare global {
  namespace System.Xml.Linq {
    type XContainer = import("./XContainer").XContainer;
  }
}

export interface XContainerHostType extends HostType<XContainer, ReferenceTypeTrait> {}

export {};
