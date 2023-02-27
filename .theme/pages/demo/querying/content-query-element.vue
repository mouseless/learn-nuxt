<template>
  <ContentQuery v-slot="{ data: markdowns }" path="/content/query" :where="{ _dir: 'content' }">
    <div v-for="markdown in markdowns">
      <ContentRenderer :value="markdown">
        <ContentRendererMarkdown :value="markdown" />
      </ContentRenderer>
    </div>
  </ContentQuery>
</template>