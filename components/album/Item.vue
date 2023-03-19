<script setup lang="ts">
import { Album } from '~~/models/album';

defineProps<{
    album: Album
}>()
</script>

<template>
    <NuxtLink :to="`/album/${album.id}`">
        <article>
            <h1>{{ album.name }}</h1>
            <img :src="album.image" :alt="album.name" />
        </article>
    </NuxtLink>
</template>