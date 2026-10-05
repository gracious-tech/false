# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A static website listing the top 10 false beliefs of various religions, sects and cults, each contrasted with what Scripture teaches from a Protestant Evangelical perspective. It's a quick reference for the average person, so content should be short, plain and backed by Scripture references.

## Commands

```sh
npm run dev        # Dev server at http://localhost:3000
npm run build      # `nuxt generate`: static site to .output/public
npm run preview    # Preview the generated site
npm run typecheck  # vue-tsc via `nuxt typecheck`
```

There are no tests or linter. Use `npm run build` and `npm run typecheck` to verify changes.

## Architecture

Nuxt 4 (Vite + Vue), using the `app/` source directory. It is a fully static site with no server code.

- **Content is data-driven.** Everything about each religion (slug, name, summary, beliefs with `title`, `explanation` (with `[n]` footnote markers), `sources`, `quote`, `response`, a `verse` reference whose BSB text is fetched from v1.fetch.bible at build time, and optional `see_also` passages and `further` helpful pages) lives in `app/data/religions.ts`. Add or edit content there, not in page files.
- **One shared page template.** `app/pages/[religion].vue` renders every religion page from its slug and throws a 404 for unknown slugs. Do not create a separate page file per religion.
- **Prerendering reads the same data.** `nuxt.config.ts` imports `religions` and adds a route for each slug to `nitro.prerender.routes`, so every entry in the data file is generated even if nothing links to it. Because of this import, `religions.ts` must stay free of Nuxt auto-imports and runtime-only code.
- **Bible reference enhancer.** `app/plugins/bible-enhancer.client.ts` uses the fetch(bible) enhancer to turn references into hover/click passage links. It is off by default; set `enabled` to `true` there to turn it on.

## Tooling notes

- Templates use Pug (`<template lang="pug">`) and styles use SugarSS (`<style lang="sss">`, `.sss` files). Vite loads `sugarss` automatically for these, so no PostCSS config is needed.
- TypeScript is pinned to 6.x because `vue-tsc` does not yet support TypeScript 7. Don't upgrade it until `vue-tsc` does.
