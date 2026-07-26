import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../MarshalByRefObject";

declare const graphicsContainerBrand: unique symbol;
export interface GraphicsContainer extends System.MarshalByRefObject {
  readonly [graphicsContainerBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type GraphicsContainer = import("./GraphicsContainer").GraphicsContainer;
  }
}

export interface GraphicsContainerHostType extends HostType<
  GraphicsContainer,
  ReferenceTypeTrait
> {}

export {};
