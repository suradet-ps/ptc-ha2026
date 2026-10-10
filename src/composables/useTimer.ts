import { onBeforeUnmount, ref } from 'vue'

export function useTimer() {
  const elapsed = ref(0)
  const running = ref(false)
  let handle: number | null = null

  function start() {
    if (running.value) return
    running.value = true
    handle = window.setInterval(() => {
      elapsed.value += 1
    }, 1000)
  }

  function pause() {
    if (handle !== null) {
      window.clearInterval(handle)
      handle = null
    }
    running.value = false
  }

  function toggle() {
    if (running.value) {
      pause()
    } else {
      start()
    }
  }

  function reset() {
    pause()
    elapsed.value = 0
  }

  onBeforeUnmount(pause)

  return { elapsed, running, start, pause, toggle, reset }
}

export function formatTime(totalSeconds: number): string {
  const sign = totalSeconds < 0 ? '-' : ''
  const abs = Math.abs(totalSeconds)
  const minutes = Math.floor(abs / 60)
  const seconds = abs % 60
  return `${sign}${minutes}:${String(seconds).padStart(2, '0')}`
}
