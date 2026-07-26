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

declare const configureAwaitOptionsBrand: unique symbol;
export interface ConfigureAwaitOptions extends ClrHostValue {
  readonly [configureAwaitOptionsBrand]: true;
}

declare global {
  namespace System.Threading.Tasks {
    type ConfigureAwaitOptions = import("./ConfigureAwaitOptions").ConfigureAwaitOptions;
  }
}

export interface ConfigureAwaitOptionsHostType extends HostType<
  ConfigureAwaitOptions,
  EnumTypeTrait
> {
  readonly none: ConfigureAwaitOptions;
  readonly continueOnCapturedContext: ConfigureAwaitOptions;
  readonly suppressThrowing: ConfigureAwaitOptions;
  readonly forceYielding: ConfigureAwaitOptions;
}

export {};
