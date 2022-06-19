<script setup lang="ts">
useHead({
  title: 'ページが表示できませんでした',
})
const error = useError()
</script>

<template>
  <base-container class="text-center">
    <h1 class="text-3xl font-bold inline">ページが表示できませんでした</h1>
    <p class="mt-6">時間をおいて再訪問をお願いします。</p>
    <v-card variant="outlined" class="mt-9 mb-12">
      <v-container>
        <v-row class="mb-6">
          <v-col cols="3" class="text-right font-bold">ステータスコード</v-col>
          <v-col cols="6" class="text-left">{{ error.statusCode }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="text-right font-bold">メッセージ</v-col>
          <v-col cols="6" class="text-left">{{ error.message }}</v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-btn @click="$router.back()">前のページへ戻る</v-btn>
  </base-container>
</template>
