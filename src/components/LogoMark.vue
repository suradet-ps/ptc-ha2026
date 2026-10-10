<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 44 })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs>
      <linearGradient :id="'lm' + size" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0D5FA8" />
        <stop offset="1" stop-color="#2B3991" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="15" :fill="'url(#lm' + size + ')'" />
    <path
      d="M32 15.5c10.5 0 16.5 6.2 16.5 15.4 0 10.4-8.2 16.6-16.5 16.6S15.5 41.3 15.5 30.9c0-9.2 6-15.4 16.5-15.4z"
      stroke="#FA0F0C"
      stroke-width="4"
      opacity="0.92"
    />
    <path d="M32 23.5v17M23.5 32h17" stroke="#ffffff" stroke-width="5.6" stroke-linecap="round" />
  </svg>
</template>
