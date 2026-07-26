import type {
  ByteHost,
  EnumInput,
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut, HostVariableRef } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../ICloneable";
import "../IDisposable";
import "../IntPtr";
import "../MarshalByRefObject";
import "../Runtime/Serialization/ISerializable";
import "./FontFamily";
import "./FontStyle";
import "./Graphics";
import "./GraphicsUnit";
import "./Interop/LOGFONT";

declare const fontBrand: unique symbol;
export interface Font
  extends
    Omit<
      System.MarshalByRefObject,
      | "bold"
      | "clone"
      | "dispose"
      | "equals"
      | "fontFamily"
      | "gdiCharSet"
      | "gdiVerticalFont"
      | "getHashCode"
      | "getHeight"
      | "height"
      | "isSystemFont"
      | "italic"
      | "name"
      | "originalFontName"
      | "size"
      | "sizeInPoints"
      | "strikeout"
      | "style"
      | "systemFontName"
      | "toHfont"
      | "toLogFont"
      | "toString"
      | "underline"
      | "unit"
    >,
    System.ICloneableInput,
    System.IDisposableInput,
    System.Runtime.Serialization.ISerializableInput {
  readonly [fontBrand]: true;
  clone(): unknown;
  dispose(): VoidResult;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  getHeight(): number;
  getHeight(dpi: number | StrongNumeric<SingleHost>): number;
  getHeight(graphics: System.Drawing.Graphics): number;
  readonly bold: boolean;
  readonly fontFamily: System.Drawing.FontFamily;
  readonly gdiCharSet: number;
  readonly gdiVerticalFont: boolean;
  readonly height: number;
  readonly isSystemFont: boolean;
  readonly italic: boolean;
  readonly name: string;
  readonly originalFontName: string;
  readonly size: number;
  readonly sizeInPoints: number;
  readonly strikeout: boolean;
  readonly style: System.Drawing.FontStyle;
  readonly systemFontName: string;
  readonly underline: boolean;
  readonly unit: System.Drawing.GraphicsUnit;
  toHfont(): System.IntPtr;
  toLogFont(logFont: HostVariableOut<System.Drawing.Interop.LOGFONT>): VoidResult;
  toLogFont(
    logFont: HostVariableOut<System.Drawing.Interop.LOGFONT>,
    graphics: System.Drawing.Graphics
  ): VoidResult;
  toLogFont(logFont: unknown): VoidResult;
  toLogFont(logFont: unknown, graphics: System.Drawing.Graphics): VoidResult;
  toString(): string;
}

declare global {
  namespace System.Drawing {
    type Font = import("./Font").Font;
  }
}

export interface FontHostType extends HostType<Font, ReferenceTypeTrait> {
  new (prototype: System.Drawing.Font, newStyle: EnumInput<System.Drawing.FontStyle>): Font;
  new (
    family: System.Drawing.FontFamily,
    emSize: number | StrongNumeric<SingleHost>,
    style: EnumInput<System.Drawing.FontStyle>,
    unit: EnumInput<System.Drawing.GraphicsUnit>
  ): Font;
  new (
    family: System.Drawing.FontFamily,
    emSize: number | StrongNumeric<SingleHost>,
    style: EnumInput<System.Drawing.FontStyle>,
    unit: EnumInput<System.Drawing.GraphicsUnit>,
    gdiCharSet: number | StrongNumeric<ByteHost>
  ): Font;
  new (
    family: System.Drawing.FontFamily,
    emSize: number | StrongNumeric<SingleHost>,
    style: EnumInput<System.Drawing.FontStyle>,
    unit: EnumInput<System.Drawing.GraphicsUnit>,
    gdiCharSet: number | StrongNumeric<ByteHost>,
    gdiVerticalFont: boolean
  ): Font;
  new (
    familyName: string,
    emSize: number | StrongNumeric<SingleHost>,
    style: EnumInput<System.Drawing.FontStyle>,
    unit: EnumInput<System.Drawing.GraphicsUnit>,
    gdiCharSet: number | StrongNumeric<ByteHost>
  ): Font;
  new (
    familyName: string,
    emSize: number | StrongNumeric<SingleHost>,
    style: EnumInput<System.Drawing.FontStyle>,
    unit: EnumInput<System.Drawing.GraphicsUnit>,
    gdiCharSet: number | StrongNumeric<ByteHost>,
    gdiVerticalFont: boolean
  ): Font;
  new (
    family: System.Drawing.FontFamily,
    emSize: number | StrongNumeric<SingleHost>,
    style: EnumInput<System.Drawing.FontStyle>
  ): Font;
  new (
    family: System.Drawing.FontFamily,
    emSize: number | StrongNumeric<SingleHost>,
    unit: EnumInput<System.Drawing.GraphicsUnit>
  ): Font;
  new (family: System.Drawing.FontFamily, emSize: number | StrongNumeric<SingleHost>): Font;
  new (
    familyName: string,
    emSize: number | StrongNumeric<SingleHost>,
    style: EnumInput<System.Drawing.FontStyle>,
    unit: EnumInput<System.Drawing.GraphicsUnit>
  ): Font;
  new (
    familyName: string,
    emSize: number | StrongNumeric<SingleHost>,
    style: EnumInput<System.Drawing.FontStyle>
  ): Font;
  new (
    familyName: string,
    emSize: number | StrongNumeric<SingleHost>,
    unit: EnumInput<System.Drawing.GraphicsUnit>
  ): Font;
  new (familyName: string, emSize: number | StrongNumeric<SingleHost>): Font;
  fromHfont(hfont: System.IntPtr): System.Drawing.Font;
  fromLogFont(lf: unknown): System.Drawing.Font;
  fromLogFont(logFont: HostVariableRef<System.Drawing.Interop.LOGFONT>): System.Drawing.Font;
  fromLogFont(
    logFont: HostVariableRef<System.Drawing.Interop.LOGFONT>,
    hdc: System.IntPtr
  ): System.Drawing.Font;
  fromLogFont(lf: unknown, hdc: System.IntPtr): System.Drawing.Font;
  fromHdc(hdc: System.IntPtr): System.Drawing.Font;
}

export {};
