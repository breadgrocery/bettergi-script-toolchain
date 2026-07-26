import type {
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IDisposable";
import "../MarshalByRefObject";
import "./FontStyle";
import "./Graphics";
import "./Text/FontCollection";
import "./Text/GenericFontFamilies";

declare const fontFamilyBrand: unique symbol;
export interface FontFamily
  extends
    Omit<
      System.MarshalByRefObject,
      | "dispose"
      | "equals"
      | "getCellAscent"
      | "getCellDescent"
      | "getEmHeight"
      | "getHashCode"
      | "getLineSpacing"
      | "getName"
      | "isStyleAvailable"
      | "name"
      | "toString"
    >,
    System.IDisposableInput {
  readonly [fontFamilyBrand]: true;
  dispose(): VoidResult;
  equals(obj: unknown | null): boolean;
  getCellAscent(style: EnumInput<System.Drawing.FontStyle>): number;
  getCellDescent(style: EnumInput<System.Drawing.FontStyle>): number;
  getEmHeight(style: EnumInput<System.Drawing.FontStyle>): number;
  getHashCode(): number;
  getLineSpacing(style: EnumInput<System.Drawing.FontStyle>): number;
  getName(language: number | StrongNumeric<Int32Host>): string;
  isStyleAvailable(style: EnumInput<System.Drawing.FontStyle>): boolean;
  readonly name: string;
  toString(): string;
}

declare global {
  namespace System.Drawing {
    type FontFamily = import("./FontFamily").FontFamily;
  }
}

export interface FontFamilyHostType extends HostType<FontFamily, ReferenceTypeTrait> {
  new (name: string): FontFamily;
  new (name: string, fontCollection: System.Drawing.Text.FontCollection | null): FontFamily;
  new (genericFamily: EnumInput<System.Drawing.Text.GenericFontFamilies>): FontFamily;
  readonly families: HostArray<System.Drawing.FontFamily>;
  readonly genericSansSerif: System.Drawing.FontFamily;
  readonly genericSerif: System.Drawing.FontFamily;
  readonly genericMonospace: System.Drawing.FontFamily;
  getFamilies(graphics: System.Drawing.Graphics): HostArray<System.Drawing.FontFamily>;
}

export {};
