import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/IEnumerable";
import "../../Collections/IEnumerator";
import "../../ICloneable";
import "./XPathNavigator";

declare const xPathNodeIteratorBrand: unique symbol;
export interface XPathNodeIterator
  extends ClrHostValue, System.ICloneableInput, System.Collections.IEnumerableInput {
  readonly [xPathNodeIteratorBrand]: true;
  clone(): System.Xml.XPath.XPathNodeIterator;
  getEnumerator(): System.Collections.IEnumerator;
  moveNext(): boolean;
  readonly count: number;
  readonly current: System.Xml.XPath.XPathNavigator;
  readonly currentPosition: number;
}

declare global {
  namespace System.Xml.XPath {
    type XPathNodeIterator = import("./XPathNodeIterator").XPathNodeIterator;
  }
}

export interface XPathNodeIteratorHostType extends HostType<
  XPathNodeIterator,
  ReferenceTypeTrait
> {}

export {};
