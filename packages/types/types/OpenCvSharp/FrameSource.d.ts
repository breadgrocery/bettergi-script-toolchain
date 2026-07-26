import type {
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./OutputArray";

declare const frameSourceBrand: unique symbol;
export interface FrameSource
  extends
    Omit<OpenCvSharp.DisposableCvObject, "nextFrame" | "reset">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [frameSourceBrand]: true;
  nextFrame(frame: OpenCvSharp.OutputArray): VoidResult;
  reset(): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type FrameSource = import("./FrameSource").FrameSource;
  }
}

export interface FrameSourceHostType extends HostType<
  FrameSource,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): FrameSource;
  createFrameSource_Empty(): OpenCvSharp.FrameSource;
  createFrameSource_Video(fileName: string): OpenCvSharp.FrameSource;
  createFrameSource_Video_CUDA(fileName: string): OpenCvSharp.FrameSource;
  createFrameSource_Camera(deviceId: number | StrongNumeric<Int32Host>): OpenCvSharp.FrameSource;
}

export {};
