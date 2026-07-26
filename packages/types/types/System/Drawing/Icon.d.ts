import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../ICloneable";
import "../IDisposable";
import "../IO/Stream";
import "../IntPtr";
import "../MarshalByRefObject";
import "../Runtime/Serialization/ISerializable";
import "../V8SplitProxyHelpers";
import "./Bitmap";
import "./Size";

declare const iconBrand: unique symbol;
export interface Icon
  extends
    Omit<
      System.MarshalByRefObject,
      | "clone"
      | "dispose"
      | "handle"
      | "height"
      | "save"
      | "size"
      | "toBitmap"
      | "toString"
      | "width"
    >,
    System.ICloneableInput,
    System.IDisposableInput,
    System.Runtime.Serialization.ISerializableInput {
  readonly [iconBrand]: true;
  clone(): unknown;
  dispose(): VoidResult;
  readonly handle: System.IntPtr;
  readonly height: number;
  readonly size: System.Drawing.Size;
  readonly width: number;
  save(outputStream: System.IO.Stream): VoidResult;
  toBitmap(): System.Drawing.Bitmap;
  toString(): string;
}

declare global {
  namespace System.Drawing {
    type Icon = import("./Icon").Icon;
  }
}

export interface IconHostType extends HostType<Icon, ReferenceTypeTrait> {
  new (fileName: string): Icon;
  new (fileName: string, size: System.Drawing.Size): Icon;
  new (
    fileName: string,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): Icon;
  new (original: System.Drawing.Icon, size: System.Drawing.Size): Icon;
  new (
    original: System.Drawing.Icon,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): Icon;
  new (type: System.Type, resource: string): Icon;
  new (stream: System.IO.Stream): Icon;
  new (stream: System.IO.Stream, size: System.Drawing.Size): Icon;
  new (
    stream: System.IO.Stream,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): Icon;
  extractAssociatedIcon(filePath: string): System.Drawing.Icon;
  fromHandle(handle: System.IntPtr): System.Drawing.Icon;
  extractIcon(
    filePath: string,
    id: number | StrongNumeric<Int32Host>,
    size: number | StrongNumeric<Int32Host>
  ): System.Drawing.Icon;
  extractIcon(filePath: string, id: number | StrongNumeric<Int32Host>): System.Drawing.Icon;
  extractIcon(
    filePath: string,
    id: number | StrongNumeric<Int32Host>,
    smallIcon: boolean
  ): System.Drawing.Icon;
}

export {};
