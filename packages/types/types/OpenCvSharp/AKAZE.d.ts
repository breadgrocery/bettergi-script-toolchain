import type {
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./AKAZEDescriptorType";
import "./Feature2D";
import "./ICvPtrHolder";
import "./KAZEDiffusivityType";

declare const aKAZEBrand: unique symbol;
export interface AKAZE
  extends
    Omit<
      OpenCvSharp.Feature2D,
      | "akazeDescriptorChannels"
      | "akazeDescriptorSize"
      | "akazeDescriptorType"
      | "diffusivityType"
      | "nOctaveLayers"
      | "nOctaves"
      | "threshold"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [aKAZEBrand]: true;
  akazeDescriptorType: OpenCvSharp.AKAZEDescriptorType;
  akazeDescriptorSize: number;
  akazeDescriptorChannels: number;
  threshold: number;
  nOctaves: number;
  nOctaveLayers: number;
  diffusivityType: OpenCvSharp.KAZEDiffusivityType;
}

declare global {
  namespace OpenCvSharp {
    type AKAZE = import("./AKAZE").AKAZE;
  }
}

export interface AKAZEHostType extends HostType<AKAZE, ReferenceTypeTrait> {
  create(): OpenCvSharp.AKAZE;
  create(descriptorType: EnumInput<OpenCvSharp.AKAZEDescriptorType>): OpenCvSharp.AKAZE;
  create(
    descriptorType: EnumInput<OpenCvSharp.AKAZEDescriptorType>,
    descriptorSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.AKAZE;
  create(
    descriptorType: EnumInput<OpenCvSharp.AKAZEDescriptorType>,
    descriptorSize: number | StrongNumeric<Int32Host>,
    descriptorChannels: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.AKAZE;
  create(
    descriptorType: EnumInput<OpenCvSharp.AKAZEDescriptorType>,
    descriptorSize: number | StrongNumeric<Int32Host>,
    descriptorChannels: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.AKAZE;
  create(
    descriptorType: EnumInput<OpenCvSharp.AKAZEDescriptorType>,
    descriptorSize: number | StrongNumeric<Int32Host>,
    descriptorChannels: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<SingleHost>,
    nOctaves: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.AKAZE;
  create(
    descriptorType: EnumInput<OpenCvSharp.AKAZEDescriptorType>,
    descriptorSize: number | StrongNumeric<Int32Host>,
    descriptorChannels: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<SingleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.AKAZE;
  create(
    descriptorType: EnumInput<OpenCvSharp.AKAZEDescriptorType>,
    descriptorSize: number | StrongNumeric<Int32Host>,
    descriptorChannels: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<SingleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>,
    diffusivity: EnumInput<OpenCvSharp.KAZEDiffusivityType>
  ): OpenCvSharp.AKAZE;
}

export {};
