# 维护权威与一次性证据

交付权威是已提交的 `.d.ts`、`package.json` 与包内文档（AGENTS / CONTEXT / docs）。生成器、探针、审计报告、临时 fixtures、tarball 可在仓库外使用，**不**作为包内长期产物，也不进入 `files` 白名单。

上游对齐的基线由声明包仓库中最近一次同步提交的唯一 `Upstream-Commit: <完整 40 位 hash>` trailer 决定；维护文档不复制会过时的固定 hash。同步目标是 BetterGI 源仓库当前 `HEAD`，并保留基线对象存在、祖先关系、`git log --ancestry-path` 与 `git diff` 的审计证据。缺少 trailer、基线不是目标祖先或证据不完整时不得猜测。日常手改声明后执行 `pnpm --filter @bettergi/types typecheck`。大范围重生须满足 ADR 0001–0007 与 [0009](./0009-script-string-domains.md)。文档与 `.d.ts` 冲突时以 `.d.ts` 为准并回写文档。
