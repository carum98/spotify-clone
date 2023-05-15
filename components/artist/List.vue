<script setup lang="ts">
import { Artist } from '~~/models/artist';

defineProps<{
    name: string
    artists: Artist[]
}>()
</script>

<template>
    <CardList name="Artists">
        <ArtistItem v-for="item in artists" :key="item.id" :artist="item" />
    </CardList>
</template>