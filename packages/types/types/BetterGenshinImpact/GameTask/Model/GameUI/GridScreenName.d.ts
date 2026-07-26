import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Enum";
import "../../../../System/IComparable";
import "../../../../System/IConvertible";
import "../../../../System/IFormattable";
import "../../../../System/ISpanFormattable";

/**
 * 网格界面名称，标识背包等可网格扫描的界面
 * @since 0.62.0
 */
declare const gridScreenNameBrand: unique symbol;
export interface GridScreenName extends ClrHostValue {
  readonly [gridScreenNameBrand]: true;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Model.GameUI {
    type GridScreenName = import("./GridScreenName").GridScreenName;
  }
}

export interface GridScreenNameHostType extends HostType<GridScreenName, EnumTypeTrait> {
  /**
   * 武器
   * @since 0.62.0
   */
  readonly weapons: GridScreenName;
  /**
   * 圣遗物
   * @since 0.62.0
   */
  readonly artifacts: GridScreenName;
  /**
   * 养成道具
   * @since 0.62.0
   */
  readonly characterDevelopmentItems: GridScreenName;
  /**
   * 食物
   * @since 0.62.0
   */
  readonly food: GridScreenName;
  /**
   * 材料
   * @since 0.62.0
   */
  readonly materials: GridScreenName;
  /**
   * 小道具
   * @since 0.62.0
   */
  readonly gadget: GridScreenName;
  /**
   * 任务
   * @since 0.62.0
   */
  readonly quest: GridScreenName;
  /**
   * 贵重道具
   * @since 0.62.0
   */
  readonly preciousItems: GridScreenName;
  /**
   * 摆设
   * @since 0.62.0
   */
  readonly furnishings: GridScreenName;
  /**
   * 圣遗物分解
   * @since 0.62.0
   */
  readonly artifactSalvage: GridScreenName;
  /**
   * 圣遗物套装筛选
   * @since 0.62.0
   */
  readonly artifactSetFilter: GridScreenName;
  /**
   * 合成
   * @since 0.62.0
   */
  readonly crafting: GridScreenName;
  /**
   * 队伍配置快速编队界面的左侧角色头像网格
   * @since unreleased
   */
  readonly partySetupCharacters: GridScreenName;
}

export {};
