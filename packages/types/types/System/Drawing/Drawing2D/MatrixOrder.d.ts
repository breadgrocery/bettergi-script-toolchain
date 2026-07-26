import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const matrixOrderBrand: unique symbol;
export interface MatrixOrder extends ClrHostValue {
  readonly [matrixOrderBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type MatrixOrder = import("./MatrixOrder").MatrixOrder;
  }
}

export interface MatrixOrderHostType extends HostType<MatrixOrder, EnumTypeTrait> {
  readonly prepend: MatrixOrder;
  readonly append: MatrixOrder;
}

export {};
