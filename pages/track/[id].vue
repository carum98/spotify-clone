<script setup lang="ts">
const route = useRoute()

const { data: { value } } = await useFetch(`/api/tracks/${route.params.id}`)
</script>

<template>
    <ProfileHeader
        v-if="value"
        title="Track"
        :name="value.data.name"
        description=""
        :image="value.data.album?.image || '/logo-small.svg'"
    >
        <p>
            {{ value.data.artist.name }}
            •
            <span>{{ releaseYear(value.data?.album?.release_date ?? '') }}</span>
            •
            <span>{{ formatTime(value.data.duration) }}</span>
        </p>
    </ProfileHeader>

    <ProfileActions />

    <CardList name="Album" hide-button>
        <AlbumItem :album="value?.data.album" />
    </CardList>
</template>