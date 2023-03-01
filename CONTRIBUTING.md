# Contribution Guide

We do not accept direct commits to this repository, please use forks to make a
contribution.

## Epic contributions

If your work is under an epic like `epic/nuxt-3`, then you are making an epic
contribution.

Epics are created under `mouseless` in `epic/*` branches and these branches are
protected. So to make a contribution create an issue branch in
`issue/{epic-name}/{issue-name}` format on your fork, and create a pull request
to `mouseless:epic/{epic-name}` branch __not__ to `mouseless:main` branch.

After all work is done, epics will merge to main branch directly in original
repository.

## Other contributions

If your work is independent from an epic, then create a branch in
`issue/{issue-name}` format and create a pull request directly from this branch
to `mouseless:main` branch.

## Local Environment 

We use `Mermaid` to extract diagrams from markdown files. `Mermaid` comes with
`puppeteer` as dependency and uses it to start a browser process to snapshot 
diagrams. 

According to the documentation, when `puppeteer` is installed 
(after v19.0.0), a compatible browser will be automatically downloaded for 
puppeteer to use.

Sometimes `puppeteer` will not work properly with the downloaded browser 
and it will prompt an error like below when you run the application.

> :warning:
>
> `Error: Failed to launch the browser process` 

The current available solution is manually installing `chromium` browser and
provide the `executablePath` of the browser you want `puppeteer` to use. 

We setup the project in a way that, you can create `.env.local` file and set
`CHROMIUM_EXECUTABLE_PATH` variable to directly provide executable directory.

## End of line 

We use `eslint` in this project, which is a static code analysis tool used 
to flag programming errors, bugs, stylistic errors and suspicious constructs.

The configuration for the tool can be found in `.eslintrc.json` file, and 
the default configuration has a rule for line endings. 

```json
"linebreak-style": [
      "error",
      "unix"
    ],
```
When you checkout a repository on a `windows` machine, git automatically 
handles line endings as `clrf` for compatibility. 

> :information_source:
>
> $git config --global core.autocrlf true
> Configure Git to ensure line endings in files you checkout are correct for Windows.
> For compatibility, line endings are converted to Unix style when you commit files.

Due to this reason, when you run the application, `eslint` will prompt and error
because it expects `lf` line endings.

There are several solutions to overcome this issue:

- You can set `core.autoclrf` to false in your `git config` or provide setup for specific
  repository. Visit [git documentation][1]
  for further details.
- You can use `eslint --fix` command to convert line endings to `lf`
- You can modify `.eslintrc.json` to accept `windows` line endings or set 
  `linebreak-style` rule to `0`

  [1]:<https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings> "configuring-git-to-handle-line-endings"