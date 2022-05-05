<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{ name?: string | false }>()

// data
const msg = ref('Hello!')
const count = ref(0)

// methods
const countUp = () => {
  console.log('methods', count)
  count.value++
}

// mounted
onMounted(() => {
  console.log('mounted')
})
</script>

<template>
  <div>
    <div class="text-lg">{{ name }}</div>
    <div>{{ count }}</div>
    <div>{{ msg }}</div>
    <v-btn @click="countUp()">ログ出力</v-btn>
  </div>
</template>
