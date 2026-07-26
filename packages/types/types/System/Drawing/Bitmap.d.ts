import type {
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../ICloneable";
import "../IDisposable";
import "../IO/Stream";
import "../IntPtr";
import "../Runtime/Serialization/ISerializable";
import "../V8SplitProxyHelpers";
import "./Color";
import "./Graphics";
import "./Image";
import "./Imaging/BitmapData";
import "./Imaging/ImageLockMode";
import "./Imaging/PixelFormat";
import "./Rectangle";
import "./RectangleF";
import "./Size";

declare const bitmapBrand: unique symbol;
export interface Bitmap
  extends
    Omit<
      System.Drawing.Image,
      | "clone"
      | "getHbitmap"
      | "getHicon"
      | "getPixel"
      | "lockBits"
      | "makeTransparent"
      | "setPixel"
      | "setResolution"
      | "unlockBits"
    >,
    System.IDisposableInput,
    System.ICloneableInput,
    System.Runtime.Serialization.ISerializableInput {
  readonly [bitmapBrand]: true;
  clone(
    rect: System.Drawing.Rectangle,
    format: EnumInput<System.Drawing.Imaging.PixelFormat>
  ): System.Drawing.Bitmap;
  clone(
    rect: System.Drawing.RectangleF,
    format: EnumInput<System.Drawing.Imaging.PixelFormat>
  ): System.Drawing.Bitmap;
  getHbitmap(): System.IntPtr;
  getHbitmap(background: System.Drawing.Color): System.IntPtr;
  getHicon(): System.IntPtr;
  getPixel(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): System.Drawing.Color;
  lockBits(
    rect: System.Drawing.Rectangle,
    flags: EnumInput<System.Drawing.Imaging.ImageLockMode>,
    format: EnumInput<System.Drawing.Imaging.PixelFormat>
  ): System.Drawing.Imaging.BitmapData;
  lockBits(
    rect: System.Drawing.Rectangle,
    flags: EnumInput<System.Drawing.Imaging.ImageLockMode>,
    format: EnumInput<System.Drawing.Imaging.PixelFormat>,
    bitmapData: System.Drawing.Imaging.BitmapData
  ): System.Drawing.Imaging.BitmapData;
  makeTransparent(): VoidResult;
  makeTransparent(transparentColor: System.Drawing.Color): VoidResult;
  setPixel(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    color: System.Drawing.Color
  ): VoidResult;
  setResolution(
    xDpi: number | StrongNumeric<SingleHost>,
    yDpi: number | StrongNumeric<SingleHost>
  ): VoidResult;
  unlockBits(bitmapdata: System.Drawing.Imaging.BitmapData): VoidResult;
}

declare global {
  namespace System.Drawing {
    type Bitmap = import("./Bitmap").Bitmap;
  }
}

export interface BitmapHostType extends HostType<Bitmap, ReferenceTypeTrait> {
  new (filename: string): Bitmap;
  new (filename: string, useIcm: boolean): Bitmap;
  new (stream: System.IO.Stream): Bitmap;
  new (stream: System.IO.Stream, useIcm: boolean): Bitmap;
  new (type: System.Type, resource: string): Bitmap;
  new (width: number | StrongNumeric<Int32Host>, height: number | StrongNumeric<Int32Host>): Bitmap;
  new (
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    g: System.Drawing.Graphics
  ): Bitmap;
  new (
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    stride: number | StrongNumeric<Int32Host>,
    format: EnumInput<System.Drawing.Imaging.PixelFormat>,
    scan0: System.IntPtr
  ): Bitmap;
  new (
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    format: EnumInput<System.Drawing.Imaging.PixelFormat>
  ): Bitmap;
  new (original: System.Drawing.Image): Bitmap;
  new (original: System.Drawing.Image, newSize: System.Drawing.Size): Bitmap;
  new (
    original: System.Drawing.Image,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): Bitmap;
  fromHicon(hicon: System.IntPtr): System.Drawing.Bitmap;
  fromResource(hinstance: System.IntPtr, bitmapName: string): System.Drawing.Bitmap;
}

export {};
