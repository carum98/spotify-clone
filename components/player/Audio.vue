<script setup lang="ts">
const { currentTime, duration, percent } = useAudio()

function formatTime(time: number) {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

</script>

<template>
    <div class="player-audio">
        <span id="current-time" class="time">{{ formatTime(currentTime) }}</span>
        <Range v-model="percent"/>
        <span id="duration" class="time">{{ formatTime(duration) }}</span>
    </div>
</template>