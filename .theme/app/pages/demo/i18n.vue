<template>
  <div>
    <button
      v-for="{ name, code } in locales"
      :key="code"
      class="m-4"
      @click="setLocale(code)"
    >
      {{ name }}
    </button>
    <h1>{{ $t('current_locale__LOCALE', {locale}) }}</h1>
    <span>{{ $t('welcome_NAME_to_localization_sample_page', {name: 'john'}) }}</span>
  </div>
</template>
<script setup>
const { locale, locales, setLocale } = useI18n();
</script>