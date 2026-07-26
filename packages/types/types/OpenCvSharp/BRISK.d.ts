import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "./Feature2D";
import "./ICvPtrHolder";

declare const bRISKBrand: unique symbol;
export interface BRISK
  extends OpenCvSharp.Feature2D, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [bRISKBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type BRISK = import("./BRISK").BRISK;
  }
}

export interface BRISKHostType extends HostType<BRISK, ReferenceTypeTrait> {
  create(): OpenCvSharp.BRISK;
  create(thresh: number | StrongNumeric<Int32Host>): OpenCvSharp.BRISK;
  create(
    thresh: number | StrongNumeric<Int32Host>,
    octaves: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.BRISK;
  create(
    thresh: number | StrongNumeric<Int32Host>,
    octaves: number | StrongNumeric<Int32Host>,
    patternScale: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.BRISK;
  create(
    radiusList: System.Collections.Generic.IEnumerable<number>,
    numberList: System.Collections.Generic.IEnumerable<number>
  ): OpenCvSharp.BRISK;
  create(
    radiusList: System.Collections.Generic.IEnumerable<number>,
    numberList: System.Collections.Generic.IEnumerable<number>,
    dMax: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.BRISK;
  create(
    radiusList: System.Collections.Generic.IEnumerable<number>,
    numberList: System.Collections.Generic.IEnumerable<number>,
    dMax: number | StrongNumeric<SingleHost>,
    dMin: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.BRISK;
  create(
    radiusList: System.Collections.Generic.IEnumerable<number>,
    numberList: System.Collections.Generic.IEnumerable<number>,
    dMax: number | StrongNumeric<SingleHost>,
    dMin: number | StrongNumeric<SingleHost>,
    indexChange: System.Collections.Generic.IEnumerable<number> | null
  ): OpenCvSharp.BRISK;
  create(
    thresh: number | StrongNumeric<Int32Host>,
    octaves: number | StrongNumeric<Int32Host>,
    radiusList: System.Collections.Generic.IEnumerable<number>,
    numberList: System.Collections.Generic.IEnumerable<number>
  ): OpenCvSharp.BRISK;
  create(
    thresh: number | StrongNumeric<Int32Host>,
    octaves: number | StrongNumeric<Int32Host>,
    radiusList: System.Collections.Generic.IEnumerable<number>,
    numberList: System.Collections.Generic.IEnumerable<number>,
    dMax: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.BRISK;
  create(
    thresh: number | StrongNumeric<Int32Host>,
    octaves: number | StrongNumeric<Int32Host>,
    radiusList: System.Collections.Generic.IEnumerable<number>,
    numberList: System.Collections.Generic.IEnumerable<number>,
    dMax: number | StrongNumeric<SingleHost>,
    dMin: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.BRISK;
  create(
    thresh: number | StrongNumeric<Int32Host>,
    octaves: number | StrongNumeric<Int32Host>,
    radiusList: System.Collections.Generic.IEnumerable<number>,
    numberList: System.Collections.Generic.IEnumerable<number>,
    dMax: number | StrongNumeric<SingleHost>,
    dMin: number | StrongNumeric<SingleHost>,
    indexChange: System.Collections.Generic.IEnumerable<number> | null
  ): OpenCvSharp.BRISK;
}

export {};
