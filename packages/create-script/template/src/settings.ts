import { type ExtractSettingsMap, defineSettings } from "@bettergi/cli";

const settings = defineSettings([
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
    default: "开发者"
  }
]);

/** 覆写脚本设置类型定义 */
type GlobalSettings = ExtractSettingsMap<typeof settings> & Record<string, any>;
declare global {
  var settings: GlobalSettings;
}

export default settings;
