<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router'

const router = useRouter()
const route = useRoute()

const code = route.query.code as string
if (code) {
  const {data} = await useFetch('/api/auth/yandex', {
    method: 'POST',
    body: {code}
  })

  if (data.value?.token) {
    localStorage.setItem('token', data.value.token)
    router.push('/dashboard')
  }
}
</script>

<template>
<p>Авторизация через Yandex ID...</p>
</template>

<style scoped>

</style>