import { type ExtractSettingsMap, type Settings } from "@bettergi/cli";

const settings = [
  {
    type: "checkbox",
    name: "welcome",
    label: "是否打印欢迎语",
    default: true
  },
  {
    type: "input-text",
    name: "username",
    label: "用户名",
    default: "哈基米"
  }
] as const satisfies Settings;

export default settings as Settings;

/** 覆写设置类型定义 */
export type SettingsMap = ExtractSettingsMap<typeof settings>;

declare global {
  var settings: Record<string, any> & SettingsMap;
}
