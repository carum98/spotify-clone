<script setup lang="ts">
const route = useRoute()

const { data: { value } } = await useFetch(`/api/playlist/${route.params.id}`)

const items = computed(() => value?.data.tracks ?? [])
</script>

<template>
    <h1>{{ value?.data.name }}</h1>
    <p>{{ value?.data.description }}</p>
    <img :src="value?.data.image" :alt="value?.data.name" />

    <ul>
        <li v-for="item in items" :key="item.id">
            <TrackItem :track="item" />
        </li>
    </ul>
</template>