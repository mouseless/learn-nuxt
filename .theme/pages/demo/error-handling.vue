<template>
  <div>
    <ContentDoc>
      <template #not-found>
        <ContentQuery
          v-slot="{ data }"
          path="/error"
          find="one"
        >
          <ContentRenderer :value="data" />
        </ContentQuery>
      </template>
    </ContentDoc>
  </div>
</template>
