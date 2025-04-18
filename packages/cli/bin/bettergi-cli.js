#!/usr/bin/env node
const cli = () => {
  return import("../dist/cli.js");
};

await cli();
