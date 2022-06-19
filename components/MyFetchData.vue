<script lang="ts" setup>
const defaultPost = () => ({ userId: 0, id: 0, title: '', body: '' })

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

// useFetch
// post という名称をつけている
// オプションのdefaultに初期値を設定できる
const { data: post } = await useFetch<Post>('https://jsonplaceholder.typicode.com/posts/1', { default: defaultPost })

// useLazyFetch
// posts という名称をつけている
// オプションのserverのfalseを設定でSSR時にサーバーでは動作させない
const { pending, refresh, data: posts } = useLazyFetch<Post[]>('https://jsonplaceholder.typicode.com/posts', { server: false })
const postsLimited = computed(() => posts.value.filter((post, index) => index < 3))
watch(posts, () => {
  console.log('再取得')
})

// useAsyncData
// useFetchとほぼいっしょ
const { data: post2 } = await useAsyncData<Post>('post2', () => {
  return $fetch('https://jsonplaceholder.typicode.com/posts/1')
})

// useLazyAsyncData
// useLazyFetchとほぼいっしょ
const {
  pending: pending2,
  refresh: refresh2,
  data: posts2,
} = useLazyAsyncData<Post[]>('posts2', () => {
  return $fetch('https://jsonplaceholder.typicode.com/posts')
})
const posts2Limited = computed(() => posts2.value.filter((post, index) => index < 3))
</script>

<template>
  <div>
    <p class="mb-6">useFetch,useLazyFetchだけでこと足りそう</p>
    <base-sub-title-and-contants title="useFetch">
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card>
            <v-card-title class="text-xl font-semibold">{{ post.title }}</v-card-title>
            <v-card-text>{{ post.body }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </base-sub-title-and-contants>

    <base-sub-title-and-contants title="useLazyFetch">
      <v-btn color="primary" class="mb-3" @click="refresh()">再取得</v-btn>
      <div v-if="pending"><v-progress-circular indeterminate color="primary"></v-progress-circular></div>
      <div v-else>
        <v-row>
          <v-col v-for="localPost in postsLimited" :key="localPost.id" cols="12" md="6" lg="4">
            <v-card>
              <v-card-title class="text-xl font-semibold">{{ localPost.title }}</v-card-title>
              <v-card-text>{{ localPost.body }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </base-sub-title-and-contants>

    <base-sub-title-and-contants title="useAsyncData">
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card>
            <v-card-title class="text-xl font-semibold">{{ post2.title }}</v-card-title>
            <v-card-text>{{ post2.body }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </base-sub-title-and-contants>

    <base-sub-title-and-contants title="useLazyAsyncData">
      <v-btn color="primary" class="mb-3" @click="refresh2()">再取得</v-btn>
      <div v-if="pending2"><v-progress-circular indeterminate color="primary"></v-progress-circular></div>
      <div v-else>
        <v-row>
          <v-col v-for="localPost in posts2Limited" :key="localPost.id" cols="12" md="6" lg="4">
            <v-card>
              <v-card-title class="text-xl font-semibold">{{ localPost.title }}</v-card-title>
              <v-card-text>{{ localPost.body }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </base-sub-title-and-contants>
  </div>
</template>
