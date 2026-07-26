import type {
  ClrHostValue,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "./Vec4i";

declare const hierarchyIndexBrand: unique symbol;
export interface HierarchyIndex extends ClrHostValue {
  readonly [hierarchyIndexBrand]: true;
  next: number;
  previous: number;
  child: number;
  parent: number;
  toVec4i(): OpenCvSharp.Vec4i;
}

declare global {
  namespace OpenCvSharp {
    type HierarchyIndex = import("./HierarchyIndex").HierarchyIndex;
  }
}

export interface HierarchyIndexHostType extends HostType<
  HierarchyIndex,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): HierarchyIndex;
  new (
    next: number | StrongNumeric<Int32Host>,
    previous: number | StrongNumeric<Int32Host>,
    child: number | StrongNumeric<Int32Host>,
    parent: number | StrongNumeric<Int32Host>
  ): HierarchyIndex;
  fromVec4i(vec: OpenCvSharp.Vec4i): OpenCvSharp.HierarchyIndex;
}

export {};
