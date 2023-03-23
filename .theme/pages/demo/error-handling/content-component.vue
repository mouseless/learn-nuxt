<template>
  <div>
    <ContentDoc>
      <template #not-found>
        <ContentQuery
          v-slot="{ data }"
          path="/"
          :where="{ _path: { $eq: '/error' }}"
          find="one"
        >
          <ContentRenderer :value="data">
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer>
        </ContentQuery>
      </template>
    </ContentDoc>
  </div>
</template>