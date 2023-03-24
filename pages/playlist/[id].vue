<script setup lang="ts">
const route = useRoute()

const { data: { value } } = await useFetch(`/api/playlist/${route.params.id}`)

const items = computed(() => value?.data.tracks ?? [])
const totalDuration = computed(() => items.value.reduce((acc, item) => acc + item.duration, 0))

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
                •
                <span>{{ formatTimeLong(totalDuration) }}</span>
            </p>
        </div>
    </section>

    <section class="playlist-page-actions">
        <button class="play-button">
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
            <tr v-for="(item, index) in items" :key="item.id">
                <td class="play">
                    <span>{{ index + 1 }}</span>
                    <IconPlay  />
                </td>
                <td>
                    <img :src="item.album?.image" :alt="item.name" width="40" height="40" loading="lazy" />
                    <div>
                        <a>{{ item.name }}</a>
                        <p>{{ item.artist.name }}</p>
                    </div>
                </td>
                <td>{{ item.album?.name }}</td>
                <td>
                    <button class="like">
                        <IconHeartOutline />
                    </button>
                </td>
                <td>{{ formatTime(item.duration) }}</td>
                <td>
                    <button class="more">
                        <IconDotsHorizontal />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>