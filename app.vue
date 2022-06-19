<script setup>
useHead({
  title: 'Nuxt3 サンプル',
  titleTemplate: `%s |  Nuxt3 サンプル`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'Nuxt3 サンプル' }],
  // bodyAttrs: {
  //   class: 'test',
  // },
})
</script>

<template>
  <v-app>
    <the-header></the-header>
    <v-main class="pt-16">
      <nuxt-page />
    </v-main>
    <the-footer></the-footer>
  </v-app>
</template>
