declare const clrHostBrand: unique symbol;
declare const clrInterfaceViewBrand: unique symbol;
declare const hostTypeBrand: unique symbol;
declare const hostTypeTraitsBrand: unique symbol;
declare const referenceTypeTraitBrand: unique symbol;
declare const publicDefaultConstructorTraitBrand: unique symbol;
declare const interfaceTypeTraitBrand: unique symbol;
declare const valueTypeTraitBrand: unique symbol;
declare const enumTypeTraitBrand: unique symbol;
declare const staticTypeTraitBrand: unique symbol;
declare const familyArgumentOmitted: unique symbol;
declare const numericHostValueBrand: unique symbol;
declare const strongNumericBrand: unique symbol;
declare const sByteHostBrand: unique symbol;
declare const byteHostBrand: unique symbol;
declare const int16HostBrand: unique symbol;
declare const uInt16HostBrand: unique symbol;
declare const int32HostBrand: unique symbol;
declare const uInt32HostBrand: unique symbol;
declare const int64HostBrand: unique symbol;
declare const uInt64HostBrand: unique symbol;
declare const singleHostBrand: unique symbol;
declare const doubleHostBrand: unique symbol;
declare const decimalHostBrand: unique symbol;
declare const charHostBrand: unique symbol;
declare const hostArrayBrand: unique symbol;
declare const hostDelegateBrand: unique symbol;

export interface ClrHostValue {
  readonly [clrHostBrand]: true;
}

export interface ClrInterfaceView<out TInputMarker> extends ClrHostValue {
  readonly [clrInterfaceViewBrand]: TInputMarker;
}

export interface ReferenceTypeTrait {
  readonly [referenceTypeTraitBrand]: true;
}

export interface PublicDefaultConstructorTrait {
  readonly [publicDefaultConstructorTraitBrand]: true;
}

export interface InterfaceTypeTrait {
  readonly [interfaceTypeTraitBrand]: true;
}

export interface ValueTypeTrait {
  readonly [valueTypeTraitBrand]: true;
}

export interface EnumTypeTrait {
  readonly [enumTypeTraitBrand]: true;
}

export interface StaticTypeTrait {
  readonly [staticTypeTraitBrand]: true;
}

export interface HostType<out TInstance, out TTraits = unknown> extends ClrHostValue {
  readonly [hostTypeBrand]: TInstance;
  readonly [hostTypeTraitsBrand]: TTraits;
}

export type FamilyArgumentOmitted = typeof familyArgumentOmitted;

export type IsAny<TValue> = 0 extends 1 & TValue ? true : false;
export type IsNever<TValue> = [TValue] extends [never] ? true : false;
export type IsFamilyArgumentOmitted<TValue> =
  IsAny<TValue> extends true
    ? false
    : IsNever<TValue> extends true
      ? false
      : [TValue] extends [FamilyArgumentOmitted]
        ? [FamilyArgumentOmitted] extends [TValue]
          ? true
          : false
        : false;

export interface NumericHostValue extends ClrHostValue {
  readonly [numericHostValueBrand]: true;
}

export interface SByteHost extends NumericHostValue {
  readonly [sByteHostBrand]: true;
}
export interface ByteHost extends NumericHostValue {
  readonly [byteHostBrand]: true;
}
export interface Int16Host extends NumericHostValue {
  readonly [int16HostBrand]: true;
}
export interface UInt16Host extends NumericHostValue {
  readonly [uInt16HostBrand]: true;
}
export interface Int32Host extends NumericHostValue {
  readonly [int32HostBrand]: true;
}
export interface UInt32Host extends NumericHostValue {
  readonly [uInt32HostBrand]: true;
}
export interface Int64Host extends NumericHostValue {
  readonly [int64HostBrand]: true;
}
export interface UInt64Host extends NumericHostValue {
  readonly [uInt64HostBrand]: true;
}
export interface SingleHost extends NumericHostValue {
  readonly [singleHostBrand]: true;
}
export interface DoubleHost extends NumericHostValue {
  readonly [doubleHostBrand]: true;
}
export interface DecimalHost extends NumericHostValue {
  readonly [decimalHostBrand]: true;
}
export interface CharHost extends NumericHostValue {
  readonly [charHostBrand]: true;
}

interface StrongNumericIdentity<
  out TClr extends NumericHostValue,
  out TLiteral extends number
> extends ClrHostValue {
  readonly [strongNumericBrand]: readonly [TClr, TLiteral];
}

export type StrongNumeric<TClr extends NumericHostValue, TLiteral extends number = number> = TClr &
  StrongNumericIdentity<TClr, TLiteral>;

export type EnumInput<TEnum extends ClrHostValue> = TEnum | 0 | StrongNumeric<NumericHostValue, 0>;

export interface HostArray<out T = unknown> extends ClrHostValue, Iterable<T>, AsyncIterable<T> {
  readonly [hostArrayBrand]: T;
  readonly length: number;
  [index: number]: T;
}

export interface HostDelegate extends ClrHostValue {
  readonly [hostDelegateBrand]: true;
}

declare global {
  namespace Microsoft.ClearScript {
    type ClrHostValue = import("./HostType").ClrHostValue;
    type ClrInterfaceView<TInputMarker> = import("./HostType").ClrInterfaceView<TInputMarker>;
    type HostType<TInstance, TTraits = unknown> = import("./HostType").HostType<TInstance, TTraits>;
    type ReferenceTypeTrait = import("./HostType").ReferenceTypeTrait;
    type PublicDefaultConstructorTrait = import("./HostType").PublicDefaultConstructorTrait;
    type InterfaceTypeTrait = import("./HostType").InterfaceTypeTrait;
    type ValueTypeTrait = import("./HostType").ValueTypeTrait;
    type EnumTypeTrait = import("./HostType").EnumTypeTrait;
    type StaticTypeTrait = import("./HostType").StaticTypeTrait;
    type StrongNumeric<
      TClr extends import("./HostType").NumericHostValue,
      TLiteral extends number = number
    > = import("./HostType").StrongNumeric<TClr, TLiteral>;
    type EnumInput<TEnum extends import("./HostType").ClrHostValue> =
      import("./HostType").EnumInput<TEnum>;
    type HostArray<T = unknown> = import("./HostType").HostArray<T>;
    type HostDelegate = import("./HostType").HostDelegate;
    type NumericHostValue = import("./HostType").NumericHostValue;
    type SByteHost = import("./HostType").SByteHost;
    type ByteHost = import("./HostType").ByteHost;
    type Int16Host = import("./HostType").Int16Host;
    type UInt16Host = import("./HostType").UInt16Host;
    type Int32Host = import("./HostType").Int32Host;
    type UInt32Host = import("./HostType").UInt32Host;
    type Int64Host = import("./HostType").Int64Host;
    type UInt64Host = import("./HostType").UInt64Host;
    type SingleHost = import("./HostType").SingleHost;
    type DoubleHost = import("./HostType").DoubleHost;
    type DecimalHost = import("./HostType").DecimalHost;
    type CharHost = import("./HostType").CharHost;
    type FamilyArgumentOmitted = import("./HostType").FamilyArgumentOmitted;
    type IsFamilyArgumentOmitted<TValue> = import("./HostType").IsFamilyArgumentOmitted<TValue>;
  }
}

export {};
