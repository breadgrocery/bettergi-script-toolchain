import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  SingleHost,
  StrongNumeric,
  UInt32Host,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/ValueType";

declare const rNG_MT19937Brand: unique symbol;
export interface RNG_MT19937 extends ClrHostValue {
  readonly [rNG_MT19937Brand]: true;
  toUInt32(): number;
  toInt32(): number;
  toSingle(): number;
  toDouble(): number;
  seed(s: number | StrongNumeric<UInt32Host>): VoidResult;
  next(): number;
  run(): number;
  run(b: number | StrongNumeric<UInt32Host>): number;
  uniform(a: number | StrongNumeric<DoubleHost>, b: number | StrongNumeric<DoubleHost>): number;
  uniform(a: number | StrongNumeric<Int32Host>, b: number | StrongNumeric<Int32Host>): number;
  uniform(a: number | StrongNumeric<SingleHost>, b: number | StrongNumeric<SingleHost>): number;
}

declare global {
  namespace OpenCvSharp {
    type RNG_MT19937 = import("./RNG_MT19937").RNG_MT19937;
  }
}

export interface RNG_MT19937HostType extends HostType<RNG_MT19937, ValueTypeTrait> {
  new (): RNG_MT19937;
  new (s: number | StrongNumeric<UInt32Host>): RNG_MT19937;
}

export {};
