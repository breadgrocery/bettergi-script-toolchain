import type {
  ClrHostValue,
  EnumInput,
  EnumTypeTrait,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IDisposable";
import "../System/IFormattable";
import "../System/ISpanFormattable";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./Point2f";
import "./Rect";
import "./Vec4f";
import "./Vec6f";

declare const nextEdgeTypeBrand: unique symbol;
export interface NextEdgeType extends ClrHostValue {
  readonly [nextEdgeTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type NextEdgeType = import("./Subdiv2D").NextEdgeType;
  }
}

export interface NextEdgeTypeHostType extends HostType<NextEdgeType, EnumTypeTrait> {
  readonly nexT_AROUND_ORG: NextEdgeType;
  readonly nexT_AROUND_DST: NextEdgeType;
  readonly preV_AROUND_ORG: NextEdgeType;
  readonly preV_AROUND_DST: NextEdgeType;
  readonly nexT_AROUND_LEFT: NextEdgeType;
  readonly nexT_AROUND_RIGHT: NextEdgeType;
  readonly preV_AROUND_LEFT: NextEdgeType;
  readonly preV_AROUND_RIGHT: NextEdgeType;
}

declare const subdiv2DBrand: unique symbol;
export interface Subdiv2D
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "edgeDst"
      | "edgeOrg"
      | "findNearest"
      | "getEdge"
      | "getEdgeList"
      | "getLeadingEdgeList"
      | "getTriangleList"
      | "getVertex"
      | "getVoronoiFacetList"
      | "initDelaunay"
      | "insert"
      | "locate"
      | "nextEdge"
      | "release"
      | "rotateEdge"
      | "symEdge"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [subdiv2DBrand]: true;
  release(): VoidResult;
  initDelaunay(rect: OpenCvSharp.Rect): VoidResult;
  insert(pt: OpenCvSharp.Point2f): number;
  insert(ptVec: System.Collections.Generic.IEnumerable<OpenCvSharp.Point2f>): VoidResult;
  locate(
    pt: OpenCvSharp.Point2f,
    edge: HostVariableOut<number>,
    vertex: HostVariableOut<number>
  ): number;
  findNearest(pt: OpenCvSharp.Point2f, nearestPt: HostVariableOut<OpenCvSharp.Point2f>): number;
  getEdgeList(): HostArray<OpenCvSharp.Vec4f>;
  getLeadingEdgeList(): HostArray<number>;
  getTriangleList(): HostArray<OpenCvSharp.Vec6f>;
  getVoronoiFacetList(
    idx: System.Collections.Generic.IEnumerable<number> | null,
    facetList: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point2f>>>,
    facetCenters: HostVariableOut<HostArray<OpenCvSharp.Point2f>>
  ): VoidResult;
  getVertex(
    vertex: number | StrongNumeric<Int32Host>,
    firstEdge: HostVariableOut<number>
  ): OpenCvSharp.Point2f;
  getEdge(
    edge: number | StrongNumeric<Int32Host>,
    nextEdgeType: EnumInput<OpenCvSharp.NextEdgeType>
  ): number;
  nextEdge(edge: number | StrongNumeric<Int32Host>): number;
  rotateEdge(
    edge: number | StrongNumeric<Int32Host>,
    rotate: number | StrongNumeric<Int32Host>
  ): number;
  symEdge(edge: number | StrongNumeric<Int32Host>): number;
  edgeOrg(
    edge: number | StrongNumeric<Int32Host>,
    orgPt: HostVariableOut<OpenCvSharp.Point2f>
  ): number;
  edgeDst(
    edge: number | StrongNumeric<Int32Host>,
    dstPt: HostVariableOut<OpenCvSharp.Point2f>
  ): number;
}

declare global {
  namespace OpenCvSharp {
    type Subdiv2D = import("./Subdiv2D").Subdiv2D;
  }
}

export interface Subdiv2DHostType extends HostType<
  Subdiv2D,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): Subdiv2D;
  new (rect: OpenCvSharp.Rect): Subdiv2D;
  readonly ptloC_ERROR: number;
  readonly ptloC_OUTSIDE_RECT: number;
  readonly ptloC_INSIDE: number;
  readonly ptloC_VERTEX: number;
  readonly ptloC_ON_EDGE: number;
  readonly nexT_AROUND_ORG: number;
  readonly nexT_AROUND_DST: number;
  readonly preV_AROUND_ORG: number;
  readonly preV_AROUND_DST: number;
  readonly nexT_AROUND_LEFT: number;
  readonly nexT_AROUND_RIGHT: number;
  readonly preV_AROUND_LEFT: number;
  readonly preV_AROUND_RIGHT: number;
}

export {};
