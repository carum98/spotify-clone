<script setup lang="ts">
const route = useRoute()

const { data: { value } } = await useFetch(`/api/album/${route.params.id}`)
</script>

<template>
    <section class="playlist-page-header">
        <img v-if="value?.data.image" class="image" :src="value.data.image" :alt="value?.data.name" width="232" height="232" />

        <div>
            <p class="type">Album</p>
            <h1 class="name">{{ value?.data.name }}</h1>
        </div>
    </section>

    <section class="playlist-page-actions">
        <button class="play-button" >
            <IconPlay />
        </button>

        <button class="follow-button">
            <IconHeartOutline />
        </button>

        <button class="more-button">
            <IconDotsHorizontal />
        </button>
    </section>

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