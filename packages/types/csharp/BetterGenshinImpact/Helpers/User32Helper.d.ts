export type Key =
  | "LBUTTON" // 鼠标左键
  | "RBUTTON" // 鼠标右键
  | "CANCEL" // 取消键（通常用于中断操作）
  | "MBUTTON" // 鼠标中键（三键鼠标）
  | "XBUTTON1" // 鼠标 X1 键（侧键）
  | "XBUTTON2" // 鼠标 X2 键（侧键）
  | "BACK" // 退格键（Backspace）
  | "TAB" // 制表键（Tab）
  | "CLEAR" // 清除键（例如小键盘的“5”）
  | "RETURN" // 回车键（Enter）
  | "SHIFT" // Shift 键（不区分左右）
  | "LSHIFT" // 左 Shift 键
  | "RSHIFT" // 右 Shift 键
  | "CONTROL" // Ctrl 键（不区分左右）
  | "LCONTROL" // 左 Ctrl 键
  | "RCONTROL" // 右 Ctrl 键
  | "MENU" // Alt 键（不区分左右）
  | "LMENU" // 左 Alt 键
  | "RMENU" // 右 Alt 键
  | "PAUSE" // 暂停键（Pause）
  | "CAPITAL" // 大写锁定键（Caps Lock）
  | "KANA" // 日文输入法假名模式
  | "HANGUL" // 韩文输入法 Hangul 模式
  | "HANGUEL" // 韩文输入法 Hanguel 模式（同 Hangul）
  | "IME_ON" // 输入法开启状态
  | "JUNJA" // 韩文输入法 Junja 模式
  | "FINAL" // 输入法最终模式（韩文）
  | "HANJA" // 韩文输入法 Hanja 模式
  | "KANJI" // 日文输入法汉字模式
  | "IME_OFF" // 输入法关闭状态
  | "ESCAPE" // Esc 键
  | "CONVERT" // 输入法转换键（日文/中文）
  | "NONCONVERT" // 输入法不转换键（日文/中文）
  | "ACCEPT" // 输入法接受操作
  | "MODECHANGE" // 输入法模式切换
  | "SPACE" // 空格键
  | "PRIOR" // Page Up 键
  | "NEXT" // Page Down 键
  | "END" // End 键
  | "HOME" // Home 键
  | "UP" // 上方向键
  | "DOWN" // 下方向键
  | "LEFT" // 左方向键
  | "RIGHT" // 右方向键
  | "SELECT" // Select 键（旧键盘）
  | "PRINT" // 打印屏幕键（Print Screen）
  | "EXECUTE" // 执行键（旧键盘）
  | "SNAPSHOT" // 截屏键（同 Print Screen）
  | "INSERT" // Insert 键
  | "DELETE" // Delete 键
  | "HELP" // 帮助键（旧键盘）
  | "0" // 数字 0 键
  | "1" // 数字 1 键
  | "2" // 数字 2 键
  | "3" // 数字 3 键
  | "4" // 数字 4 键
  | "5" // 数字 5 键
  | "6" // 数字 6 键
  | "7" // 数字 7 键
  | "8" // 数字 8 键
  | "9" // 数字 9 键
  | "A" // 字母 A 键
  | "B" // 字母 B 键
  | "C" // 字母 C 键
  | "D" // 字母 D 键
  | "E" // 字母 E 键
  | "F" // 字母 F 键
  | "G" // 字母 G 键
  | "H" // 字母 H 键
  | "I" // 字母 I 键
  | "J" // 字母 J 键
  | "K" // 字母 K 键
  | "L" // 字母 L 键
  | "M" // 字母 M 键
  | "N" // 字母 N 键
  | "O" // 字母 O 键
  | "P" // 字母 P 键
  | "Q" // 字母 Q 键
  | "R" // 字母 R 键
  | "S" // 字母 S 键
  | "T" // 字母 T 键
  | "U" // 字母 U 键
  | "V" // 字母 V 键
  | "W" // 字母 W 键
  | "X" // 字母 X 键
  | "Y" // 字母 Y 键
  | "Z" // 字母 Z 键
  | "LWIN" // 左 Windows 键
  | "RWIN" // 右 Windows 键
  | "APPS" // 应用程序键（右键菜单键）
  | "SLEEP" // 计算机睡眠键
  | "NUMPAD0" // 小键盘 0 键
  | "NUMPAD1" // 小键盘 1 键
  | "NUMPAD2" // 小键盘 2 键
  | "NUMPAD3" // 小键盘 3 键
  | "NUMPAD4" // 小键盘 4 键
  | "NUMPAD5" // 小键盘 5 键
  | "NUMPAD6" // 小键盘 6 键
  | "NUMPAD7" // 小键盘 7 键
  | "NUMPAD8" // 小键盘 8 键
  | "NUMPAD9" // 小键盘 9 键
  | "MULTIPLY" // 小键盘乘号键（*）
  | "ADD" // 小键盘加号键（+）
  | "SEPARATOR" // 分隔符键（特定键盘）
  | "SUBTRACT" // 小键盘减号键（-）
  | "DECIMAL" // 小键盘小数点键（.）
  | "DIVIDE" // 小键盘除号键（/）
  | "F1" // 功能键 F1
  | "F2" // 功能键 F2
  | "F3" // 功能键 F3
  | "F4" // 功能键 F4
  | "F5" // 功能键 F5
  | "F6" // 功能键 F6
  | "F7" // 功能键 F7
  | "F8" // 功能键 F8
  | "F9" // 功能键 F9
  | "F10" // 功能键 F10
  | "F11" // 功能键 F11
  | "F12" // 功能键 F12
  | "F13" // 功能键 F13（部分键盘）
  | "F14" // 功能键 F14（部分键盘）
  | "F15" // 功能键 F15（部分键盘）
  | "F16" // 功能键 F16（部分键盘）
  | "F17" // 功能键 F17（部分键盘）
  | "F18" // 功能键 F18（部分键盘）
  | "F19" // 功能键 F19（部分键盘）
  | "F20" // 功能键 F20（部分键盘）
  | "F21" // 功能键 F21（部分键盘）
  | "F22" // 功能键 F22（部分键盘）
  | "F23" // 功能键 F23（部分键盘）
  | "F24" // 功能键 F24（部分键盘）
  | "NUMLOCK" // 数字锁定键（Num Lock）
  | "SCROLL" // 滚动锁定键（Scroll Lock）
  | "BROWSER_BACK" // 浏览器后退键
  | "BROWSER_FORWARD" // 浏览器前进键
  | "BROWSER_REFRESH" // 浏览器刷新键
  | "BROWSER_STOP" // 浏览器停止键
  | "BROWSER_SEARCH" // 浏览器搜索键
  | "BROWSER_FAVORITES" // 浏览器收藏夹键
  | "BROWSER_HOME" // 浏览器主页键
  | "VOLUME_MUTE" // 音量静音键
  | "VOLUME_DOWN" // 音量减小键
  | "VOLUME_UP" // 音量增大键
  | "MEDIA_NEXT_TRACK" // 下一曲目键
  | "MEDIA_PREV_TRACK" // 上一曲目键
  | "MEDIA_STOP" // 媒体停止键
  | "MEDIA_PLAY_PAUSE" // 播放/暂停键
  | "LAUNCH_MAIL" // 启动邮件程序键
  | "LAUNCH_MEDIA_SELECT" // 启动媒体选择器键
  | "LAUNCH_APP1" // 启动应用程序1键
  | "LAUNCH_APP2" // 启动应用程序2键
  | "OEM_1" // 分号/冒号键（; :，因键盘布局而异）
  | "OEM_PLUS" // 加号键（+，因键盘布局而异）
  | "OEM_COMMA" // 逗号键（,，因键盘布局而异）
  | "OEM_MINUS" // 减号键（-，因键盘布局而异）
  | "OEM_PERIOD" // 句号键（.，因键盘布局而异）
  | "OEM_2" // 问号键（?，因键盘布局而异）
  | "OEM_3" // 波浪号键（` ~，因键盘布局而异）
  | "OEM_4" // 左方括号键（[ {，因键盘布局而异）
  | "OEM_5" // 反斜杠键（\ |，因键盘布局而异）
  | "OEM_6" // 右方括号键（] }，因键盘布局而异）
  | "OEM_7" // 引号键（' "，因键盘布局而异）
  | "OEM_8" // 杂项字符键（因键盘布局而异）
  | "OEM_NEC_EQUAL" // NEC 小键盘等号键（=）
  | "OEM_FJ_JISHO" // 富士通日语输入法“辞书”键
  | "OEM_FJ_MASSHOU" // 富士通日语输入法“未登録”键
  | "OEM_FJ_TOUROKU" // 富士通日语输入法“登録”键
  | "OEM_FJ_LOYA" // 富士通日语输入法左 Oyayubi 键
  | "OEM_FJ_ROYA" // 富士通日语输入法右 Oyayubi 键
  | "OEM_AX" // AX 键（日语键盘）
  | "OEM_102" // 反斜杠/尖括号键（\ > <，某些欧洲键盘）
  | "OEM_RESET" // OEM 重置键（Nokia/Ericsson 定义）
  | "OEM_JUMP" // OEM 跳转键（Nokia/Ericsson 定义）
  | "OEM_PA1" // OEM PA1 键（Nokia/Ericsson 定义）
  | "OEM_PA2" // OEM PA2 键（Nokia/Ericsson 定义）
  | "OEM_PA3" // OEM PA3 键（Nokia/Ericsson 定义）
  | "OEM_WSCTRL" // OEM WSCTRL 键（Nokia/Ericsson 定义）
  | "OEM_CUSEL" // OEM CUSEL 键（Nokia/Ericsson 定义）
  | "OEM_ATTN" // OEM ATTN 键（Nokia/Ericsson 定义）
  | "OEM_FINISH" // OEM FINISH 键（Nokia/Ericsson 定义）
  | "OEM_COPY" // OEM COPY 键（Nokia/Ericsson 定义）
  | "OEM_AUTO" // OEM AUTO 键（Nokia/Ericsson 定义）
  | "OEM_ENLW" // OEM ENLW 键（Nokia/Ericsson 定义）
  | "OEM_BACKTAB" // OEM BackTab 键（Nokia/Ericsson 定义）
  | "GAMEPAD_A" // 游戏手柄 A 键
  | "GAMEPAD_B" // 游戏手柄 B 键
  | "GAMEPAD_X" // 游戏手柄 X 键
  | "GAMEPAD_Y" // 游戏手柄 Y 键
  | "GAMEPAD_LEFT_SHOULDER" // 游戏手柄左肩键
  | "GAMEPAD_RIGHT_SHOULDER" // 游戏手柄右肩键
  | "GAMEPAD_LEFT_TRIGGER" // 游戏手柄左扳机键
  | "GAMEPAD_RIGHT_TRIGGER" // 游戏手柄右扳机键
  | "GAMEPAD_DPAD_UP" // 游戏手柄方向键上
  | "GAMEPAD_DPAD_DOWN" // 游戏手柄方向键下
  | "GAMEPAD_DPAD_LEFT" // 游戏手柄方向键左
  | "GAMEPAD_DPAD_RIGHT" // 游戏手柄方向键右
  | "GAMEPAD_MENU" // 游戏手柄菜单键
  | "GAMEPAD_VIEW" // 游戏手柄视图键
  | "GAMEPAD_LEFT_THUMBSTICK_BUTTON" // 游戏手柄左摇杆按钮
  | "GAMEPAD_RIGHT_THUMBSTICK_BUTTON" // 游戏手柄右摇杆按钮
  | "GAMEPAD_LEFT_THUMBSTICK_UP" // 游戏手柄左摇杆上推
  | "GAMEPAD_LEFT_THUMBSTICK_DOWN" // 游戏手柄左摇杆下推
  | "GAMEPAD_LEFT_THUMBSTICK_LEFT" // 游戏手柄左摇杆左推
  | "GAMEPAD_LEFT_THUMBSTICK_RIGHT" // 游戏手柄左摇杆右推
  | "GAMEPAD_RIGHT_THUMBSTICK_UP" // 游戏手柄右摇杆上推
  | "GAMEPAD_RIGHT_THUMBSTICK_DOWN" // 游戏手柄右摇杆下推
  | "GAMEPAD_RIGHT_THUMBSTICK_LEFT" // 游戏手柄右摇杆左推
  | "GAMEPAD_RIGHT_THUMBSTICK_RIGHT" // 游戏手柄右摇杆右推
  | "PROCESSKEY" // IME 处理键（用于输入法处理）
  | "ICO_CLEAR" // ICO 清除键（旧键盘）
  | "PACKET" // Unicode 字符输入键（用于发送 Unicode 字符）
  | "ATTN" // Attn 键（旧系统）
  | "CRSEL" // 光标选择键（旧系统）
  | "EXSEL" // 扩展选择键（旧系统）
  | "EREOF" // Erase EOF 键（旧系统）
  | "PLAY" // 播放键（旧系统）
  | "ZOOM" // 缩放键（旧系统）
  | "NONAME" // 保留键（未命名）
  | "PA1" // PA1 键（旧系统）
  | "OEM_CLEAR"; // 清除键（旧键盘）

export type KeyCode =
  | Uppercase<Key>
  | Lowercase<Key>
  | Uppercase<`VK_${Key}`>
  | Lowercase<`VK_${Key}`>;
