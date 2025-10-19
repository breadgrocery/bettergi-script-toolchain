import "@/csharp/Microsoft/Extensions/Localization/IStringLocalizer";
import "@/csharp/System/Globalization/CultureInfo";

declare global {
  namespace BetterGenshinImpact.GameTask.Model {
    abstract class BaseTaskParam<T> {
      gameCultureInfo: System.Globalization.CultureInfo;

      stringLocalizer: Microsoft.Extensions.Localization.IStringLocalizer<T>;
    }
  }
}
export {};
