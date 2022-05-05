<script lang="ts" setup>
const props = defineProps<{
  hideBackButton?: boolean | false;
}>();
</script>

<template>
  <div class="flex items-center h-12">
    <v-btn
      v-if="!hideBackButton"
      icon
      flat
      class="mr-2"
      @click="$router.go(-1)"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <h1 class="text-2xl font-bold inline">
      <slot />
    </h1>
  </div>
</template>
