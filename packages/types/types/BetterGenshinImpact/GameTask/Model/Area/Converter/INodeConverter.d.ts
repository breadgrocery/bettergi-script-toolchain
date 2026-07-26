import type {
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/ValueTuple";

/**
 * 区域节点坐标转换器，将本层坐标映射到上一层节点
 * @since 0.43.1
 */
declare const iNodeConverterInputBrand: unique symbol;
export interface INodeConverterInput {
  readonly [iNodeConverterInputBrand]: true;
}

export interface INodeConverter
  extends Microsoft.ClearScript.ClrInterfaceView<INodeConverterInput>, INodeConverterInput {
  /**
   * 将本层矩形坐标转换到上一层节点
   * @param x 本层横坐标
   * @param y 本层纵坐标
   * @param w 矩形宽度
   * @param h 矩形高度
   * @since 0.43.1
   */
  toPrev(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    w: number | StrongNumeric<Int32Host>,
    h: number | StrongNumeric<Int32Host>
  ): System.ValueTuple<number, number, number, number>;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area.Converter {
    type INodeConverterInput = import("./INodeConverter").INodeConverterInput;
  }
}

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area.Converter {
    type INodeConverter = import("./INodeConverter").INodeConverter;
  }
}

export interface INodeConverterHostType extends HostType<INodeConverter, InterfaceTypeTrait> {}

export {};
