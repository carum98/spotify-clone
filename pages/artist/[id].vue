<script setup lang="ts">
const route = useRoute()

const value = await $fetch(`/api/artist/${route.params.id}`)
</script>

<template>
    <h1>{{ value.data.name }}</h1>

    <h2>Albums</h2>
    <ul>
        <li v-for="item in value.albums" :key="item.id">
            <AlbumItem :album="item" />
        </li>
    </ul>

    <h2>Tracks</h2>
    <ul>
        <li v-for="item in value.topTracks" :key="item.id">
            <TrackItem :track="item" />
        </li>
    </ul>
</template>
