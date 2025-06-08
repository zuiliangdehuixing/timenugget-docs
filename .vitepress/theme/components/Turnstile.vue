<template>
  <div class="turnstile-wrapper">
    <div 
      class="cf-turnstile" 
      :data-sitekey="sitekey"
      :data-callback="callback"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  sitekey: { type: String, required: true },
  callback: { type: Function, default: () => {} }
})
</script>