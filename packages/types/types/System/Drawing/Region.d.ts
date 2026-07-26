import type {
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IDisposable";
import "../IntPtr";
import "../MarshalByRefObject";
import "./Drawing2D/GraphicsPath";
import "./Drawing2D/Matrix";
import "./Drawing2D/RegionData";
import "./Graphics";
import "./Point";
import "./PointF";
import "./Rectangle";
import "./RectangleF";

declare const regionBrand: unique symbol;
export interface Region
  extends
    Omit<
      System.MarshalByRefObject,
      | "clone"
      | "complement"
      | "dispose"
      | "equals"
      | "exclude"
      | "getBounds"
      | "getHrgn"
      | "getRegionData"
      | "getRegionScans"
      | "intersect"
      | "isEmpty"
      | "isInfinite"
      | "isVisible"
      | "makeEmpty"
      | "makeInfinite"
      | "releaseHrgn"
      | "transform"
      | "translate"
      | "union"
      | "xor"
    >,
    System.IDisposableInput {
  readonly [regionBrand]: true;
  isEmpty(g: System.Drawing.Graphics): boolean;
  dispose(): VoidResult;
  clone(): System.Drawing.Region;
  complement(path: System.Drawing.Drawing2D.GraphicsPath): VoidResult;
  complement(rect: System.Drawing.Rectangle): VoidResult;
  complement(rect: System.Drawing.RectangleF): VoidResult;
  complement(region: System.Drawing.Region): VoidResult;
  equals(region: System.Drawing.Region, g: System.Drawing.Graphics): boolean;
  exclude(path: System.Drawing.Drawing2D.GraphicsPath): VoidResult;
  exclude(rect: System.Drawing.Rectangle): VoidResult;
  exclude(rect: System.Drawing.RectangleF): VoidResult;
  exclude(region: System.Drawing.Region): VoidResult;
  getBounds(g: System.Drawing.Graphics): System.Drawing.RectangleF;
  getHrgn(g: System.Drawing.Graphics): System.IntPtr;
  getRegionData(): System.Drawing.Drawing2D.RegionData;
  getRegionScans(matrix: System.Drawing.Drawing2D.Matrix): HostArray<System.Drawing.RectangleF>;
  intersect(path: System.Drawing.Drawing2D.GraphicsPath): VoidResult;
  intersect(rect: System.Drawing.Rectangle): VoidResult;
  intersect(rect: System.Drawing.RectangleF): VoidResult;
  intersect(region: System.Drawing.Region): VoidResult;
  isInfinite(g: System.Drawing.Graphics): boolean;
  isVisible(point: System.Drawing.Point): boolean;
  isVisible(point: System.Drawing.Point, g: System.Drawing.Graphics | null): boolean;
  isVisible(point: System.Drawing.PointF): boolean;
  isVisible(point: System.Drawing.PointF, g: System.Drawing.Graphics | null): boolean;
  isVisible(rect: System.Drawing.Rectangle): boolean;
  isVisible(rect: System.Drawing.Rectangle, g: System.Drawing.Graphics | null): boolean;
  isVisible(rect: System.Drawing.RectangleF): boolean;
  isVisible(rect: System.Drawing.RectangleF, g: System.Drawing.Graphics | null): boolean;
  isVisible(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    g: System.Drawing.Graphics | null
  ): boolean;
  isVisible(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): boolean;
  isVisible(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    g: System.Drawing.Graphics | null
  ): boolean;
  isVisible(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): boolean;
  isVisible(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    g: System.Drawing.Graphics | null
  ): boolean;
  isVisible(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): boolean;
  isVisible(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    g: System.Drawing.Graphics | null
  ): boolean;
  makeEmpty(): VoidResult;
  makeInfinite(): VoidResult;
  releaseHrgn(regionHandle: System.IntPtr): VoidResult;
  transform(matrix: System.Drawing.Drawing2D.Matrix): VoidResult;
  translate(
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>
  ): VoidResult;
  translate(
    dx: number | StrongNumeric<SingleHost>,
    dy: number | StrongNumeric<SingleHost>
  ): VoidResult;
  union(path: System.Drawing.Drawing2D.GraphicsPath): VoidResult;
  union(rect: System.Drawing.Rectangle): VoidResult;
  union(rect: System.Drawing.RectangleF): VoidResult;
  union(region: System.Drawing.Region): VoidResult;
  xor(path: System.Drawing.Drawing2D.GraphicsPath): VoidResult;
  xor(rect: System.Drawing.Rectangle): VoidResult;
  xor(rect: System.Drawing.RectangleF): VoidResult;
  xor(region: System.Drawing.Region): VoidResult;
}

declare global {
  namespace System.Drawing {
    type Region = import("./Region").Region;
  }
}

export interface RegionHostType extends HostType<
  Region,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): Region;
  new (rect: System.Drawing.RectangleF): Region;
  new (rect: System.Drawing.Rectangle): Region;
  new (path: System.Drawing.Drawing2D.GraphicsPath): Region;
  new (rgnData: System.Drawing.Drawing2D.RegionData): Region;
  fromHrgn(hrgn: System.IntPtr): System.Drawing.Region;
}

export {};
