import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../ICloneable";
import "../../IDisposable";
import "../Color";
import "../Drawing2D/WrapMode";
import "./ColorAdjustType";
import "./ColorChannelFlag";
import "./ColorMap";
import "./ColorMatrix";
import "./ColorMatrixFlag";
import "./ColorPalette";

declare const imageAttributesBrand: unique symbol;
export interface ImageAttributes
  extends ClrHostValue, System.ICloneableInput, System.IDisposableInput {
  readonly [imageAttributesBrand]: true;
  clearBrushRemapTable(): VoidResult;
  clearColorKey(): VoidResult;
  clearColorKey(type: EnumInput<System.Drawing.Imaging.ColorAdjustType>): VoidResult;
  clearColorMatrix(): VoidResult;
  clearColorMatrix(type: EnumInput<System.Drawing.Imaging.ColorAdjustType>): VoidResult;
  clearGamma(): VoidResult;
  clearGamma(type: EnumInput<System.Drawing.Imaging.ColorAdjustType>): VoidResult;
  clearNoOp(): VoidResult;
  clearNoOp(type: EnumInput<System.Drawing.Imaging.ColorAdjustType>): VoidResult;
  clearOutputChannel(): VoidResult;
  clearOutputChannel(type: EnumInput<System.Drawing.Imaging.ColorAdjustType>): VoidResult;
  clearOutputChannelColorProfile(): VoidResult;
  clearOutputChannelColorProfile(
    type: EnumInput<System.Drawing.Imaging.ColorAdjustType>
  ): VoidResult;
  clearRemapTable(): VoidResult;
  clearRemapTable(type: EnumInput<System.Drawing.Imaging.ColorAdjustType>): VoidResult;
  clearThreshold(): VoidResult;
  clearThreshold(type: EnumInput<System.Drawing.Imaging.ColorAdjustType>): VoidResult;
  clone(): unknown;
  dispose(): VoidResult;
  getAdjustedPalette(
    palette: System.Drawing.Imaging.ColorPalette,
    type: EnumInput<System.Drawing.Imaging.ColorAdjustType>
  ): VoidResult;
  setBrushRemapTable(...map: System.Drawing.Imaging.ColorMap[]): VoidResult;
  setBrushRemapTable(map: HostArray<System.Drawing.Imaging.ColorMap>): VoidResult;
  setColorKey(colorLow: System.Drawing.Color, colorHigh: System.Drawing.Color): VoidResult;
  setColorKey(
    colorLow: System.Drawing.Color,
    colorHigh: System.Drawing.Color,
    type: EnumInput<System.Drawing.Imaging.ColorAdjustType>
  ): VoidResult;
  setColorMatrices(
    newColorMatrix: System.Drawing.Imaging.ColorMatrix,
    grayMatrix: System.Drawing.Imaging.ColorMatrix | null
  ): VoidResult;
  setColorMatrices(
    newColorMatrix: System.Drawing.Imaging.ColorMatrix,
    grayMatrix: System.Drawing.Imaging.ColorMatrix | null,
    flags: EnumInput<System.Drawing.Imaging.ColorMatrixFlag>
  ): VoidResult;
  setColorMatrices(
    newColorMatrix: System.Drawing.Imaging.ColorMatrix,
    grayMatrix: System.Drawing.Imaging.ColorMatrix | null,
    mode: EnumInput<System.Drawing.Imaging.ColorMatrixFlag>,
    type: EnumInput<System.Drawing.Imaging.ColorAdjustType>
  ): VoidResult;
  setColorMatrix(newColorMatrix: System.Drawing.Imaging.ColorMatrix): VoidResult;
  setColorMatrix(
    newColorMatrix: System.Drawing.Imaging.ColorMatrix,
    flags: EnumInput<System.Drawing.Imaging.ColorMatrixFlag>
  ): VoidResult;
  setColorMatrix(
    newColorMatrix: System.Drawing.Imaging.ColorMatrix,
    mode: EnumInput<System.Drawing.Imaging.ColorMatrixFlag>,
    type: EnumInput<System.Drawing.Imaging.ColorAdjustType>
  ): VoidResult;
  setGamma(gamma: number | StrongNumeric<SingleHost>): VoidResult;
  setGamma(
    gamma: number | StrongNumeric<SingleHost>,
    type: EnumInput<System.Drawing.Imaging.ColorAdjustType>
  ): VoidResult;
  setNoOp(): VoidResult;
  setNoOp(type: EnumInput<System.Drawing.Imaging.ColorAdjustType>): VoidResult;
  setOutputChannel(flags: EnumInput<System.Drawing.Imaging.ColorChannelFlag>): VoidResult;
  setOutputChannel(
    flags: EnumInput<System.Drawing.Imaging.ColorChannelFlag>,
    type: EnumInput<System.Drawing.Imaging.ColorAdjustType>
  ): VoidResult;
  setOutputChannelColorProfile(colorProfileFilename: string): VoidResult;
  setOutputChannelColorProfile(
    colorProfileFilename: string,
    type: EnumInput<System.Drawing.Imaging.ColorAdjustType>
  ): VoidResult;
  setRemapTable(...map: System.Drawing.Imaging.ColorMap[]): VoidResult;
  setRemapTable(map: HostArray<System.Drawing.Imaging.ColorMap>): VoidResult;
  setRemapTable(
    map: HostArray<System.Drawing.Imaging.ColorMap>,
    type: EnumInput<System.Drawing.Imaging.ColorAdjustType>
  ): VoidResult;
  setThreshold(threshold: number | StrongNumeric<SingleHost>): VoidResult;
  setThreshold(
    threshold: number | StrongNumeric<SingleHost>,
    type: EnumInput<System.Drawing.Imaging.ColorAdjustType>
  ): VoidResult;
  setWrapMode(mode: EnumInput<System.Drawing.Drawing2D.WrapMode>): VoidResult;
  setWrapMode(
    mode: EnumInput<System.Drawing.Drawing2D.WrapMode>,
    color: System.Drawing.Color
  ): VoidResult;
  setWrapMode(
    mode: EnumInput<System.Drawing.Drawing2D.WrapMode>,
    color: System.Drawing.Color,
    clamp: boolean
  ): VoidResult;
}

declare global {
  namespace System.Drawing.Imaging {
    type ImageAttributes = import("./ImageAttributes").ImageAttributes;
  }
}

export interface ImageAttributesHostType extends HostType<
  ImageAttributes,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ImageAttributes;
}

export {};
