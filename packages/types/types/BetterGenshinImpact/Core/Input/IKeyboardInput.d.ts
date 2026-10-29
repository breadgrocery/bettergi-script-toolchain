import type {
  EnumInput,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../../Vanara/PInvoke/User32";

/**
 * 键盘输入接口
 * @since 0.67.0
 */
declare const iKeyboardInputInputBrand: unique symbol;
export interface IKeyboardInputInput {
  readonly [iKeyboardInputInputBrand]: true;
}

export interface IKeyboardInput
  extends Microsoft.ClearScript.ClrInterfaceView<IKeyboardInputInput>, IKeyboardInputInput {
  /**
   * 按下指定按键
   * @param key 虚拟键码
   * @since 0.67.0
   */
  keyDown(key: EnumInput<Vanara.PInvoke.User32.VK>): BetterGenshinImpact.Core.Input.IKeyboardInput;
  /**
   * 抬起指定按键
   * @param key 虚拟键码
   * @since 0.67.0
   */
  keyUp(key: EnumInput<Vanara.PInvoke.User32.VK>): BetterGenshinImpact.Core.Input.IKeyboardInput;
  /**
   * 单击指定按键（按下后抬起）
   * @param key 虚拟键码
   * @since 0.67.0
   */
  keyPress(key: EnumInput<Vanara.PInvoke.User32.VK>): BetterGenshinImpact.Core.Input.IKeyboardInput;
  /**
   * 等待指定毫秒数
   * @param ms 等待毫秒数
   * @since 0.67.0
   */
  sleep(ms: number | StrongNumeric<Int32Host>): BetterGenshinImpact.Core.Input.IKeyboardInput;
}

declare global {
  namespace BetterGenshinImpact.Core.Input {
    type IKeyboardInputInput = import("./IKeyboardInput").IKeyboardInputInput;
    type IKeyboardInput = import("./IKeyboardInput").IKeyboardInput;
  }
}

export interface IKeyboardInputHostType extends HostType<IKeyboardInput, InterfaceTypeTrait> {}

export {};
