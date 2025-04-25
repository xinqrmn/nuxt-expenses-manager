<script setup lang="ts">
import {useAuthStore} from '@/stores/auth'

const authStore = useAuthStore()

const signIn = () => {
  const redirectUri = encodeURIComponent('http://localhost:3000/api/auth/callback/yandex')
  const clientId = useRuntimeConfig().public.yandexClientId

  const yandexAuthUrl = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`

  window.location.href = yandexAuthUrl
}
</script>

<template>
  <button @click="signIn" class="btn">Войти через Yandex</button>
  <p>{{ authStore.user }} </p>
</template>

<style scoped>
.btn {
  border: none;
  border-radius: 15px;
  background-color: #333;
  color: #fff;
  padding: 15px 30px;
  cursor: pointer;
}
</style>