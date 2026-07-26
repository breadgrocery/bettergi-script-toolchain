import type { TaskHostType } from "../types/System/Threading/Tasks/Task";

declare global {
  /**
   * 任务 HostType
   * @since 0.43.1
   */
  const Task: TaskHostType;
  type Task = System.Threading.Tasks.Task;
}

export {};
