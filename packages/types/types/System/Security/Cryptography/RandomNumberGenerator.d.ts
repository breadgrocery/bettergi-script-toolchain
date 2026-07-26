import type {
  ByteHost,
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IDisposable";

declare const randomNumberGeneratorBrand: unique symbol;
export interface RandomNumberGenerator extends ClrHostValue, System.IDisposableInput {
  readonly [randomNumberGeneratorBrand]: true;
  dispose(): VoidResult;
  getBytes(data: HostArray<number | StrongNumeric<ByteHost>>): VoidResult;
  getBytes(
    data: HostArray<number | StrongNumeric<ByteHost>>,
    offset: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  getNonZeroBytes(data: HostArray<number | StrongNumeric<ByteHost>>): VoidResult;
}

declare global {
  namespace System.Security.Cryptography {
    type RandomNumberGenerator = import("./RandomNumberGenerator").RandomNumberGenerator;
  }
}

export interface RandomNumberGeneratorHostType extends HostType<
  RandomNumberGenerator,
  ReferenceTypeTrait
> {
  create(): System.Security.Cryptography.RandomNumberGenerator;
  create(rngName: string): System.Security.Cryptography.RandomNumberGenerator;
  getInt32(
    fromInclusive: number | StrongNumeric<Int32Host>,
    toExclusive: number | StrongNumeric<Int32Host>
  ): number;
  getInt32(toExclusive: number | StrongNumeric<Int32Host>): number;
  getBytes(count: number | StrongNumeric<Int32Host>): HostArray<number>;
  getHexString(stringLength: number | StrongNumeric<Int32Host>): string;
  getHexString(stringLength: number | StrongNumeric<Int32Host>, lowercase: boolean): string;
}

export {};
