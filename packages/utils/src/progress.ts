import { formatDurationAsClock, formatDurationAsReadable } from "./time";

/** 进度信息 */
export type Progress = {
  /** 当前进度 */
  current: number;
  /** 总进度 */
  total: number;
  /** 完成百分比 */
  percentage: number;
  /** 已用时间（毫秒） */
  elapsed: number;
  /** 平均每单位时间（毫秒） */
  average: number;
  /** 预计剩余时间（毫秒） */
  remaining: number;
  /** 格式化后的进度信息 */
  formatted: {
    percentage: string;
    elapsed: string;
    average: string;
    remaining: string;
  };
};

/** 进度消息格式化器 */
export type ProgressFormatter = (
  logger: typeof log.info,
  message: string,
  progress: Progress
) => void;

export type ProgressTrackerConfig = {
  /** 消息格式化器 */
  formatter?: ProgressFormatter;
  /** 打印间隔（毫秒），默认3000 */
  interval?: number;
};

/** 进度递进选项 */
export type ProgressTickOptions = {
  /** 递进的幅度 */
  increment?: number;
  /** 递进后打印消息 */
  message?: string;
  /** 强制打印 */
  force?: boolean;
};

/** 进度追踪器 */
export class ProgressTracker {
  public total = 0;
  public current = 0;
  public startTime = Date.now();
  private readonly formatter: ProgressFormatter;
  private readonly interval: number;
  private lastPrintTime = 0;

  constructor(total: number, config?: ProgressTrackerConfig) {
    const { formatter, interval = 3000 } = config || {};
    this.total = total;
    this.formatter = formatter || this.defaultFormatter;
    this.interval = interval;
  }

  private readonly defaultFormatter: ProgressFormatter = (logger, message, progress) => {
    logger(
      "[🚧 {pct} ⏳ {eta}]: {msg}",
      progress.formatted.percentage.padStart(6),
      progress.current > 0 && progress.elapsed > 0 ? progress.formatted.remaining : "--:--:--",
      message
    );
  };

  public tick(options?: ProgressTickOptions) {
    const { increment = 1, message, force = false } = options || {};
    this.current = Math.min(this.current + increment, this.total);
    if (message) this.print(message, force);
    return this.current === this.total;
  }

  public complete(message: string) {
    this.current = this.total;
    this.print(message, true);
  }

  public reset() {
    this.current = 0;
    this.startTime = Date.now();
    this.lastPrintTime = 0;
  }

  public print(message: string, force: boolean = false, logger = log.info) {
    if (force || this.shouldPrint()) {
      this.formatter(logger, message, this.getProgress());
      this.printed();
    }
  }

  private shouldPrint() {
    return Date.now() - this.lastPrintTime >= this.interval;
  }

  private printed() {
    this.lastPrintTime = Date.now();
  }

  public getProgress(): Progress {
    const percentage = this.current / this.total;
    const elapsed = Date.now() - this.startTime;
    const average = this.current > 0 ? elapsed / this.current : 0;
    const remaining = (this.total - this.current) * average;
    return {
      current: this.current,
      total: this.total,
      percentage,
      elapsed,
      average,
      remaining,
      formatted: {
        percentage: `${(percentage * 100).toFixed(1)}%`,
        elapsed: formatDurationAsReadable(elapsed),
        average: formatDurationAsReadable(average),
        remaining: formatDurationAsClock(remaining)
      }
    };
  }
}
