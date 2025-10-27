declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    class ServerTime {
      /** 获取服务器时区偏移量（单位：毫秒） */
      static getServerTimeZoneOffset(): number;
    }
  }
  export import ServerTime = BetterGenshinImpact.Core.Script.Dependence.ServerTime;
}

export {};
