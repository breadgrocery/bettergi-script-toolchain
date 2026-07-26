import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const gotoExpressionKindBrand: unique symbol;
export interface GotoExpressionKind extends ClrHostValue {
  readonly [gotoExpressionKindBrand]: true;
}

declare global {
  namespace System.Linq.Expressions {
    type GotoExpressionKind = import("./GotoExpressionKind").GotoExpressionKind;
  }
}

export interface GotoExpressionKindHostType extends HostType<GotoExpressionKind, EnumTypeTrait> {
  readonly goto: GotoExpressionKind;
  readonly return: GotoExpressionKind;
  readonly break: GotoExpressionKind;
  readonly continue: GotoExpressionKind;
}

export {};
