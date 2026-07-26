import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Collections/Generic/Dictionary";

/**
 * HTTP 请求方法
 * @since 0.52.0
 */
export type HttpMethod =
  "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | (string & {});

/**
 * 脚本 HTTP 客户端
 * @since 0.52.0
 */
declare const httpBrand: unique symbol;
export interface Http extends ClrHostValue {
  readonly [httpBrand]: true;
  /**
   * 发送 HTTP 请求
   * 需在调度器通用设置中启用 JS HTTP 权限，并在 manifest.json 的 http_allowed_urls 中配置允许的 URL
   * @param method HTTP 方法
   * @param url 请求 URL
   * @param body 请求体，可为 null
   * @param headersJson 请求头 JSON，可为 null
   * @returns 在任务完成后兑现 HTTP 响应的 Promise
   * @since 0.52.0
   */
  request(method: HttpMethod, url: string): Promise<Http_HttpReponse>;
  request(method: HttpMethod, url: string, body: string | null): Promise<Http_HttpReponse>;
  request(
    method: HttpMethod,
    url: string,
    body: string | null,
    headersJson: string | null
  ): Promise<Http_HttpReponse>;
}

/**
 * HTTP 响应
 * @since 0.52.0
 */
declare const http_HttpReponseBrand: unique symbol;
export interface Http_HttpReponse extends ClrHostValue {
  readonly [http_HttpReponseBrand]: true;
  /**
   * HTTP 状态码
   * @since 0.52.0
   */
  status_code: number;
  /**
   * 响应头
   * @since 0.52.0
   */
  headers: System.Collections.Generic.Dictionary<string, string>;
  /**
   * 响应体文本
   * @since 0.52.0
   */
  body: string;
}

export interface Http_HttpReponseHostType extends HostType<
  Http_HttpReponse,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.52.0
   */
  new (): Http_HttpReponse;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence.Http {
    type HttpReponse = import("./Http").Http_HttpReponse;
  }
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type Http = import("./Http").Http;
  }
}

export interface HttpHostType extends HostType<
  Http,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.52.0
   */
  new (): Http;
  readonly HttpReponse: Http_HttpReponseHostType;
}

export {};
