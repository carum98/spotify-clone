<script setup lang="ts">
import { createVNode, render } from 'vue'
import { Track } from '~~/models/track'

const props = defineProps<{
    item: Track
    index: number
}>()

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
        <td class="play">
            <span>{{ index }}</span>
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
</template>