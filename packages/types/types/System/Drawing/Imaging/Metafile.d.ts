import type {
  ByteHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../ICloneable";
import "../../IDisposable";
import "../../IO/Stream";
import "../../IntPtr";
import "../../Runtime/Serialization/ISerializable";
import "../Image";
import "../Rectangle";
import "../RectangleF";
import "./EmfPlusRecordType";
import "./EmfType";
import "./MetafileFrameUnit";
import "./MetafileHeader";
import "./WmfPlaceableFileHeader";

declare const metafileBrand: unique symbol;
export interface Metafile
  extends
    Omit<System.Drawing.Image, "getHenhmetafile" | "getMetafileHeader" | "playRecord">,
    System.IDisposableInput,
    System.ICloneableInput,
    System.Runtime.Serialization.ISerializableInput {
  readonly [metafileBrand]: true;
  getHenhmetafile(): System.IntPtr;
  getMetafileHeader(): System.Drawing.Imaging.MetafileHeader;
  playRecord(
    recordType: EnumInput<System.Drawing.Imaging.EmfPlusRecordType>,
    flags: number | StrongNumeric<Int32Host>,
    dataSize: number | StrongNumeric<Int32Host>,
    data: HostArray<number | StrongNumeric<ByteHost>>
  ): VoidResult;
}

declare global {
  namespace System.Drawing.Imaging {
    type Metafile = import("./Metafile").Metafile;
  }
}

export interface MetafileHostType extends HostType<Metafile, ReferenceTypeTrait> {
  new (
    hmetafile: System.IntPtr,
    wmfHeader: System.Drawing.Imaging.WmfPlaceableFileHeader,
    deleteWmf: boolean
  ): Metafile;
  new (henhmetafile: System.IntPtr, deleteEmf: boolean): Metafile;
  new (filename: string): Metafile;
  new (referenceHdc: System.IntPtr, frameRect: System.Drawing.Rectangle): Metafile;
  new (referenceHdc: System.IntPtr, emfType: EnumInput<System.Drawing.Imaging.EmfType>): Metafile;
  new (referenceHdc: System.IntPtr, frameRect: System.Drawing.RectangleF): Metafile;
  new (
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>
  ): Metafile;
  new (
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>
  ): Metafile;
  new (
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>,
    description: string | null
  ): Metafile;
  new (
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>
  ): Metafile;
  new (
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>
  ): Metafile;
  new (fileName: string, referenceHdc: System.IntPtr): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    type: EnumInput<System.Drawing.Imaging.EmfType>
  ): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF
  ): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>
  ): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>
  ): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    desc: string | null
  ): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>,
    description: string | null
  ): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle
  ): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>
  ): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>
  ): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    description: string | null
  ): Metafile;
  new (stream: System.IO.Stream, referenceHdc: System.IntPtr): Metafile;
  new (
    stream: System.IO.Stream,
    referenceHdc: System.IntPtr,
    type: EnumInput<System.Drawing.Imaging.EmfType>
  ): Metafile;
  new (
    stream: System.IO.Stream,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF
  ): Metafile;
  new (
    stream: System.IO.Stream,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>
  ): Metafile;
  new (
    stream: System.IO.Stream,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>
  ): Metafile;
  new (
    stream: System.IO.Stream,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle
  ): Metafile;
  new (
    stream: System.IO.Stream,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>
  ): Metafile;
  new (
    stream: System.IO.Stream,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>
  ): Metafile;
  new (
    hmetafile: System.IntPtr,
    wmfHeader: System.Drawing.Imaging.WmfPlaceableFileHeader
  ): Metafile;
  new (stream: System.IO.Stream): Metafile;
  new (
    referenceHdc: System.IntPtr,
    emfType: EnumInput<System.Drawing.Imaging.EmfType>,
    description: string | null
  ): Metafile;
  new (
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>,
    desc: string | null
  ): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    type: EnumInput<System.Drawing.Imaging.EmfType>,
    description: string | null
  ): Metafile;
  new (
    fileName: string,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>,
    description: string | null
  ): Metafile;
  new (
    stream: System.IO.Stream,
    referenceHdc: System.IntPtr,
    type: EnumInput<System.Drawing.Imaging.EmfType>,
    description: string | null
  ): Metafile;
  new (
    stream: System.IO.Stream,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.RectangleF,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>,
    description: string | null
  ): Metafile;
  new (
    stream: System.IO.Stream,
    referenceHdc: System.IntPtr,
    frameRect: System.Drawing.Rectangle,
    frameUnit: EnumInput<System.Drawing.Imaging.MetafileFrameUnit>,
    type: EnumInput<System.Drawing.Imaging.EmfType>,
    description: string | null
  ): Metafile;
  getMetafileHeader(
    hmetafile: System.IntPtr,
    wmfHeader: System.Drawing.Imaging.WmfPlaceableFileHeader
  ): System.Drawing.Imaging.MetafileHeader;
  getMetafileHeader(henhmetafile: System.IntPtr): System.Drawing.Imaging.MetafileHeader;
  getMetafileHeader(fileName: string): System.Drawing.Imaging.MetafileHeader;
  getMetafileHeader(stream: System.IO.Stream): System.Drawing.Imaging.MetafileHeader;
}

export {};
