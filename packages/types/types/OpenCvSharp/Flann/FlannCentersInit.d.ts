import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const flannCentersInitBrand: unique symbol;
export interface FlannCentersInit extends ClrHostValue {
  readonly [flannCentersInitBrand]: true;
}

declare global {
  namespace OpenCvSharp.Flann {
    type FlannCentersInit = import("./FlannCentersInit").FlannCentersInit;
  }
}

export interface FlannCentersInitHostType extends HostType<FlannCentersInit, EnumTypeTrait> {
  readonly random: FlannCentersInit;
  readonly gonzales: FlannCentersInit;
  readonly kMeansPP: FlannCentersInit;
}

export {};
