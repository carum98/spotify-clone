<script setup lang="ts">
import { Artist } from '~/models/artist';

defineProps<{
    artist: Artist
}>()
</script>

<template>
    <CardItem
        :to="`/playlist/${artist.id}`"
        :image="artist.image!"
        :name="artist.name"
        description="Artist"
        circle
    ></CardItem>
</template>
