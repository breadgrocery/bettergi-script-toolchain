import type {
  ClrHostValue,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../Security/SecureString";
import "../Uri";
import "./ICredentials";
import "./ICredentialsByHost";

declare const networkCredentialBrand: unique symbol;
export interface NetworkCredential
  extends ClrHostValue, System.Net.ICredentialsInput, System.Net.ICredentialsByHostInput {
  readonly [networkCredentialBrand]: true;
  domain: string;
  getCredential(
    host: string | null,
    port: number | StrongNumeric<Int32Host>,
    authenticationType: string | null
  ): System.Net.NetworkCredential;
  getCredential(
    uri: System.Uri | null,
    authenticationType: string | null
  ): System.Net.NetworkCredential;
  password: string;
  securePassword: System.Security.SecureString;
  userName: string;
}

declare global {
  namespace System.Net {
    type NetworkCredential = import("./NetworkCredential").NetworkCredential;
  }
}

export interface NetworkCredentialHostType extends HostType<
  NetworkCredential,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): NetworkCredential;
  new (userName: string | null, password: string | null): NetworkCredential;
  new (userName: string | null, password: string | null, domain: string | null): NetworkCredential;
  new (userName: string | null, password: System.Security.SecureString | null): NetworkCredential;
  new (
    userName: string | null,
    password: System.Security.SecureString | null,
    domain: string | null
  ): NetworkCredential;
}

export {};
