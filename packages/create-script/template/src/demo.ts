import { findImage, waitUntil } from "@bettergi/utils";

export const openMail = async () => {
  // 等待直到找到邮件图标，超时5秒，每秒检查一次，等待期间按 Esc 键打开菜单
  const found = await waitUntil(
    () => findImage("./assets/mail.png") !== undefined,
    5000,
    1000,
    () => keyPress("ESCAPE")
  );
  if (!found) throw new Error("Mail icon not found");

  const mailIcon = findImage("./assets/mail.png")!;
  mailIcon.click();
};
