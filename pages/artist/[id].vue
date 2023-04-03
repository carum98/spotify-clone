<script setup lang="ts">
const route = useRoute()

const value = await $fetch(`/api/artist/${route.params.id}`)
</script>

<template>
    <ProfileHeader
        title="Artist"
        :name="value.data.name"
        description=""
        :image="value.data.image || '/logo-small.svg'"
    >
    </ProfileHeader>

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
