import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../IEquatable";
import "../../Runtime/Serialization/ISerializable";
import "./XNamespace";

declare const xNameBrand: unique symbol;
export interface XName extends ClrHostValue, System.Runtime.Serialization.ISerializableInput {
  readonly [xNameBrand]: true;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  readonly localName: string;
  readonly namespaceName: string;
  readonly namespace: System.Xml.Linq.XNamespace;
  toString(): string;
}

declare global {
  namespace System.Xml.Linq {
    type XName = import("./XName").XName;
  }
}

export interface XNameHostType extends HostType<XName, ReferenceTypeTrait> {
  get(expandedName: string): System.Xml.Linq.XName;
  get(localName: string, namespaceName: string): System.Xml.Linq.XName;
}

export {};
