import type {
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IDictionary";
import "../../System/Collections/Generic/IEnumerable";
import "./Formats/IImageFormat";
import "./Formats/IImageFormatConfigurationModule";
import "./Formats/ImageFormatManager";
import "./Memory/MemoryAllocator";
import "./ReadOrigin";

declare const configurationBrand: unique symbol;
export interface Configuration extends ClrHostValue {
  readonly [configurationBrand]: true;
  maxDegreeOfParallelism: number;
  streamProcessingBufferSize: number;
  preferContiguousImageBuffers: boolean;
  readonly properties: System.Collections.Generic.IDictionary<unknown, unknown>;
  readonly imageFormats: System.Collections.Generic.IEnumerable<SixLabors.ImageSharp.Formats.IImageFormat>;
  readOrigin: SixLabors.ImageSharp.ReadOrigin;
  readonly imageFormatsManager: SixLabors.ImageSharp.Formats.ImageFormatManager;
  memoryAllocator: SixLabors.ImageSharp.Memory.MemoryAllocator;
  configure(
    configuration: SixLabors.ImageSharp.Formats.IImageFormatConfigurationModule
  ): VoidResult;
  clone(): SixLabors.ImageSharp.Configuration;
}

declare global {
  namespace SixLabors.ImageSharp {
    type Configuration = import("./Configuration").Configuration;
  }
}

export interface ConfigurationHostType extends HostType<
  Configuration,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): Configuration;
  new (
    configurationModules: HostArray<SixLabors.ImageSharp.Formats.IImageFormatConfigurationModule>
  ): Configuration;
  new (
    ...configurationModules: SixLabors.ImageSharp.Formats.IImageFormatConfigurationModule[]
  ): Configuration;
  readonly default: SixLabors.ImageSharp.Configuration;
}

export {};
