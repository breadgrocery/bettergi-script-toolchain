import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { HostVariableRef } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./Mat";
import "./Rect";

declare const trackerBrand: unique symbol;
export interface Tracker
  extends
    Omit<OpenCvSharp.Algorithm, "init" | "update">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [trackerBrand]: true;
  init(image: OpenCvSharp.Mat, boundingBox: OpenCvSharp.Rect): VoidResult;
  update(image: OpenCvSharp.Mat, boundingBox: HostVariableRef<OpenCvSharp.Rect>): boolean;
}

declare global {
  namespace OpenCvSharp {
    type Tracker = import("./Tracker").Tracker;
  }
}

export interface TrackerHostType extends HostType<Tracker, ReferenceTypeTrait> {}

export {};
