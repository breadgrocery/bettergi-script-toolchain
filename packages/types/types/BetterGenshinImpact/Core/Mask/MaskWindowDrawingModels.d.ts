import type {
  ClrHostValue,
  DoubleHost,
  EnumTypeTrait,
  HostType,
  Int64Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/IReadOnlyList";
import "../../../System/Drawing/Pen";
import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import "../../../System/Windows/Media/Color";
import "../../../System/Windows/Point";
import "../../../System/Windows/Rect";

/**
 * 绘制分组的类型，决定分组在遮罩窗口上的显示规则
 * @since 0.67.0
 */
declare const maskWindowDrawingKindBrand: unique symbol;
export interface MaskWindowDrawingKind extends ClrHostValue {
  readonly [maskWindowDrawingKindBrand]: true;
}

export interface MaskWindowDrawingKindHostType extends HostType<
  MaskWindowDrawingKind,
  EnumTypeTrait
> {
  /**
   * 识别结果（调试可视化）：受「在遮罩上显示识别结果」开关和统一样式控制
   * @since 0.67.0
   */
  readonly recognition: MaskWindowDrawingKind;
  /**
   * 功能提示（技能 CD、地脉 OCR 区域等）：遮罩可见就显示，使用图形自带样式
   * @since 0.67.0
   */
  readonly feature: MaskWindowDrawingKind;
}

/**
 * 绘制分组。一组图形按 Name 整体替换，Kind 决定显示规则
 * @since 0.67.0
 */
declare const maskWindowDrawingGroupBrand: unique symbol;
export interface MaskWindowDrawingGroup extends ClrHostValue {
  readonly [maskWindowDrawingGroupBrand]: true;
  readonly name: string;
  readonly kind: BetterGenshinImpact.Core.Mask.MaskWindowDrawingKind;
}

export interface MaskWindowDrawingGroupHostType extends HostType<
  MaskWindowDrawingGroup,
  ValueTypeTrait
> {
  new (
    name: string,
    kind?: BetterGenshinImpact.Core.Mask.MaskWindowDrawingKind
  ): MaskWindowDrawingGroup;
}

/**
 * 遮罩窗口上的图形抽象基类
 * @since 0.67.0
 */
declare const maskWindowDrawingShapeBrand: unique symbol;
export interface MaskWindowDrawingShape extends ClrHostValue {
  readonly [maskWindowDrawingShapeBrand]: true;
}

export interface MaskWindowDrawingShapeHostType extends HostType<
  MaskWindowDrawingShape,
  ReferenceTypeTrait
> {}

/**
 * 线条样式
 * @since 0.67.0
 */
declare const maskWindowDrawingStrokeBrand: unique symbol;
export interface MaskWindowDrawingStroke extends ClrHostValue {
  readonly [maskWindowDrawingStrokeBrand]: true;
  readonly color: System.Windows.Media.Color;
  readonly thickness: number;
}

export interface MaskWindowDrawingStrokeHostType extends HostType<
  MaskWindowDrawingStroke,
  ValueTypeTrait
> {
  new (
    color: System.Windows.Media.Color,
    thickness?: number | StrongNumeric<DoubleHost>
  ): MaskWindowDrawingStroke;
  fromPen(
    pen: System.Drawing.Pen | null
  ): BetterGenshinImpact.Core.Mask.MaskWindowDrawingStroke | null;
}

/**
 * 文字样式
 * @since 0.67.0
 */
declare const maskWindowDrawingTextStyleBrand: unique symbol;
export interface MaskWindowDrawingTextStyle extends ClrHostValue {
  readonly [maskWindowDrawingTextStyleBrand]: true;
  readonly foreground: System.Windows.Media.Color | null;
  readonly fontSize: number | null;
  readonly background: System.Windows.Media.Color | null;
  readonly numeric: boolean;
}

export interface MaskWindowDrawingTextStyleHostType extends HostType<
  MaskWindowDrawingTextStyle,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): MaskWindowDrawingTextStyle;
  new (
    foreground: System.Windows.Media.Color | null,
    fontSize?: number | StrongNumeric<DoubleHost> | null,
    background?: System.Windows.Media.Color | null,
    numeric?: boolean
  ): MaskWindowDrawingTextStyle;
}

/**
 * 遮罩窗口矩形绘制图形
 * @since 0.67.0
 */
declare const maskWindowDrawingRectBrand: unique symbol;
export interface MaskWindowDrawingRect extends MaskWindowDrawingShape {
  readonly [maskWindowDrawingRectBrand]: true;
  readonly bounds: System.Windows.Rect;
  readonly stroke: BetterGenshinImpact.Core.Mask.MaskWindowDrawingStroke | null;
}

export interface MaskWindowDrawingRectHostType extends HostType<
  MaskWindowDrawingRect,
  ReferenceTypeTrait
> {
  new (
    bounds: System.Windows.Rect,
    stroke?: BetterGenshinImpact.Core.Mask.MaskWindowDrawingStroke | null
  ): MaskWindowDrawingRect;
}

/**
 * 遮罩窗口直线绘制图形
 * @since 0.67.0
 */
declare const maskWindowDrawingLineBrand: unique symbol;
export interface MaskWindowDrawingLine extends MaskWindowDrawingShape {
  readonly [maskWindowDrawingLineBrand]: true;
  readonly from: System.Windows.Point;
  readonly to: System.Windows.Point;
  readonly stroke: BetterGenshinImpact.Core.Mask.MaskWindowDrawingStroke | null;
}

export interface MaskWindowDrawingLineHostType extends HostType<
  MaskWindowDrawingLine,
  ReferenceTypeTrait
> {
  new (
    from: System.Windows.Point,
    to: System.Windows.Point,
    stroke?: BetterGenshinImpact.Core.Mask.MaskWindowDrawingStroke | null
  ): MaskWindowDrawingLine;
}

/**
 * 遮罩窗口文字绘制图形
 * @since 0.67.0
 */
declare const maskWindowDrawingTextBrand: unique symbol;
export interface MaskWindowDrawingText extends MaskWindowDrawingShape {
  readonly [maskWindowDrawingTextBrand]: true;
  readonly text: string;
  readonly origin: System.Windows.Point;
  readonly style: BetterGenshinImpact.Core.Mask.MaskWindowDrawingTextStyle | null;
}

export interface MaskWindowDrawingTextHostType extends HostType<
  MaskWindowDrawingText,
  ReferenceTypeTrait
> {
  new (
    text: string,
    origin: System.Windows.Point,
    style?: BetterGenshinImpact.Core.Mask.MaskWindowDrawingTextStyle | null
  ): MaskWindowDrawingText;
}

/**
 * 绘制快照中的一个分组
 * @since 0.67.0
 */
declare const maskWindowDrawingEntryBrand: unique symbol;
export interface MaskWindowDrawingEntry extends ClrHostValue {
  readonly [maskWindowDrawingEntryBrand]: true;
  readonly group: BetterGenshinImpact.Core.Mask.MaskWindowDrawingGroup;
  readonly shapes: System.Collections.Generic.IReadOnlyList<BetterGenshinImpact.Core.Mask.MaskWindowDrawingShape>;
}

export interface MaskWindowDrawingEntryHostType extends HostType<
  MaskWindowDrawingEntry,
  ReferenceTypeTrait
> {
  new (
    group: BetterGenshinImpact.Core.Mask.MaskWindowDrawingGroup,
    shapes:
      | System.Collections.Generic.IReadOnlyList<BetterGenshinImpact.Core.Mask.MaskWindowDrawingShape>
      | readonly BetterGenshinImpact.Core.Mask.MaskWindowDrawingShape[]
  ): MaskWindowDrawingEntry;
}

/**
 * 绘制内容的不可变快照
 * @since 0.67.0
 */
declare const maskWindowDrawingSnapshotBrand: unique symbol;
export interface MaskWindowDrawingSnapshot extends ClrHostValue {
  readonly [maskWindowDrawingSnapshotBrand]: true;
  readonly version: number;
  readonly entries: System.Collections.Generic.IReadOnlyList<BetterGenshinImpact.Core.Mask.MaskWindowDrawingEntry>;
  readonly isEmpty: boolean;
}

export interface MaskWindowDrawingSnapshotHostType extends HostType<
  MaskWindowDrawingSnapshot,
  ReferenceTypeTrait
> {
  new (
    version: number | StrongNumeric<Int64Host>,
    entries:
      | System.Collections.Generic.IReadOnlyList<BetterGenshinImpact.Core.Mask.MaskWindowDrawingEntry>
      | readonly BetterGenshinImpact.Core.Mask.MaskWindowDrawingEntry[]
  ): MaskWindowDrawingSnapshot;
  readonly empty: BetterGenshinImpact.Core.Mask.MaskWindowDrawingSnapshot;
}

declare global {
  namespace BetterGenshinImpact.Core.Mask {
    type MaskWindowDrawingKind = import("./MaskWindowDrawingModels").MaskWindowDrawingKind;
    type MaskWindowDrawingGroup = import("./MaskWindowDrawingModels").MaskWindowDrawingGroup;
    type MaskWindowDrawingShape = import("./MaskWindowDrawingModels").MaskWindowDrawingShape;
    type MaskWindowDrawingStroke = import("./MaskWindowDrawingModels").MaskWindowDrawingStroke;
    type MaskWindowDrawingTextStyle =
      import("./MaskWindowDrawingModels").MaskWindowDrawingTextStyle;
    type MaskWindowDrawingRect = import("./MaskWindowDrawingModels").MaskWindowDrawingRect;
    type MaskWindowDrawingLine = import("./MaskWindowDrawingModels").MaskWindowDrawingLine;
    type MaskWindowDrawingText = import("./MaskWindowDrawingModels").MaskWindowDrawingText;
    type MaskWindowDrawingEntry = import("./MaskWindowDrawingModels").MaskWindowDrawingEntry;
    type MaskWindowDrawingSnapshot = import("./MaskWindowDrawingModels").MaskWindowDrawingSnapshot;
  }
}

export {};
