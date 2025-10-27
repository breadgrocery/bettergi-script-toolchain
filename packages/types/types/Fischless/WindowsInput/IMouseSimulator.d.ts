import "../../System/TimeSpan";
import "./IKeyboardSimulator";

declare global {
  namespace Fischless.WindowsInput {
    interface IMouseSimulator {
      keyboard: Fischless.WindowsInput.IKeyboardSimulator;

      moveMouseBy(pixelDeltaX: number, pixelDeltaY: number): Fischless.WindowsInput.IMouseSimulator;

      moveMouseTo(absoluteX: number, absoluteY: number): Fischless.WindowsInput.IMouseSimulator;

      moveMouseToPositionOnVirtualDesktop(
        absoluteX: number,
        absoluteY: number
      ): Fischless.WindowsInput.IMouseSimulator;

      leftButtonDown(): Fischless.WindowsInput.IMouseSimulator;

      leftButtonUp(): Fischless.WindowsInput.IMouseSimulator;

      leftButtonClick(): Fischless.WindowsInput.IMouseSimulator;

      leftButtonDoubleClick(): Fischless.WindowsInput.IMouseSimulator;

      middleButtonDown(): Fischless.WindowsInput.IMouseSimulator;

      middleButtonUp(): Fischless.WindowsInput.IMouseSimulator;

      middleButtonClick(): Fischless.WindowsInput.IMouseSimulator;

      middleButtonDoubleClick(): Fischless.WindowsInput.IMouseSimulator;

      rightButtonDown(): Fischless.WindowsInput.IMouseSimulator;

      rightButtonUp(): Fischless.WindowsInput.IMouseSimulator;

      rightButtonClick(): Fischless.WindowsInput.IMouseSimulator;

      rightButtonDoubleClick(): Fischless.WindowsInput.IMouseSimulator;

      xButtonDown(buttonId: number): Fischless.WindowsInput.IMouseSimulator;

      xButtonUp(buttonId: number): Fischless.WindowsInput.IMouseSimulator;

      xButtonClick(buttonId: number): Fischless.WindowsInput.IMouseSimulator;

      xButtonDoubleClick(buttonId: number): Fischless.WindowsInput.IMouseSimulator;

      verticalScroll(scrollAmountInClicks: number): Fischless.WindowsInput.IMouseSimulator;

      horizontalScroll(scrollAmountInClicks: number): Fischless.WindowsInput.IMouseSimulator;

      sleep(millsecondsTimeout: number): Fischless.WindowsInput.IMouseSimulator;

      sleep(timeout: System.TimeSpan): Fischless.WindowsInput.IMouseSimulator;
    }
  }
}

export {};
