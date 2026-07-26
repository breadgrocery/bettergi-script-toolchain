import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Net/ICredentials";
import "../Uri";
import "../V8SplitProxyHelpers";

declare const xmlResolverBrand: unique symbol;
export interface XmlResolver extends ClrHostValue {
  readonly [xmlResolverBrand]: true;
  get credentials(): never;
  set credentials(value: System.Net.ICredentials);
  getEntity(
    absoluteUri: System.Uri,
    role: string | null,
    ofObjectToReturn: System.Type | null
  ): unknown;
  getEntityAsync(
    absoluteUri: System.Uri,
    role: string | null,
    ofObjectToReturn: System.Type | null
  ): Promise<unknown>;
  resolveUri(baseUri: System.Uri | null, relativeUri: string | null): System.Uri;
  supportsType(absoluteUri: System.Uri, type: System.Type | null): boolean;
}

declare global {
  namespace System.Xml {
    type XmlResolver = import("./XmlResolver").XmlResolver;
  }
}

export interface XmlResolverHostType extends HostType<XmlResolver, ReferenceTypeTrait> {
  readonly fileSystemResolver: System.Xml.XmlResolver;
  readonly throwingResolver: System.Xml.XmlResolver;
}

export {};
