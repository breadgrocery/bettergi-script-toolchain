# 维护权威与一次性证据

交付权威是已提交的 `.d.ts`、`package.json` 与包内文档（AGENTS / CONTEXT / docs）。生成器、探针、审计报告、临时 fixtures、tarball 可在仓库外使用，**不**作为包内长期产物，也不进入 `files` 白名单。

上游对齐进度以 [AGENTS.md](../../AGENTS.md) 中的完整 BetterGI commit hash 为准；推进同步时该处与提交 `Upstream-Commit:` trailer 必须一致。日常增量优先手改声明并执行 `pnpm --filter @bettergi/types typecheck`。大范围重生时仍须满足 ADR 0001–0007 的布局、闭包、绑定序列与投影规则。
