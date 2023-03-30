<script setup lang="ts">
const props = defineProps<{
    modelValue: number
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: number): void
}>()

const range = ref<HTMLElement | null>(null)

function setPosition(value: number) {
    range.value!.style.setProperty('--slider-position', value + 'px')
}

function onHandler(e: MouseEvent) {
    const sliderWidth = window.getComputedStyle(range.value!).width
    const value = e.offsetX / parseInt(sliderWidth)

    emits('update:modelValue', value)

    setPosition(e.offsetX)
}

watch(() => props.modelValue, (value) => {
    const sliderWidth = window.getComputedStyle(range.value!).width
    const position = (parseInt(sliderWidth) / 100) * value

    setPosition(position)
})
</script>

<template>
    <div ref="range" class="range-slider" @click="onHandler"></div>
</template>