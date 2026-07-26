import "../../System/Guid";
import "../../System/IDisposable";
import "../../System/V8SplitProxyHelpers";
import "./ContinuationCallback";
import "./CustomAttributeLoader";
import "./DocumentCategory";
import "./DocumentContextCallback";
import "./DocumentInfo";
import "./DocumentSettings";
import "./HostItemFlags";
import type { ClrHostValue, EnumInput, HostArray, HostType, ReferenceTypeTrait } from "./HostType";
import "./IScriptEngine";
import "./ScriptAccess";
import "./ScriptObject";
import type { VoidResult } from "./VoidResult";

declare const scriptEngineBrand: unique symbol;
export interface ScriptEngine
  extends ClrHostValue, Microsoft.ClearScript.IScriptEngineInput, System.IDisposableInput {
  readonly [scriptEngineBrand]: true;
  readonly name: string;
  readonly fileNameExtension: string;
  accessContext: System.Type;
  defaultAccess: Microsoft.ClearScript.ScriptAccess;
  enforceAnonymousTypeAccess: boolean;
  exposeHostObjectStaticMembers: boolean;
  disableExtensionMethods: boolean;
  formatCode: boolean;
  allowReflection: boolean;
  disableTypeRestriction: boolean;
  disableListIndexTypeRestriction: boolean;
  enableNullResultWrapping: boolean;
  disableFloatNarrowing: boolean;
  disableDynamicBinding: boolean;
  useReflectionBindFallback: boolean;
  enableAutoHostVariables: boolean;
  undefinedImportValue: unknown;
  nullExportValue: unknown;
  voidResultValue: unknown;
  continuationCallback: Microsoft.ClearScript.ContinuationCallback;
  readonly script: unknown;
  readonly global: Microsoft.ClearScript.ScriptObject;
  documentSettings: Microsoft.ClearScript.DocumentSettings;
  customAttributeLoader: Microsoft.ClearScript.CustomAttributeLoader;
  hostData: unknown;
  addHostObject(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    target: unknown
  ): VoidResult;
  addHostObject(itemName: string, target: unknown): VoidResult;
  addRestrictedHostObject<T>(
    type1: HostType<T>,
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    target: T
  ): VoidResult;
  addRestrictedHostObject<T>(type1: HostType<T>, itemName: string, target: T): VoidResult;
  addCOMObject(itemName: string, clsid: System.Guid): VoidResult;
  addCOMObject(itemName: string, clsid: System.Guid, serverName: string): VoidResult;
  addCOMObject(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    clsid: System.Guid
  ): VoidResult;
  addCOMObject(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    clsid: System.Guid,
    serverName: string
  ): VoidResult;
  addCOMObject(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    progID: string
  ): VoidResult;
  addCOMObject(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    progID: string,
    serverName: string
  ): VoidResult;
  addCOMObject(itemName: string, progID: string): VoidResult;
  addCOMObject(itemName: string, progID: string, serverName: string): VoidResult;
  addHostType(flags: EnumInput<Microsoft.ClearScript.HostItemFlags>, type: System.Type): VoidResult;
  addHostType(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    typeName: string,
    ...typeArgs: System.Type[]
  ): VoidResult;
  addHostType(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    typeName: string,
    assemblyName: string,
    ...typeArgs: System.Type[]
  ): VoidResult;
  addHostType(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    typeName: string,
    assemblyName: string,
    typeArgs: HostArray<System.Type>
  ): VoidResult;
  addHostType(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    typeName: string,
    typeArgs: HostArray<System.Type>
  ): VoidResult;
  addHostType(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    type: System.Type
  ): VoidResult;
  addHostType(itemName: string, typeName: string, ...typeArgs: System.Type[]): VoidResult;
  addHostType(
    itemName: string,
    typeName: string,
    assemblyName: string,
    ...typeArgs: System.Type[]
  ): VoidResult;
  addHostType(
    itemName: string,
    typeName: string,
    assemblyName: string,
    typeArgs: HostArray<System.Type>
  ): VoidResult;
  addHostType(itemName: string, typeName: string, typeArgs: HostArray<System.Type>): VoidResult;
  addHostType(itemName: string, type: System.Type): VoidResult;
  addHostType(type: System.Type): VoidResult;
  addHostTypes(...types: System.Type[]): VoidResult;
  addHostTypes(types: HostArray<System.Type>): VoidResult;
  addCOMType(itemName: string, clsid: System.Guid): VoidResult;
  addCOMType(itemName: string, clsid: System.Guid, serverName: string): VoidResult;
  addCOMType(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    clsid: System.Guid
  ): VoidResult;
  addCOMType(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    clsid: System.Guid,
    serverName: string
  ): VoidResult;
  addCOMType(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    progID: string
  ): VoidResult;
  addCOMType(
    itemName: string,
    flags: EnumInput<Microsoft.ClearScript.HostItemFlags>,
    progID: string,
    serverName: string
  ): VoidResult;
  addCOMType(itemName: string, progID: string): VoidResult;
  addCOMType(itemName: string, progID: string, serverName: string): VoidResult;
  executeDocument(specifier: string): VoidResult;
  executeDocument(specifier: string, category: Microsoft.ClearScript.DocumentCategory): VoidResult;
  executeDocument(
    specifier: string,
    category: Microsoft.ClearScript.DocumentCategory,
    contextCallback: Microsoft.ClearScript.DocumentContextCallback
  ): VoidResult;
  executeCommand(command: string): string;
  evaluateDocument(specifier: string): unknown;
  evaluateDocument(specifier: string, category: Microsoft.ClearScript.DocumentCategory): unknown;
  evaluateDocument(
    specifier: string,
    category: Microsoft.ClearScript.DocumentCategory,
    contextCallback: Microsoft.ClearScript.DocumentContextCallback
  ): unknown;
  invoke(funcName: string, ...args: unknown[]): unknown;
  invoke(funcName: string, args: HostArray<unknown>): unknown;
  getStackTrace(): string;
  interrupt(): VoidResult;
  collectGarbage(exhaustive: boolean): VoidResult;
  execute(code: string): VoidResult;
  execute(documentInfo: Microsoft.ClearScript.DocumentInfo, code: string): VoidResult;
  execute(documentName: string, code: string): VoidResult;
  execute(documentName: string, discard: boolean, code: string): VoidResult;
  evaluate(code: string): unknown;
  evaluate(documentInfo: Microsoft.ClearScript.DocumentInfo, code: string): unknown;
  evaluate(documentName: string, code: string): unknown;
  evaluate(documentName: string, discard: boolean, code: string): unknown;
  dispose(): VoidResult;
}

declare global {
  namespace Microsoft.ClearScript {
    type ScriptEngine = import("./ScriptEngine").ScriptEngine;
  }
}

export interface ScriptEngineHostType extends HostType<ScriptEngine, ReferenceTypeTrait> {
  readonly current: Microsoft.ClearScript.ScriptEngine;
}

export {};
