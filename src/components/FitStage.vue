<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{ width?: number; height?: number }>(), {
  width: 1280,
  height: 720,
})

const wrap = ref<HTMLElement | null>(null)
const scale = ref(1)

let observer: ResizeObserver | null = null

function update() {
  const el = wrap.value
  if (!el) return
  const w = el.clientWidth
  const h = el.clientHeight
  if (!w || !h) return
  scale.value = Math.min(w / props.width, h / props.height)
}

onMounted(() => {
  update()
  observer = new ResizeObserver(update)
  if (wrap.value) observer.observe(wrap.value)
  window.addEventListener('resize', update)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('resize', update)
})

const stageStyle = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
  transform: `translate(-50%, -50%) scale(${scale.value})`,
}))
</script>

<template>
  <div ref="wrap" class="fit-wrap">
    <div class="fit-stage" :style="stageStyle">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fit-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.fit-stage {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center center;
  transition: transform 0.25s ease;
}

@media (prefers-reduced-motion: reduce) {
  .fit-stage {
    transition: none;
  }
}
</style>
