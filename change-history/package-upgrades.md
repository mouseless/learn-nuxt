# Package upgrades

## `@babel/eslint-parser`

### 7.22.15 to 7.23.10

Clean upgrade. No issues.

### 7.22.15 Added

No issues

## `@mermaid-js/mermaid-cli`

### 10.4.0 to 10.8.0

Clean upgrade. No issues.

### 10.1.0 to 10.4.0

Clean upgrade. No issues.

```json
"devDependencies": {
  "@mermaid-js/mermaid-cli": "^10.4.0",
  ...
}
```

## `@nuxt/content`

### 2.8.5 to 2.12.0

Clean upgrade. No issues.

### 2.5.2 to 2.8.5

[nuxt.config.ts]
```ts
mdc: {
  headings: {
    anchorLinks: {
      h1: false,
      h2: false,
      ...
    }
  }
}
```

### 2.4.3 to 2.5.2

[nuxt.config.ts]
```ts
content: {
  anchorLinks: {
    depth: 0
  }
}
```

## `dotenv`

### 16.0.3 to 16.3.1

Clean upgrade. No issues.

```json
"devDependencies": {
  "dotenv": "^16.3.1",
  ...
}
```

## `eslint`

### 8.51.0 to 8.57.0

Clean upgrade. No issues.

## `eslint-plugin-vue`

### 9.11.0 to 9.17.0

Clean upgrade. No issues.

```json
"devDependencies": {
  "eslint-plugin-vue": "^9.17.0",
  ...
}
```

## `log-symbols`

### 5.1.0 to 6.0.0

Clean upgrade. No issues.

### 5.1.0 Added

Added it because it is needed for the `log` task in `.prebuild`.

## `Node`

### 16.x to 20.8.0

When upgrading to this version, version 3.4.1 of nuxt gives run time errors.

```log
WARN  Current version of Node.js (20.8.0) is unsupported and might cause
issues.
Please upgrade to a compatible version (^14.18.0 || ^16.10.0 || ^17.0.0 ||
 ^18.0.0 || ^19.0.0).

ERROR  [uncaughtException] This error originated either by throwing inside of
an async function without a catch block, or by rejecting a promise which was
not handled with .catch(). The promise rejected with the reason "Search string
not found: "ts.executeCommandLine(ts.sys, ts.noop, ts.sys.args);"".
```

Upgraded the nuxt version to 3.7.4 to fix it.

## `nuxt`

### 3.7.4 to 3.10.3

#### Using `useSeoMeta` for open graph instead of `useHead`

```javascript
useSeoMeta({
  ogTitle: ...,
  ogDescription: ...
});
```

instead of

```javascript
useHead({
  meta: [
    { hid: "og:title", property: "og:title", content: ... },
    { hid: "og:description", property: "og:description", content: ... }
  ]
});
```

### 3.4.1 to 3.7.4

With this version, the generate process fails if the url of the links cannot be
generated. So make sure that the target page of the links exists.

After upgrading from 3.4.1 to 3.7.4, due to incompatibilities, it was decided
to move to a final version nuxt project built with the new nuxt kit.

You can see this move by looking at [migrations](../migrations.md).

## `sass`

### 1.69.3 to 1.71.1

Clean upgrade. No issues.

### 1.62.0 to 1.69.3

Clean upgrade. No issues.

## `typescript`

### 5.0.4 to 5.2.2

When we upgraded the Typescript version to 5.2.2 there was a conflict with
eslint. You can see the problem below.

```log
=============

WARNING: You are currently running a version of TypeScript which is not
officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <5.1.0

YOUR TYPESCRIPT VERSION: 5.2.2

Please only submit bug reports when using the officially supported version.

=============
```

## `types/node`

### 18.15.11 to 20.8.4

This version of type/node does not work with version 3.4.1 of nuxt. You can
downgrade the version or upgrade the version of nuxt for a solution.

## `vue`

### 3.3.4 to 3.4.21

Clean upgrade. No issues.

## `vue-router`

### 4.2.5 to 4.3.0

Clean upgrade. No issues.

## `vue-tsc`

### 1.2.0 to 1.8.19

Clean upgrade. No issues.

## `yaml`

### 2.2.1 to 2.3.2

Clean upgrade. No issues.

## `webpack`

### 5.79.0 to 5.88.2

Clean upgrade. No issues.
