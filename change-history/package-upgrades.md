# Package upgrades for the v3.7.4 of Nuxt

The upgrade sequences are as below. Different errors may occur if the order
changes.

## `log-symbols`

### 5.1.0

Added it because it is needed for the `log` task in `.prebuild`.

## `Node`

### 20.8.0

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

## `Mermaid-js`

### 10.4.0

Clean upgrade. No issues.

```json
"devDependencies": {
  "@mermaid-js/mermaid-cli": "^10.4.0",
  ...
}
```

## `dotenv`

### 16.3.1

Clean upgrade. No issues.

```json
"devDependencies": {
  "dotenv": "^16.3.1",
  ...
}
```

## `eslint-plugin-vue`

### 9.17.0

Clean upgrade. No issues.

```json
"devDependencies": {
  "eslint-plugin-vue": "^9.17.0",
  ...
}
```

## `sass`

### 1.69.2

Clean upgrade. No issues.

```json
"devDependencies": {
  "sass": "^1.62.0",
  ...
}
```

## `yaml`

### 2.3.2

Clean upgrade. No issues.

```json
"devDependencies": {
  "yaml": "^2.3.2",
  ...
}
```

## `webpack`

### 5.88.2

Clean upgrade. No issues.

```json
"devDependencies": {
  "webpack": "^5.88.2",
  ...
}
```

## `vue-tsc`

### 1.8.19

Clean upgrade. No issues.

```json
"devDependencies": {
  "vue-tsc": "^1.8.19",
  ...
}
```

## `typescript`

### 5.2.2

```json
"devDependencies": {
  "typescript": "^5.2.2",
  ...
}
```

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

### 20.8.4

```json
"devDependencies": {
  "@types/node": "^20.8.4",
  ...
}
```

This version of type/node does not work with version 3.4.1 of nuxt. You can
downgrade the version or upgrade the version of nuxt for a solution.

## `nuxt`

### 3.7.4

With this version, the generate process fails if the url of the links cannot be
generated. So make sure that the target page of the links exists.

After upgrading from 3.4.1 to 3.7.4, due to incompatibilities, it was decided
to move to a final version nuxt project built with the new nuxt kit.

You can see this move by looking at [migrations](../migrations.md).

## `nuxt Content`

### 2.5.2

[nuxt.config.ts]
```ts
content: {
  anchorLinks: {
    depth: 0
  }
}
```

### 2.8.5

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
