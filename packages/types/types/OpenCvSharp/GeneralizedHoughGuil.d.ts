import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./GeneralizedHough";
import "./ICvPtrHolder";

declare const generalizedHoughGuilBrand: unique symbol;
export interface GeneralizedHoughGuil
  extends
    Omit<
      OpenCvSharp.GeneralizedHough,
      | "angleEpsilon"
      | "angleStep"
      | "angleThresh"
      | "levels"
      | "maxAngle"
      | "maxScale"
      | "minAngle"
      | "minScale"
      | "posThresh"
      | "scaleStep"
      | "scaleThresh"
      | "xi"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [generalizedHoughGuilBrand]: true;
  xi: number;
  levels: number;
  angleEpsilon: number;
  minAngle: number;
  maxAngle: number;
  angleStep: number;
  angleThresh: number;
  minScale: number;
  maxScale: number;
  scaleStep: number;
  scaleThresh: number;
  posThresh: number;
}

declare global {
  namespace OpenCvSharp {
    type GeneralizedHoughGuil = import("./GeneralizedHoughGuil").GeneralizedHoughGuil;
  }
}

export interface GeneralizedHoughGuilHostType extends HostType<
  GeneralizedHoughGuil,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.GeneralizedHoughGuil;
}

export {};
