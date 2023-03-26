<script setup lang="ts">
defineProps<{
    src: string 
}>()

const value = ref(0)

watch(value, (value) => {
    console.log(value)
})
</script>

<template>
    <div class="player-audio">
        <span id="current-time" class="time">0:00</span>
        <Range v-model="value"/>
        <span id="duration" class="time">0:00</span>
    </div>
</template>