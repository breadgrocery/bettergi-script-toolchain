import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IEnumerable";
import "../../System/Collections/Generic/List";

declare const windowsLibraryLoaderBrand: unique symbol;
export interface WindowsLibraryLoader extends ClrHostValue {
  readonly [windowsLibraryLoaderBrand]: true;
  readonly additionalPaths: System.Collections.Generic.List<string>;
  isLibraryLoaded(dllName: string): boolean;
  loadLibrary(dllName: string): VoidResult;
  loadLibrary(
    dllName: string,
    additionalPaths: System.Collections.Generic.IEnumerable<string> | null
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.Internal {
    type WindowsLibraryLoader = import("./WindowsLibraryLoader").WindowsLibraryLoader;
  }
}

export interface WindowsLibraryLoaderHostType extends HostType<
  WindowsLibraryLoader,
  ReferenceTypeTrait
> {
  readonly instance: OpenCvSharp.Internal.WindowsLibraryLoader;
  isCurrentPlatformSupported(): boolean;
  isDotNetCore(): boolean;
}

export {};
