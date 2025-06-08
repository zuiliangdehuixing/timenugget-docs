<script setup>
import { onMounted } from 'vue'
import { init } from '@waline/client'
import '@waline/client/style';

onMounted(() => {
  init({
    el: '#waline',
    serverURL: 'https://tncomm.tupx.xyz',
    turnstileKey: '0x4AAAAAABgbCNmqcabywqKJ',
    wordLimit: [5, 200],
    dark: 'auto',
    login: 'disable',
      locale: {
    placeholder: '欢迎提交评论，所有评论将在审核后展示',
  }
  })
})
</script>

<template>
  <div id="waline" />
</template>
