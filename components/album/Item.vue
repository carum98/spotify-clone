<script setup lang="ts">
import { Album } from '~~/models/album';

defineProps<{
    album: Album
}>()
</script>

<template>
    <CardItem
        :to="`/album/${album.id}`"
        :image="album.image"
        :name="album.name"
        description="Album"
    ></CardItem>
</template>