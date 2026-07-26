import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IO/Stream";
import "../../IO/TextWriter";
import "../XmlWriter";
import "./SaveOptions";
import "./XName";

declare const xStreamingElementBrand: unique symbol;
export interface XStreamingElement extends ClrHostValue {
  readonly [xStreamingElementBrand]: true;
  add(...content: unknown[]): VoidResult;
  add(content: HostArray<unknown>): VoidResult;
  add(content: unknown | null): VoidResult;
  name: System.Xml.Linq.XName;
  save(fileName: string): VoidResult;
  save(fileName: string, options: EnumInput<System.Xml.Linq.SaveOptions>): VoidResult;
  save(stream: System.IO.Stream): VoidResult;
  save(stream: System.IO.Stream, options: EnumInput<System.Xml.Linq.SaveOptions>): VoidResult;
  save(textWriter: System.IO.TextWriter): VoidResult;
  save(
    textWriter: System.IO.TextWriter,
    options: EnumInput<System.Xml.Linq.SaveOptions>
  ): VoidResult;
  save(writer: System.Xml.XmlWriter): VoidResult;
  toString(): string;
  toString(options: EnumInput<System.Xml.Linq.SaveOptions>): string;
  writeTo(writer: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml.Linq {
    type XStreamingElement = import("./XStreamingElement").XStreamingElement;
  }
}

export interface XStreamingElementHostType extends HostType<XStreamingElement, ReferenceTypeTrait> {
  new (name: System.Xml.Linq.XName): XStreamingElement;
  new (name: System.Xml.Linq.XName, content: unknown | null): XStreamingElement;
  new (name: System.Xml.Linq.XName, content: HostArray<unknown>): XStreamingElement;
  new (name: System.Xml.Linq.XName, ...content: unknown[]): XStreamingElement;
}

export {};
