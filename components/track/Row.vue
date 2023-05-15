<script setup lang="ts">
import { createVNode, render } from 'vue'
import { Track } from '~~/models/track'

const props = withDefaults(defineProps<{
    item: Track
    index?: number
    hideAlbum?: boolean
    hideArtist?: boolean
    hideImage?: boolean
}>(), {
    hideAlbum: false,
    hideArtist: false,
    hideImage: false,
})

const active = ref(false)

function usePlayer(track: Track) {
    const app = document.querySelector('#spotify') as HTMLElement
    let player = document.querySelector('#player') as HTMLElement | null

    if (!player) {
        player = document.createElement('div')
        player.id = 'player'
    }

    // Clear the player
    player.innerHTML = ''

    const component = defineAsyncComponent(() => import('~~/components/player/Container.vue'))

    const instance = createVNode(component, {
        track,
    })

    render(instance, player)

    app.appendChild(player)
}

onMounted(() => {
    const { audioId } = useAudio()

    watch(audioId, (id) => {
        active.value = id === props.item.id
    })
})
</script>

<template>
    <tr :class="{ active }" @click="usePlayer(item)">
        <td v-if="index" class="play">
            <span>{{ index }}</span>
            <IconPlay  />
        </td>
        <td v-else></td>
        <td>
            <img v-if="!hideImage" :src="item.album?.image" :alt="item.name" width="40" height="40" loading="lazy" />
            <div>
                <NuxtLink class="track-name" :to="`/track/${item.id}`">
                    {{ item.name }}
                </NuxtLink>
                <NuxtLink v-if="!hideArtist" class="artist-name" :to="`/artist/${item.artist.id}`">
                    {{ item.artist.name }}
                </NuxtLink>
            </div>
        </td>
        <td>
            <NuxtLink v-if="!hideAlbum" class="album-name" :to="`/album/${item.album?.id}`">
                {{ item.album?.name }}
            </NuxtLink>
        </td>
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
</template>