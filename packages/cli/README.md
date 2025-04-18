The command-line interface for BetterGI JavaScript development.

## Installation

```shell
npm install --save-dev @bettergi/cli
```

## Usage

1. Create a configuration file named bettergi.config.ts (or .js, .cjs, .mjs) in your project root:

```ts
import { defineConfig } from "@bettergi/cli/config";

export default defineConfig({
  // Build configuration options
  main: "main.ts",

  // Debug configuration options
  bettergi: {},

  // Script manifest definitions
  manifest: {},

  // UI Settings configuration
  settings: []
});
```

2. Execute the CLI with the following command:

```shell
npx bettergi-cli
```

3. For continuous development with file watching:

```shell
npx bettergi-cli --watch
```

## Related Tools

[@bettergi/create-script](https://www.npmjs.com/package/@bettergi/create-script)
