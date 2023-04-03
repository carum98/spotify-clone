<script setup lang="ts">
defineProps<{
    title: string
    name: string
    description: string
    image: string
}>()

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
        <img class="image" :src="image" :alt="name" width="232" height="232" @load="imageOnLoad" />

        <div>
            <p class="type">{{ title }}</p>
            <h1 class="name">{{ name }}</h1>
            <p class="description">{{ description }}</p>

            <slot />
        </div>
    </section>
</template>