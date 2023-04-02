<script setup lang="ts">
import { Playlist } from '~~/models/playlist';

defineProps<{
    name: string
    playlists: Playlist[]
}>()
</script>

<template>
    <CardList :name="name">
        <PlaylistItem v-for="playlist in playlists" :key="playlist.id" :playlist="playlist" />
    </CardList>
</template>