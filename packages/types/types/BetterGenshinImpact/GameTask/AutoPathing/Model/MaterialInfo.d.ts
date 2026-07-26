import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";

/**
 * 路径点关联的怪物或特产材料信息
 * @since 0.43.1
 */
declare const materialInfoBrand: unique symbol;
export interface MaterialInfo extends ClrHostValue {
  readonly [materialInfoBrand]: true;
  /**
   * 怪物名称
   * @since 0.43.1
   */
  monster: string;
  /**
   * 材料名称
   * @since 0.43.1
   */
  material: string;
  /**
   * 数量
   * @since 0.43.1
   */
  count: string;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoPathing.Model {
    type MaterialInfo = import("./MaterialInfo").MaterialInfo;
  }
}

export interface MaterialInfoHostType extends HostType<
  MaterialInfo,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造材料信息
   * @since 0.43.1
   */
  new (): MaterialInfo;
}

export {};
