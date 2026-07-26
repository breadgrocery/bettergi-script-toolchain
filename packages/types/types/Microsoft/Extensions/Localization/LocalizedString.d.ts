import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../../ClearScript/HostType";

declare const localizedStringBrand: unique symbol;
export interface LocalizedString extends ClrHostValue {
  readonly [localizedStringBrand]: true;
  readonly name: string;
  readonly resourceNotFound: boolean;
  readonly searchedLocation: string;
  readonly value: string;
  toString(): string;
}

declare global {
  namespace Microsoft.Extensions.Localization {
    type LocalizedString = import("./LocalizedString").LocalizedString;
  }
}

export interface LocalizedStringHostType extends HostType<LocalizedString, ReferenceTypeTrait> {
  new (name: string, value: string): LocalizedString;
  new (name: string, value: string, resourceNotFound: boolean): LocalizedString;
  new (
    name: string,
    value: string,
    resourceNotFound: boolean,
    searchedLocation: string | null
  ): LocalizedString;
}

export {};
