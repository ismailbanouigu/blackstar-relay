import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const js = readFileSync(new URL("../dist/app.js", import.meta.url), "utf8");
const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");
const config = readFileSync(new URL("../dist/config.js", import.meta.url), "utf8");

test("is wired to Quest 19179 and Pollinations BYOP", () => {
  assert.match(html, /Quest #19179/);
  assert.match(html, /<polli-connect/);
  assert.match(html, /budget="1\.5"/);
  assert.match(html, /openai\/gpt-5\.4-nano/);
});

test("the model plays a persistent machine with structured telemetry", () => {
  assert.match(js, /You are BLACKSTAR RELAY/);
  assert.match(js, /Recent machine memory/);
  assert.match(js, /response_format/);
  assert.match(js, /parseMachine/);
  assert.match(js, /state\.history\.push/);
});

test("validates machine values before rendering", () => {
  assert.match(js, /clamp\(data\.stability, 0, 100/);
  assert.match(js, /clamp\(data\.temperature, 180, 1400/);
  assert.match(js, /replace\(\/\[<>\]\//);
});

test("includes a zero-Pollen demo and trusted-click spending guard", () => {
  assert.match(html, /ZERO-POLLEN DEMO/);
  assert.match(js, /event\.isTrusted/);
  assert.match(js, /if \(!demo && !trusted\) return/);
});

test("ships the Pollinations badge without a secret key", () => {
  assert.match(readme, /Made with pollinations\.ai/);
  assert.doesNotMatch(config, /sk_[A-Za-z0-9_-]+/);
  assert.doesNotMatch(js, /localStorage/);
});
