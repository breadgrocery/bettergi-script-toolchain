import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const normalizationFormBrand: unique symbol;
export interface NormalizationForm extends ClrHostValue {
  readonly [normalizationFormBrand]: true;
}

declare global {
  namespace System.Text {
    type NormalizationForm = import("./NormalizationForm").NormalizationForm;
  }
}

export interface NormalizationFormHostType extends HostType<NormalizationForm, EnumTypeTrait> {
  readonly formC: NormalizationForm;
  readonly formD: NormalizationForm;
  readonly formKC: NormalizationForm;
  readonly formKD: NormalizationForm;
}

export {};
