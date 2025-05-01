declare global {
  /** @since 0.44.2 */
  namespace notification {
    /**
     * 发送成功通知（发送间隔限制：1分钟）
     * @param message 消息内容
     * @since 0.44.2
     */
    function send(message: string): void;

    /**
     * 发送错误通知（发送间隔限制：1分钟）
     * @param message 消息内容
     * @since 0.44.2
     */
    function error(message: string): void;
  }
}

export {};
