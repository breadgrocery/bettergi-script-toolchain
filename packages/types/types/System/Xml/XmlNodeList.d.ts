import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../Collections/IEnumerable";
import "../Collections/IEnumerator";
import "../IDisposable";
import "./XmlNode";

declare const xmlNodeListBrand: unique symbol;
export interface XmlNodeList
  extends ClrHostValue, System.Collections.IEnumerableInput, System.IDisposableInput {
  readonly [xmlNodeListBrand]: true;
  getEnumerator(): System.Collections.IEnumerator;
  item: {
    (i: number | StrongNumeric<Int32Host>): System.Xml.XmlNode;
    get(i: number | StrongNumeric<Int32Host>): System.Xml.XmlNode;
  };
  readonly count: number;
}

declare global {
  namespace System.Xml {
    type XmlNodeList = import("./XmlNodeList").XmlNodeList;
  }
}

export interface XmlNodeListHostType extends HostType<XmlNodeList, ReferenceTypeTrait> {}

export {};
