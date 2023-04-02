<script setup lang="ts">
import { Playlist } from '~~/models/playlist';

defineProps<{
    playlist: Playlist
}>()
</script>

<template>
    <CardItem
        :to="`/playlist/${playlist.id}`"
        :image="playlist.image"
        :name="playlist.name"
        :description="playlist.description"
    ></CardItem>
</template>