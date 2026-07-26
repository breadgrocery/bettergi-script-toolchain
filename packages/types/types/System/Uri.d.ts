import type {
  CharHost,
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut, HostVariableRef } from "../Microsoft/ClearScript/HostVariable";
import "./IFormattable";
import "./ISpanFormattable";
import "./Runtime/Serialization/ISerializable";
import "./StringComparison";
import "./UriComponents";
import "./UriCreationOptions";
import "./UriFormat";
import "./UriHostNameType";
import "./UriKind";
import "./UriPartial";

declare const uriBrand: unique symbol;
export interface Uri
  extends
    ClrHostValue,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.Runtime.Serialization.ISerializableInput {
  readonly [uriBrand]: true;
  equals(comparand: unknown | null): boolean;
  getComponents(
    components: EnumInput<System.UriComponents>,
    format: EnumInput<System.UriFormat>
  ): string;
  getHashCode(): number;
  getLeftPart(part: EnumInput<System.UriPartial>): string;
  isBaseOf(uri: System.Uri): boolean;
  isWellFormedOriginalString(): boolean;
  makeRelative(toUri: System.Uri): string;
  makeRelativeUri(uri: System.Uri): System.Uri;
  readonly absolutePath: string;
  readonly absoluteUri: string;
  readonly authority: string;
  readonly dnsSafeHost: string;
  readonly fragment: string;
  readonly host: string;
  readonly hostNameType: System.UriHostNameType;
  readonly idnHost: string;
  readonly isAbsoluteUri: boolean;
  readonly isDefaultPort: boolean;
  readonly isFile: boolean;
  readonly isLoopback: boolean;
  readonly isUnc: boolean;
  readonly localPath: string;
  readonly originalString: string;
  readonly pathAndQuery: string;
  readonly port: number;
  readonly query: string;
  readonly scheme: string;
  readonly segments: HostArray<string>;
  readonly userEscaped: boolean;
  readonly userInfo: string;
  toString(): string;
}

declare global {
  namespace System {
    type Uri = import("./Uri").Uri;
  }
}

export interface UriHostType extends HostType<Uri, ReferenceTypeTrait> {
  new (uriString: string): Uri;
  new (uriString: string, dontEscape: boolean): Uri;
  new (baseUri: System.Uri, relativeUri: string | null, dontEscape: boolean): Uri;
  new (uriString: string, uriKind: EnumInput<System.UriKind>): Uri;
  new (uriString: string, creationOptions: HostVariableRef<System.UriCreationOptions>): Uri;
  new (baseUri: System.Uri, relativeUri: string | null): Uri;
  new (baseUri: System.Uri, relativeUri: System.Uri): Uri;
  readonly uriSchemeFile: string;
  readonly uriSchemeFtp: string;
  readonly uriSchemeSftp: string;
  readonly uriSchemeFtps: string;
  readonly uriSchemeGopher: string;
  readonly uriSchemeHttp: string;
  readonly uriSchemeHttps: string;
  readonly uriSchemeWs: string;
  readonly uriSchemeWss: string;
  readonly uriSchemeMailto: string;
  readonly uriSchemeNews: string;
  readonly uriSchemeNntp: string;
  readonly uriSchemeSsh: string;
  readonly uriSchemeTelnet: string;
  readonly uriSchemeNetTcp: string;
  readonly uriSchemeNetPipe: string;
  readonly schemeDelimiter: string;
  checkHostName(name: string | null): System.UriHostNameType;
  hexEscape(character: number | StrongNumeric<CharHost>): string;
  hexUnescape(pattern: string, index: HostVariableRef<number>): number;
  isHexEncoding(pattern: string, index: number | StrongNumeric<Int32Host>): boolean;
  checkSchemeName(schemeName: string | null): boolean;
  isHexDigit(character: number | StrongNumeric<CharHost>): boolean;
  fromHex(digit: number | StrongNumeric<CharHost>): number;
  tryCreate(
    uriString: string | null,
    uriKind: EnumInput<System.UriKind>,
    result: HostVariableOut<System.Uri>
  ): boolean;
  tryCreate(
    uriString: string | null,
    creationOptions: HostVariableRef<System.UriCreationOptions>,
    result: HostVariableOut<System.Uri>
  ): boolean;
  tryCreate(
    baseUri: System.Uri | null,
    relativeUri: string | null,
    result: HostVariableOut<System.Uri>
  ): boolean;
  tryCreate(
    baseUri: System.Uri | null,
    relativeUri: System.Uri | null,
    result: HostVariableOut<System.Uri>
  ): boolean;
  compare(
    uri1: System.Uri | null,
    uri2: System.Uri | null,
    partsToCompare: EnumInput<System.UriComponents>,
    compareFormat: EnumInput<System.UriFormat>,
    comparisonType: EnumInput<System.StringComparison>
  ): number;
  isWellFormedUriString(uriString: string | null, uriKind: EnumInput<System.UriKind>): boolean;
  unescapeDataString(stringToUnescape: string): string;
  escapeUriString(stringToEscape: string): string;
  escapeDataString(stringToEscape: string): string;
}

export {};
