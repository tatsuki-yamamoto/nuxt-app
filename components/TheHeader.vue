<template>
  <div>
    <v-app-bar color="primary" class="w-full">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <span class="cursor-pointer" @click="$router.push('/')">Nuxt3 サンプル</span>
      </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      {
        title: '基本的な内容',
        to: '/',
      },
      {
        title: 'props/emits',
        to: '/props-emits',
      },
      {
        title: 'composables',
        to: '/composables',
      },
      {
        title: 'watch',
        to: '/watch',
      },
      {
        title: 'state',
        to: '/state',
      },
    ],
  }),
}
</script>
