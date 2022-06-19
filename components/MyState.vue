<script lang="ts" setup>
// composables/globalState.ts より
const userState = useUserState()

// script内はvalueをつける
console.log('user.name', userState.value.name)
</script>

<template>
  <div>
    <p class="mb-6">useStateとcomposablesを使用すれば状態を管理できる。</p>
    <v-text-field v-model="userState.name" variant="outlined"></v-text-field>
    <nuxt-link to="/state/child" class="text-primary underline">変更した値が違う画面でも引き継がれているか確認する</nuxt-link>
  </div>
</template>
