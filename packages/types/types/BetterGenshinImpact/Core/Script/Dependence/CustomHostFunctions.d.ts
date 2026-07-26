import "../../../../Microsoft/ClearScript/HostFunctions";
import type {
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../Microsoft/ClearScript/IScriptableObject";

/**
 * BetterGI 扩展的 ClearScript 宿主函数
 * @since 0.58.0
 */
declare const customHostFunctionsBrand: unique symbol;
export interface CustomHostFunctions
  extends
    Omit<Microsoft.ClearScript.HostFunctions, "newVarOfArr">,
    Microsoft.ClearScript.IScriptableObjectInput {
  readonly [customHostFunctionsBrand]: true;
  /**
   * 创建指定维度的交错数组宿主变量
   * @param type1 数组元素类型的 HostType
   * @param dimensions 数组维数
   * @returns 交错数组宿主变量
   * @since 0.58.0
   */
  newVarOfArr<T>(type1: HostType<T>, dimensions: number | StrongNumeric<Int32Host>): unknown;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type CustomHostFunctions = import("./CustomHostFunctions").CustomHostFunctions;
  }
}

export interface CustomHostFunctionsHostType extends HostType<
  CustomHostFunctions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.58.0
   */
  new (): CustomHostFunctions;
}

export {};
