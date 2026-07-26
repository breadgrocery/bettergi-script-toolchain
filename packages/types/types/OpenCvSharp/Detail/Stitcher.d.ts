import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const blenderBrand: unique symbol;
export interface Blender extends ClrHostValue {
  readonly [blenderBrand]: true;
}

declare global {
  namespace OpenCvSharp.Detail {
    type Blender = import("./Stitcher").Blender;
  }
}

export interface BlenderHostType extends HostType<
  Blender,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): Blender;
}

declare const bundleAdjusterBaseBrand: unique symbol;
export interface BundleAdjusterBase extends ClrHostValue {
  readonly [bundleAdjusterBaseBrand]: true;
}

declare global {
  namespace OpenCvSharp.Detail {
    type BundleAdjusterBase = import("./Stitcher").BundleAdjusterBase;
  }
}

export interface BundleAdjusterBaseHostType extends HostType<
  BundleAdjusterBase,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): BundleAdjusterBase;
}

declare const cameraParamsBrand: unique symbol;
export interface CameraParams extends ClrHostValue {
  readonly [cameraParamsBrand]: true;
}

declare global {
  namespace OpenCvSharp.Detail {
    type CameraParams = import("./Stitcher").CameraParams;
  }
}

export interface CameraParamsHostType extends HostType<
  CameraParams,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): CameraParams;
}

declare const exposureCompensatorBrand: unique symbol;
export interface ExposureCompensator extends ClrHostValue {
  readonly [exposureCompensatorBrand]: true;
}

declare global {
  namespace OpenCvSharp.Detail {
    type ExposureCompensator = import("./Stitcher").ExposureCompensator;
  }
}

export interface ExposureCompensatorHostType extends HostType<
  ExposureCompensator,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ExposureCompensator;
}

declare const featuresFinderBrand: unique symbol;
export interface FeaturesFinder extends ClrHostValue {
  readonly [featuresFinderBrand]: true;
}

declare global {
  namespace OpenCvSharp.Detail {
    type FeaturesFinder = import("./Stitcher").FeaturesFinder;
  }
}

export interface FeaturesFinderHostType extends HostType<
  FeaturesFinder,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): FeaturesFinder;
}

declare const seamFinderBrand: unique symbol;
export interface SeamFinder extends ClrHostValue {
  readonly [seamFinderBrand]: true;
}

declare global {
  namespace OpenCvSharp.Detail {
    type SeamFinder = import("./Stitcher").SeamFinder;
  }
}

export interface SeamFinderHostType extends HostType<
  SeamFinder,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): SeamFinder;
}

declare const warperCreatorBrand: unique symbol;
export interface WarperCreator extends ClrHostValue {
  readonly [warperCreatorBrand]: true;
}

declare global {
  namespace OpenCvSharp.Detail {
    type WarperCreator = import("./Stitcher").WarperCreator;
  }
}

export interface WarperCreatorHostType extends HostType<
  WarperCreator,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): WarperCreator;
}

declare const waveCorrectKindBrand: unique symbol;
export interface WaveCorrectKind extends ClrHostValue {
  readonly [waveCorrectKindBrand]: true;
}

declare global {
  namespace OpenCvSharp.Detail {
    type WaveCorrectKind = import("./Stitcher").WaveCorrectKind;
  }
}

export interface WaveCorrectKindHostType extends HostType<WaveCorrectKind, EnumTypeTrait> {
  readonly horizontal: WaveCorrectKind;
  readonly vertical: WaveCorrectKind;
}

export {};
