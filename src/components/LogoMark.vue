<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 44 })
</script>

<template>
  <img
    src="/images/logo.png"
    :width="size"
    :height="size"
    alt="ตราสัญลักษณ์โรงพยาบาลสระโบสถ์"
    class="logo-mark"
  />
</template>

<style scoped>
.logo-mark {
  display: block;
  object-fit: contain;
}
</style>
