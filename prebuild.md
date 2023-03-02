# Preprocessing Markdown Files

We've built a task based `prebuild` mechanism to preprocess markdown files
before nuxt build. This was needed to have pure markdown content at the root of
the repository without the boilerplate code of a nuxt project.

## Clean

This task (`.theme/prebuild/tasks/clean.js`) deletes files with the given
parameters, including subfolders.

## Copy

This task (`.theme/prebuild/tasks/copy.js`) copies files with the given
extension to the desired location.

## Extract Diagrams

This task (`.theme/prebuild/tasks/extractDiagrams.js`) processes markdown files
and extracts diagrams as `.png` files and modifies markdowns to replace
markdown code with diagram images.

## Move

This task (`.theme/prebuild/tasks/move.js`) moves files with given extension
from source directory to target directory.

## Rename

This task (`.theme/prebuild/tasks/rename.js`) renames files with the given
name in the given location to the desired name in the same location.

## Replace Content

This task (`.theme/prebuild/tasks/replaceContent.js`) replaces given old text
to new text in files with given extension. We used this one to replace
`README.md` with `index.md` before fixing links.
