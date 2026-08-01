import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/Dictionary";
import "../../../System/Collections/Generic/List";
import "../../../System/Threading/CancellationToken";
import "../../../System/ValueTuple";
import "../ISoloTask";
import "../Model/Area/ImageRegion";
import "../Model/Area/Region";
import "./AutoDomainParam";

/**
 * 秘境树脂名称
 * @since 0.52.0
 */
export type ResinName =
  "浓缩树脂" | "原粹树脂" | "原粹树脂20" | "原粹树脂40" | "须臾树脂" | "脆弱树脂" | (string & {});

/**
 * 分解圣遗物最大星级（字符串）；上游 `int.TryParse` 后按 1–4 使用
 * @since 0.52.0
 */
export type ArtifactStar = "1" | "2" | "3" | "4" | (string & {});

/**
 * 可自动刷取的秘境名称
 * 来源：`MapLazyAssets` 从 `tp.json` 提取的 BlessDomain / ForgeryDomain / MasteryDomain 点位名
 * @since 0.52.0
 */
export type DomainName =
  | "铭记之谷"
  | "忘却之峡"
  | "仲夏庭园"
  | "塞西莉亚苗圃"
  | "无妄引咎密宫"
  | "太山府"
  | "震雷连山密宫"
  | "孤云凌霄之处"
  | "华池岩岫"
  | "芬德尼尔之顶"
  | "山脊守望"
  | "菫色之庭"
  | "椛染之庭"
  | "砂流之庭"
  | "沉眠之庭"
  | "昏识塔"
  | "缘觉塔"
  | "有顶塔"
  | "岩中幽谷"
  | "赤金的城墟"
  | "熔铁的孤塞"
  | "深潮的余响"
  | "苍白的遗荣"
  | "罪祸的终末"
  | "临瀑之城"
  | "褪色的剧场"
  | "蕴火的幽墟"
  | "深古瞭望所"
  | "虹灵的净土"
  | "荒废砌造坞"
  | "无光的深都"
  | "霜凝的机枢"
  | "失落的月庭"
  | "月童的库藏"
  | "山风的荆冕"
  | "" // 未指定
  | (string & {});

/**
 * 周日 / 限时全开秘境奖励选项序号
 * UI 列表为 `""` / `1` / `2` / `3`；任务内 `switch` 仅处理 1–3
 * @since 0.52.0
 */
export type SundaySelectedValue = "" | "1" | "2" | "3" | (string & {});

/**
 * 自动秘境独立任务
 * @since 0.52.0
 */
declare const autoDomainTaskBrand: unique symbol;
export interface AutoDomainTask
  extends
    ClrHostValue,
    BetterGenshinImpact.GameTask.ISoloTaskInput<
      System.Collections.Generic.Dictionary<string, number>
    >,
    BetterGenshinImpact.GameTask.ISoloTaskInput {
  readonly [autoDomainTaskBrand]: true;
  /**
   * 独立任务名称
   * @since 0.52.0
   */
  readonly name: string;
  /**
   * 启动自动秘境任务
   * @param ct 取消令牌
   * @returns 在任务完成后兑现奖励名称到数量映射的 Promise
   * @since 0.52.0
   */
  start(
    ct: System.Threading.CancellationToken
  ): Promise<System.Collections.Generic.Dictionary<string, number>>;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoDomain {
    type AutoDomainTask = import("./AutoDomainTask").AutoDomainTask;
    type ArtifactStar = import("./AutoDomainTask").ArtifactStar;
    type DomainName = import("./AutoDomainTask").DomainName;
    type ResinName = import("./AutoDomainTask").ResinName;
    type SundaySelectedValue = import("./AutoDomainTask").SundaySelectedValue;
  }
}

export interface AutoDomainTaskHostType extends HostType<AutoDomainTask, ReferenceTypeTrait> {
  /**
   * 使用自动秘境参数创建任务
   * @param taskParam 自动秘境参数
   * @since 0.52.0
   */
  new (taskParam: BetterGenshinImpact.GameTask.AutoDomain.AutoDomainParam): AutoDomainTask;
  /**
   * 在奖励界面中点击使用指定树脂
   * @param ra 包含树脂选项的图像区域
   * @param resinName 树脂名称
   * @param logPrefix 日志前缀，默认 `自动秘境`
   * @returns 是否使用成功与识别到的剩余数量组成的元组
   * @since 0.52.0
   */
  pressUseResin(
    ra: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    resinName: ResinName
  ): System.ValueTuple<boolean, number>;
  pressUseResin(
    ra: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    resinName: ResinName,
    logPrefix: string
  ): System.ValueTuple<boolean, number>;
  /**
   * 在已识别的区域列表中点击使用指定树脂
   * @param regionList 树脂选项区域列表
   * @param resinName 树脂名称
   * @param logPrefix 日志前缀，默认 `自动秘境`
   * @returns 是否使用成功与识别到的剩余数量组成的元组
   * @since 0.52.0
   */
  pressUseResin(
    regionList: System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>,
    resinName: ResinName
  ): System.ValueTuple<boolean, number>;
  pressUseResin(
    regionList: System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>,
    resinName: ResinName,
    logPrefix: string
  ): System.ValueTuple<boolean, number>;
}

export {};
