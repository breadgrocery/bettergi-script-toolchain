declare global {
  namespace notification {
    /**
     * 发送成功通知（发送间隔限制：1分钟）
     * @param message 消息内容
     * @since 0.44.3
     */
    function send(message: string): void;

    /**
     * 发送错误通知（发送间隔限制：1分钟）
     * @param message 消息内容
     * @since 0.44.3
     */
    function error(message: string): void;
  }
}

export {};
