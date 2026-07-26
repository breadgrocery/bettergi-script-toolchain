import type {
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "./NetworkCredential";

declare const iCredentialsByHostInputBrand: unique symbol;
export interface ICredentialsByHostInput {
  readonly [iCredentialsByHostInputBrand]: true;
}

export interface ICredentialsByHost
  extends Microsoft.ClearScript.ClrInterfaceView<ICredentialsByHostInput>, ICredentialsByHostInput {
  getCredential(
    host: string,
    port: number | StrongNumeric<Int32Host>,
    authenticationType: string
  ): System.Net.NetworkCredential;
}

declare global {
  namespace System.Net {
    type ICredentialsByHostInput = import("./ICredentialsByHost").ICredentialsByHostInput;
  }
}

declare global {
  namespace System.Net {
    type ICredentialsByHost = import("./ICredentialsByHost").ICredentialsByHost;
  }
}

export interface ICredentialsByHostHostType extends HostType<
  ICredentialsByHost,
  InterfaceTypeTrait
> {}

export {};
