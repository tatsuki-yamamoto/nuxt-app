<script setup lang="ts">
useHead({
  title: 'お探しのページが見つかりませんでした',
})
const error = useError()
</script>

<template>
  <base-container class="text-center">
    <h1 class="text-3xl font-bold inline">お探しのページが見つかりませんでした</h1>
    <p class="mt-6 mb-9">あなたがアクセスしたページは、削除されたかURLが変更されているため<br />表示することができませんでした。</p>
    <v-btn nuxt to="/">TOPページへ戻る</v-btn>
  </base-container>
</template>
