---
position: 101
---

# Build & Run

To create a static site we use `nuxi generate`, to run the project in
development mode we use `nuxi dev`.

To build and run use below commands in a terminal window;

```bash
make build
make run
```

> [!NOTE]
>
> This syntax works for all systems. It uses `Makefile` for unix-like systems
> and `make.cmd` for Windows systems.

## Process

Process consists of 2 stages;

1. Setup has 2 stage in itself
   1. Lint checking using eslint
   1. [Prebuild][], markdowns are preprocessed in this stage
1. Last stage differs between `build` & `run`
   1. When building, there are two different options
      1. It creates a static site for deployment
      1. It creates a static site for local testing
   1. When running locally, there are two different options too
      1. It runs application in development mode
      1. It generate a static site and runs it

```mermaid
flowchart TB
    subgraph setup[setup]
        direction LR
        E(eslint) --> P(prebuild)
    end
    setup -->|nuxi generate| SWS(static web site)
    setup -->|nuxi dev| OS(running on server)
```

## `package.json` Configuration

We configure build/run commands with the scripts in the `package.json` that we
edit to run processes such as [Eslint][], [Prebuild][].

### Argument Passing/Parsing

We took help from arguments to reduce repetitive steps and to improve with
parameters in scripts. Have a look at `.theme/package.json` to see use.

We used [cross-env](https://npmjs.com/package/cross-env) to avoid using
different syntax for different operating systems.

### Using `npx`

We run [http-server][] package via `npx`, which allows it to be used without
installing to reduce dependencies. Have a look at `.theme/package.json` to see
use.

[Eslint]: https://eslint.org/
[Prebuild]: https://github.com/mouseless/prebuild
[http-server]: https://www.npmjs.com/package/http-server
