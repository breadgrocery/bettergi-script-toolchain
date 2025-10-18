import { type ExtractSettingsMap, type Settings } from "@bettergi/cli";

const settings = [
  {
    type: "input-text",
    name: "name",
    label: "名称",
    default: "开发者"
  }
] as const satisfies Settings;

export default settings as Settings;

/** Override settings declaration */
export type SettingsMap = ExtractSettingsMap<typeof settings>;

declare global {
  var settings: SettingsMap;
}
