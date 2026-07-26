import type {
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "./Array";
import "./Func";
import "./Globalization/CultureInfo";
import "./Guid";
import "./Reflection/Assembly";
import "./Reflection/AssemblyName";
import "./Reflection/Binder";
import "./Reflection/BindingFlags";
import "./Reflection/CallingConventions";
import "./Reflection/CommonJSManager";
import "./Reflection/ConstructorInfo";
import "./Reflection/EventInfo";
import "./Reflection/FieldInfo";
import "./Reflection/GenericParameterAttributes";
import "./Reflection/ICustomAttributeProvider";
import "./Reflection/IReflect";
import "./Reflection/InterfaceMapping";
import "./Reflection/MemberFilter";
import "./Reflection/MemberInfo";
import "./Reflection/MemberTypes";
import "./Reflection/MethodBase";
import "./Reflection/MethodInfo";
import "./Reflection/ParameterModifier";
import "./Reflection/PropertyInfo";
import "./Reflection/TypeAttributes";
import "./Reflection/TypeFilter";
import "./Runtime/InteropServices/StructLayoutAttribute";
import "./RuntimeTypeHandle";
import "./TypeCode";

declare const typeBrand: unique symbol;
export interface Type
  extends
    Omit<
      System.Reflection.MemberInfo,
      | "assembly"
      | "assemblyQualifiedName"
      | "attributes"
      | "baseType"
      | "containsGenericParameters"
      | "declaringMethod"
      | "declaringType"
      | "equals"
      | "findInterfaces"
      | "findMembers"
      | "fullName"
      | "genericParameterAttributes"
      | "genericParameterPosition"
      | "genericTypeArguments"
      | "getArrayRank"
      | "getConstructor"
      | "getConstructors"
      | "getDefaultMembers"
      | "getElementType"
      | "getEnumName"
      | "getEnumNames"
      | "getEnumUnderlyingType"
      | "getEnumValues"
      | "getEnumValuesAsUnderlyingType"
      | "getEvent"
      | "getEvents"
      | "getField"
      | "getFields"
      | "getFunctionPointerCallingConventions"
      | "getFunctionPointerParameterTypes"
      | "getFunctionPointerReturnType"
      | "getGenericArguments"
      | "getGenericParameterConstraints"
      | "getGenericTypeDefinition"
      | "getHashCode"
      | "getInterface"
      | "getInterfaceMap"
      | "getInterfaces"
      | "getMember"
      | "getMemberWithSameMetadataDefinitionAs"
      | "getMembers"
      | "getMethod"
      | "getMethods"
      | "getNestedType"
      | "getNestedTypes"
      | "getOptionalCustomModifiers"
      | "getProperties"
      | "getProperty"
      | "getRequiredCustomModifiers"
      | "getType"
      | "guid"
      | "hasElementType"
      | "invokeMember"
      | "isAbstract"
      | "isAnsiClass"
      | "isArray"
      | "isAssignableFrom"
      | "isAssignableTo"
      | "isAutoClass"
      | "isAutoLayout"
      | "isByRef"
      | "isByRefLike"
      | "isCOMObject"
      | "isClass"
      | "isConstructedGenericType"
      | "isContextful"
      | "isEnum"
      | "isEnumDefined"
      | "isEquivalentTo"
      | "isExplicitLayout"
      | "isFunctionPointer"
      | "isGenericMethodParameter"
      | "isGenericParameter"
      | "isGenericType"
      | "isGenericTypeDefinition"
      | "isGenericTypeParameter"
      | "isImport"
      | "isInstanceOfType"
      | "isInterface"
      | "isLayoutSequential"
      | "isMarshalByRef"
      | "isNested"
      | "isNestedAssembly"
      | "isNestedFamANDAssem"
      | "isNestedFamORAssem"
      | "isNestedFamily"
      | "isNestedPrivate"
      | "isNestedPublic"
      | "isNotPublic"
      | "isPointer"
      | "isPrimitive"
      | "isPublic"
      | "isSZArray"
      | "isSealed"
      | "isSecurityCritical"
      | "isSecuritySafeCritical"
      | "isSecurityTransparent"
      | "isSerializable"
      | "isSignatureType"
      | "isSpecialName"
      | "isSubclassOf"
      | "isTypeDefinition"
      | "isUnicodeClass"
      | "isUnmanagedFunctionPointer"
      | "isValueType"
      | "isVariableBoundArray"
      | "isVisible"
      | "makeArrayType"
      | "makeByRefType"
      | "makeGenericType"
      | "makePointerType"
      | "memberType"
      | "module"
      | "namespace"
      | "reflectedType"
      | "structLayoutAttribute"
      | "toString"
      | "typeHandle"
      | "typeInitializer"
      | "underlyingSystemType"
    >,
    System.Reflection.ICustomAttributeProviderInput,
    System.Reflection.IReflectInput {
  readonly [typeBrand]: true;
  equals(o: System.Type | null): boolean;
  equals(o: unknown | null): boolean;
  findInterfaces(
    filter: System.Reflection.TypeFilter,
    filterCriteria: unknown | null
  ): HostArray<System.Type>;
  findMembers(
    memberType: EnumInput<System.Reflection.MemberTypes>,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    filter: System.Reflection.MemberFilter | null,
    filterCriteria: unknown | null
  ): HostArray<System.Reflection.MemberInfo>;
  getArrayRank(): number;
  getConstructor(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    callConvention: EnumInput<System.Reflection.CallingConventions>,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.ConstructorInfo;
  getConstructor(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.ConstructorInfo;
  getConstructor(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    types: HostArray<System.Type>
  ): System.Reflection.ConstructorInfo;
  getConstructor(types: HostArray<System.Type>): System.Reflection.ConstructorInfo;
  getConstructors(): HostArray<System.Reflection.ConstructorInfo>;
  getConstructors(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.ConstructorInfo>;
  getDefaultMembers(): HostArray<System.Reflection.MemberInfo>;
  getElementType(): System.Type;
  getEnumName(value: unknown): string;
  getEnumNames(): HostArray<string>;
  getEnumUnderlyingType(): System.Type;
  getEnumValues(): System.Array;
  getEnumValuesAsUnderlyingType(): System.Array;
  getEvent(name: string): System.Reflection.EventInfo;
  getEvent(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): System.Reflection.EventInfo;
  getEvents(): HostArray<System.Reflection.EventInfo>;
  getEvents(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.EventInfo>;
  getField(name: string): System.Reflection.FieldInfo;
  getField(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): System.Reflection.FieldInfo;
  getFields(): HostArray<System.Reflection.FieldInfo>;
  getFields(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.FieldInfo>;
  getFunctionPointerCallingConventions(): HostArray<System.Type>;
  getFunctionPointerParameterTypes(): HostArray<System.Type>;
  getFunctionPointerReturnType(): System.Type;
  getGenericArguments(): HostArray<System.Type>;
  getGenericParameterConstraints(): HostArray<System.Type>;
  getGenericTypeDefinition(): System.Type;
  getHashCode(): number;
  getInterface(name: string): System.Type;
  getInterface(name: string, ignoreCase: boolean): System.Type;
  getInterfaceMap(interfaceType: System.Type): System.Reflection.InterfaceMapping;
  getInterfaces(): HostArray<System.Type>;
  getMember(name: string): HostArray<System.Reflection.MemberInfo>;
  getMember(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.MemberInfo>;
  getMember(
    name: string,
    type: EnumInput<System.Reflection.MemberTypes>,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.MemberInfo>;
  getMemberWithSameMetadataDefinitionAs(
    member: System.Reflection.MemberInfo
  ): System.Reflection.MemberInfo;
  getMembers(): HostArray<System.Reflection.MemberInfo>;
  getMembers(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.MemberInfo>;
  getMethod(name: string): System.Reflection.MethodInfo;
  getMethod(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): System.Reflection.MethodInfo;
  getMethod(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    callConvention: EnumInput<System.Reflection.CallingConventions>,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.MethodInfo;
  getMethod(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.MethodInfo;
  getMethod(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    types: HostArray<System.Type>
  ): System.Reflection.MethodInfo;
  getMethod(
    name: string,
    genericParameterCount: number | StrongNumeric<Int32Host>,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    callConvention: EnumInput<System.Reflection.CallingConventions>,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.MethodInfo;
  getMethod(
    name: string,
    genericParameterCount: number | StrongNumeric<Int32Host>,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.MethodInfo;
  getMethod(
    name: string,
    genericParameterCount: number | StrongNumeric<Int32Host>,
    types: HostArray<System.Type>
  ): System.Reflection.MethodInfo;
  getMethod(
    name: string,
    genericParameterCount: number | StrongNumeric<Int32Host>,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.MethodInfo;
  getMethod(name: string, types: HostArray<System.Type>): System.Reflection.MethodInfo;
  getMethod(
    name: string,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.MethodInfo;
  getMethods(): HostArray<System.Reflection.MethodInfo>;
  getMethods(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.MethodInfo>;
  getNestedType(name: string): System.Type;
  getNestedType(name: string, bindingAttr: EnumInput<System.Reflection.BindingFlags>): System.Type;
  getNestedTypes(): HostArray<System.Type>;
  getNestedTypes(bindingAttr: EnumInput<System.Reflection.BindingFlags>): HostArray<System.Type>;
  getOptionalCustomModifiers(): HostArray<System.Type>;
  getProperties(): HostArray<System.Reflection.PropertyInfo>;
  getProperties(
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): HostArray<System.Reflection.PropertyInfo>;
  getProperty(name: string): System.Reflection.PropertyInfo;
  getProperty(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>
  ): System.Reflection.PropertyInfo;
  getProperty(
    name: string,
    bindingAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    returnType: System.Type | null,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.PropertyInfo;
  getProperty(name: string, returnType: System.Type | null): System.Reflection.PropertyInfo;
  getProperty(
    name: string,
    returnType: System.Type | null,
    types: HostArray<System.Type>
  ): System.Reflection.PropertyInfo;
  getProperty(
    name: string,
    returnType: System.Type | null,
    types: HostArray<System.Type>,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null
  ): System.Reflection.PropertyInfo;
  getProperty(name: string, types: HostArray<System.Type>): System.Reflection.PropertyInfo;
  getRequiredCustomModifiers(): HostArray<System.Type>;
  getType(): System.Type;
  invokeMember(
    name: string,
    invokeAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    target: unknown | null,
    args: HostArray<unknown> | null
  ): unknown;
  invokeMember(
    name: string,
    invokeAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    target: unknown | null,
    args: HostArray<unknown> | null,
    culture: System.Globalization.CultureInfo | null
  ): unknown;
  invokeMember(
    name: string,
    invokeAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    target: unknown | null,
    args: HostArray<unknown> | null,
    modifiers: HostArray<System.Reflection.ParameterModifier> | null,
    culture: System.Globalization.CultureInfo | null,
    namedParameters: HostArray<string> | null
  ): unknown;
  isAssignableFrom(c: System.Type | null): boolean;
  isAssignableTo(targetType: System.Type | null): boolean;
  isEnumDefined(value: unknown): boolean;
  isEquivalentTo(other: System.Type | null): boolean;
  isInstanceOfType(o: unknown | null): boolean;
  isSubclassOf(c: System.Type): boolean;
  makeArrayType(): System.Type;
  makeArrayType(rank: number | StrongNumeric<Int32Host>): System.Type;
  makeByRefType(): System.Type;
  makeGenericType(...typeArguments: System.Type[]): System.Type;
  makeGenericType(typeArguments: HostArray<System.Type>): System.Type;
  makePointerType(): System.Type;
  readonly assembly: System.Reflection.Assembly;
  readonly assemblyQualifiedName: string;
  readonly attributes: System.Reflection.TypeAttributes;
  readonly baseType: System.Type;
  readonly containsGenericParameters: boolean;
  readonly declaringMethod: System.Reflection.MethodBase;
  readonly declaringType: System.Type;
  readonly fullName: string;
  readonly genericParameterAttributes: System.Reflection.GenericParameterAttributes;
  readonly genericParameterPosition: number;
  readonly genericTypeArguments: HostArray<System.Type>;
  readonly guid: System.Guid;
  readonly hasElementType: boolean;
  readonly isAbstract: boolean;
  readonly isAnsiClass: boolean;
  readonly isArray: boolean;
  readonly isAutoClass: boolean;
  readonly isAutoLayout: boolean;
  readonly isByRef: boolean;
  readonly isByRefLike: boolean;
  readonly isCOMObject: boolean;
  readonly isClass: boolean;
  readonly isConstructedGenericType: boolean;
  readonly isContextful: boolean;
  readonly isEnum: boolean;
  readonly isExplicitLayout: boolean;
  readonly isFunctionPointer: boolean;
  readonly isGenericMethodParameter: boolean;
  readonly isGenericParameter: boolean;
  readonly isGenericType: boolean;
  readonly isGenericTypeDefinition: boolean;
  readonly isGenericTypeParameter: boolean;
  readonly isImport: boolean;
  readonly isInterface: boolean;
  readonly isLayoutSequential: boolean;
  readonly isMarshalByRef: boolean;
  readonly isNested: boolean;
  readonly isNestedAssembly: boolean;
  readonly isNestedFamANDAssem: boolean;
  readonly isNestedFamORAssem: boolean;
  readonly isNestedFamily: boolean;
  readonly isNestedPrivate: boolean;
  readonly isNestedPublic: boolean;
  readonly isNotPublic: boolean;
  readonly isPointer: boolean;
  readonly isPrimitive: boolean;
  readonly isPublic: boolean;
  readonly isSZArray: boolean;
  readonly isSealed: boolean;
  readonly isSecurityCritical: boolean;
  readonly isSecuritySafeCritical: boolean;
  readonly isSecurityTransparent: boolean;
  readonly isSerializable: boolean;
  readonly isSignatureType: boolean;
  readonly isSpecialName: boolean;
  readonly isTypeDefinition: boolean;
  readonly isUnicodeClass: boolean;
  readonly isUnmanagedFunctionPointer: boolean;
  readonly isValueType: boolean;
  readonly isVariableBoundArray: boolean;
  readonly isVisible: boolean;
  readonly memberType: System.Reflection.MemberTypes;
  readonly module: System.Reflection.Module;
  readonly namespace: string;
  readonly reflectedType: System.Type;
  readonly structLayoutAttribute: System.Runtime.InteropServices.StructLayoutAttribute;
  readonly typeHandle: System.RuntimeTypeHandle;
  readonly typeInitializer: System.Reflection.ConstructorInfo;
  readonly underlyingSystemType: System.Type;
  toString(): string;
}

declare global {
  namespace System {
    type Type = import("./V8SplitProxyHelpers").Type;
  }
}

export interface TypeHostType extends HostType<Type, ReferenceTypeTrait> {
  readonly delimiter: number;
  readonly emptyTypes: HostArray<System.Type>;
  readonly missing: unknown;
  readonly filterAttribute: System.Reflection.MemberFilter;
  readonly filterName: System.Reflection.MemberFilter;
  readonly filterNameIgnoreCase: System.Reflection.MemberFilter;
  readonly defaultBinder: System.Reflection.Binder;
  getType(typeName: string, throwOnError: boolean, ignoreCase: boolean): System.Type;
  getType(typeName: string, throwOnError: boolean): System.Type;
  getType(typeName: string): System.Type;
  getType(
    typeName: string,
    assemblyResolver: System.Func<
      System.Reflection.AssemblyName,
      System.Reflection.Assembly
    > | null,
    typeResolver: System.Func<System.Reflection.Assembly, string, boolean, System.Type> | null
  ): System.Type;
  getType(
    typeName: string,
    assemblyResolver: System.Func<
      System.Reflection.AssemblyName,
      System.Reflection.Assembly
    > | null,
    typeResolver: System.Func<System.Reflection.Assembly, string, boolean, System.Type> | null,
    throwOnError: boolean
  ): System.Type;
  getType(
    typeName: string,
    assemblyResolver: System.Func<
      System.Reflection.AssemblyName,
      System.Reflection.Assembly
    > | null,
    typeResolver: System.Func<System.Reflection.Assembly, string, boolean, System.Type> | null,
    throwOnError: boolean,
    ignoreCase: boolean
  ): System.Type;
  getTypeFromHandle(handle: System.RuntimeTypeHandle): System.Type;
  getTypeHandle(o: unknown): System.RuntimeTypeHandle;
  getTypeArray(args: HostArray<unknown>): HostArray<System.Type>;
  getTypeCode(type: System.Type | null): System.TypeCode;
  getTypeFromCLSID(clsid: System.Guid): System.Type;
  getTypeFromCLSID(clsid: System.Guid, throwOnError: boolean): System.Type;
  getTypeFromCLSID(clsid: System.Guid, server: string | null): System.Type;
  getTypeFromCLSID(clsid: System.Guid, server: string | null, throwOnError: boolean): System.Type;
  getTypeFromProgID(progID: string): System.Type;
  getTypeFromProgID(progID: string, throwOnError: boolean): System.Type;
  getTypeFromProgID(progID: string, server: string | null): System.Type;
  getTypeFromProgID(progID: string, server: string | null, throwOnError: boolean): System.Type;
  makeGenericSignatureType(
    genericTypeDefinition: System.Type,
    typeArguments: HostArray<System.Type>
  ): System.Type;
  makeGenericSignatureType(
    genericTypeDefinition: System.Type,
    ...typeArguments: System.Type[]
  ): System.Type;
  makeGenericMethodParameter(position: number | StrongNumeric<Int32Host>): System.Type;
  reflectionOnlyGetType(
    typeName: string,
    throwIfNotFound: boolean,
    ignoreCase: boolean
  ): System.Type;
}

export {};
