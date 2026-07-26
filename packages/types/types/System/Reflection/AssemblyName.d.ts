import type {
  ByteHost,
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Configuration/Assemblies/AssemblyHashAlgorithm";
import "../Configuration/Assemblies/AssemblyVersionCompatibility";
import "../Globalization/CultureInfo";
import "../ICloneable";
import "../Runtime/Serialization/IDeserializationCallback";
import "../Runtime/Serialization/ISerializable";
import "../Runtime/Serialization/SerializationInfo";
import "../Runtime/Serialization/StreamingContext";
import "../Version";
import "./AssemblyContentType";
import "./AssemblyNameFlags";
import "./ProcessorArchitecture";
import "./StrongNameKeyPair";

declare const assemblyNameBrand: unique symbol;
export interface AssemblyName
  extends
    ClrHostValue,
    System.ICloneableInput,
    System.Runtime.Serialization.IDeserializationCallbackInput,
    System.Runtime.Serialization.ISerializableInput {
  readonly [assemblyNameBrand]: true;
  clone(): unknown;
  codeBase: string;
  contentType: System.Reflection.AssemblyContentType;
  cultureInfo: System.Globalization.CultureInfo;
  cultureName: string;
  flags: System.Reflection.AssemblyNameFlags;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
  getPublicKey(): HostArray<number>;
  getPublicKeyToken(): HostArray<number>;
  hashAlgorithm: System.Configuration.Assemblies.AssemblyHashAlgorithm;
  keyPair: System.Reflection.StrongNameKeyPair;
  name: string;
  onDeserialization(sender: unknown | null): VoidResult;
  processorArchitecture: System.Reflection.ProcessorArchitecture;
  readonly escapedCodeBase: string;
  readonly fullName: string;
  setPublicKey(publicKey: HostArray<number | StrongNumeric<ByteHost>> | null): VoidResult;
  setPublicKeyToken(publicKeyToken: HostArray<number | StrongNumeric<ByteHost>> | null): VoidResult;
  toString(): string;
  version: System.Version;
  versionCompatibility: System.Configuration.Assemblies.AssemblyVersionCompatibility;
}

declare global {
  namespace System.Reflection {
    type AssemblyName = import("./AssemblyName").AssemblyName;
  }
}

export interface AssemblyNameHostType extends HostType<
  AssemblyName,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (assemblyName: string): AssemblyName;
  new (): AssemblyName;
  getAssemblyName(assemblyFile: string): System.Reflection.AssemblyName;
  referenceMatchesDefinition(
    reference: System.Reflection.AssemblyName | null,
    definition: System.Reflection.AssemblyName | null
  ): boolean;
}

export {};
