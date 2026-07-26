import type { EventSource } from "../../Microsoft/ClearScript/HostEvent";
import type {
  ByteHost,
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/Generic/IEnumerable";
import "../Collections/Generic/IList";
import "../Configuration/Assemblies/AssemblyHashAlgorithm";
import "../Globalization/CultureInfo";
import "../IO/FileStream";
import "../IO/Stream";
import "../Runtime/Serialization/ISerializable";
import "../Runtime/Serialization/SerializationInfo";
import "../Runtime/Serialization/StreamingContext";
import "../Security/SecurityRuleSet";
import "../V8SplitProxyHelpers";
import "../Version";
import "./AssemblyName";
import "./Binder";
import "./BindingFlags";
import "./CommonJSManager";
import "./CustomAttributeData";
import "./ICustomAttributeProvider";
import "./ManifestResourceInfo";
import "./MethodInfo";
import "./ModuleResolveEventHandler";
import "./TypeInfo";

declare const assemblyBrand: unique symbol;
export interface Assembly
  extends
    ClrHostValue,
    System.Reflection.ICustomAttributeProviderInput,
    System.Runtime.Serialization.ISerializableInput {
  readonly [assemblyBrand]: true;
  createInstance(typeName: string): unknown;
  createInstance(typeName: string, ignoreCase: boolean): unknown;
  createInstance(
    typeName: string,
    ignoreCase: boolean,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    args: HostArray<unknown> | null,
    culture: System.Globalization.CultureInfo | null,
    activationAttributes: HostArray<unknown> | null
  ): unknown;
  equals(o: unknown | null): boolean;
  getCustomAttributes(attributeType: System.Type, inherit: boolean): HostArray<unknown>;
  getCustomAttributes(inherit: boolean): HostArray<unknown>;
  getCustomAttributesData(): System.Collections.Generic.IList<System.Reflection.CustomAttributeData>;
  getExportedTypes(): HostArray<System.Type>;
  getFile(name: string): System.IO.FileStream;
  getFiles(): HostArray<System.IO.FileStream>;
  getFiles(getResourceModules: boolean): HostArray<System.IO.FileStream>;
  getForwardedTypes(): HostArray<System.Type>;
  getHashCode(): number;
  getLoadedModules(): HostArray<System.Reflection.Module>;
  getLoadedModules(getResourceModules: boolean): HostArray<System.Reflection.Module>;
  getManifestResourceInfo(resourceName: string): System.Reflection.ManifestResourceInfo;
  getManifestResourceNames(): HostArray<string>;
  getManifestResourceStream(name: string): System.IO.Stream;
  getManifestResourceStream(type: System.Type, name: string): System.IO.Stream;
  getModule(name: string): System.Reflection.Module;
  getModules(): HostArray<System.Reflection.Module>;
  getModules(getResourceModules: boolean): HostArray<System.Reflection.Module>;
  getName(): System.Reflection.AssemblyName;
  getName(copiedName: boolean): System.Reflection.AssemblyName;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
  getReferencedAssemblies(): HostArray<System.Reflection.AssemblyName>;
  getSatelliteAssembly(culture: System.Globalization.CultureInfo): System.Reflection.Assembly;
  getSatelliteAssembly(
    culture: System.Globalization.CultureInfo,
    version: System.Version | null
  ): System.Reflection.Assembly;
  getType(name: string): System.Type;
  getType(name: string, throwOnError: boolean): System.Type;
  getType(name: string, throwOnError: boolean, ignoreCase: boolean): System.Type;
  getTypes(): HostArray<System.Type>;
  isDefined(attributeType: System.Type, inherit: boolean): boolean;
  loadModule(
    moduleName: string,
    rawModule: HostArray<number | StrongNumeric<ByteHost>> | null
  ): System.Reflection.Module;
  loadModule(
    moduleName: string,
    rawModule: HostArray<number | StrongNumeric<ByteHost>> | null,
    rawSymbolStore: HostArray<number | StrongNumeric<ByteHost>> | null
  ): System.Reflection.Module;
  readonly codeBase: string;
  readonly customAttributes: System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>;
  readonly definedTypes: System.Collections.Generic.IEnumerable<System.Reflection.TypeInfo>;
  readonly entryPoint: System.Reflection.MethodInfo;
  readonly escapedCodeBase: string;
  readonly exportedTypes: System.Collections.Generic.IEnumerable<System.Type>;
  readonly fullName: string;
  readonly globalAssemblyCache: boolean;
  readonly hostContext: number;
  readonly imageRuntimeVersion: string;
  readonly isCollectible: boolean;
  readonly isDynamic: boolean;
  readonly isFullyTrusted: boolean;
  readonly location: string;
  readonly manifestModule: System.Reflection.Module;
  readonly moduleResolve: EventSource<
    (sender: unknown, e: System.ResolveEventArgs) => System.Reflection.Module
  >;
  readonly modules: System.Collections.Generic.IEnumerable<System.Reflection.Module>;
  readonly reflectionOnly: boolean;
  readonly securityRuleSet: System.Security.SecurityRuleSet;
  toString(): string;
}

declare global {
  namespace System.Reflection {
    type Assembly = import("./Assembly").Assembly;
  }
}

export interface AssemblyHostType extends HostType<Assembly, ReferenceTypeTrait> {
  load(assemblyString: string): System.Reflection.Assembly;
  loadWithPartialName(partialName: string): System.Reflection.Assembly;
  load(assemblyRef: System.Reflection.AssemblyName): System.Reflection.Assembly;
  getExecutingAssembly(): System.Reflection.Assembly;
  getCallingAssembly(): System.Reflection.Assembly;
  createQualifiedName(assemblyName: string | null, typeName: string | null): string;
  getAssembly(type: System.Type): System.Reflection.Assembly;
  setEntryAssembly(assembly: System.Reflection.Assembly | null): VoidResult;
  getEntryAssembly(): System.Reflection.Assembly;
  load(rawAssembly: HostArray<number | StrongNumeric<ByteHost>>): System.Reflection.Assembly;
  load(
    rawAssembly: HostArray<number | StrongNumeric<ByteHost>>,
    rawSymbolStore: HostArray<number | StrongNumeric<ByteHost>> | null
  ): System.Reflection.Assembly;
  loadFile(path: string): System.Reflection.Assembly;
  loadFrom(assemblyFile: string): System.Reflection.Assembly;
  loadFrom(
    assemblyFile: string,
    hashValue: HostArray<number | StrongNumeric<ByteHost>> | null,
    hashAlgorithm: EnumInput<System.Configuration.Assemblies.AssemblyHashAlgorithm>
  ): System.Reflection.Assembly;
  unsafeLoadFrom(assemblyFile: string): System.Reflection.Assembly;
  reflectionOnlyLoad(
    rawAssembly: HostArray<number | StrongNumeric<ByteHost>>
  ): System.Reflection.Assembly;
  reflectionOnlyLoad(assemblyString: string): System.Reflection.Assembly;
  reflectionOnlyLoadFrom(assemblyFile: string): System.Reflection.Assembly;
}

export {};
