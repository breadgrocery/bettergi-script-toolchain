import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./XPath/IXPathNavigable";
import "./XmlCharacterData";
import "./XmlNode";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlCommentBrand: unique symbol;
export interface XmlComment
  extends
    Omit<
      System.Xml.XmlCharacterData,
      "cloneNode" | "localName" | "name" | "nodeType" | "writeContentTo" | "writeTo"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlCommentBrand]: true;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  readonly localName: string;
  readonly name: string;
  readonly nodeType: System.Xml.XmlNodeType;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlComment = import("./XmlComment").XmlComment;
  }
}

export interface XmlCommentHostType extends HostType<XmlComment, ReferenceTypeTrait> {}

export {};
