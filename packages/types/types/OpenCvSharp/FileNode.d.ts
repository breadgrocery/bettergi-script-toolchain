import type {
  ClrHostValue,
  DoubleHost,
  EnumTypeTrait,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/Collections/Generic/IEnumerator";
import "../System/Collections/IEnumerable";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IDisposable";
import "../System/IFormattable";
import "../System/ISpanFormattable";
import "../System/IntPtr";
import "./DMatch";
import "./DisposableCvObject";
import "./FileNodeIterator";
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

declare const fileNodeBrand: unique symbol;
export interface FileNode
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "begin"
      | "empty"
      | "end"
      | "getEnumerator"
      | "isInt"
      | "isMap"
      | "isNamed"
      | "isNone"
      | "isReal"
      | "isSeq"
      | "isString"
      | "item"
      | "name"
      | "readDMatch"
      | "readDMatches"
      | "readDouble"
      | "readFloat"
      | "readInt"
      | "readKeyPoint"
      | "readKeyPoints"
      | "readMat"
      | "readPoint"
      | "readPoint2d"
      | "readPoint2f"
      | "readPoint3d"
      | "readPoint3f"
      | "readPoint3i"
      | "readRange"
      | "readRaw"
      | "readRect"
      | "readRect2d"
      | "readRect2f"
      | "readScalar"
      | "readSize"
      | "readSize2d"
      | "readSize2f"
      | "readSparseMat"
      | "readString"
      | "readVec2b"
      | "readVec2d"
      | "readVec2f"
      | "readVec2i"
      | "readVec2s"
      | "readVec2w"
      | "readVec3b"
      | "readVec3d"
      | "readVec3f"
      | "readVec3i"
      | "readVec3s"
      | "readVec3w"
      | "readVec4b"
      | "readVec4d"
      | "readVec4f"
      | "readVec4i"
      | "readVec4s"
      | "readVec4w"
      | "readVec6b"
      | "readVec6d"
      | "readVec6f"
      | "readVec6i"
      | "readVec6s"
      | "readVec6w"
      | "size"
      | "toDouble"
      | "toInt32"
      | "toMat"
      | "toSingle"
      | "toString"
      | "type"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    System.Collections.IEnumerableInput {
  readonly [fileNodeBrand]: true;
  toInt32(): number;
  toSingle(): number;
  toDouble(): number;
  toString(): string;
  toMat(): OpenCvSharp.Mat;
  item: {
    (nodeName: string): OpenCvSharp.FileNode;
    get(nodeName: string): OpenCvSharp.FileNode;
    (i: number | StrongNumeric<Int32Host>): OpenCvSharp.FileNode;
    get(i: number | StrongNumeric<Int32Host>): OpenCvSharp.FileNode;
  };
  readonly empty: boolean;
  readonly isNone: boolean;
  readonly isSeq: boolean;
  readonly isMap: boolean;
  readonly isInt: boolean;
  readonly isReal: boolean;
  readonly isString: boolean;
  readonly isNamed: boolean;
  readonly name: string;
  readonly size: number;
  readonly type: FileNode_Types;
  begin(): OpenCvSharp.FileNodeIterator;
  end(): OpenCvSharp.FileNodeIterator;
  getEnumerator(): System.Collections.Generic.IEnumerator<OpenCvSharp.FileNode>;
  readRaw(fmt: string, vec: System.IntPtr, len: number | StrongNumeric<Int64Host>): VoidResult;
  readInt(): number;
  readInt(defaultValue: number | StrongNumeric<Int32Host>): number;
  readFloat(): number;
  readFloat(defaultValue: number | StrongNumeric<SingleHost>): number;
  readDouble(): number;
  readDouble(defaultValue: number | StrongNumeric<DoubleHost>): number;
  readString(): string;
  readString(defaultValue: string | null): string;
  readMat(): OpenCvSharp.Mat;
  readMat(defaultMat: OpenCvSharp.Mat | null): OpenCvSharp.Mat;
  readSparseMat(): OpenCvSharp.SparseMat;
  readSparseMat(defaultMat: OpenCvSharp.SparseMat | null): OpenCvSharp.SparseMat;
  readKeyPoints(): HostArray<OpenCvSharp.KeyPoint>;
  readDMatches(): HostArray<OpenCvSharp.DMatch>;
  readRange(): OpenCvSharp.Range;
  readKeyPoint(): OpenCvSharp.KeyPoint;
  readDMatch(): OpenCvSharp.DMatch;
  readPoint(): OpenCvSharp.Point;
  readPoint2f(): OpenCvSharp.Point2f;
  readPoint2d(): OpenCvSharp.Point2d;
  readPoint3i(): OpenCvSharp.Point3i;
  readPoint3f(): OpenCvSharp.Point3f;
  readPoint3d(): OpenCvSharp.Point3d;
  readSize(): OpenCvSharp.Size;
  readSize2f(): OpenCvSharp.Size2f;
  readSize2d(): OpenCvSharp.Size2d;
  readRect(): OpenCvSharp.Rect;
  readRect2f(): OpenCvSharp.Rect2f;
  readRect2d(): OpenCvSharp.Rect2d;
  readScalar(): OpenCvSharp.Scalar;
  readVec2i(): OpenCvSharp.Vec2i;
  readVec3i(): OpenCvSharp.Vec3i;
  readVec4i(): OpenCvSharp.Vec4i;
  readVec6i(): OpenCvSharp.Vec6i;
  readVec2d(): OpenCvSharp.Vec2d;
  readVec3d(): OpenCvSharp.Vec3d;
  readVec4d(): OpenCvSharp.Vec4d;
  readVec6d(): OpenCvSharp.Vec6d;
  readVec2f(): OpenCvSharp.Vec2f;
  readVec3f(): OpenCvSharp.Vec3f;
  readVec4f(): OpenCvSharp.Vec4f;
  readVec6f(): OpenCvSharp.Vec6f;
  readVec2b(): OpenCvSharp.Vec2b;
  readVec3b(): OpenCvSharp.Vec3b;
  readVec4b(): OpenCvSharp.Vec4b;
  readVec6b(): OpenCvSharp.Vec6b;
  readVec2s(): OpenCvSharp.Vec2s;
  readVec3s(): OpenCvSharp.Vec3s;
  readVec4s(): OpenCvSharp.Vec4s;
  readVec6s(): OpenCvSharp.Vec6s;
  readVec2w(): OpenCvSharp.Vec2w;
  readVec3w(): OpenCvSharp.Vec3w;
  readVec4w(): OpenCvSharp.Vec4w;
  readVec6w(): OpenCvSharp.Vec6w;
}

declare const fileNode_TypesBrand: unique symbol;
export interface FileNode_Types extends ClrHostValue {
  readonly [fileNode_TypesBrand]: true;
}

export interface FileNode_TypesHostType extends HostType<FileNode_Types, EnumTypeTrait> {
  readonly none: FileNode_Types;
  readonly int: FileNode_Types;
  readonly real: FileNode_Types;
  readonly float: FileNode_Types;
  readonly str: FileNode_Types;
  readonly string: FileNode_Types;
  readonly seq: FileNode_Types;
  readonly map: FileNode_Types;
  readonly typeMask: FileNode_Types;
  readonly flow: FileNode_Types;
  readonly uniform: FileNode_Types;
  readonly empty: FileNode_Types;
  readonly named: FileNode_Types;
}

declare global {
  namespace OpenCvSharp.FileNode {
    type Types = import("./FileNode").FileNode_Types;
  }
}

declare global {
  namespace OpenCvSharp {
    type FileNode = import("./FileNode").FileNode;
  }
}

export interface FileNodeHostType extends HostType<
  FileNode,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): FileNode;
  new (ptr: System.IntPtr): FileNode;
  readonly Types: FileNode_TypesHostType;
}

export {};
