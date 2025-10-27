import "../System/Threading/ITimer";
import "./DateTimeOffset";
import "./TimeSpan";

declare global {
  namespace System {
    abstract class TimeProvider {
      abstract getUtcNow(): System.DateTimeOffset;

      abstract getLocalNow(): System.DateTimeOffset;

      abstract timestampFrequency: bigint;

      abstract getTimestamp(): bigint;

      getElapsedTime(startingTimestamp: bigint, endingTimestamp: bigint): System.TimeSpan;

      getElapsedTime(startingTimestamp: bigint): System.TimeSpan;

      createTimer(
        callback: (state: any) => void,
        state: any,
        dueTime: System.TimeSpan,
        period: System.TimeSpan
      ): System.Threading.ITimer;

      static system: System.TimeProvider;
    }
  }
}
export {};
