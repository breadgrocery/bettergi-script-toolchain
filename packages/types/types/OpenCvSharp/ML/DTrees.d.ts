import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../../System/ValueType";
import "../ICvPtrHolder";
import "../Mat";
import "./StatModel";

declare const dTreesBrand: unique symbol;
export interface DTrees
  extends
    Omit<
      OpenCvSharp.ML.StatModel,
      | "cvFolds"
      | "getNodes"
      | "getRoots"
      | "getSplits"
      | "getSubsets"
      | "maxCategories"
      | "maxDepth"
      | "minSampleCount"
      | "priors"
      | "regressionAccuracy"
      | "truncatePrunedTree"
      | "use1SERule"
      | "useSurrogates"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [dTreesBrand]: true;
  maxCategories: number;
  maxDepth: number;
  minSampleCount: number;
  cvFolds: number;
  useSurrogates: boolean;
  use1SERule: boolean;
  truncatePrunedTree: boolean;
  regressionAccuracy: number;
  priors: OpenCvSharp.Mat;
  getRoots(): HostArray<number>;
  getNodes(): HostArray<DTrees_Node>;
  getSplits(): HostArray<DTrees_Split>;
  getSubsets(): HostArray<number>;
}

declare const dTrees_NodeBrand: unique symbol;
export interface DTrees_Node extends ClrHostValue {
  readonly [dTrees_NodeBrand]: true;
  value: number;
  classIdx: number;
  parent: number;
  left: number;
  right: number;
  defaultDir: number;
  split: number;
}

export interface DTrees_NodeHostType extends HostType<DTrees_Node, ValueTypeTrait> {}

declare global {
  namespace OpenCvSharp.ML.DTrees {
    type Node = import("./DTrees").DTrees_Node;
  }
}

declare const dTrees_SplitBrand: unique symbol;
export interface DTrees_Split extends ClrHostValue {
  readonly [dTrees_SplitBrand]: true;
  varIdx: number;
  inversed: number;
  quality: number;
  next: number;
  c: number;
  subsetOfs: number;
}

export interface DTrees_SplitHostType extends HostType<DTrees_Split, ValueTypeTrait> {}

declare global {
  namespace OpenCvSharp.ML.DTrees {
    type Split = import("./DTrees").DTrees_Split;
  }
}

declare global {
  namespace OpenCvSharp.ML {
    type DTrees = import("./DTrees").DTrees;
  }
}

export interface DTreesHostType extends HostType<DTrees, ReferenceTypeTrait> {
  create(): OpenCvSharp.ML.DTrees;
  load(filePath: string): OpenCvSharp.ML.DTrees;
  loadFromString(strModel: string): OpenCvSharp.ML.DTrees;
  readonly Node: DTrees_NodeHostType;
  readonly Split: DTrees_SplitHostType;
}

export {};
