import "../../System/Collections/Generic/IEnumerable";
import "../../System/TimeSpan";
import "./IMouseSimulator";

declare global {
  namespace Fischless.WindowsInput {
    interface IKeyboardSimulator {
      mouse: Fischless.WindowsInput.IMouseSimulator;

      keyDown(keyCode: string): Fischless.WindowsInput.IKeyboardSimulator;

      keyDown(
        isExtendedKey: boolean | null,
        keyCode: string
      ): Fischless.WindowsInput.IKeyboardSimulator;

      keyPress(keyCode: string): Fischless.WindowsInput.IKeyboardSimulator;

      keyPress(
        isExtendedKey: boolean | null,
        keyCode: string
      ): Fischless.WindowsInput.IKeyboardSimulator;

      keyPress(keyCodes: string[]): Fischless.WindowsInput.IKeyboardSimulator;

      keyPress(
        isExtendedKey: boolean | null,
        keyCodes: string[]
      ): Fischless.WindowsInput.IKeyboardSimulator;

      keyUp(keyCode: string): Fischless.WindowsInput.IKeyboardSimulator;

      keyUp(
        isExtendedKey: boolean | null,
        keyCode: string
      ): Fischless.WindowsInput.IKeyboardSimulator;

      modifiedKeyStroke(
        modifierKeyCodes: System.Collections.Generic.IEnumerable<string>,
        keyCodes: System.Collections.Generic.IEnumerable<string>
      ): Fischless.WindowsInput.IKeyboardSimulator;

      modifiedKeyStroke(
        modifierKeyCodes: System.Collections.Generic.IEnumerable<string>,
        keyCode: string
      ): Fischless.WindowsInput.IKeyboardSimulator;

      modifiedKeyStroke(
        modifierKeyCode: string,
        keyCodes: System.Collections.Generic.IEnumerable<string>
      ): Fischless.WindowsInput.IKeyboardSimulator;

      modifiedKeyStroke(
        modifierKeyCode: string,
        keyCode: string
      ): Fischless.WindowsInput.IKeyboardSimulator;

      textEntry(text: string): Fischless.WindowsInput.IKeyboardSimulator;

      sleep(millsecondsTimeout: number): Fischless.WindowsInput.IKeyboardSimulator;

      sleep(timeout: System.TimeSpan): Fischless.WindowsInput.IKeyboardSimulator;
    }
  }
}

export {};
