<script setup>
import { onMounted } from 'vue'
import { init } from '@waline/client'

onMounted(() => {
  init({
    el: '#waline',
    serverURL: 'https://tncomm.tupx.xyz',
    // 启用 Turnstile
    turnstile: {
      sitekey: '0x4AAAAAABgbCNmqcabywqKJ
'
    }
  })
})
</script>

<template>
  <div id="waline" />
</template>