<script lang="ts" setup>
import type { Ref, ComputedRef } from 'vue'

// props
interface Props {
  name: string
}
const props = defineProps<Props>()

// emit
interface Emits {
  (event: 'change', value: string): void
}
const emit = defineEmits<Emits>()

// data
// ref関数を設定することでReactiveな変数を定義できる。ref関数の引数には初期値を設定できる。
// 型推論で型指定を省略できる
const msg = ref('Hello!')
// ジェネリクスで明示的に型指定できる
const msg2 = ref<string>('Hello!')
// ComputedRefで明示的に型指定できる
const msg3: Ref<string> = ref('Hello!')

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

// computed
const count = ref(0)
// 型推論で型指定を省略できる
const countValue = computed(() => `カウント＝${count.value}`)
// ジェネリクスで明示的に型指定できる
const countValue2 = computed<string>(() => `カウント＝${count.value}`)
// ComputedRefで明示的に型指定できる
const countValue3: ComputedRef<string> = computed(() => `カウント＝${count.value}`)

// watch
// inputName の監視
const price = ref(1000)
const valueCount = ref(0)
const sumPrice = ref(0)
watch(price, (newValue, oldValue) => {
  console.log({ newValue, oldValue })
})
watchEffect(() => {
  sumPrice.value = valueCount.value * price.value
  console.log({ price: price.value, count: valueCount.value, sumPrice: sumPrice.value })
})

const inputName = ref<string>('Johnだろーが')
const input = ref<HTMLInputElement>()
// mounted
onMounted(() => {
  console.log('mounted!')
  console.log({ 'input.value?.value': input.value?.value })
})
// updated
onUpdated(() => {
  console.log('updated!')
})

// destroyed
onUnmounted(() => {
  console.log('unmounted!')
})

// methods
const countUp = () => {
  count.value++
}
const changeName = (newName: string) => {
  user.firstName = newName
}
const changeName2 = (newName: string): void => {
  user.firstName = newName
}
// 変数の方にも型定義できるけど、これはやりすぎかな
const changeName3: (newName: string) => void = (newName: string): void => {
  user.firstName = newName
}
const change = (): void => {
  emit('change', 'Jane')
}
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-xl font-bold">リアクティブな変数の表示</p>
      <p>{{ msg }}</p>
    </div>

    <div class="mb-8">
      <p class="text-xl font-bold">リアクティブな変数の表示</p>
      <p>{{ countValue }}</p>
      <v-btn color="primary" @click="countUp()">カウントアップ</v-btn>
    </div>

    <div class="mb-8">
      <p class="text-xl font-bold">methodsの確認</p>
      <p>FullName: {{ `${user.firstName} ${user.lastName}（${user.age}）` }}</p>
      <v-btn color="primary" @click="changeName('ほげ')">名前変更</v-btn>
    </div>

    <div class="mb-8">
      <p class="text-xl font-bold">propsとemitsの確認</p>
      <p>propsのnameは"{{ name }}"です</p>
      <v-btn color="primary" @click="change">emits</v-btn>
    </div>

    <div class="mb-8">
      <p class="text-xl font-bold">マウント後にinputのvalueが取得できるか確認</p>
      <v-text-field ref="input" v-model="inputName"></v-text-field>
    </div>

    <div class="mb-8">
      <p class="text-xl font-bold">wacthの確認</p>
      <div>値段：<input v-model="price" />円</div>
      <div>個数：<input v-model="valueCount" />個</div>
      <div>合計：{{ sumPrice }}円</div>
    </div>
  </div>
</template>
