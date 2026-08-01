# 维护权威与一次性证据

交付权威是已提交的 `.d.ts`、`package.json` 与包内文档（AGENTS / CONTEXT / docs）。生成器、探针、审计报告、临时 fixtures、tarball 可在仓库外使用，**不**作为包内长期产物，也不进入 `files` 白名单。

上游对齐以 [AGENTS.md](../../AGENTS.md) 的 BetterGI commit hash 为准，并与提交 `Upstream-Commit:` trailer 一致。日常手改声明后执行 `pnpm --filter @bettergi/types typecheck`。大范围重生须满足 ADR 0001–0007 与 [0009](./0009-script-string-domains.md)。文档与 `.d.ts` 冲突时以 `.d.ts` 为准并回写文档。
