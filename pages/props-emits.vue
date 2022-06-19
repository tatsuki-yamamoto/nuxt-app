<script lang="ts" setup>
const name = ref('太郎')
const changeName = (newName: string): void => {
  name.value = newName
}
</script>

<template>
  <base-container>
    <base-title hide-back-button>props/emits</base-title>
    <my-props-and-emits :name="name" @change="changeName"></my-props-and-emits>
  </base-container>
</template>
