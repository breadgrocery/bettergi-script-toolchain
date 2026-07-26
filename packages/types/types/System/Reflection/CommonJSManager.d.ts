import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/Generic/IEnumerable";
import "../Collections/Generic/IList";
import "../Guid";
import "../ModuleHandle";
import "../Runtime/Serialization/ISerializable";
import "../Runtime/Serialization/SerializationInfo";
import "../Runtime/Serialization/StreamingContext";
import "../V8SplitProxyHelpers";
import "./Assembly";
import "./Binder";
import "./BindingFlags";
import "./CallingConventions";
import "./CustomAttributeData";
import "./FieldInfo";
import "./ICustomAttributeProvider";
import "./ImageFileMachine";
import "./MemberInfo";
import "./MethodBase";
import "./MethodInfo";
import "./ParameterModifier";
import "./PortableExecutableKinds";
import "./TypeFilter";

declare const moduleBrand: unique symbol;
export interface Module
  extends
    ClrHostValue,
    System.Reflection.ICustomAttributeProviderInput,
    System.Runtime.Serialization.ISerializableInput {
  readonly [moduleBrand]: true;
  equals(o: unknown | null): boolean;
  findTypes(
    filter: System.Reflection.TypeFilter | null,
    filterCriteria: unknown | null
  ): HostArray<System.Type>;
  getCustomAttributes(attributeType: System.Type, inherit: boolean): HostArray<unknown>;
  getCustomAttributes(inherit: boolean): HostArray<unknown>;
  getCustomAttributesData(): System.Collections.Generic.IList<System.Reflection.CustomAttributeData>;
  getField(name: string): System.Reflection.FieldInfo;
  getField(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): System.Reflection.FieldInfo;
  getFields(): HostArray<System.Reflection.FieldInfo>;
  getFields(
    bindingFlags: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.FieldInfo>;
  getHashCode(): number;
  getMethod(name: string): System.Reflection.MethodInfo;
  getMethod(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    callConvention: EnumInput<System.Reflection.CallingConventions>,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.MethodInfo;
  getMethod(name: string, types: HostArray<System.Type>): System.Reflection.MethodInfo;
  getMethods(): HostArray<System.Reflection.MethodInfo>;
  getMethods(
    bindingFlags: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.MethodInfo>;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
  getPEKind(
    peKind: HostVariableOut<System.Reflection.PortableExecutableKinds>,
    machine: HostVariableOut<System.Reflection.ImageFileMachine>
  ): VoidResult;
  getType(className: string): System.Type;
  getType(className: string, ignoreCase: boolean): System.Type;
  getType(className: string, throwOnError: boolean, ignoreCase: boolean): System.Type;
  getTypes(): HostArray<System.Type>;
  isDefined(attributeType: System.Type, inherit: boolean): boolean;
  isResource(): boolean;
  readonly assembly: System.Reflection.Assembly;
  readonly customAttributes: System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>;
  readonly fullyQualifiedName: string;
  readonly mdStreamVersion: number;
  readonly metadataToken: number;
  readonly moduleHandle: System.ModuleHandle;
  readonly moduleVersionId: System.Guid;
  readonly name: string;
  readonly scopeName: string;
  resolveField(metadataToken: number | StrongNumeric<Int32Host>): System.Reflection.FieldInfo;
  resolveField(
    metadataToken: number | StrongNumeric<Int32Host>,
    genericTypeArguments: HostArray<System.Type> | null,
    genericMethodArguments: HostArray<System.Type> | null
  ): System.Reflection.FieldInfo;
  resolveMember(metadataToken: number | StrongNumeric<Int32Host>): System.Reflection.MemberInfo;
  resolveMember(
    metadataToken: number | StrongNumeric<Int32Host>,
    genericTypeArguments: HostArray<System.Type> | null,
    genericMethodArguments: HostArray<System.Type> | null
  ): System.Reflection.MemberInfo;
  resolveMethod(metadataToken: number | StrongNumeric<Int32Host>): System.Reflection.MethodBase;
  resolveMethod(
    metadataToken: number | StrongNumeric<Int32Host>,
    genericTypeArguments: HostArray<System.Type> | null,
    genericMethodArguments: HostArray<System.Type> | null
  ): System.Reflection.MethodBase;
  resolveSignature(metadataToken: number | StrongNumeric<Int32Host>): HostArray<number>;
  resolveString(metadataToken: number | StrongNumeric<Int32Host>): string;
  resolveType(metadataToken: number | StrongNumeric<Int32Host>): System.Type;
  resolveType(
    metadataToken: number | StrongNumeric<Int32Host>,
    genericTypeArguments: HostArray<System.Type> | null,
    genericMethodArguments: HostArray<System.Type> | null
  ): System.Type;
  toString(): string;
}

declare global {
  namespace System.Reflection {
    type Module = import("./CommonJSManager").Module;
  }
}

export interface ModuleHostType extends HostType<Module, ReferenceTypeTrait> {
  readonly filterTypeName: System.Reflection.TypeFilter;
  readonly filterTypeNameIgnoreCase: System.Reflection.TypeFilter;
}

export {};
