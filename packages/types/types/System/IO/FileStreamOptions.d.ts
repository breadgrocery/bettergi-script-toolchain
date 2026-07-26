import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Nullable";
import "./FileAccess";
import "./FileMode";
import "./FileOptions";
import "./FileShare";
import "./UnixFileMode";

declare const fileStreamOptionsBrand: unique symbol;
export interface FileStreamOptions extends ClrHostValue {
  readonly [fileStreamOptionsBrand]: true;
  access: System.IO.FileAccess;
  bufferSize: number;
  mode: System.IO.FileMode;
  options: System.IO.FileOptions;
  preallocationSize: number;
  share: System.IO.FileShare;
  unixCreateMode: System.IO.UnixFileMode | null;
}

declare global {
  namespace System.IO {
    type FileStreamOptions = import("./FileStreamOptions").FileStreamOptions;
  }
}

export interface FileStreamOptionsHostType extends HostType<
  FileStreamOptions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): FileStreamOptions;
}

export {};
