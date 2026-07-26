import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IDisposable";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";
import "../ICvPtrHolder";
import "./DTrees";

declare const boostBrand: unique symbol;
export interface Boost
  extends
    Omit<OpenCvSharp.ML.DTrees, "boostType" | "weakCount" | "weightTrimRate">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [boostBrand]: true;
  boostType: Boost_Types;
  weakCount: number;
  weightTrimRate: number;
}

declare const boost_TypesBrand: unique symbol;
export interface Boost_Types extends ClrHostValue {
  readonly [boost_TypesBrand]: true;
}

export interface Boost_TypesHostType extends HostType<Boost_Types, EnumTypeTrait> {
  readonly discrete: Boost_Types;
  readonly real: Boost_Types;
  readonly logit: Boost_Types;
  readonly gentle: Boost_Types;
}

declare global {
  namespace OpenCvSharp.ML.Boost {
    type Types = import("./Boost").Boost_Types;
  }
}

declare global {
  namespace OpenCvSharp.ML {
    type Boost = import("./Boost").Boost;
  }
}

export interface BoostHostType extends HostType<Boost, ReferenceTypeTrait> {
  create(): OpenCvSharp.ML.Boost;
  load(filePath: string): OpenCvSharp.ML.Boost;
  loadFromString(strModel: string): OpenCvSharp.ML.Boost;
  readonly Types: Boost_TypesHostType;
}

export {};
