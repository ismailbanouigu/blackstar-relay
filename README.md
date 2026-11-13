# Blackstar Relay

[![Made with pollinations.ai](https://raw.githubusercontent.com/pollinations/pollinations/main/packages/ui/src/brand/badge-made-with.svg)](https://pollinations.ai/?ref=badge)

Blackstar Relay is a discovery game for [Pollinations Quest #19179](https://github.com/pollinations/pollinations/issues/19179). A Pollinations model plays the part of a mysterious stellar-reactor computer. The player gets six pulses to infer its hidden operating rules from telemetry and stabilize the core.

## How it works

- The player adjusts magnetic field, coolant flow, and harmonic phase.
- A direct user click sends the controls, reactor state, and short run history to `openai/gpt-5.4-nano` through Pollinations.
- The model acts as the machine and returns structured telemetry, a console message, an event, and a clue.
- The client validates and clamps every returned value before rendering it.
- The reactor remembers prior pulses in browser memory so the simulated machine stays coherent.
- Visitors use a capped temporary BYOP key from `<polli-connect>`; a zero-Pollen demo is available before sign-in.

## Local verification

```bash
npm test
npx serve dist
```

## License

MIT
