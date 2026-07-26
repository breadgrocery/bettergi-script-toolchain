import "../../../System/IEquatable";
import "../../../System/ValueType";
import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../ClearScript/HostType";

declare const eventIdBrand: unique symbol;
export interface EventId extends ClrHostValue {
  readonly [eventIdBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: Microsoft.Extensions.Logging.EventId): boolean;
  getHashCode(): number;
  readonly id: number;
  readonly name: string;
  toString(): string;
}

declare global {
  namespace Microsoft.Extensions.Logging {
    type EventId = import("./EventId").EventId;
  }
}

export interface EventIdHostType extends HostType<EventId, ValueTypeTrait> {
  new (id: number | StrongNumeric<Int32Host>): EventId;
  new (id: number | StrongNumeric<Int32Host>, name: string | null): EventId;
}

export {};
