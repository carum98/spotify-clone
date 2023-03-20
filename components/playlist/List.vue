<script setup lang="ts">
import { Playlist } from '~~/models/playlist';

defineProps<{
    name: string
    playlists: Playlist[]
}>()
</script>

<template>
    <section class="playlist-section">
        <header class="playlist-section-header">
            <h2>{{ name }}</h2>

            <button>
                Show all
            </button>
        </header>

        <div class="playlist-section-items">
            <PlaylistItem v-for="playlist in playlists" :key="playlist.id" :playlist="playlist" />
        </div>
    </section>
</template>