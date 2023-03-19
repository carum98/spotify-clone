<script setup>
const data = await useFetch('/api/playlist')

const items = computed(() => data.data.value?.data ?? [])
</script>

<template>
    <PlaylistList v-for="{ name, playlist } in items" :name="name" :playlists="playlist" />
</template>