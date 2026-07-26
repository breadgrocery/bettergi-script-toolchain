import type {
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "../System/Nullable";
import "./BOWTrainer";
import "./ICvPtrHolder";
import "./KMeansFlags";
import "./Mat";
import "./TermCriteria";

declare const bOWKMeansTrainerBrand: unique symbol;
export interface BOWKMeansTrainer
  extends
    Omit<OpenCvSharp.BOWTrainer, "cluster">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [bOWKMeansTrainerBrand]: true;
  cluster(): OpenCvSharp.Mat;
  cluster(descriptors: OpenCvSharp.Mat): OpenCvSharp.Mat;
}

declare global {
  namespace OpenCvSharp {
    type BOWKMeansTrainer = import("./BOWKMeansTrainer").BOWKMeansTrainer;
  }
}

export interface BOWKMeansTrainerHostType extends HostType<BOWKMeansTrainer, ReferenceTypeTrait> {
  new (clusterCount: number | StrongNumeric<Int32Host>): BOWKMeansTrainer;
  new (
    clusterCount: number | StrongNumeric<Int32Host>,
    termcrit: OpenCvSharp.TermCriteria | null | null
  ): BOWKMeansTrainer;
  new (
    clusterCount: number | StrongNumeric<Int32Host>,
    termcrit: OpenCvSharp.TermCriteria | null | null,
    attempts: number | StrongNumeric<Int32Host>
  ): BOWKMeansTrainer;
  new (
    clusterCount: number | StrongNumeric<Int32Host>,
    termcrit: OpenCvSharp.TermCriteria | null | null,
    attempts: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.KMeansFlags>
  ): BOWKMeansTrainer;
}

export {};
