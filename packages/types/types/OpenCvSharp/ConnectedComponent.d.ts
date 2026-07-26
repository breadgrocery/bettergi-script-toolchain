import type {
  ClrHostValue,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/Collections/Generic/IReadOnlyList";
import "./Internal/Util/ReadOnlyArray2D";
import "./Mat";
import "./Point2d";
import "./Rect";

declare const connectedComponentsBrand: unique symbol;
export interface ConnectedComponents extends ClrHostValue {
  readonly [connectedComponentsBrand]: true;
  readonly blobs: System.Collections.Generic.IReadOnlyList<ConnectedComponents_Blob>;
  readonly labels: OpenCvSharp.Internal.Util.ReadOnlyArray2D<number>;
  readonly labelCount: number;
  filterByLabel(
    src: OpenCvSharp.Mat,
    dst: OpenCvSharp.Mat,
    labelValue: number | StrongNumeric<Int32Host>
  ): VoidResult;
  filterByLabels(
    src: OpenCvSharp.Mat,
    dst: OpenCvSharp.Mat,
    labelValues: System.Collections.Generic.IEnumerable<number>
  ): VoidResult;
  filterByBlob(
    src: OpenCvSharp.Mat,
    dst: OpenCvSharp.Mat,
    blob: ConnectedComponents_Blob
  ): VoidResult;
  filterByBlobs(
    src: OpenCvSharp.Mat,
    dst: OpenCvSharp.Mat,
    blobs: System.Collections.Generic.IEnumerable<ConnectedComponents_Blob>
  ): VoidResult;
  renderBlobs(img: OpenCvSharp.Mat): VoidResult;
  getLargestBlob(): ConnectedComponents_Blob;
}

declare const connectedComponents_BlobBrand: unique symbol;
export interface ConnectedComponents_Blob extends ClrHostValue {
  readonly [connectedComponents_BlobBrand]: true;
  readonly label: number;
  readonly centroid: OpenCvSharp.Point2d;
  readonly left: number;
  readonly top: number;
  readonly width: number;
  readonly height: number;
  readonly rect: OpenCvSharp.Rect;
  readonly area: number;
}

export interface ConnectedComponents_BlobHostType extends HostType<
  ConnectedComponents_Blob,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ConnectedComponents_Blob;
}

declare global {
  namespace OpenCvSharp.ConnectedComponents {
    type Blob = import("./ConnectedComponent").ConnectedComponents_Blob;
  }
}

declare global {
  namespace OpenCvSharp {
    type ConnectedComponents = import("./ConnectedComponent").ConnectedComponents;
  }
}

export interface ConnectedComponentsHostType extends HostType<
  ConnectedComponents,
  ReferenceTypeTrait
> {
  readonly Blob: ConnectedComponents_BlobHostType;
}

export {};
