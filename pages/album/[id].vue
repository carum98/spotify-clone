<script setup lang="ts">
const route = useRoute()

const { data: { value } } = await useFetch(`/api/album/${route.params.id}`)

function releaseYear(date: string) {
    return date.split('-').at(0) ?? ''
}
</script>

<template>
    <ProfileHeader
        v-if="value"
        title="Album"
        :name="value.data.name"
        description=""
        :image="value.data.image"
    >
        <p>
            {{ value.data.artists_name }}
            •
            <span>{{ releaseYear(value.data.release_date) }}</span>
            •
            <span>{{ value?.data.tracks.length }} songs</span>
            ,
            <span>{{ formatTimeLong(sumDurations(value?.data.tracks.map(e => e.duration))) }}</span>
        </p>
    </ProfileHeader>

    <ProfileActions />

    <table class="playlist-page-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th></th>
                <th></th>
                <th>
                    <IconTime />
                </th>
            </tr>
        </thead>

        <tbody>
            <tr></tr>
            <TrackRow 
                v-for="(item, index) in value?.data.tracks" 
                :key="item.id" 
                :item="item" 
                :index="index + 1"
                hide-album 
                hide-image 
            />
        </tbody>
    </table>
</template>