import type { EnumInput, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./DescriptorMatcher";
import "./ICvPtrHolder";
import "./NormTypes";

declare const bFMatcherBrand: unique symbol;
export interface BFMatcher
  extends
    Omit<OpenCvSharp.DescriptorMatcher, "isMaskSupported">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [bFMatcherBrand]: true;
  isMaskSupported(): boolean;
}

declare global {
  namespace OpenCvSharp {
    type BFMatcher = import("./BFMatcher").BFMatcher;
  }
}

export interface BFMatcherHostType extends HostType<BFMatcher, ReferenceTypeTrait> {
  new (): BFMatcher;
  new (normType: EnumInput<OpenCvSharp.NormTypes>): BFMatcher;
  new (normType: EnumInput<OpenCvSharp.NormTypes>, crossCheck: boolean): BFMatcher;
}

export {};
