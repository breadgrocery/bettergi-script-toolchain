import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../ICloneable";
import "../IDisposable";
import "../MarshalByRefObject";

declare const brushBrand: unique symbol;
export interface Brush
  extends
    Omit<System.MarshalByRefObject, "clone" | "dispose">,
    System.ICloneableInput,
    System.IDisposableInput {
  readonly [brushBrand]: true;
  clone(): unknown;
  dispose(): VoidResult;
}

declare global {
  namespace System.Drawing {
    type Brush = import("./Brush").Brush;
  }
}

export interface BrushHostType extends HostType<Brush, ReferenceTypeTrait> {}

export {};
