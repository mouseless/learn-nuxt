# Build & Run

To create a static site we use `nuxt generate`, to run the project in
development mode we use `nuxt dev`.

For unix-like systems use `Makefile`;

```bash
make build
make run
```

For Windows systems use `build.bat`;

```bash
.\build.bat
.\run.bat
```

## Process

Process consists of 4 stages;

1. Lint checking using eslint
1. Prebuild, markdowns are preprocessed in this stage
1. Nuxt build
1. Last stage differs between `build` & `run`
   1. When building, it creates a static site for deployment
   1. When running locally, it runs application in development mode

```mermaid
flowchart TB
    subgraph nuxtbuild[nuxt build]
        direction LR
        CB(client build) --> SB(server build)
    end
    E(Eslint) --> P(prebuild)
    P --> nuxtbuild
    nuxtbuild -->|nuxt generate| SWS(static web site)
    nuxtbuild -->|nuxt dev| OS(running on server)
```

## Prebuild

We've built a task based `prebuild` mechanism to preprocess markdown files
before nuxt build. This was needed to have pure markdown content at the root of
the repository without the boilerplate code of a nuxt project.

### Clean

This task (`.theme/prebuild/tasks/clean.js`) deletes files with the given
parameters, including subfolders.

### Copy

This task (`.theme/prebuild/tasks/copy.js`) copies files with the given
extension to the desired location.

### Extract Diagrams

This task (`.theme/prebuild/tasks/extractDiagrams.js`) processes markdown files
and extracts diagrams as `.png` files and modifies markdowns to replace
markdown code with diagram images.

### Move

This task (`.theme/prebuild/tasks/move.js`) moves files with given extension
from source directory to target directory.

### Rename

This task (`.theme/prebuild/tasks/rename.js`) renames files with the given
name in the given location to the desired name in the same location.

### Replace Content

This task (`.theme/prebuild/tasks/replaceContent.js`) replaces given old text
to new text in files with given extension. We used this one to replace
`README.md` with `index.md` before fixing links.

### Touch

This task (`.theme/prebuild/tasks/touch.js`) checks whether file with a given
path exists, if not, it creates an empty file at the specified path.
