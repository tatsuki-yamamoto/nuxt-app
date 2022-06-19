<script lang="ts" setup>
const userState = useUserState()
</script>

<template>
  <base-container>
    <base-title>確認</base-title>
    <p>id：{{ userState.id }}</p>
    <p>name：{{ userState.name }}</p>
  </base-container>
</template>
