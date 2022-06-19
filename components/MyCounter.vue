<script setup lang="ts">
// composables/counter.ts より
const { counter, increment, decrement } = useCounter()
</script>

<template>
  <div>
    カウンター: {{ counter }}
    <v-btn icon @click="increment"><v-icon>mdi-plus</v-icon></v-btn>
    <v-btn icon @click="decrement"><v-icon>mdi-minus</v-icon></v-btn>
  </div>
</template>
