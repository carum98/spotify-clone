<script setup lang="ts">
// data
const categories = await fetchCategories()

const data = ref({
    artists: <any>[],
    albums: <any>[],
    playlists: <any>[],
    tracks: <any>[],
})

const search = useDebounce('', 2000)

// computed
const hasData = computed(() => {
    return data.value.albums.length || data.value.artists.length || data.value.playlists.length || data.value.tracks.length
})

// methods
async function fetchCategories() {
    const resp = await useFetch('/api/categories')

    return resp.data.value?.data ?? []
}

async function fetchSearch(value: string) {
    const resp = await $fetch(`/api/search/${value}`)

    return resp.data
}

watch(search, (value) => {
    if (value.length > 0) {
        fetchSearch(value).then(resp => {
            data.value = resp
        })
    }
})
</script>

<template>
    <Teleport to="#header-slot">
        <div class="search-input">
            <IconSearch />
            <input type="text" v-model="search" placeholder="What do you want to listen to?" autofocus />
        </div>
    </Teleport>

    <section v-if="hasData">
        <table class="playlist-page-table" style="width: 70%;">
            <tbody>
                <tr></tr>
                <TrackRow 
                    v-for="item in  data.tracks" 
                    :key="item.id" 
                    :item="item" 
                    hide-album
                />
            </tbody>
        </table>

        <ArtistList name="Artists" :artists="data.artists" />

        <AlbumList name="Albums" :albums="data.albums" />

        <PlaylistList name="Playlists" :playlists="data.playlists" />
    </section>

    <CategoryList v-else :categories="categories " />
</template>