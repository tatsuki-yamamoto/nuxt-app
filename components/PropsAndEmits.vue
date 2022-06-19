<script lang="ts" setup>
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

const newName = ref('次郎')

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
const change = (): void => {
  emit('change', newName.value)
}
</script>

<template>
  <div>
    <base-sub-title-and-contants title="props">
      親コンポーネントから受け取った値は<span class="font-bold">{{ name }}</span
      >です。
    </base-sub-title-and-contants>
    <base-sub-title-and-contants title="emits">
      <p class="mb-2">親コンポーネントへ渡す値を入力してください。</p>
      <v-row no-gutters>
        <v-col cols="12" lg="6">
          <v-text-field v-model="newName" variant="outlined"></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="primary" :block="mobile" @click="change">変更</v-btn>
    </base-sub-title-and-contants>
  </div>
</template>
