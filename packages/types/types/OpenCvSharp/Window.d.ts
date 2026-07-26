import type {
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "../System/IntPtr";
import "./CvTrackbar";
import "./DisposableObject";
import "./Mat";
import "./MouseCallback";
import "./TrackbarCallback";
import "./UMat";
import "./WindowFlags";
import "./WindowPropertyFlags";

declare const windowBrand: unique symbol;
export interface Window
  extends
    Omit<
      OpenCvSharp.DisposableObject,
      | "close"
      | "createTrackbar"
      | "displayOverlay"
      | "displayStatusBar"
      | "getHandle"
      | "getProperty"
      | "image"
      | "move"
      | "name"
      | "resize"
      | "setMouseCallback"
      | "setProperty"
      | "showImage"
    >,
    System.IDisposableInput {
  readonly [windowBrand]: true;
  close(): VoidResult;
  image: OpenCvSharp.Mat;
  readonly name: string;
  createTrackbar(
    trackbarName: string,
    callback: OpenCvSharp.TrackbarCallback
  ): OpenCvSharp.CvTrackbar;
  createTrackbar(
    trackbarName: string,
    initialPos: number | StrongNumeric<Int32Host>,
    max: number | StrongNumeric<Int32Host>,
    callback: OpenCvSharp.TrackbarCallback
  ): OpenCvSharp.CvTrackbar;
  displayOverlay(text: string, delayMs: number | StrongNumeric<Int32Host>): VoidResult;
  displayStatusBar(text: string, delayms: number | StrongNumeric<Int32Host>): VoidResult;
  getProperty(propId: EnumInput<OpenCvSharp.WindowPropertyFlags>): number;
  move(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
  resize(
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  setProperty(
    propId: EnumInput<OpenCvSharp.WindowPropertyFlags>,
    propValue: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  showImage(img: OpenCvSharp.Mat | null): VoidResult;
  showImage(img: OpenCvSharp.UMat | null): VoidResult;
  getHandle(): System.IntPtr;
  setMouseCallback(onMouse: OpenCvSharp.MouseCallback): VoidResult;
  setMouseCallback(onMouse: OpenCvSharp.MouseCallback, userData: System.IntPtr): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type Window = import("./Window").Window;
  }
}

export interface WindowHostType extends HostType<
  Window,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): Window;
  new (name: string): Window;
  new (name: string): Window;
  new (name: string, flags: EnumInput<OpenCvSharp.WindowFlags>): Window;
  new (name: string, image: OpenCvSharp.Mat): Window;
  new (name: string): Window;
  new (name: string, image: OpenCvSharp.Mat | null): Window;
  new (
    name: string,
    image: OpenCvSharp.Mat | null,
    flags: EnumInput<OpenCvSharp.WindowFlags>
  ): Window;
  destroyAllWindows(): VoidResult;
  waitKey(): number;
  waitKey(delay: number | StrongNumeric<Int32Host>): number;
  waitKeyEx(): number;
  waitKeyEx(delay: number | StrongNumeric<Int32Host>): number;
  showImages(images: HostArray<OpenCvSharp.Mat>): VoidResult;
  showImages(...images: OpenCvSharp.Mat[]): VoidResult;
  showImages(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    names: System.Collections.Generic.IEnumerable<string>
  ): VoidResult;
  getWindowByName(name: string): OpenCvSharp.Window;
}

export {};
