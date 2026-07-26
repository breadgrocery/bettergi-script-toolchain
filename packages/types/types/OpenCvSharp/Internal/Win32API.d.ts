import type { ClrHostValue, HostType, StaticTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../../System/IntPtr";

declare const win32ApiBrand: unique symbol;
export interface Win32Api extends ClrHostValue {
  readonly [win32ApiBrand]: true;
}

declare global {
  namespace OpenCvSharp.Internal {
    type Win32Api = import("./Win32API").Win32Api;
  }
}

export interface Win32ApiHostType extends HostType<Win32Api, StaticTypeTrait> {
  loadLibrary(dllPath: string): System.IntPtr;
}

export {};
