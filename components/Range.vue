<script setup lang="ts">
const props = defineProps<{
    modelValue: number
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: number): void
    (e: 'seek', value: MouseEvent): void
}>()

const range = ref<HTMLElement | null>(null)

function setPosition(value: number) {
    range.value!.style.setProperty('--slider-position', value + 'px')
}

function onHandler({ event, trigger }: { event: MouseEvent; trigger: boolean }) {
    const sliderWidth = window.getComputedStyle(range.value!).width
    const value = event.offsetX / parseInt(sliderWidth)

    if (trigger) {
        emits('update:modelValue', value)
        emits('seek', event)
    }

    setPosition(event.offsetX)
}

function move(event: MouseEvent) {
    onHandler({ event, trigger: false })
}

function up(event: MouseEvent) {
    onHandler({ event, trigger: true})

    window.removeEventListener('mousemove', move)
    window.removeEventListener('mouseup', up)
}

function down(e: MouseEvent) {
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
}

watch(() => props.modelValue, (value) => {
    const sliderWidth = window.getComputedStyle(range.value!).width
    const position = (parseInt(sliderWidth) / 100) * value

    setPosition(position)
})
</script>

<template>
    <div ref="range" class="range-slider" @mousedown="down"></div>
</template>