import type {
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IDictionary";
import "../Collections/Generic/IEnumerable";
import "../Collections/ObjectModel/Collection";
import "../Collections/Specialized/StringDictionary";
import "../IntPtr";
import "../Security/SecureString";
import "../Text/Encoding";
import "./ProcessWindowStyle";

declare const processStartInfoBrand: unique symbol;
export interface ProcessStartInfo extends ClrHostValue {
  readonly [processStartInfoBrand]: true;
  arguments: string;
  createNoWindow: boolean;
  domain: string;
  errorDialog: boolean;
  errorDialogParentHandle: System.IntPtr;
  fileName: string;
  loadUserProfile: boolean;
  password: System.Security.SecureString;
  passwordInClearText: string;
  readonly argumentList: System.Collections.ObjectModel.Collection<string>;
  readonly environment: System.Collections.Generic.IDictionary<string, string>;
  readonly environmentVariables: System.Collections.Specialized.StringDictionary;
  readonly verbs: HostArray<string>;
  redirectStandardError: boolean;
  redirectStandardInput: boolean;
  redirectStandardOutput: boolean;
  standardErrorEncoding: System.Text.Encoding;
  standardInputEncoding: System.Text.Encoding;
  standardOutputEncoding: System.Text.Encoding;
  useCredentialsForNetworkingOnly: boolean;
  useShellExecute: boolean;
  userName: string;
  verb: string;
  windowStyle: System.Diagnostics.ProcessWindowStyle;
  workingDirectory: string;
}

declare global {
  namespace System.Diagnostics {
    type ProcessStartInfo = import("./ProcessStartInfo").ProcessStartInfo;
  }
}

export interface ProcessStartInfoHostType extends HostType<
  ProcessStartInfo,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ProcessStartInfo;
  new (fileName: string): ProcessStartInfo;
  new (fileName: string, arguments: string): ProcessStartInfo;
  new (
    fileName: string,
    arguments: System.Collections.Generic.IEnumerable<string>
  ): ProcessStartInfo;
}

export {};
