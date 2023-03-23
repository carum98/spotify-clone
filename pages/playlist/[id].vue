<script setup lang="ts">
const route = useRoute()

const { data: { value } } = await useFetch(`/api/playlist/${route.params.id}`)

const items = computed(() => value?.data.tracks ?? [])

function imageOnLoad(element: Event) {
    const img = element.target as HTMLImageElement

    const palette = colorPalette(img)
    const mostUsedColor = palette.at(-1)
    const colorHexa = rgbToHex(mostUsedColor!.r, mostUsedColor!.g, mostUsedColor!.b)

    setHeaderColor(colorHexa)
}

</script>

<template>
    <section class="playlist-page-header">
        <img class="image" :src="value?.data.image" :alt="value?.data.name" width="232" height="232" @load="imageOnLoad" />

        <div>
            <p class="type">Playlist</p>
            <h1 class="name">{{ value?.data.name }}</h1>
            <p class="description">{{ value?.data.description }}</p>

            <p>
                <img src="/logo-small.svg" alt="Spotify" width="20" height="20" />
                Spotify

                •

                <span>{{ value?.data.tracks.length }} songs</span>

            </p>
        </div>
    </section>

    <ul>
        <li v-for="item in items" :key="item.id">
            <TrackItem :track="item" />
        </li>
    </ul>
</template>