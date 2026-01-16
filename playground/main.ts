import { findTextWithinListView } from "@bettergi/utils";

(async function () {
  const t5 = await findTextWithinListView(
    "哈哈",
    {
      x: 120,
      y: 95,
      w: 1045,
      h: 865,
      lineHeight: 115,
      scrollLines: 7
    },
    { contains: true }
  );

  t5?.drawSelf("result.png");
})();
