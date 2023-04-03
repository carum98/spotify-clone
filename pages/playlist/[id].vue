<script setup lang="ts">
const route = useRoute()

const { data: { value } } = await useFetch(`/api/playlist/${route.params.id}`)

const items = computed(() => value?.data.tracks ?? [])
</script>

<template>
    <ProfileHeader
        v-if="value"
        title="Playlist"
        :name="value.data.name"
        :description="value.data.description"
        :image="value.data.image"
    >
        <p>
            <img src="/logo-small.svg" alt="Spotify" width="20" height="20" />
            Spotify
            •
            <span>{{ value?.data.tracks.length }} songs</span>
            •
            <span>{{ formatTimeLong(sumDurations(items.map(e => e.duration))) }}</span>
        </p>
    </ProfileHeader>

    <ProfileActions />

    <table class="playlist-page-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                <th></th>
                <th>
                    <IconTime />
                </th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            <tr></tr>
            <TrackRow v-for="(item, index) in items" :key="item.id" :item="item" :index="index + 1" />
        </tbody>
    </table>
</template>