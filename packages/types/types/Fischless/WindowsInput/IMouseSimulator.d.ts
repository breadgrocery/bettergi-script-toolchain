import type {
  DoubleHost,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/TimeSpan";
import "./IKeyboardSimulator";

declare const iMouseSimulatorInputBrand: unique symbol;
export interface IMouseSimulatorInput {
  readonly [iMouseSimulatorInputBrand]: true;
}

export interface IMouseSimulator
  extends Microsoft.ClearScript.ClrInterfaceView<IMouseSimulatorInput>, IMouseSimulatorInput {
  readonly keyboard: Fischless.WindowsInput.IKeyboardSimulator;
  moveMouseBy(
    pixelDeltaX: number | StrongNumeric<Int32Host>,
    pixelDeltaY: number | StrongNumeric<Int32Host>
  ): Fischless.WindowsInput.IMouseSimulator;
  moveMouseTo(
    absoluteX: number | StrongNumeric<DoubleHost>,
    absoluteY: number | StrongNumeric<DoubleHost>
  ): Fischless.WindowsInput.IMouseSimulator;
  moveMouseToPositionOnVirtualDesktop(
    absoluteX: number | StrongNumeric<DoubleHost>,
    absoluteY: number | StrongNumeric<DoubleHost>
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
  xButtonDown(buttonId: number | StrongNumeric<Int32Host>): Fischless.WindowsInput.IMouseSimulator;
  xButtonUp(buttonId: number | StrongNumeric<Int32Host>): Fischless.WindowsInput.IMouseSimulator;
  xButtonClick(buttonId: number | StrongNumeric<Int32Host>): Fischless.WindowsInput.IMouseSimulator;
  xButtonDoubleClick(
    buttonId: number | StrongNumeric<Int32Host>
  ): Fischless.WindowsInput.IMouseSimulator;
  verticalScroll(
    scrollAmountInClicks: number | StrongNumeric<Int32Host>
  ): Fischless.WindowsInput.IMouseSimulator;
  horizontalScroll(
    scrollAmountInClicks: number | StrongNumeric<Int32Host>
  ): Fischless.WindowsInput.IMouseSimulator;
  sleep(
    millsecondsTimeout: number | StrongNumeric<Int32Host>
  ): Fischless.WindowsInput.IMouseSimulator;
  sleep(timeout: System.TimeSpan): Fischless.WindowsInput.IMouseSimulator;
}

declare global {
  namespace Fischless.WindowsInput {
    type IMouseSimulatorInput = import("./IMouseSimulator").IMouseSimulatorInput;
  }
}

declare global {
  namespace Fischless.WindowsInput {
    type IMouseSimulator = import("./IMouseSimulator").IMouseSimulator;
  }
}

export interface IMouseSimulatorHostType extends HostType<IMouseSimulator, InterfaceTypeTrait> {}

export {};
