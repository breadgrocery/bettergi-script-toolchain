import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./GeneralizedHough";
import "./ICvPtrHolder";

declare const generalizedHoughBallardBrand: unique symbol;
export interface GeneralizedHoughBallard
  extends
    Omit<OpenCvSharp.GeneralizedHough, "levels" | "votesThreshold">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [generalizedHoughBallardBrand]: true;
  levels: number;
  votesThreshold: number;
}

declare global {
  namespace OpenCvSharp {
    type GeneralizedHoughBallard = import("./GeneralizedHoughBallard").GeneralizedHoughBallard;
  }
}

export interface GeneralizedHoughBallardHostType extends HostType<
  GeneralizedHoughBallard,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.GeneralizedHoughBallard;
}

export {};
