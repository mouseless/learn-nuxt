---
position: 7
---

# SPA

Running Nuxt as a single-page application (SPA) is pretty straightforward, but
there are a couple of challenges.

## Configuration

Enable SPA mode by simply setting the `ssr` config to `false`. This disables
server-side rendering.

```typescript
export default defineNuxtConfig({
  ...
  ssr: false,
  ...
});
```

## Build

Apparently, `nuxi build` only works if you have Node.js in the backend. Since it
is a single page application, we shouldn't require it on the server side. To
statically serve an SPA from any HTTP server, we'll use `nuxi generate` like we
do in static sites.

```json
{
  ...
  "scripts": {
    ...
    "build": "nuxi generate",
    ...
  },
  ...
}
```

> [!NOTE]
>
> We named it as `build` not `generate`, because for us there is no use case
> where we require both `nuxi generate` and `nuxi build`. Since `build` is a
> general term for building the application for production, we stuck with that.

## Loading Page

By disabling `ssr`, `nuxi generate` no more generates static pages per route.
However, it still generates an `index.html` at the root, which will load the app
on the client-side. To inform user with a loading page, Nuxt allows you to show
a loading page in the `index.html` by placing a file called
`spa-loading-template.html` in `./app` folder at the root of your project. See
[Nuxt Configuration / spaLoadingTemplate][] for the detailed explanation and a
sample template.

```bash
- . (root)
 |_ /app
   |_ spa-loading-template.html
```

> [!NOTE]
>
> Notice this template file is only partial. Nuxt will render it within the
> generated `index.html` file. So, don't wrap it with `<html>` and `<body>`
> tags.

## Deploy

After the `nuxi generate` script runs, it outputs the static files under
`.output/public` by default. When you configure your server to serve those
files, you are done.

Below you can see a `Dockerfile` that builds an app under `src/my-app` folder,
and then deploy and serve it using an `nginx` server instance.

```dockerfile
# syntax=docker/dockerfile:1.7-labs

FROM node:22-bullseye AS build

# first copy only package.json and package-lock.json to cache after downloading
# packages
COPY --parents src/my-app/package.json .
COPY --parents src/my-app/package-lock.json .
RUN cd src/my-app ; npm install

# copy rest of the app while keeping the folder structure
COPY --parents src/my-app/ .
RUN cd src/my-app ; npm run build:development

FROM nginx AS final

# bring output from `build` phase
COPY --from=build src/my-app/.output/public /www/public

# use an inline nginx config to serve static files
RUN cat <<EOF > /etc/nginx/nginx.conf
events { }
http {
  # add output files as root for nginx server
  root /www/public;

  server {
    listen 80;

    # include default mime types for js and css files to have proper content
    # type
    location / {
      include /etc/nginx/mime.types;
    }
  }
}
EOF

CMD nginx -g "daemon off;"
```

[Nuxt Configuration / spaLoadingTemplate]: https://nuxt.com/docs/api/nuxt-config#spaloadingtemplate
