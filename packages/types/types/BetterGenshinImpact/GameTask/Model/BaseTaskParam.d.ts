import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../Microsoft/Extensions/Localization/IStringLocalizer";
import "../../../System/Globalization/CultureInfo";

/**
 * 独立任务参数基类，提供游戏语言与本地化资源访问
 * @since 0.43.1
 */
declare const baseTaskParamArity1Brand: unique symbol;
export interface _BaseTaskParamArity1<T> extends ClrHostValue {
  readonly [baseTaskParamArity1Brand]: true;
  /**
   * 游戏语言区域信息
   * @since 0.43.1
   */
  readonly gameCultureInfo: System.Globalization.CultureInfo;
  /**
   * 多语言本地化器，读取与类型参数同名的 .resx 资源
   * @since 0.43.1
   */
  readonly stringLocalizer: Microsoft.Extensions.Localization.IStringLocalizer<T>;
}

export interface _BaseTaskParamArity1HostType<T> extends HostType<
  _BaseTaskParamArity1<T>,
  ReferenceTypeTrait
> {}

export type BaseTaskParamFamily<T1 = FamilyArgumentOmitted> = _BaseTaskParamArity1<T1>;

declare global {
  namespace BetterGenshinImpact.GameTask.Model {
    type BaseTaskParam<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./BaseTaskParam").BaseTaskParamFamily<T1>;
  }
}

export type BaseTaskParamHostType<T1> = _BaseTaskParamArity1HostType<T1>;

export {};
