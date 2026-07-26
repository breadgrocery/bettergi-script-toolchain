import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "./MatExpr";

declare const matExprRowColIndexerBrand: unique symbol;
export interface MatExprRowColIndexer extends ClrHostValue {
  readonly [matExprRowColIndexerBrand]: true;
  item: {
    (pos: number | StrongNumeric<Int32Host>): OpenCvSharp.MatExpr;
    get(pos: number | StrongNumeric<Int32Host>): OpenCvSharp.MatExpr;
  };
  get(pos: number | StrongNumeric<Int32Host>): OpenCvSharp.MatExpr;
}

declare global {
  namespace OpenCvSharp {
    type MatExprRowColIndexer = import("./MatExprRowColIndexer").MatExprRowColIndexer;
  }
}

export interface MatExprRowColIndexerHostType extends HostType<
  MatExprRowColIndexer,
  ReferenceTypeTrait
> {}

export {};
