// sort-imports-ignore

// 全局对象
import "./bindings/keyMouseScript"; // 录制回放
import "./bindings/pathingScript"; // 地图追踪
import "./bindings/genshin"; // 游戏相关
import "./bindings/log"; // 日志
import "./bindings/file"; // 受限文件读写
import "./bindings/http"; // 受限 HTTP 请求
import "./bindings/notification"; // 通知推送

// 任务调度
import "./bindings/dispatcher"; // 任务调度器
import "./bindings/RealtimeTimer"; // 实时任务
import "./bindings/SoloTask"; // 独立任务
import "./bindings/AutoSkipConfig"; // 自动剧情跳过配置

// 取消令牌
import "./bindings/CancellationTokenSource";
import "./bindings/CancellationToken";

// 输入模拟
import "./bindings/PostMessage"; // 游戏窗口后台消息

// 全局方法：等待与版本
import "./bindings/sleep";
import "./bindings/getVersion";

// 全局方法：键盘
import "./bindings/keyDown";
import "./bindings/keyUp";
import "./bindings/keyPress";

// 全局方法：游戏窗口度量
import "./bindings/setGameMetrics";
import "./bindings/getGameMetrics";

// 全局方法：鼠标
import "./bindings/moveMouseBy";
import "./bindings/moveMouseTo";
import "./bindings/click";
import "./bindings/leftButtonClick";
import "./bindings/leftButtonDown";
import "./bindings/leftButtonUp";
import "./bindings/rightButtonClick";
import "./bindings/rightButtonDown";
import "./bindings/rightButtonUp";
import "./bindings/middleButtonClick";
import "./bindings/middleButtonDown";
import "./bindings/middleButtonUp";
import "./bindings/verticalScroll";

// 全局方法：截图、队伍与文本输入
import "./bindings/captureGameRegion";
import "./bindings/getAvatars";
import "./bindings/inputText";

// 识图与屏幕区域宿主类型
import "./bindings/Mat"; // OpenCvSharp 矩阵
import "./bindings/Point2f"; // 二维浮点坐标
import "./bindings/RecognitionObject"; // 图像识别
import "./bindings/DesktopRegion"; // 桌面区域
import "./bindings/GameCaptureRegion"; // 游戏截图区域
import "./bindings/ImageRegion"; // 图像区域
import "./bindings/Region"; // 通用屏幕区域

// 战斗场景与角色宿主类型
import "./bindings/CombatScenes";
import "./bindings/Avatar";

// OpenCvSharp 类型集合
import "./bindings/OpenCvSharp";

// 服务器时间宿主类型
import "./bindings/ServerTime";

// 自动任务参数、界面枚举与策略文件
import "./bindings/AutoDomainParam"; // 自动秘境
import "./bindings/AutoBossParam"; // 自动首领
import "./bindings/CountInventoryItemParam"; // 背包物品计数
import "./bindings/GridScreenName"; // 网格界面名称
import "./bindings/ItemIconRecognitionMode"; // 物品图标识别模式
import "./bindings/AutoFightParam"; // 自动战斗
import "./bindings/AutoLeyLineOutcropParam"; // 自动地脉花
import "./bindings/AutoStygianOnslaughtParam"; // 自动幽境危战
import "./bindings/strategyFile"; // 战斗策略文件

// 键鼠钩子宿主类型
import "./bindings/KeyMouseHook";

// System.Threading.Tasks.Task 宿主类型
import "./bindings/Task";

// BgiVision 页面定位宿主类型
import "./bindings/BvPage";
import "./bindings/BvLocator";
import "./bindings/BvImage";

// ClearScript 宿主函数
import "./bindings/host";

// HTML 遮罩
import "./bindings/htmlMask";

// JS 脚本自定义配置
import "./bindings/settings";
