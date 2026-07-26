import type {
  CharHost,
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
import "../System/IDisposable";
import "./DisposableCvObject";
import "./FourCC";
import "./ICvPtrHolder";
import "./InputArray";
import "./Size";
import "./VideoCaptureAPIs";
import "./VideoWriterPara";
import "./VideoWriterProperties";

declare const videoWriterBrand: unique symbol;
export interface VideoWriter
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "fileName"
      | "fps"
      | "frameSize"
      | "get"
      | "getBackendName"
      | "isColor"
      | "isOpened"
      | "open"
      | "release"
      | "set"
      | "write"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [videoWriterBrand]: true;
  readonly fileName: string;
  readonly fps: number;
  readonly frameSize: OpenCvSharp.Size;
  readonly isColor: boolean;
  open(
    fileName: string,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size
  ): boolean;
  open(
    fileName: string,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    isColor: boolean
  ): boolean;
  open(
    fileName: string,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size
  ): boolean;
  open(
    fileName: string,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    isColor: boolean
  ): boolean;
  isOpened(): boolean;
  release(): VoidResult;
  write(image: OpenCvSharp.InputArray): VoidResult;
  set(
    propId: EnumInput<OpenCvSharp.VideoWriterProperties>,
    value: number | StrongNumeric<DoubleHost>
  ): boolean;
  get(propId: EnumInput<OpenCvSharp.VideoWriterProperties>): number;
  getBackendName(): string;
}

declare global {
  namespace OpenCvSharp {
    type VideoWriter = import("./VideoWriter").VideoWriter;
  }
}

export interface VideoWriterHostType extends HostType<
  VideoWriter,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): VideoWriter;
  new (
    fileName: string,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size
  ): VideoWriter;
  new (
    fileName: string,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    isColor: boolean
  ): VideoWriter;
  new (
    fileName: string,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size
  ): VideoWriter;
  new (
    fileName: string,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    isColor: boolean
  ): VideoWriter;
  new (
    fileName: string,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    prms: HostArray<number | StrongNumeric<Int32Host>>
  ): VideoWriter;
  new (
    fileName: string,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    prms: OpenCvSharp.VideoWriterPara
  ): VideoWriter;
  new (
    fileName: string,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    prms: HostArray<number | StrongNumeric<Int32Host>>
  ): VideoWriter;
  new (
    fileName: string,
    apiPreference: EnumInput<OpenCvSharp.VideoCaptureAPIs>,
    fourcc: OpenCvSharp.FourCC,
    fps: number | StrongNumeric<DoubleHost>,
    frameSize: OpenCvSharp.Size,
    prms: OpenCvSharp.VideoWriterPara
  ): VideoWriter;
  fourCC(
    c1: number | StrongNumeric<CharHost>,
    c2: number | StrongNumeric<CharHost>,
    c3: number | StrongNumeric<CharHost>,
    c4: number | StrongNumeric<CharHost>
  ): number;
  fourCC(code: string): number;
}

export {};
