import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./Collections/ObjectModel/ReadOnlyCollection";
import "./DateTime";
import "./DateTimeOffset";
import "./DayOfWeek";
import "./IEquatable";
import "./Runtime/Serialization/IDeserializationCallback";
import "./Runtime/Serialization/ISerializable";
import "./TimeSpan";
import "./ValueType";

declare const timeZoneInfoBrand: unique symbol;
export interface TimeZoneInfo
  extends
    ClrHostValue,
    System.Runtime.Serialization.ISerializableInput,
    System.Runtime.Serialization.IDeserializationCallbackInput {
  readonly [timeZoneInfoBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.TimeZoneInfo | null): boolean;
  getAdjustmentRules(): HostArray<TimeZoneInfo_AdjustmentRule>;
  getAmbiguousTimeOffsets(dateTime: System.DateTime): HostArray<System.TimeSpan>;
  getAmbiguousTimeOffsets(dateTimeOffset: System.DateTimeOffset): HostArray<System.TimeSpan>;
  getHashCode(): number;
  getUtcOffset(dateTime: System.DateTime): System.TimeSpan;
  getUtcOffset(dateTimeOffset: System.DateTimeOffset): System.TimeSpan;
  hasSameRules(other: System.TimeZoneInfo): boolean;
  isAmbiguousTime(dateTime: System.DateTime): boolean;
  isAmbiguousTime(dateTimeOffset: System.DateTimeOffset): boolean;
  isDaylightSavingTime(dateTime: System.DateTime): boolean;
  isDaylightSavingTime(dateTimeOffset: System.DateTimeOffset): boolean;
  isInvalidTime(dateTime: System.DateTime): boolean;
  readonly baseUtcOffset: System.TimeSpan;
  readonly daylightName: string;
  readonly displayName: string;
  readonly hasIanaId: boolean;
  readonly id: string;
  readonly standardName: string;
  readonly supportsDaylightSavingTime: boolean;
  toSerializedString(): string;
  toString(): string;
}

declare const timeZoneInfo_AdjustmentRuleBrand: unique symbol;
export interface TimeZoneInfo_AdjustmentRule
  extends
    ClrHostValue,
    System.Runtime.Serialization.ISerializableInput,
    System.Runtime.Serialization.IDeserializationCallbackInput {
  readonly [timeZoneInfo_AdjustmentRuleBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.TimeZoneInfo.AdjustmentRule | null): boolean;
  getHashCode(): number;
  readonly baseUtcOffsetDelta: System.TimeSpan;
  readonly dateEnd: System.DateTime;
  readonly dateStart: System.DateTime;
  readonly daylightDelta: System.TimeSpan;
  readonly daylightTransitionEnd: System.TimeZoneInfo.TransitionTime;
  readonly daylightTransitionStart: System.TimeZoneInfo.TransitionTime;
}

export interface TimeZoneInfo_AdjustmentRuleHostType extends HostType<
  TimeZoneInfo_AdjustmentRule,
  ReferenceTypeTrait
> {
  createAdjustmentRule(
    dateStart: System.DateTime,
    dateEnd: System.DateTime,
    daylightDelta: System.TimeSpan,
    daylightTransitionStart: System.TimeZoneInfo.TransitionTime,
    daylightTransitionEnd: System.TimeZoneInfo.TransitionTime,
    baseUtcOffsetDelta: System.TimeSpan
  ): System.TimeZoneInfo.AdjustmentRule;
  createAdjustmentRule(
    dateStart: System.DateTime,
    dateEnd: System.DateTime,
    daylightDelta: System.TimeSpan,
    daylightTransitionStart: System.TimeZoneInfo.TransitionTime,
    daylightTransitionEnd: System.TimeZoneInfo.TransitionTime
  ): System.TimeZoneInfo.AdjustmentRule;
}

declare global {
  namespace System.TimeZoneInfo {
    type AdjustmentRule = import("./TimeZoneInfo").TimeZoneInfo_AdjustmentRule;
  }
}

declare const timeZoneInfo_TransitionTimeBrand: unique symbol;
export interface TimeZoneInfo_TransitionTime
  extends
    ClrHostValue,
    System.Runtime.Serialization.ISerializableInput,
    System.Runtime.Serialization.IDeserializationCallbackInput {
  readonly [timeZoneInfo_TransitionTimeBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.TimeZoneInfo.TransitionTime): boolean;
  getHashCode(): number;
  readonly day: number;
  readonly dayOfWeek: System.DayOfWeek;
  readonly isFixedDateRule: boolean;
  readonly month: number;
  readonly timeOfDay: System.DateTime;
  readonly week: number;
}

export interface TimeZoneInfo_TransitionTimeHostType extends HostType<
  TimeZoneInfo_TransitionTime,
  ValueTypeTrait
> {
  createFixedDateRule(
    timeOfDay: System.DateTime,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>
  ): System.TimeZoneInfo.TransitionTime;
  createFloatingDateRule(
    timeOfDay: System.DateTime,
    month: number | StrongNumeric<Int32Host>,
    week: number | StrongNumeric<Int32Host>,
    dayOfWeek: EnumInput<System.DayOfWeek>
  ): System.TimeZoneInfo.TransitionTime;
}

declare global {
  namespace System.TimeZoneInfo {
    type TransitionTime = import("./TimeZoneInfo").TimeZoneInfo_TransitionTime;
  }
}

declare global {
  namespace System {
    type TimeZoneInfo = import("./TimeZoneInfo").TimeZoneInfo;
  }
}

export interface TimeZoneInfoHostType extends HostType<TimeZoneInfo, ReferenceTypeTrait> {
  readonly local: System.TimeZoneInfo;
  readonly utc: System.TimeZoneInfo;
  clearCachedData(): VoidResult;
  convertTimeBySystemTimeZoneId(
    dateTimeOffset: System.DateTimeOffset,
    destinationTimeZoneId: string
  ): System.DateTimeOffset;
  convertTimeBySystemTimeZoneId(
    dateTime: System.DateTime,
    destinationTimeZoneId: string
  ): System.DateTime;
  findSystemTimeZoneById(id: string): System.TimeZoneInfo;
  tryFindSystemTimeZoneById(
    id: string,
    timeZoneInfo: HostVariableOut<System.TimeZoneInfo>
  ): boolean;
  convertTimeBySystemTimeZoneId(
    dateTime: System.DateTime,
    sourceTimeZoneId: string,
    destinationTimeZoneId: string
  ): System.DateTime;
  convertTime(
    dateTimeOffset: System.DateTimeOffset,
    destinationTimeZone: System.TimeZoneInfo
  ): System.DateTimeOffset;
  convertTime(dateTime: System.DateTime, destinationTimeZone: System.TimeZoneInfo): System.DateTime;
  convertTime(
    dateTime: System.DateTime,
    sourceTimeZone: System.TimeZoneInfo,
    destinationTimeZone: System.TimeZoneInfo
  ): System.DateTime;
  convertTimeFromUtc(
    dateTime: System.DateTime,
    destinationTimeZone: System.TimeZoneInfo
  ): System.DateTime;
  convertTimeToUtc(dateTime: System.DateTime): System.DateTime;
  convertTimeToUtc(dateTime: System.DateTime, sourceTimeZone: System.TimeZoneInfo): System.DateTime;
  fromSerializedString(source: string): System.TimeZoneInfo;
  getSystemTimeZones(): System.Collections.ObjectModel.ReadOnlyCollection<System.TimeZoneInfo>;
  getSystemTimeZones(
    skipSorting: boolean
  ): System.Collections.ObjectModel.ReadOnlyCollection<System.TimeZoneInfo>;
  createCustomTimeZone(
    id: string,
    baseUtcOffset: System.TimeSpan,
    displayName: string | null,
    standardDisplayName: string | null
  ): System.TimeZoneInfo;
  createCustomTimeZone(
    id: string,
    baseUtcOffset: System.TimeSpan,
    displayName: string | null,
    standardDisplayName: string | null,
    daylightDisplayName: string | null,
    adjustmentRules: HostArray<TimeZoneInfo_AdjustmentRule> | null
  ): System.TimeZoneInfo;
  createCustomTimeZone(
    id: string,
    baseUtcOffset: System.TimeSpan,
    displayName: string | null,
    standardDisplayName: string | null,
    daylightDisplayName: string | null,
    adjustmentRules: HostArray<TimeZoneInfo_AdjustmentRule> | null,
    disableDaylightSavingTime: boolean
  ): System.TimeZoneInfo;
  tryConvertIanaIdToWindowsId(ianaId: string, windowsId: HostVariableOut<string>): boolean;
  tryConvertWindowsIdToIanaId(windowsId: string, ianaId: HostVariableOut<string>): boolean;
  tryConvertWindowsIdToIanaId(
    windowsId: string,
    region: string | null,
    ianaId: HostVariableOut<string>
  ): boolean;
  readonly AdjustmentRule: TimeZoneInfo_AdjustmentRuleHostType;
  readonly TransitionTime: TimeZoneInfo_TransitionTimeHostType;
}

export {};
