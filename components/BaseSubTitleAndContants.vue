<script lang="ts" setup>
interface Props {
  title: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="mt-3 mb-9">
    <base-sub-title>{{ title }}</base-sub-title>
    <slot />
  </div>
</template>
