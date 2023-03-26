<script setup lang="ts">
const props = defineProps<{
    modelValue: number
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: number): void
}>()

const range = ref<HTMLElement | null>(null)

function onHandler(e: MouseEvent) {
    const sliderWidth = window.getComputedStyle(range.value!).width
    const value = e.offsetX / parseInt(sliderWidth)

    emits('update:modelValue', value)

    range.value!.style.setProperty('--slider-position', e.offsetX + 'px')
}
</script>

<template>
    <div ref="range" class="range-slider" @click="onHandler"></div>
</template>