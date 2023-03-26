<script setup lang="ts">
import { Track } from '~~/models/track';

defineProps<{
    track: Track
}>()

const volume = ref(0)
</script>

<template>
    <section class="player-container">
        <div class="player-track-information">
            <img :src="track.album?.image" :alt="track.name" width="56" height="56" loading="lazy" />
            <div>
                <a>{{ track.name }}</a>
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

                <button class="play">
                    <IconPlay />
                </button>

                <button>
                    <IconNext direction="left" />
                </button>

                <button>
                    <IconRepeat />
                </button>
            </div>

            <PlayerAudio :src="track.preview" />
        </div>

        <div class="player-actions">
            <IconVolume />

            <div style="width: 70px;">
                <Range v-model="volume" />
            </div>
        </div>
    </section>
</template>