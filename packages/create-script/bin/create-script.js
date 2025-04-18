#!/usr/bin/env node
const create = () => {
  return import("../dist/index.js");
};

await create();
