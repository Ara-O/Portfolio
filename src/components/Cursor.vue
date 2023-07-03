<template>
  <div
    class="h-10 w-10 mix-blend-difference z-50 transition-transform duration-75 ease-linear border border-white absolute rounded-full flex items-center justify-center"
    :style="{
      width: cursorSize,
      height: cursorSize
    }"
    ref="cursor"
  >
    <div class="h-2 w-2 bg-white rounded-full"></div>
  </div>
</template>

<script lang="ts" setup>
import { useMouse } from "@vueuse/core"
import { ref, watch, watchEffect } from "vue"

let cursor = ref<HTMLElement | null>(null)
let cursorSize = ref<number>(20)
// const { x, y, sourceType } = useMouse()
document.addEventListener("mousemove", (e) => {
  if (cursor.value) {
    cursor.value.style.transform = `translate3d(${e.clientX - cursorSize.value}px, ${
      e.clientY - cursorSize.value
    }px, 0)`
  }
})

// watchEffect(() => {
//     cursor.value.style.transform = `translate3d(${x.value - cursorSize.value}px, ${
//       y.value - cursorSize.value
//     }px, 0)`
//   }
// })
</script>
