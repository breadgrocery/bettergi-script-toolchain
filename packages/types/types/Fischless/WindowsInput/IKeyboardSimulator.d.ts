import type {
  CharHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/Collections/Generic/IEnumerable";
import "../../System/Nullable";
import "../../System/TimeSpan";
import "../../Vanara/PInvoke/User32";
import "./IMouseSimulator";

declare const iKeyboardSimulatorInputBrand: unique symbol;
export interface IKeyboardSimulatorInput {
  readonly [iKeyboardSimulatorInputBrand]: true;
}

export interface IKeyboardSimulator
  extends Microsoft.ClearScript.ClrInterfaceView<IKeyboardSimulatorInput>, IKeyboardSimulatorInput {
  readonly mouse: Fischless.WindowsInput.IMouseSimulator;
  keyDown(
    isExtendedKey: boolean | null | null,
    keyCode: EnumInput<Vanara.PInvoke.User32.VK>
  ): Fischless.WindowsInput.IKeyboardSimulator;
  keyDown(keyCode: EnumInput<Vanara.PInvoke.User32.VK>): Fischless.WindowsInput.IKeyboardSimulator;
  keyPress(
    ...keyCodes: EnumInput<Vanara.PInvoke.User32.VK>[]
  ): Fischless.WindowsInput.IKeyboardSimulator;
  keyPress(
    isExtendedKey: boolean | null | null,
    ...keyCodes: EnumInput<Vanara.PInvoke.User32.VK>[]
  ): Fischless.WindowsInput.IKeyboardSimulator;
  keyPress(
    isExtendedKey: boolean | null | null,
    keyCode: EnumInput<Vanara.PInvoke.User32.VK>
  ): Fischless.WindowsInput.IKeyboardSimulator;
  keyPress(
    isExtendedKey: boolean | null | null,
    keyCodes: HostArray<EnumInput<Vanara.PInvoke.User32.VK>>
  ): Fischless.WindowsInput.IKeyboardSimulator;
  keyPress(keyCode: EnumInput<Vanara.PInvoke.User32.VK>): Fischless.WindowsInput.IKeyboardSimulator;
  keyPress(
    keyCodes: HostArray<EnumInput<Vanara.PInvoke.User32.VK>>
  ): Fischless.WindowsInput.IKeyboardSimulator;
  keyUp(
    isExtendedKey: boolean | null | null,
    keyCode: EnumInput<Vanara.PInvoke.User32.VK>
  ): Fischless.WindowsInput.IKeyboardSimulator;
  keyUp(keyCode: EnumInput<Vanara.PInvoke.User32.VK>): Fischless.WindowsInput.IKeyboardSimulator;
  modifiedKeyStroke(
    modifierKey: EnumInput<Vanara.PInvoke.User32.VK>,
    keyCodes: System.Collections.Generic.IEnumerable<Vanara.PInvoke.User32.VK>
  ): Fischless.WindowsInput.IKeyboardSimulator;
  modifiedKeyStroke(
    modifierKeyCode: EnumInput<Vanara.PInvoke.User32.VK>,
    keyCode: EnumInput<Vanara.PInvoke.User32.VK>
  ): Fischless.WindowsInput.IKeyboardSimulator;
  modifiedKeyStroke(
    modifierKeyCodes: System.Collections.Generic.IEnumerable<Vanara.PInvoke.User32.VK>,
    keyCode: EnumInput<Vanara.PInvoke.User32.VK>
  ): Fischless.WindowsInput.IKeyboardSimulator;
  modifiedKeyStroke(
    modifierKeyCodes: System.Collections.Generic.IEnumerable<Vanara.PInvoke.User32.VK>,
    keyCodes: System.Collections.Generic.IEnumerable<Vanara.PInvoke.User32.VK>
  ): Fischless.WindowsInput.IKeyboardSimulator;
  textEntry(character: number | StrongNumeric<CharHost>): Fischless.WindowsInput.IKeyboardSimulator;
  textEntry(text: string): Fischless.WindowsInput.IKeyboardSimulator;
  sleep(
    millsecondsTimeout: number | StrongNumeric<Int32Host>
  ): Fischless.WindowsInput.IKeyboardSimulator;
  sleep(timeout: System.TimeSpan): Fischless.WindowsInput.IKeyboardSimulator;
}

declare global {
  namespace Fischless.WindowsInput {
    type IKeyboardSimulatorInput = import("./IKeyboardSimulator").IKeyboardSimulatorInput;
  }
}

declare global {
  namespace Fischless.WindowsInput {
    type IKeyboardSimulator = import("./IKeyboardSimulator").IKeyboardSimulator;
  }
}

export interface IKeyboardSimulatorHostType extends HostType<
  IKeyboardSimulator,
  InterfaceTypeTrait
> {}

export {};
