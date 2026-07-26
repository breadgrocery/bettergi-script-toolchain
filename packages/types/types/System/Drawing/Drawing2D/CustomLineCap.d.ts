import type {
  EnumInput,
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../ICloneable";
import "../../IDisposable";
import "../../MarshalByRefObject";
import "./GraphicsPath";
import "./LineCap";
import "./LineJoin";

declare const customLineCapBrand: unique symbol;
export interface CustomLineCap
  extends
    Omit<
      System.MarshalByRefObject,
      | "baseCap"
      | "baseInset"
      | "clone"
      | "dispose"
      | "getStrokeCaps"
      | "setStrokeCaps"
      | "strokeJoin"
      | "widthScale"
    >,
    System.ICloneableInput,
    System.IDisposableInput {
  readonly [customLineCapBrand]: true;
  baseCap: System.Drawing.Drawing2D.LineCap;
  baseInset: number;
  clone(): unknown;
  dispose(): VoidResult;
  getStrokeCaps(
    startCap: HostVariableOut<System.Drawing.Drawing2D.LineCap>,
    endCap: HostVariableOut<System.Drawing.Drawing2D.LineCap>
  ): VoidResult;
  setStrokeCaps(
    startCap: EnumInput<System.Drawing.Drawing2D.LineCap>,
    endCap: EnumInput<System.Drawing.Drawing2D.LineCap>
  ): VoidResult;
  strokeJoin: System.Drawing.Drawing2D.LineJoin;
  widthScale: number;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type CustomLineCap = import("./CustomLineCap").CustomLineCap;
  }
}

export interface CustomLineCapHostType extends HostType<CustomLineCap, ReferenceTypeTrait> {
  new (
    fillPath: System.Drawing.Drawing2D.GraphicsPath | null,
    strokePath: System.Drawing.Drawing2D.GraphicsPath | null
  ): CustomLineCap;
  new (
    fillPath: System.Drawing.Drawing2D.GraphicsPath | null,
    strokePath: System.Drawing.Drawing2D.GraphicsPath | null,
    baseCap: EnumInput<System.Drawing.Drawing2D.LineCap>
  ): CustomLineCap;
  new (
    fillPath: System.Drawing.Drawing2D.GraphicsPath | null,
    strokePath: System.Drawing.Drawing2D.GraphicsPath | null,
    baseCap: EnumInput<System.Drawing.Drawing2D.LineCap>,
    baseInset: number | StrongNumeric<SingleHost>
  ): CustomLineCap;
}

export {};
