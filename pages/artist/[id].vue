<script setup lang="ts">
const route = useRoute()

const value = await $fetch(`/api/artist/${route.params.id}`)
</script>

<template>
    <section class="playlist-page-header">
        <img v-if="value.data.image" class="image" :src="value.data.image" :alt="value?.data.name" width="232" height="232" />

        <div>
            <p class="type">Artist</p>
            <h1 class="name">{{ value?.data.name }}</h1>
        </div>
    </section>
    <CardList name="Popular" style="width: 70%;">
        <table class="playlist-page-table">
            <tbody>
                <tr></tr>
                <TrackRow v-for="(item, index) in  value.topTracks" :key="item.id" :item="item" :index="index + 1" hide-artist />
            </tbody>
        </table>
    </CardList>

    <AlbumList name="Albums" :albums="value.albums" />
</template>
