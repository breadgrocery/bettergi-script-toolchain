import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./XPath/IXPathNavigable";
import "./XmlLinkedNode";
import "./XmlNode";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlProcessingInstructionBrand: unique symbol;
export interface XmlProcessingInstruction
  extends
    Omit<
      System.Xml.XmlLinkedNode,
      | "cloneNode"
      | "data"
      | "innerText"
      | "localName"
      | "name"
      | "nodeType"
      | "target"
      | "value"
      | "writeContentTo"
      | "writeTo"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlProcessingInstructionBrand]: true;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  data: string;
  innerText: string;
  readonly localName: string;
  readonly name: string;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly target: string;
  value: string;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlProcessingInstruction = import("./XmlProcessingInstruction").XmlProcessingInstruction;
  }
}

export interface XmlProcessingInstructionHostType extends HostType<
  XmlProcessingInstruction,
  ReferenceTypeTrait
> {}

export {};
