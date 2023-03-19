<script setup lang="ts">
import { Playlist } from '~~/models/playlist';

defineProps<{
    name: string
    playlists: Playlist[]
}>()
</script>

<template>
    <section>
        <h2>{{ name }}</h2>
        <PlaylistItem v-for="playlist in playlists" :key="playlist.id" :playlist="playlist" />
    </section>
</template>