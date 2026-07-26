import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Uri";
import "./NetworkCredential";

declare const iCredentialsInputBrand: unique symbol;
export interface ICredentialsInput {
  readonly [iCredentialsInputBrand]: true;
}

export interface ICredentials
  extends Microsoft.ClearScript.ClrInterfaceView<ICredentialsInput>, ICredentialsInput {
  getCredential(uri: System.Uri, authType: string): System.Net.NetworkCredential;
}

declare global {
  namespace System.Net {
    type ICredentialsInput = import("./ICredentials").ICredentialsInput;
  }
}

declare global {
  namespace System.Net {
    type ICredentials = import("./ICredentials").ICredentials;
  }
}

export interface ICredentialsHostType extends HostType<ICredentials, InterfaceTypeTrait> {}

export {};
