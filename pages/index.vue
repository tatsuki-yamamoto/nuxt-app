<script lang="ts" setup>
const name = ref('サンプルコンポーネント')
const changeName = (newName: string): void => {
  name.value = newName
}
</script>

<template>
  <base-container>
    <base-title hide-back-button>TOPページ</base-title>
    <my-component :name="name" @change="changeName"></my-component>
  </base-container>
</template>
