import type {
  ClrHostValue,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../OpenCvSharp/Point2f";
import type { MapMatchMethod, MapName } from "../Common/Map/MapScriptNames";
import "../Model/Area/ImageRegion";

/**
 * 导航实例，根据小地图截图定位当前位置
 * @since 0.48.0
 */
declare const navigationInstanceBrand: unique symbol;
export interface NavigationInstance extends ClrHostValue {
  readonly [navigationInstanceBrand]: true;
  /**
   * 重置上一帧位置缓存
   * @returns ClearScript 宿主空结果
   * @since 0.48.0
   */
  reset(): VoidResult;
  /**
   * 设置上一帧位置
   * @param x 地图横坐标
   * @param y 地图纵坐标
   * @returns ClearScript 宿主空结果
   * @since 0.48.0
   */
  setPrevPosition(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>
  ): VoidResult;
  /**
   * 获取当前位置坐标
   * @param imageRegion 含小地图的图像区域
   * @param mapName 地图名称
   * @param mapMatchMethod 地图匹配方式
   * @since 0.48.0
   */
  getPosition(
    imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    mapName: MapName,
    mapMatchMethod: MapMatchMethod
  ): OpenCvSharp.Point2f;
  /**
   * 稳定获取当前位置坐标，优先全地图匹配，适用于不要求高效率但需要高稳定性的场景
   * @param imageRegion 含小地图的图像区域
   * @param mapName 地图名称
   * @param mapMatchMethod 地图匹配方式
   * @returns 当前位置坐标
   * @since 0.48.0
   */
  getPositionStable(
    imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    mapName: MapName,
    mapMatchMethod: MapMatchMethod
  ): OpenCvSharp.Point2f;
  /**
   * 在缓存有效期内复用上一稳定定位结果
   * @param imageRegion 含小地图的图像区域
   * @param mapName 地图名称
   * @param mapMatchingMethod 地图匹配方式
   * @param cacheTimeMs 缓存有效期（毫秒），默认 900
   * @since 0.48.0
   */
  getPositionStableByCache(
    imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    mapName: MapName,
    mapMatchingMethod: MapMatchMethod
  ): OpenCvSharp.Point2f;
  getPositionStableByCache(
    imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    mapName: MapName,
    mapMatchingMethod: MapMatchMethod,
    cacheTimeMs: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Point2f;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoPathing {
    type NavigationInstance = import("./NavigationInstance").NavigationInstance;
  }
}

export interface NavigationInstanceHostType extends HostType<
  NavigationInstance,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造导航实例
   * @since 0.48.0
   */
  new (): NavigationInstance;
}

export {};
