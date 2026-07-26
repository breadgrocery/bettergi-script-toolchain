import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../ComponentModel/Component";
import "../ComponentModel/IComponent";
import "../IDisposable";
import "../IntPtr";
import "./FileVersionInfo";

declare const processModuleBrand: unique symbol;
export interface ProcessModule
  extends
    Omit<
      System.ComponentModel.Component,
      | "baseAddress"
      | "entryPointAddress"
      | "fileName"
      | "fileVersionInfo"
      | "moduleMemorySize"
      | "moduleName"
      | "toString"
    >,
    System.ComponentModel.IComponentInput,
    System.IDisposableInput {
  readonly [processModuleBrand]: true;
  readonly baseAddress: System.IntPtr;
  readonly entryPointAddress: System.IntPtr;
  readonly fileName: string;
  readonly fileVersionInfo: System.Diagnostics.FileVersionInfo;
  readonly moduleMemorySize: number;
  readonly moduleName: string;
  toString(): string;
}

declare global {
  namespace System.Diagnostics {
    type ProcessModule = import("./ProcessModule").ProcessModule;
  }
}

export interface ProcessModuleHostType extends HostType<ProcessModule, ReferenceTypeTrait> {}

export {};
