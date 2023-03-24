<script setup lang="ts">
import { Playlist } from '~~/models/playlist';

defineProps<{
    playlist: Playlist
}>()
</script>

<template>
    <article class="playlist-item">
        <NuxtLink :to="`/playlist/${playlist.id}`">
            <div class="playlist-item-content">
                <img :src="playlist.image" :alt="playlist.name" loading="lazy" height="170"  />
                <button class="play-button">
                    <IconPlay />
                </button>
            </div>
            <p class="playlist-item-name">{{ playlist.name }}</p>
            <p class="playlist-item-description">{{ playlist.description }}</p>
        </NuxtLink>
    </article>
</template>