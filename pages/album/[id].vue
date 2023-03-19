<script setup lang="ts">
const route = useRoute()

const { data: { value } } = await useFetch(`/api/album/${route.params.id}`)
</script>

<template>
    <h1>{{ value?.data.name }}</h1>
    <p>{{ value?.data.tracks_count }}</p>
    <img :src="value?.data.image" :alt="value?.data.name" />
    
    <ul>
        <li v-for="item in value?.data.tracks" :key="item.id">
            <TrackItem :track="item" />
        </li>
    </ul>
</template>