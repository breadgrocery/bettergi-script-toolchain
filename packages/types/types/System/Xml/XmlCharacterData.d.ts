import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./XPath/IXPathNavigable";
import "./XmlLinkedNode";

declare const xmlCharacterDataBrand: unique symbol;
export interface XmlCharacterData
  extends
    Omit<
      System.Xml.XmlLinkedNode,
      | "appendData"
      | "data"
      | "deleteData"
      | "innerText"
      | "insertData"
      | "length"
      | "replaceData"
      | "substring"
      | "value"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlCharacterDataBrand]: true;
  appendData(strData: string | null): VoidResult;
  data: string;
  deleteData(
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  innerText: string;
  insertData(offset: number | StrongNumeric<Int32Host>, strData: string | null): VoidResult;
  readonly length: number;
  replaceData(
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    strData: string | null
  ): VoidResult;
  substring(
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): string;
  value: string;
}

declare global {
  namespace System.Xml {
    type XmlCharacterData = import("./XmlCharacterData").XmlCharacterData;
  }
}

export interface XmlCharacterDataHostType extends HostType<XmlCharacterData, ReferenceTypeTrait> {}

export {};
