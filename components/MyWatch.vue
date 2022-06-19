<script lang="ts" setup>
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

const price = ref(1000)
const count = ref(1)
const sumPrice = ref(0)
const sumPriceHasComma = computed(() => `${sumPrice.value?.toLocaleString()} 円`)

// watchとwatchEffectの２パターンがある

// watchはpriceの変更だけを監視する。
watch(price, (newValue, oldValue) => {
  console.log('watch!', { newValue, oldValue })
})

// watchはpriceとcountの両方の変更を監視する。また、初回読み込み時に実行される。
// computedに近い
watchEffect(() => {
  sumPrice.value = price.value * count.value
  console.log('watchEffect!', { price: price.value, count: count.value, sumPrice: sumPrice.value })
})
</script>

<template>
  <div>
    <p>変数の変更を検知するためにはwatchとwatchEffectの２パターンがある。</p>
    <p>単価と個数を変更するとログが出力される。</p>
    <v-row align="center" :dense="mobile" class="mt-3">
      <v-col cols="12" lg="1" class="font-bold">単価</v-col>
      <v-col cols="12" lg="4">
        <v-text-field v-model="price" suffix="円" variant="outlined" type="number" :hide-details="true"></v-text-field>
      </v-col>
    </v-row>
    <v-row align="center" :dense="mobile" class="mt-3">
      <v-col cols="12" lg="1" class="font-bold">個数</v-col>
      <v-col cols="12" lg="4">
        <v-text-field v-model="count" suffix="個" variant="outlined" type="number" hide-details="auto"></v-text-field>
      </v-col>
    </v-row>
    <v-row align="center" :dense="mobile" class="mt-3">
      <v-col cols="12" lg="1" class="font-bold">合計</v-col>
      <v-col cols="12" lg="4" class="text-xl">{{ sumPriceHasComma }}</v-col>
    </v-row>
  </div>
</template>
