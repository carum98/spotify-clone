<script setup lang="ts">
import { Playlist } from '~~/models/playlist';

defineProps<{
    playlist: Playlist
}>()
</script>

<template>
    <NuxtLink :to="`/playlist/${playlist.id}`">
        <article>
            <h1>{{ playlist.name }}</h1>
            <img :src="playlist.image" :alt="playlist.name" loading="lazy" />
        </article>
   </NuxtLink>
</template>