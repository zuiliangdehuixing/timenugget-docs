<script setup>
import { onMounted } from 'vue'
import { init } from '@waline/client'
import '@waline/client/style';

onMounted(() => {
  init({
    el: '#waline',
    serverURL: 'https://tncomm.tupx.xyz',
    turnstile: {
      sitekey: '0x4AAAAAABgbCNmqcabywqKJ'
    }
  })
})
</script>

<template>
  <div id="waline" />
</template>