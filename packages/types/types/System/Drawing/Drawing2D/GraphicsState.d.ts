import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../MarshalByRefObject";

declare const graphicsStateBrand: unique symbol;
export interface GraphicsState extends System.MarshalByRefObject {
  readonly [graphicsStateBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type GraphicsState = import("./GraphicsState").GraphicsState;
  }
}

export interface GraphicsStateHostType extends HostType<GraphicsState, ReferenceTypeTrait> {}

export {};
