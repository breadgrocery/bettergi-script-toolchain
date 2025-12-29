import crypto from "node:crypto";
import path from "node:path";
import { pinyin } from "pinyin-pro";

export const sha256 = (str: string) => {
  return crypto
    .createHash("sha256")
    .update(path.relative(process.cwd(), str))
    .digest("hex")
    .slice(0, 12);
};

export const sanitizeVariableName = (str: string) => {
  const { name } = path.parse(str);
  return pinyin(name, { toneType: "none", separator: "" }).replace(/[^a-zA-Z0-9_$]/g, "_");
};
