<script setup lang="ts">
import { Track } from '~~/models/track';

const props = defineProps<{
    track: Track
}>()

const { toggle, setAudio, playing, seekVolume, volume } = useAudio()

onMounted(() => {
    setAudio(props.track.preview, props.track.id)
})
</script>

<template>
    <section class="player-container">
        <div class="player-track-information">
            <img :src="track.album?.image" :alt="track.name" width="56" height="56" loading="lazy" />
            <div>
                <h2>{{ track.name }}</h2>
                <p>{{ track.artist.name }}</p>
            </div>
        </div>

        <div class="player-track">
            <div class="player-track-actions">
                <button>
                    <IconShuffle />
                </button>

                <button>
                    <IconNext direction="right" />
                </button>

                <button class="play" @click="toggle">
                    <IconPause v-if="playing" />
                    <IconPlay v-else />
                </button>

                <button>
                    <IconNext direction="left" />
                </button>

                <button>
                    <IconRepeat />
                </button>
            </div>

            <PlayerAudio />
        </div>

        <div class="player-actions">
            <IconVolume />

            <div style="width: 70px;">
                <Range v-model="volume" @seek="seekVolume" />
            </div>
        </div>
    </section>
</template>