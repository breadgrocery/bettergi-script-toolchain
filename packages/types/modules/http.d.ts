declare global {
  /** @since 0.52.0 */
  namespace http {
    /**
     * 发送HTTP请求
     * @param method 请求方法
     * @param url 请求URL
     * @param body 请求体（可选）
     * @param headersJson 请求头（可选）
     * @since 0.52.0
     */
    function request(
      method: HttpMethod,
      url: string,
      body?: string,
      headersJson?: string
    ): Promise<HttpReponse>;
  }
}

type HttpMethod =
  | "GET"
  | "PUT"
  | "POST"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "TRACE"
  | "PATCH"
  | "CONNECT";

type HttpReponse = {
  /** 状态码 */
  status_code: number;

  /** 响应头 */
  headers: Record<string, string>;

  /** 响应体 */
  body: string;
};

export {};
