<script setup lang="ts">
import { Album } from '~~/models/album';

defineProps<{
    name: string
    albums: Album[]
}>()
</script>

<template>
    <CardList :name="name">
        <AlbumItem v-for="album in albums" :key="album.id" :album="album" />
    </CardList>
</template>