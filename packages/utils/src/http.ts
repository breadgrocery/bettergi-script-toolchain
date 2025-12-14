/**
 * 发送 HTTP 请求，获取响应体内容
 * @param method 请求方法
 * @param url 请求 URL
 * @param body 请求体（UTF-8 编码）
 * @param headers 请求头
 * @returns 响应体内容
 */
export const requestForBody = async (
  method: Parameters<typeof http.request>[0],
  url: string,
  body?: string | object,
  headers?: Record<string, any>
) => {
  if (body && typeof body === "object") {
    body = JSON.stringify(body);
    headers = { ...headers, "Content-Type": "application/json" };
  }

  const resp = await http.request(
    method,
    url,
    body ?? null,
    headers ? JSON.stringify(headers) : null
  );

  if (resp.status_code >= 200 && resp.status_code < 400) {
    return resp.body;
  } else {
    throw new Error(`HTTP request failed with status ${resp.status_code}: ${resp.body}`);
  }
};

/**
 * 发送 HTTP GET 请求，获取响应体内容
 * @param url 请求 URL
 * @param body 请求体（UTF-8 编码）
 * @param headers 请求头
 * @returns 响应体内容
 */
export const getForBody = (url: string, body?: string | object, headers?: Record<string, any>) => {
  return requestForBody("GET", url, body, headers);
};

/**
 * 发送 HTTP POST 请求，获取响应体内容
 * @param url 请求 URL
 * @param body 请求体（UTF-8 编码）
 * @param headers 请求头
 * @returns 响应体内容
 */
export const postForBody = (url: string, body?: string | object, headers?: Record<string, any>) => {
  return requestForBody("POST", url, body, headers);
};
