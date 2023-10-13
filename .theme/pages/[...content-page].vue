<template>
  <!--
    when reloaded in browser, any non-content page also lands here because
    there is a trailing slash in url. it shows 'not found' slot for a moment
    because a corresponding .md file does not exist, so it should render only
    when there is no trailing slash to avoid unnecessary 'not found' display
  -->
  <ContentDoc>
    <template #not-found>
      <!-- To avoid duplicate og meta data -->
      <ContentDoc path="/not-found" :head="false" />
    </template>
  </ContentDoc>
</template>
