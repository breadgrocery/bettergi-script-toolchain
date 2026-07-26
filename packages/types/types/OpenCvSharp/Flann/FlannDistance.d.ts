import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const flannDistanceBrand: unique symbol;
export interface FlannDistance extends ClrHostValue {
  readonly [flannDistanceBrand]: true;
}

declare global {
  namespace OpenCvSharp.Flann {
    type FlannDistance = import("./FlannDistance").FlannDistance;
  }
}

export interface FlannDistanceHostType extends HostType<FlannDistance, EnumTypeTrait> {
  readonly euclidean: FlannDistance;
  readonly l2: FlannDistance;
  readonly manhattan: FlannDistance;
  readonly l1: FlannDistance;
  readonly minkowski: FlannDistance;
  readonly max: FlannDistance;
  readonly histIntersect: FlannDistance;
  readonly hellinger: FlannDistance;
  readonly chiSquare: FlannDistance;
  readonly cs: FlannDistance;
  readonly kullbackLeibler: FlannDistance;
  readonly kl: FlannDistance;
  readonly hamming: FlannDistance;
}

export {};
