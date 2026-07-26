import type {
  ByteHost,
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../IO/FileStream";
import "../Runtime/Serialization/IDeserializationCallback";
import "../Runtime/Serialization/ISerializable";

declare const strongNameKeyPairBrand: unique symbol;
export interface StrongNameKeyPair
  extends
    ClrHostValue,
    System.Runtime.Serialization.IDeserializationCallbackInput,
    System.Runtime.Serialization.ISerializableInput {
  readonly [strongNameKeyPairBrand]: true;
  readonly publicKey: HostArray<number>;
}

declare global {
  namespace System.Reflection {
    type StrongNameKeyPair = import("./StrongNameKeyPair").StrongNameKeyPair;
  }
}

export interface StrongNameKeyPairHostType extends HostType<StrongNameKeyPair, ReferenceTypeTrait> {
  new (keyPairFile: System.IO.FileStream): StrongNameKeyPair;
  new (keyPairArray: HostArray<number | StrongNumeric<ByteHost>>): StrongNameKeyPair;
  new (keyPairContainer: string): StrongNameKeyPair;
}

export {};
