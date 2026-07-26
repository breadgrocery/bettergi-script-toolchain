import type { EventSource } from "../../../Microsoft/ClearScript/HostEvent";
import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/Generic/IEnumerable";
import "../../EventHandler";
import "../../V8SplitProxyHelpers";
import "../IXmlLineInfo";
import "../XmlNodeType";
import "./XDocument";
import "./XElement";
import "./XObjectChangeEventArgs";

declare const xObjectBrand: unique symbol;
export interface XObject extends ClrHostValue, System.Xml.IXmlLineInfoInput {
  readonly [xObjectBrand]: true;
  addAnnotation(annotation: unknown): VoidResult;
  annotation(type: System.Type): unknown;
  annotation<T>(type1: HostType<T>): T;
  annotations(type: System.Type): System.Collections.Generic.IEnumerable<unknown>;
  annotations<T>(type1: HostType<T>): System.Collections.Generic.IEnumerable<T>;
  readonly baseUri: string;
  readonly changed: EventSource<
    (sender: unknown, e: System.Xml.Linq.XObjectChangeEventArgs) => void
  >;
  readonly changing: EventSource<
    (sender: unknown, e: System.Xml.Linq.XObjectChangeEventArgs) => void
  >;
  readonly document: System.Xml.Linq.XDocument;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly parent: System.Xml.Linq.XElement;
  removeAnnotations(type: System.Type): VoidResult;
  removeAnnotations<T>(type1: HostType<T>): VoidResult;
}

declare global {
  namespace System.Xml.Linq {
    type XObject = import("./XObject").XObject;
  }
}

export interface XObjectHostType extends HostType<XObject, ReferenceTypeTrait> {}

export {};
