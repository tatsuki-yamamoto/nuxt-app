<script lang="ts" setup>
import type { Ref, ComputedRef } from 'vue'

// ref
// ref関数を設定することでReactiveな変数を定義できる。ref関数の引数には初期値を設定できる。
// 型推論で型指定を省略できる
const msg = ref('Hello!')
// ジェネリクスで明示的に型指定できる
const msg2 = ref<string>('Hello!')
// ComputedRefで明示的に型指定できる
const msg3: Ref<string> = ref('Hello!')

// reactive
const user = reactive({
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
})
interface User2 {
  firstName: string
  lastName: string
  age: number
}
const user2: User2 = reactive({
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
})
const changeName = (event: Event) => {
  console.log('changeName')
  user.firstName = (event.target as HTMLInputElement).value
}
// 変数の方にも型定義できるけど、これはやりすぎかな
const changeName2: (event: Event) => void = (event: Event): void => {
  user.firstName = (event.target as HTMLInputElement).value
}

const counter = ref(0)
const increment = () => {
  console.log('increment!')
  counter.value++
}
const decrement = () => {
  console.log('decrement!')
  counter.value--
}
// 旧computedに相当
// 型推論で型指定を省略できる
const counterLabel = computed(() => {
  console.log('computed!', { 'counter.value': counter.value })
  return `カウンターは「${counter.value}」です！`
})
// ジェネリクスで明示的に型指定できる
const counterValue2 = computed<string>(() => `カウンターは「${counter.value}」です！`)
// ComputedRefで明示的に型指定できる
const counterValue3: ComputedRef<string> = computed(() => `カウンターは「${counter.value}」です！`)

// 旧mountedに相当
onMounted(() => {
  console.log('mounted!')
})

// 旧updatedに相当
onUpdated(() => {
  console.log('updated!')
  console.log({ msg })
})

// 旧destroyedに相当
onUnmounted(() => {
  console.log('unmounted!')
})
</script>

<template>
  <div>
    <base-sub-title-and-contants title="ref">
      <p class="mb-2">{{ msg }}</p>
      <v-row no-gutters>
        <v-col cols="12" lg="6">
          <v-text-field v-model="msg" variant="outlined" hide-details></v-text-field>
        </v-col>
      </v-row>
    </base-sub-title-and-contants>

    <base-sub-title-and-contants title="reactive">
      <p class="mb-2">フルネーム: {{ `${user.firstName} ${user.lastName}（${user.age}）` }}</p>
      <v-text-field :model-value="user.firstName" variant="outlined" hide-details @input="changeName"></v-text-field>
    </base-sub-title-and-contants>

    <base-sub-title-and-contants title="computed">
      <p class="mb-2">{{ counterLabel }}</p>
      <v-btn-group color="primary">
        <v-btn @click="increment"><v-icon>mdi-plus</v-icon></v-btn>
        <v-btn @click="decrement"><v-icon>mdi-minus</v-icon></v-btn>
      </v-btn-group>
    </base-sub-title-and-contants>

    <base-sub-title-and-contants title="onMounted・onUpdated・onUnmounted">
      <p>ログに出力</p>
    </base-sub-title-and-contants>
  </div>
</template>
