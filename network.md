---
position: 6
---

# Network

Below you can see how we do things related to the network.

## Fetching Data

We use Nuxt's `$fetch` operations for our data fetches. To streamline the
management and readability of tasks like specifying URLs, setting headers, and
defining options in such operations, we prefer keeping them in a separate area.
Nuxt examples use the `composables` folder for these functions, and we follow
suit. This folder is also a practical choice because of its automatic import
feature.

### Fetch Once - Server or Client

We do the one-time fetch operations on the server side and bring them to the
client side by making the server side of `useAsyncData` true. Use this method if
this data is not expected to change frequently.

> [!NOTE]
>
> We experienced issues when using `ContentQuery` and `useAsyncData` within
> script setup, we solved the issue by using _async_ and _await_ keywords when
>invoking async function in `useAsyncData()`
>
> ```js
> await useAsyncData(async () => await ...);
> ```

### Fetch Once - Only Client

We use `onMounted`, `onBeforeMount` etc. methods for the fetch operations
requested to be done on the client side. Use this method if this data is likely
to change frequently and there are no SEO concerns for the content.

### Fetch Twice - Server and Client

We use `onServerPrefetch` for the fetch operation during site generation, and
`onMounted` or `onBeforeMount` for the operation to be performed on the client
side. We use this method if this data is likely to change and there are SEO
concerns.

### Requests in Composables

We group the requests under composables with `use` prefix. In this way, we
follow the same naming convention as Nuxt.

Where we group the endpoints under an unnamed function and return them. This way
Nuxt automatically imports them with the same file name. When we want to use it,
we can call it with the name we grouped and use it.

See `/composables/useGitHub.js`, for example send requests.

Demo is at [/demo/fetching-data](/demo/fetching-data/).
