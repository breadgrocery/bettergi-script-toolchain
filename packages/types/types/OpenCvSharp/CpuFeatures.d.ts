import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const cpuFeaturesBrand: unique symbol;
export interface CpuFeatures extends ClrHostValue {
  readonly [cpuFeaturesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type CpuFeatures = import("./CpuFeatures").CpuFeatures;
  }
}

export interface CpuFeaturesHostType extends HostType<CpuFeatures, EnumTypeTrait> {
  readonly mmx: CpuFeatures;
  readonly sse: CpuFeatures;
  readonly ssE2: CpuFeatures;
  readonly ssE3: CpuFeatures;
  readonly sssE3: CpuFeatures;
  readonly ssE4_1: CpuFeatures;
  readonly ssE4_2: CpuFeatures;
  readonly popcnt: CpuFeatures;
  readonly fP16: CpuFeatures;
  readonly avx: CpuFeatures;
  readonly avX2: CpuFeatures;
  readonly fmA3: CpuFeatures;
  readonly avX_512F: CpuFeatures;
  readonly avX_512BW: CpuFeatures;
  readonly avX_512CD: CpuFeatures;
  readonly avX_512DQ: CpuFeatures;
  readonly avX_512ER: CpuFeatures;
  readonly avX_512IFMA512: CpuFeatures;
  readonly avX_512IFMA: CpuFeatures;
  readonly avX_512PF: CpuFeatures;
  readonly avX_512VBMI: CpuFeatures;
  readonly avX_512VL: CpuFeatures;
  readonly avX_512VBMI2: CpuFeatures;
  readonly avX_512VNNI: CpuFeatures;
  readonly avX_512BITALG: CpuFeatures;
  readonly avX_512VPOPCNTDQ: CpuFeatures;
  readonly avX_5124VNNIW: CpuFeatures;
  readonly avX_5124FMAPS: CpuFeatures;
  readonly neon: CpuFeatures;
  readonly vsx: CpuFeatures;
  readonly vsX3: CpuFeatures;
  readonly avX512_SKX: CpuFeatures;
  readonly avX512_COMMON: CpuFeatures;
  readonly avX512_KNL: CpuFeatures;
  readonly avX512_KNM: CpuFeatures;
  readonly avX512_CNL: CpuFeatures;
  readonly avX512_CEL: CpuFeatures;
  readonly avX512_ICL: CpuFeatures;
  readonly maX_FEATURE: CpuFeatures;
}

export {};
