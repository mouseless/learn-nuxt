<template>
  <div>
    <button
      v-for="locale in locales"
      :key="locale.code"
      class="switcher"
      @click="setLocale(locale.code)"
    >
      {{ locale.name }}
    </button>
    <h1>{{ $t('welcome') }}</h1>
  </div>
</template>
<script setup>
const { locales, setLocale } = useI18n();
</script>
<style scoped>
.switcher {
  margin: 1em;
}
</style>