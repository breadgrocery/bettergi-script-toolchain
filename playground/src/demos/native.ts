const printLogs = () => {
  //! 如果脚本设置中禁用了打印欢迎语，则跳过
  if (!settings.welcome) return;

  //! 打印欢迎语，使用脚本设置中设置的用户名
  if (settings.username) {
    log.info("你好，{username}！", settings.username);
  }
};

const findText = () => {
  //! 创建搜索区域（整个屏幕）
  const region = captureGameRegion();

  //! 识别指定区域的文字（坐标宽高必须以1920x1080为基准）
  const tro1 = RecognitionObject.ocr(192, 108, 1536, 864);
  const list1 = region.findMulti(tro1);
  for (let i = 0; i < list1.count; i++) {
    if (list1[i].isExist()) {
      log.info(
        "指定区域识别到文字：{text}，位置：({x}, {y})",
        list1[i].text,
        list1[i].x,
        list1[i].y
      );
    }
  }

  //! 识别整个搜索区域的文字
  const tro2 = RecognitionObject.ocrThis;
  const list2 = region.findMulti(tro2);
  for (let i = 0; i < list2.count; i++) {
    if (list2[i].isExist()) {
      log.info(
        "整个屏幕识别到文字：{text}，位置：({x}, {y})",
        list2[i].text,
        list2[i].x,
        list2[i].y
      );
    }
  }
};

const findImage = () => {
  //! 创建搜索区域（整个屏幕）
  const region = captureGameRegion();

  //! 创建图片识别对象
  const mat = file.readImageMatSync("assets/邮件.png");

  //! 识别整个搜索区域的图片
  const iro1 = RecognitionObject.templateMatch(mat);
  const r2 = region.find(iro1);
  if (r2 != null && r2.isExist()) {
    log.info(`找到图片，位置：(${r2.x}, ${r2.y})`);
  }

  //! 识别指定区域的图片（坐标宽高必须以1920x1080为基准）
  const iro2 = RecognitionObject.templateMatch(mat, 192, 108, 1536, 864);
  const r3 = region.find(iro2);
  if (r3 != null && r3.isExist()) {
    log.info(`找到图片，位置：(${r3.x}, ${r3.y})`);
  }
};

const goShopping = async () => {
  await pathingScript.runFile("assets/布兰琪.json");
};

export const nativeDemo = async () => {
  //! 示例1：打印日志
  printLogs();

  //! 示例2：文字识别
  findText();

  //! 示例3：图片识别
  findImage();

  //! 示例4：导航去蒙德杂货店（路径追踪/录制回放）
  await goShopping();
};
