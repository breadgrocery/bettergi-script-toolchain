import "../../../System/Collections/Generic/IEnumerable";
import "./LocalizedString";

declare global {
  namespace Microsoft.Extensions.Localization {
    interface IStringLocalizer<T> {
      [name: string]: Microsoft.Extensions.Localization.LocalizedString | ((...args: any[]) => any);

      getAllStrings(
        includeParentCultures: boolean
      ): System.Collections.Generic.IEnumerable<Microsoft.Extensions.Localization.LocalizedString>;
    }
  }
}

export {};
