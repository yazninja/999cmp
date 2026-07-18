<script setup lang="ts">
/**
 * Hand-drawn line-art gaming doodles, matching the poster's
 * sketched mouse / controller / headset / keyboard artwork.
 */
const props = withDefaults(
  defineProps<{
    kind: "mouse" | "controller" | "headset" | "keyboard" | "trophy" | "star"
    rotate?: number
    float?: boolean
  }>(),
  { rotate: 0, float: true }
)

const paths: Record<string, string> = {
  mouse:
    "M32 6C20 6 12 16 12 30v14c0 14 8 22 20 22s20-8 20-22V30C52 16 44 6 32 6zM32 6v20M24 22h16M32 30v6M52 34c8 2 12 8 12 16M12 40c-6 2-9 7-9 13",
  controller:
    "M18 20h28c10 0 16 8 17 18l2 14c1 7-4 12-10 12-5 0-8-3-11-7l-3-5H23l-3 5c-3 4-6 7-11 7-6 0-11-5-10-12l2-14C2 28 8 20 18 20zM18 32v10M13 37h10M42 33h.5M48 39h.5",
  headset:
    "M10 38C10 22 20 10 32 10s22 12 22 28M8 40h6c2 0 4 2 4 4v10c0 2-2 4-4 4H8c-2 0-3-2-3-4V44c0-2 1-4 3-4zM56 40h-6c-2 0-4 2-4 4v10c0 2 2 4 4 4h6c2 0 3-2 3-4V44c0-2-1-4-3-4zM54 58c0 6-6 8-14 8",
  keyboard:
    "M6 22h52c2 0 4 2 4 4v20c0 2-2 4-4 4H6c-2 0-4-2-4-4V26c0-2 2-4 4-4zM12 30h4M22 30h4M32 30h4M42 30h4M52 30h2M12 38h4M22 38h4M32 38h4M42 38h4M18 44h28",
  trophy:
    "M20 8h24v14c0 10-5 16-12 16s-12-6-12-16V8zM20 12h-8c0 8 3 13 8 14M44 12h8c0 8-3 13-8 14M32 38v10M24 54h16M28 48h8",
  star: "M32 6l7 18 19 1-15 12 6 19-17-11-17 11 6-19L6 25l19-1z",
}
</script>

<template>
  <svg
    viewBox="0 0 64 72"
    :class="{ 'doodle-float': props.float }"
    :style="{ '--doodle-rotate': `${props.rotate}deg`, transform: `rotate(${props.rotate}deg)` }"
    aria-hidden="true"
  >
    <path :d="paths[props.kind]" class="sketch-stroke" />
  </svg>
</template>
