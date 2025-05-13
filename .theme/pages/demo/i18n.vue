<template>
  <div>
    <button
      v-for="{ name, code } in locales"
      :key="code"
      class="switcher"
      @click="setLocale(code)"
    >
      {{ name }}
    </button>
    <h1>Current locale: {{ locale }}</h1>
    <h1>{{ $t('welcome') }}</h1>
  </div>
</template>
<script setup>
const { locale, locales, setLocale } = useI18n();
</script>
<style scoped>
.switcher {
  margin: 1em;
}
</style>