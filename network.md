---
position: 8
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

### Fetch on Server Side

We do the one-time fetch operations on the server side and bring them to the
client side by making the server side of `useAsyncData` true.

### Fetch on Only Client Side

We use `onMounted`, `onBeforeMount` etc. methods for the fetch operations
requested to be done on the client side.

### Fetch on Both Side

If the data needs to be kept up to date (for example the number of commits of
contributors on github) we use two things. We use `onServerPrefetch` for the
fetch operation on the server side and `onMounted` or `onBeforeMount` for the
operation to be performed on the client side.

### Requests in Composables

We group the requests under composables with `use` prefix. In this way, we
follow the same naming convention as nuxt.

Where we group the endpoints under an unnamed function and return them. This way
nuxt automatically imports them with the same file name. When we want to use it,
we can call it with the name we grouped and use it.

See `/composables/useGithub.js`, for example send requests.

Demo is at [/demo/fetching-data](/demo/fetching-data/).
