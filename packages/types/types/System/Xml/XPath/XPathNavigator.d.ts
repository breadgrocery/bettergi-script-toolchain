import type {
  EnumInput,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/Generic/IDictionary";
import "../../Collections/IEqualityComparer";
import "../../DateTime";
import "../../ICloneable";
import "../../V8SplitProxyHelpers";
import "../IXmlNamespaceResolver";
import "../Schema/IXmlSchemaInfo";
import "../Schema/ValidationEventHandler";
import "../Schema/XmlSchemaSet";
import "../Schema/XmlSchemaType";
import "../XmlNameTable";
import "../XmlNamespaceScope";
import "../XmlNodeOrder";
import "../XmlReader";
import "../XmlWriter";
import "./IXPathNavigable";
import "./XPathExpression";
import "./XPathItem";
import "./XPathNamespaceScope";
import "./XPathNodeIterator";
import "./XPathNodeType";

declare const xPathNavigatorBrand: unique symbol;
export interface XPathNavigator
  extends
    Omit<
      System.Xml.XPath.XPathItem,
      | "appendChild"
      | "appendChildElement"
      | "baseURI"
      | "canEdit"
      | "checkValidity"
      | "clone"
      | "comparePosition"
      | "compile"
      | "createAttribute"
      | "createAttributes"
      | "createNavigator"
      | "deleteRange"
      | "deleteSelf"
      | "evaluate"
      | "getAttribute"
      | "getNamespace"
      | "getNamespacesInScope"
      | "hasAttributes"
      | "hasChildren"
      | "innerXml"
      | "insertAfter"
      | "insertBefore"
      | "insertElementAfter"
      | "insertElementBefore"
      | "isDescendant"
      | "isEmptyElement"
      | "isNode"
      | "isSamePosition"
      | "localName"
      | "lookupNamespace"
      | "lookupPrefix"
      | "matches"
      | "moveTo"
      | "moveToAttribute"
      | "moveToChild"
      | "moveToFirst"
      | "moveToFirstAttribute"
      | "moveToFirstChild"
      | "moveToFirstNamespace"
      | "moveToFollowing"
      | "moveToId"
      | "moveToNamespace"
      | "moveToNext"
      | "moveToNextAttribute"
      | "moveToNextNamespace"
      | "moveToParent"
      | "moveToPrevious"
      | "moveToRoot"
      | "name"
      | "nameTable"
      | "namespaceURI"
      | "nodeType"
      | "outerXml"
      | "prefix"
      | "prependChild"
      | "prependChildElement"
      | "readSubtree"
      | "replaceRange"
      | "replaceSelf"
      | "schemaInfo"
      | "select"
      | "selectAncestors"
      | "selectChildren"
      | "selectDescendants"
      | "selectSingleNode"
      | "setTypedValue"
      | "setValue"
      | "toString"
      | "typedValue"
      | "underlyingObject"
      | "valueAs"
      | "valueAsBoolean"
      | "valueAsDateTime"
      | "valueAsDouble"
      | "valueAsInt"
      | "valueAsLong"
      | "valueType"
      | "writeSubtree"
      | "xmlLang"
      | "xmlType"
    >,
    System.ICloneableInput,
    System.Xml.XPath.IXPathNavigableInput,
    System.Xml.IXmlNamespaceResolverInput {
  readonly [xPathNavigatorBrand]: true;
  appendChild(): System.Xml.XmlWriter;
  appendChild(newChild: System.Xml.XPath.XPathNavigator): VoidResult;
  appendChild(newChild: System.Xml.XmlReader): VoidResult;
  appendChild(newChild: string): VoidResult;
  appendChildElement(
    prefix: string | null,
    localName: string,
    namespaceURI: string | null,
    value: string | null
  ): VoidResult;
  checkValidity(
    schemas: System.Xml.Schema.XmlSchemaSet,
    validationEventHandler: System.Xml.Schema.ValidationEventHandler
  ): boolean;
  clone(): System.Xml.XPath.XPathNavigator;
  comparePosition(nav: System.Xml.XPath.XPathNavigator | null): System.Xml.XmlNodeOrder;
  compile(xpath: string): System.Xml.XPath.XPathExpression;
  createAttribute(
    prefix: string | null,
    localName: string,
    namespaceURI: string | null,
    value: string | null
  ): VoidResult;
  createAttributes(): System.Xml.XmlWriter;
  createNavigator(): System.Xml.XPath.XPathNavigator;
  deleteRange(lastSiblingToDelete: System.Xml.XPath.XPathNavigator): VoidResult;
  deleteSelf(): VoidResult;
  evaluate(expr: System.Xml.XPath.XPathExpression): unknown;
  evaluate(
    expr: System.Xml.XPath.XPathExpression,
    context: System.Xml.XPath.XPathNodeIterator | null
  ): unknown;
  evaluate(xpath: string): unknown;
  evaluate(xpath: string, resolver: System.Xml.IXmlNamespaceResolver | null): unknown;
  getAttribute(localName: string, namespaceURI: string): string;
  getNamespace(name: string): string;
  getNamespacesInScope(
    scope: EnumInput<System.Xml.XmlNamespaceScope>
  ): System.Collections.Generic.IDictionary<string, string>;
  innerXml: string;
  insertAfter(): System.Xml.XmlWriter;
  insertAfter(newSibling: System.Xml.XPath.XPathNavigator): VoidResult;
  insertAfter(newSibling: System.Xml.XmlReader): VoidResult;
  insertAfter(newSibling: string): VoidResult;
  insertBefore(): System.Xml.XmlWriter;
  insertBefore(newSibling: System.Xml.XPath.XPathNavigator): VoidResult;
  insertBefore(newSibling: System.Xml.XmlReader): VoidResult;
  insertBefore(newSibling: string): VoidResult;
  insertElementAfter(
    prefix: string | null,
    localName: string,
    namespaceURI: string | null,
    value: string | null
  ): VoidResult;
  insertElementBefore(
    prefix: string | null,
    localName: string,
    namespaceURI: string | null,
    value: string | null
  ): VoidResult;
  isDescendant(nav: System.Xml.XPath.XPathNavigator | null): boolean;
  isSamePosition(other: System.Xml.XPath.XPathNavigator): boolean;
  lookupNamespace(prefix: string): string;
  lookupPrefix(namespaceURI: string): string;
  matches(expr: System.Xml.XPath.XPathExpression): boolean;
  matches(xpath: string): boolean;
  moveTo(other: System.Xml.XPath.XPathNavigator): boolean;
  moveToAttribute(localName: string, namespaceURI: string): boolean;
  moveToChild(localName: string, namespaceURI: string): boolean;
  moveToChild(type: EnumInput<System.Xml.XPath.XPathNodeType>): boolean;
  moveToFirst(): boolean;
  moveToFirstAttribute(): boolean;
  moveToFirstChild(): boolean;
  moveToFirstNamespace(): boolean;
  moveToFirstNamespace(namespaceScope: EnumInput<System.Xml.XPath.XPathNamespaceScope>): boolean;
  moveToFollowing(localName: string, namespaceURI: string): boolean;
  moveToFollowing(
    localName: string,
    namespaceURI: string,
    end: System.Xml.XPath.XPathNavigator | null
  ): boolean;
  moveToFollowing(type: EnumInput<System.Xml.XPath.XPathNodeType>): boolean;
  moveToFollowing(
    type: EnumInput<System.Xml.XPath.XPathNodeType>,
    end: System.Xml.XPath.XPathNavigator | null
  ): boolean;
  moveToId(id: string): boolean;
  moveToNamespace(name: string): boolean;
  moveToNext(): boolean;
  moveToNext(localName: string, namespaceURI: string): boolean;
  moveToNext(type: EnumInput<System.Xml.XPath.XPathNodeType>): boolean;
  moveToNextAttribute(): boolean;
  moveToNextNamespace(): boolean;
  moveToNextNamespace(namespaceScope: EnumInput<System.Xml.XPath.XPathNamespaceScope>): boolean;
  moveToParent(): boolean;
  moveToPrevious(): boolean;
  moveToRoot(): VoidResult;
  outerXml: string;
  prependChild(): System.Xml.XmlWriter;
  prependChild(newChild: System.Xml.XPath.XPathNavigator): VoidResult;
  prependChild(newChild: System.Xml.XmlReader): VoidResult;
  prependChild(newChild: string): VoidResult;
  prependChildElement(
    prefix: string | null,
    localName: string,
    namespaceURI: string | null,
    value: string | null
  ): VoidResult;
  readSubtree(): System.Xml.XmlReader;
  readonly baseURI: string;
  readonly canEdit: boolean;
  readonly hasAttributes: boolean;
  readonly hasChildren: boolean;
  readonly isEmptyElement: boolean;
  readonly isNode: boolean;
  readonly localName: string;
  readonly name: string;
  readonly nameTable: System.Xml.XmlNameTable;
  readonly namespaceURI: string;
  readonly nodeType: System.Xml.XPath.XPathNodeType;
  readonly prefix: string;
  readonly schemaInfo: System.Xml.Schema.IXmlSchemaInfo;
  readonly typedValue: unknown;
  readonly underlyingObject: unknown;
  readonly valueAsBoolean: boolean;
  readonly valueAsDateTime: System.DateTime;
  readonly valueAsDouble: number;
  readonly valueAsInt: number;
  readonly valueAsLong: number;
  readonly valueType: System.Type;
  readonly xmlLang: string;
  readonly xmlType: System.Xml.Schema.XmlSchemaType;
  replaceRange(lastSiblingToReplace: System.Xml.XPath.XPathNavigator): System.Xml.XmlWriter;
  replaceSelf(newNode: System.Xml.XPath.XPathNavigator): VoidResult;
  replaceSelf(newNode: System.Xml.XmlReader): VoidResult;
  replaceSelf(newNode: string): VoidResult;
  select(expr: System.Xml.XPath.XPathExpression): System.Xml.XPath.XPathNodeIterator;
  select(xpath: string): System.Xml.XPath.XPathNodeIterator;
  select(
    xpath: string,
    resolver: System.Xml.IXmlNamespaceResolver | null
  ): System.Xml.XPath.XPathNodeIterator;
  selectAncestors(
    name: string,
    namespaceURI: string,
    matchSelf: boolean
  ): System.Xml.XPath.XPathNodeIterator;
  selectAncestors(
    type: EnumInput<System.Xml.XPath.XPathNodeType>,
    matchSelf: boolean
  ): System.Xml.XPath.XPathNodeIterator;
  selectChildren(name: string, namespaceURI: string): System.Xml.XPath.XPathNodeIterator;
  selectChildren(
    type: EnumInput<System.Xml.XPath.XPathNodeType>
  ): System.Xml.XPath.XPathNodeIterator;
  selectDescendants(
    name: string,
    namespaceURI: string,
    matchSelf: boolean
  ): System.Xml.XPath.XPathNodeIterator;
  selectDescendants(
    type: EnumInput<System.Xml.XPath.XPathNodeType>,
    matchSelf: boolean
  ): System.Xml.XPath.XPathNodeIterator;
  selectSingleNode(expression: System.Xml.XPath.XPathExpression): System.Xml.XPath.XPathNavigator;
  selectSingleNode(xpath: string): System.Xml.XPath.XPathNavigator;
  selectSingleNode(
    xpath: string,
    resolver: System.Xml.IXmlNamespaceResolver | null
  ): System.Xml.XPath.XPathNavigator;
  setTypedValue(typedValue: unknown): VoidResult;
  setValue(value: string): VoidResult;
  toString(): string;
  valueAs(returnType: System.Type, nsResolver: System.Xml.IXmlNamespaceResolver | null): unknown;
  writeSubtree(writer: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml.XPath {
    type XPathNavigator = import("./XPathNavigator").XPathNavigator;
  }
}

export interface XPathNavigatorHostType extends HostType<XPathNavigator, ReferenceTypeTrait> {
  readonly navigatorComparer: System.Collections.IEqualityComparer;
}

export {};
