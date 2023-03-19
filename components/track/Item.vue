<script setup lang="ts">
import { Track } from '~~/models/track';

defineProps<{
    track: Track
}>()
</script>

<template>
    <p>{{ track.name }}</p>

    <NuxtLink :to="`/artist/${track.artist.id}`">
        {{ track.artist.name }}
    </NuxtLink>

    <template v-if="track.album">
        <img :src="track.album.image" :alt="track.name" />

        <NuxtLink :to="`/album/${track.album.id}`">
            {{ track.album.name }}
        </NuxtLink>
    </template>

    <p>
        {{ track.added_at }}
    </p>

    <p>
        {{ track.duration }}
    </p>
</template>