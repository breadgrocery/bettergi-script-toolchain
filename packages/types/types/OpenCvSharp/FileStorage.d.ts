import type {
  ClrHostValue,
  DoubleHost,
  EnumInput,
  EnumTypeTrait,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IDisposable";
import "../System/IFormattable";
import "../System/ISpanFormattable";
import "../System/IntPtr";
import "./DMatch";
import "./DisposableCvObject";
import "./FileNode";
import "./ICvPtrHolder";
import "./KeyPoint";
import "./Mat";
import "./Point";
import "./Point2d";
import "./Point2f";
import "./Point3d";
import "./Point3f";
import "./Point3i";
import "./Range";
import "./Rect";
import "./Rect2d";
import "./Rect2f";
import "./Scalar";
import "./Size";
import "./Size2d";
import "./Size2f";
import "./SparseMat";
import "./Vec2b";
import "./Vec2d";
import "./Vec2f";
import "./Vec2i";
import "./Vec2s";
import "./Vec2w";
import "./Vec3b";
import "./Vec3d";
import "./Vec3f";
import "./Vec3i";
import "./Vec3s";
import "./Vec3w";
import "./Vec4b";
import "./Vec4d";
import "./Vec4f";
import "./Vec4i";
import "./Vec4s";
import "./Vec4w";
import "./Vec6b";
import "./Vec6d";
import "./Vec6f";
import "./Vec6i";
import "./Vec6s";
import "./Vec6w";

declare const fileStorageBrand: unique symbol;
export interface FileStorage
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "add"
      | "elName"
      | "endWriteStruct"
      | "getFirstTopLevelNode"
      | "isOpened"
      | "item"
      | "open"
      | "release"
      | "releaseAndGetString"
      | "root"
      | "startWriteStruct"
      | "state"
      | "write"
      | "writeComment"
      | "writeRaw"
      | "writeScalar"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [fileStorageBrand]: true;
  item: { (nodeName: string): OpenCvSharp.FileNode; get(nodeName: string): OpenCvSharp.FileNode };
  readonly elName: string;
  readonly state: FileStorage_States;
  open(fileName: string, flags: EnumInput<FileStorage_Modes>): boolean;
  open(fileName: string, flags: EnumInput<FileStorage_Modes>, encoding: string | null): boolean;
  isOpened(): boolean;
  release(): VoidResult;
  releaseAndGetString(): string;
  getFirstTopLevelNode(): OpenCvSharp.FileNode;
  root(): OpenCvSharp.FileNode;
  root(streamIdx: number | StrongNumeric<Int32Host>): OpenCvSharp.FileNode;
  writeRaw(fmt: string, vec: System.IntPtr, len: number | StrongNumeric<Int32Host>): VoidResult;
  writeComment(comment: string): VoidResult;
  writeComment(comment: string, append: boolean): VoidResult;
  startWriteStruct(
    name: string,
    flags: number | StrongNumeric<Int32Host>,
    typeName: string
  ): VoidResult;
  endWriteStruct(): VoidResult;
  write(name: string, value: OpenCvSharp.Mat): VoidResult;
  write(name: string, value: OpenCvSharp.SparseMat): VoidResult;
  write(
    name: string,
    value: System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>
  ): VoidResult;
  write(
    name: string,
    value: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>
  ): VoidResult;
  write(name: string, value: number | StrongNumeric<DoubleHost>): VoidResult;
  write(name: string, value: number | StrongNumeric<Int32Host>): VoidResult;
  write(name: string, value: number | StrongNumeric<SingleHost>): VoidResult;
  write(name: string, value: string): VoidResult;
  writeScalar(value: number | StrongNumeric<DoubleHost>): VoidResult;
  writeScalar(value: number | StrongNumeric<Int32Host>): VoidResult;
  writeScalar(value: number | StrongNumeric<SingleHost>): VoidResult;
  writeScalar(value: string): VoidResult;
  add(val: OpenCvSharp.DMatch): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.KeyPoint): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Mat): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Point): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Point2d): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Point2f): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Point3d): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Point3f): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Point3i): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Range): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Rect): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Rect2d): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Rect2f): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Scalar): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Size): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Size2d): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Size2f): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.SparseMat): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec2b): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec2d): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec2f): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec2i): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec2s): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec2w): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec3b): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec3d): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec3f): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec3i): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec3s): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec3w): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec4b): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec4d): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec4f): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec4i): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec4s): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec4w): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec6b): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec6d): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec6f): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec6i): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec6s): OpenCvSharp.FileStorage;
  add(val: OpenCvSharp.Vec6w): OpenCvSharp.FileStorage;
  add(val: System.Collections.Generic.IEnumerable<OpenCvSharp.DMatch>): OpenCvSharp.FileStorage;
  add(val: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>): OpenCvSharp.FileStorage;
  add(val: number | StrongNumeric<DoubleHost>): OpenCvSharp.FileStorage;
  add(val: number | StrongNumeric<Int32Host>): OpenCvSharp.FileStorage;
  add(val: number | StrongNumeric<SingleHost>): OpenCvSharp.FileStorage;
  add(val: string): OpenCvSharp.FileStorage;
}

declare const fileStorage_StatesBrand: unique symbol;
export interface FileStorage_States extends ClrHostValue {
  readonly [fileStorage_StatesBrand]: true;
}

export interface FileStorage_StatesHostType extends HostType<FileStorage_States, EnumTypeTrait> {
  readonly undefined: FileStorage_States;
  readonly valueExpected: FileStorage_States;
  readonly nameExpected: FileStorage_States;
  readonly insideMap: FileStorage_States;
}

declare global {
  namespace OpenCvSharp.FileStorage {
    type States = import("./FileStorage").FileStorage_States;
  }
}

declare const fileStorage_ModesBrand: unique symbol;
export interface FileStorage_Modes extends ClrHostValue {
  readonly [fileStorage_ModesBrand]: true;
}

export interface FileStorage_ModesHostType extends HostType<FileStorage_Modes, EnumTypeTrait> {
  readonly read: FileStorage_Modes;
  readonly write: FileStorage_Modes;
  readonly append: FileStorage_Modes;
  readonly memory: FileStorage_Modes;
  readonly formatAuto: FileStorage_Modes;
  readonly formatXml: FileStorage_Modes;
  readonly formatYaml: FileStorage_Modes;
  readonly base64: FileStorage_Modes;
  readonly writeBase64: FileStorage_Modes;
}

declare global {
  namespace OpenCvSharp.FileStorage {
    type Modes = import("./FileStorage").FileStorage_Modes;
  }
}

declare global {
  namespace OpenCvSharp {
    type FileStorage = import("./FileStorage").FileStorage;
  }
}

export interface FileStorageHostType extends HostType<
  FileStorage,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): FileStorage;
  new (source: string, flags: EnumInput<FileStorage_Modes>): FileStorage;
  new (source: string, flags: EnumInput<FileStorage_Modes>, encoding: string | null): FileStorage;
  getDefaultObjectName(fileName: string): string;
  readonly States: FileStorage_StatesHostType;
  readonly Modes: FileStorage_ModesHostType;
}

export {};
